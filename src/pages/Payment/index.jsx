import CustomerDetail from '../../components/Payment/CustomerDetail';
import TotalPayment from '../../components/Payment/TotalPayment';
import DeliverInfo from '../../components/Payment/DeliverInfo';
import DeliverChoosePopup from '../../components/Payment/DeliverChoosePopup';
import NewAddressPopup from '../../components/Payment/NewAddressPopup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import React, { useState } from 'react';
import { fetchDeleteAddress } from '../../apis/Payment';
import styled from 'styled-components';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentSuccess from './PaymentSuccess';
import Cart from '../Cart';

// 사용자 전체 배송지 목록 (더미데이터)
const addressList = [
  {
    addressId: 1,
    customerName: '1번 고객',
    phoneNumber: '010-1111-1111',
    address: '서울특별시 중구 퇴계로 235',
    detailAddress: '111동 1111호',
    zoneCode: '11111',
    isDefault: true,
  },
  {
    addressId: 2,
    customerName: '2번 고객',
    phoneNumber: '010-2222-2222',
    address: '서울특별시 성북구 퇴계로 235',
    detailAddress: '222동 2222호',
    zoneCode: '22222',
    isDefault: false,
  },
  {
    addressId: 3,
    customerName: '3번 고객',
    phoneNumber: '010-3333-3333',
    address: '서울특별시 성북구 퇴계로 235',
    detailAddress: '333동 3333호',
    zoneCode: '33333',
    isDefault: false,
  },
];
// 사용자 정보 (더미 데이터)
const customer = {
  name: '홍길동',
  email: 'OOOOO@naver.com',
  phoneNumber: '010-1234-5678',
};

const Payment = () => {
  // 이전 페이지로 부터 최종 금액을 받아오는 과정 필요 (ex. 이전페이지에서 Link의 state속성을 통해 넘겨주고 useLocation을 통해 받는식) + TotalPayment 컴포넌트에 뿌리기
  // 사용자 정보를 가져오는 요청 필요 + 얻은 사용자 정보를 CustomerDetail컴포넌트에 props로 뿌리기
  // 사용자의 전체 배송지 목록 + 기본 배송지 목록을 가져오는 요청 + (배송지 추가 및 삭제에 대한 요청 고려)
  // 기본 배송지를 currentAddress에 저장하고, DeliverInfo 컴포넌트에 뿌리자!
  // 바로 위에서 만든 배송지 state는 배송지 변경에서 클릭시 해당 배송지를 업데이트하고, 다시 DeliverInfo에 뿌리는 과정 필요하다
  const { state } = useLocation();

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const [currentAddress, setCurrentAddress] = useState({
    addressId: 1,
    customerName: '1번 고객',
    phoneNumber: '010-1111-1111',
    address: '서울특별시 중구 퇴계로 235',
    detailAddress: '101동 1001호',
    zoneCode: '12345',
    isDefault: true,
  }); // 현재 주소에 해당하며, 서버로 부터 기본배송지를 얻어온 후, 해당 값을 초기화한다. 또한 배송지를 선택할떄마다 해당 값이 바뀌도록 한다. 마지막으로 해당 값은 DeliverInfo 컴포넌트에 뿌려진다
  const [agreement, setAgreement] = useState(false);
  const [deliverRequest, setDeliverRequest] = useState(''); // 배송 요청 사항
  const [isChangeAddress, setChangeAddress] = useState(false); // 배송지 변경 클릭 유무 확인
  const [isNewAddress, setNewAddress] = useState(false); // 신규 배송지 추가 확인
  const [myZoneCode, setMyZondeCode] = useState(null); // zoneCode 상태
  const [isAddressInclude, setAddressInclude] = useState(null); // 상세주소 컴포넌트를 보여주기 위해, 앞서 주소가 입력되었는지 확인할 변수 + 우편번호 찾기를 통해 찾은 전체주소에 해당함

  const handleCheckboxChange = (e) => {
    setAgreement(e.target.checked);
  };
  const handleInputChange = (e) => {
    setDeliverRequest(e.target.value);
  };
  const onClickPayment = () => {
    console.log('배송지 요청 사항', deliverRequest);
    if (!agreement) {
      alert('먼저 연락처와 이메일로의 수신에 동의하세요!');
      return;
    }
    const { IMP } = window;
    IMP.init('imp73244762');

    const data = {
      pg: 'html5_inicis.INIpayTest', // PG사 (테스트용이라 INIpayTest붙음)
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 200, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명 (상품명 들어가면 될듯 + 예를들어 품목1외 몇개)
      buyer_name: '김태윤', // 구매자 이름 (Link state로 부터 받아온 사용자명)
      buyer_tel: '01012341234', // 구매자 전화번호 (Link state로 부터 받아온 전화번호)
      buyer_email: 'example@example', // 구매자 이메일 (Link state로 부터 받아온 이메일)
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };
    const callback = (response) => {
      const { success, imp_uid, merchant_uid, paid_amount, error_msg } =
        response;

      if (success) {
        // 백엔드 연동 과정 (결제금액이 올바른지 확인하기 위함) + imp_uid, merchant_uid 값을 백으로 보냄
        // (백으로 imp_uid값 전송 필요 + 백에서는 가맹점 식별코드 및 secret key를 통해 accessToken값을 얻어오고, 주문 내역이 올바른지 확인하는 과정 필요)
        // 올바른 결제인 경우 리다이렉션 페이지 구성 필요
        //alert('결제 성공');
        navigate('/payment', {
          state: { paymentSuccessInfo: { mgs: '이거보면 성공' } },
        });
        window.scrollTo(0, 0);
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };

  const onClickChangeAddress = () => {
    document.body.style.overflow = 'hidden';
    setChangeAddress(true);
  };
  const cancleChangeAddress = () => {
    document.body.style.overflow = 'auto';
    setChangeAddress(false);
  };
  const onClickNewAddress = () => {
    document.body.style.overflow = 'hidden';
    setChangeAddress(false);
    setNewAddress(true);
  };
  const cancleNewAddress = () => {
    document.body.style.overflow = 'auto';
    setMyZondeCode(null);
    setValue('customerName', null);
    setValue('phoneNumber', null);
    setValue('address', null);
    setValue('detailAddress', null);
    setAddressInclude(null);
    setNewAddress(false);
  };
  const handleSelectAddress = (address) => {
    setCurrentAddress(address);
    document.body.style.overflow = 'auto';
    setChangeAddress(false);
  };
  const handleAddressInclude = (e) => {
    setAddressInclude(e.currentTarget.value);
  };

  //배송지 삭제 요청
  const { mutate: handleDeleteAddress } = useMutation({
    mutationFn: fetchDeleteAddress,
    onSuccess: () => {
      // queryClient.invalidateQueries(['totalUserAddress']);
      // 위와 같이 삭제한 후, 전체적인 주소목록에 대해 다시 refetch하는 과정 필요 or 백엔드로 부터 수정된 값들을 받아와서 총배송지를 다시 설정해주는 방법도 있음
      document.body.style.overflow = 'auto';
      setChangeAddress(false);
    },
    onError: () => {
      console.log('배송지 삭제 요청 실패');
      document.body.style.overflow = 'auto';
      setChangeAddress(false);
    },
  });
  // 배송지 추가 요청
  const { mutate: handleAddAddress } = useMutation({
    mutationFn: (address) => fetchAddAddress(address),
    onSuccess: () => {
      // queryClient.invalidateQueries(['totalUserAddress']);
      // 위와 같이 삭제한 후, 전체적인 주소목록에 대해 다시 refetch하는 과정 필요 or 백엔드로 부터 수정된 값들을 받아와서 총배송지를 다시 설정해주는 방법도 있음
      document.body.style.overflow = 'auto';
    },
    onError: () => {
      document.body.style.overflow = 'auto';
      console.log('배송지 추가 요청 실패');
    },
  });
  // 신규 배송지 관련 폼
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onSubmit' });

  // 백엔드로 신규 배송지 추가 요청 보내는 함수 + 주소 추가요청 이후, 전체 주소에 대한 정보를 다시 받아와야함
  const onValid = (data) => {
    console.log('백으로 보낼 추가 배송지에 대한 정보', data);
    console.log(myZoneCode);
    const sendAddress = { ...data, myZoneCode };
    console.log('백엔드에 최종적으로 보낼 인수', sendAddress);

    handleAddAddress(sendAddress); // 배송지 추가 요청하는 부분
    cancleNewAddress();
  };

  const open = useDaumPostcodePopup();
  const handleClick = () => {
    open({ onComplete: onCompleteHandler });
  };
  const onCompleteHandler = (data) => {
    console.log('우편 api로 부터 오는 값', data);

    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setMyZondeCode(data.zonecode);
    setAddressInclude(fullAddress);
    setValue('address', fullAddress);
  };

  if (state) {
    if (state.paymentSuccessInfo) {
      return <PaymentSuccess />;
    } else {
      <Cart />;
    }
  }
  return (
    <>
      <S.PaymentLayout>
        <S.PageTitle>주문/결제</S.PageTitle>
        <S.Bar />
        <S.CustomerInfoContainer>
          <CustomerDetail
            handleCheckboxChange={handleCheckboxChange}
            customer={customer}
          />
          <DeliverInfo
            onClickChangeAddress={onClickChangeAddress}
            handleInputChange={handleInputChange}
            currentAddress={currentAddress}
          />
          <PaymentMethod style={{ boxShadow: 'none' }}>
            <h1>결제 수단</h1>
          </PaymentMethod>
          <AgreeMent style={{ boxShadow: 'none' }}>
            <h1>약관동의</h1>
          </AgreeMent>
        </S.CustomerInfoContainer>
        <TotalPayment onClickPayment={onClickPayment} fee={67000} />
      </S.PaymentLayout>
      {isChangeAddress && (
        <S.Overlay>
          <DeliverChoosePopup
            cancleChangeAddress={cancleChangeAddress}
            addressList={addressList}
            handleDeleteAddress={handleDeleteAddress}
            handleSelectAddress={handleSelectAddress}
            onClickNewAddress={onClickNewAddress}
          />
        </S.Overlay>
      )}
      {isNewAddress && (
        <S.Overlay>
          <NewAddressPopup
            cancleNewAddress={cancleNewAddress}
            handleSubmit={handleSubmit}
            onValid={onValid}
            register={register}
            errors={errors}
            myZoneCode={myZoneCode}
            isAddressInclude={isAddressInclude}
            handleAddressInclude={handleAddressInclude}
            handleClick={handleClick}
          />
        </S.Overlay>
      )}
    </>
  );
};

export default Payment;

const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
`;
const AgreeMent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
`;

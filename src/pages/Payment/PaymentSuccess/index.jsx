import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as IconCheck } from '../../../assets/imgs/Payment/icon_check.svg';
import { ReactComponent as IconOtherBtn } from '../../../assets/imgs/Payment/icon_searchotherproduct.svg';
import styled from 'styled-components';

const PaymentSuccess = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const handleSearchOther = () => navigate('/funding');
  return (
    <PaymentSuccessLayout>
      <PageTitle>주문 완료</PageTitle>
      <SuccessMessageContainer>
        <TopMessage>
          <IconCheck />
          <h1>구매가 완료되었습니다</h1>
        </TopMessage>
        <BottomMessage>
          <p>
            홍길동님이 구매하신 ㅁㅁ상품은 2023.11.23부터 배송될 예정이에요!
          </p>
          <p>
            구매내역은 마이페이지의 ‘구매내역 조회’에서 확인 하실 수 있습니다.
          </p>
        </BottomMessage>
      </SuccessMessageContainer>
      <PaymentInfoContainer>
        <PageTitle>주문 정보</PageTitle>
        <PaymentWrapper>
          <DeliverInfo>
            <h1>배송지 정보</h1>
            <p>홍길동</p>
            <p>010-1234-5678</p>
            <p>[00000] 서울 00구 00로 000 000동 000호</p>
            <p>경비실 보관 부탁드립니다</p>
          </DeliverInfo>
          <PayInfo>
            <h1>결제 정보</h1>
            <p>OO-은행</p>
            <p style={{ marginBottom: '50px' }}>OOOO-OO-OOOOOO</p>
            <h1>결제 금액</h1>
            <p>총 34,000원</p>
          </PayInfo>
        </PaymentWrapper>
        <SeeOtherFruitArea>
          <IconOtherBtn onClick={handleSearchOther} />
        </SeeOtherFruitArea>
      </PaymentInfoContainer>
    </PaymentSuccessLayout>
  );
};

export default PaymentSuccess;

const PaymentSuccessLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1300px;
  max-width: 1920px;
  margin: 0 auto;
`;
const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;
const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  max-height: 400px;
  background-color: #fff5e9;
`;
const TopMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  margin-top: 40px;
  svg {
    position: absolute;
    left: 100px;
  }
  h1 {
    margin: 70px 0px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.7px;
    padding-top: 30px;
  }
`;
const BottomMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  p {
    margin-bottom: 10px;
    color: #676767;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
  }
`;
const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
const PaymentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const DeliverInfo = styled.div`
  width: 500px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
  margin-right: 30px;
  padding: 30px 30px;
  position: relative;

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
    margin-bottom: 15px;
  }
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
    margin-bottom: 5px;
    color: #4a4a4a;
  }
  p:last-child {
    position: absolute;
    bottom: 31px;
  }
`;
const PayInfo = styled.div`
  width: 360px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
  padding: 30px 30px;

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
    margin-bottom: 15px;
  }
  p {
    color: #4a4a4a;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
    margin-bottom: 5px;
  }
  p:last-child {
    color: #ff4256;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.34px;
  }
`;
const SeeOtherFruitArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

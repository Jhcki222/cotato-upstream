import { ReactComponent as CancleBtn } from '../../../assets/imgs/Payment/icon_cancle.svg';
import { ReactComponent as IconInputUser } from '../../../assets/imgs/Payment/icon_inputUser.svg';
import { ReactComponent as IconPhone } from '../../../assets/imgs/Payment/icon_phone.svg';
import { ReactComponent as IconLocation } from '../../../assets/imgs/Payment/icon _location_.svg';
import { ReactComponent as IconSearchAddress } from '../../../assets/imgs/Payment/icon_search_address.svg';
import * as S from './styles';

const NewAddressPopup = ({
  cancleNewAddress,
  handleSubmit,
  onValid,
  register,
  errors,
  myZoneCode,
  isAddressInclude,
  handleAddressInclude,
  handleClick,
}) => {
  return (
    <S.NewAddressBox>
      <S.PopUpTitle>
        <h1>신규 배송지 추가</h1>
        <CancleBtn onClick={cancleNewAddress} />
        <hr />
      </S.PopUpTitle>
      <S.NewAddressForm onSubmit={handleSubmit(onValid)}>
        <span>
          <IconInputUser />
          <S.NewAddressInput
            {...register('customerName', {
              required: '받는 사람을 입력하세요.',
            })}
            placeholder="받는 사람"
          />
        </span>
        {errors.customerName && (
          <S.ErrorMessage>{errors.customerName.message}</S.ErrorMessage>
        )}
        <span>
          <IconPhone />
          <S.NewAddressInput
            {...register('phoneNumber', {
              required: '전화번호를 입력하세요.',
              maxLength: 13,
              pattern: {
                value: /010-([0-9]{4})-([0-9]{4})/g,
                message:
                  '휴대폰 번호를 정확하게 입력해주세요 (ex. 010-1234-5678)',
              },
            })}
            placeholder="휴대폰 번호"
          />
        </span>
        {errors.phoneNumber && (
          <S.ErrorMessage>{errors.phoneNumber.message}</S.ErrorMessage>
        )}
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconLocation />
          <S.NewAddressInput
            {...register('address', { required: '주소를 입력해주세요.' })}
            placeholder="우편번호 찾기"
            value={isAddressInclude}
            onInput={handleAddressInclude}
          />
          <S.ZoneCodeArea>{myZoneCode && `[${myZoneCode}]`}</S.ZoneCodeArea>
          <IconSearchAddress className="searchAddress" onClick={handleClick} />
          {isAddressInclude && (
            <S.NewAddressInput
              {...register('detailAddress', {
                required: '상세주소를 입력해주세요.',
              })}
              placeholder="상세주소 입력"
              style={{ marginTop: '-25px' }}
            />
          )}
        </span>
        {errors.address && (
          <S.ErrorMessage style={{ marginTop: '-20px' }}>
            {errors.address.message}
          </S.ErrorMessage>
        )}
        {!errors.address && errors.detailAddress && (
          <S.ErrorMessage>{errors.detailAddress.message}</S.ErrorMessage>
        )}
        <span>
          <S.NewAddressInput
            {...register('checkbox')}
            type="checkbox"
            id="defaultBox"
          />
          <label htmlFor="defaultBox">
            <span
              style={{
                fontSize: '16px',
                fontWeight: '300',
                color: '#676767',
                marginLeft: '8px',
              }}
            >
              기본 배송지로 선택
            </span>
          </label>
        </span>
        <S.NewAddressInput type="submit" value="추가" />
      </S.NewAddressForm>
    </S.NewAddressBox>
  );
};

export default NewAddressPopup;

import { ReactComponent as CancleBtn } from '../../../assets/imgs/Payment/icon_cancle.svg';
import { ReactComponent as DefaultAddress } from '../../../assets/imgs/Payment/icon_defaultAddress.svg';
import { ReactComponent as IconUser } from '../../../assets/imgs/Payment/icon_user.svg';
import { ReactComponent as IconDelete } from '../../../assets/imgs/Payment/icon_delete.svg';
import { ReactComponent as IconSelect } from '../../../assets/imgs/Payment/icon_select.svg';
import { ReactComponent as IconPhone } from '../../../assets/imgs/Payment/icon_phone.svg';
import { ReactComponent as IconLocation } from '../../../assets/imgs/Payment/icon _location_.svg';
import * as S from './styles';

const DeliverChoosePopup = ({
  cancleChangeAddress,
  addressList,
  handleDeleteAddress,
  handleSelectAddress,
  onClickNewAddress,
}) => {
  return (
    <S.DeliveryBox>
      <S.PopUpTitle>
        <h1>배송지 선택</h1>
        <CancleBtn onClick={cancleChangeAddress} />
        <hr />
      </S.PopUpTitle>
      <S.DeliveryList>
        {addressList.map((address) => (
          <S.DeliveryItem key={address.addressId} isDefault={address.isDefault}>
            {address.isDefault && (
              <S.UserInfo>
                <DefaultAddress />
              </S.UserInfo>
            )}
            <S.UserInfo style={{ fontWeight: '600' }}>
              <IconUser />
              {address.customerName}
            </S.UserInfo>
            <S.UserInfo>
              <IconPhone />
              {address.phoneNumber}
            </S.UserInfo>
            <S.UserInfo>
              <IconLocation />
              {address.address}
            </S.UserInfo>
            <S.UserInfo style={{ paddingLeft: '35px' }}>
              {address.detailAddress}
            </S.UserInfo>
            <S.DeleteAddArea>
              <IconDelete
                onClick={() => handleDeleteAddress(address.addressId)}
              />
              <IconSelect onClick={() => handleSelectAddress(address)} />
            </S.DeleteAddArea>
          </S.DeliveryItem>
        ))}
      </S.DeliveryList>
      <S.NewAddressBtn onClick={onClickNewAddress}>
        신규 배송지 추가
      </S.NewAddressBtn>
    </S.DeliveryBox>
  );
};

export default DeliverChoosePopup;

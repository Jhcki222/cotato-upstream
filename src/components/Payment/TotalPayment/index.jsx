import * as S from './styles';
import styled from 'styled-components';
import { ReactComponent as ColumnBar } from '../../../assets/imgs/Payment/columnBar.svg';

const TotalPayment = ({ onClickPayment, fee }) => {
  return (
    <S.ButtonContainer>
      <S.TotalFee>
        <span>최종 구매 금액</span>
        <span className="bold">{fee}</span>
        <ColumnBar />
        <span>배송비</span>
        <span className="bold">무료</span>
      </S.TotalFee>
      <S.PaymentBtn onClick={onClickPayment}>구매하기</S.PaymentBtn>
    </S.ButtonContainer>
  );
};

export default TotalPayment;

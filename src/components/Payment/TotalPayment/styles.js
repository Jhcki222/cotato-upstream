import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  div,
  button {
    height: 65px;
    flex-shrink: 0;
    border-radius: 15px;
  }
  div {
    max-width: 561px;
    border: 1px solid #dfdfdf;
    background: #fff;
  }
  button {
    background: #ff4256;
    color: white;
    min-width: 400px;
    position: absolute;
    font-weight: 800;
    font-size: 22px;
    right: 0;
  }
`;
export const TotalFee = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 22px;
    font-weight: 500;
    margin: 0 auto;
  }
  span.bold {
    font-weight: 700;
  }
`;
export const PaymentBtn = styled.button``;

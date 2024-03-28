import styled from 'styled-components';

export const PopUpTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  position: relative;
  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
  }
  svg {
    cursor: pointer;
    position: absolute;
    width: 13px;
    height: 19px;
    top: 25px;
    right: 20px;
  }

  hr {
    z-index: 30;
    width: 100%;
    height: 1px;
    background: #d2d2d2;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;
export const NewAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 70vh;
  border-radius: 16px;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const NewAddressForm = styled.form`
  width: 80%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }
  input[type='submit'] {
    cursor: pointer;
    background-color: #ff4256;
    color: white;
    padding-right: 40px;
  }
  input[type='checkbox'] {
    width: 19px;
    height: 19px;
    border: 1px solid #a9a9a9;
    background: #fff;
    margin-left: 10px;
  }
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 23px;
    left: 20px;
  }
  svg.searchAddress {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 23px;
    left: 460px;
    cursor: pointer;
  }
`;
export const NewAddressInput = styled.input`
  width: 100%;
  height: 49px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid #a9a9a9;
  background: #fff;
  margin: 10px 0px;
  padding-left: 50px;
`;
export const ErrorMessage = styled.p`
  color: #ff4256;
  padding-left: 20px;
`;
export const ZoneCodeArea = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -45px;
  left: 390px;
  cursor: pointer;
`;

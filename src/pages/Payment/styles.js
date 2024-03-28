import styled from 'styled-components';

export const PaymentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1300px;
  max-width: 1920px;
  margin: 0 auto;
`;
export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
export const Bar = styled.div`
  width: 70%;
  height: 8px;
  flex-shrink: 0;
  background: #f3f3f3;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 35px;
`;
export const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  div {
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
    margin-top: 50px;
    margin-bottom: 30px;
    flex-shrink: 0;
    width: 100%;
  }
  div:not(:first-child) {
    margin-top: 70px;
  }
  h1:first-child {
    position: absolute;
    top: -45px;
    left: -20px;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
  }
  h1:not(first-child),
  label {
    font-size: 18px;
    font-weight: 600;
    padding-left: 25px;
    margin-bottom: 40px;
    position: relative;
  }
  h1:nth-child(2) {
    padding-top: 30px;
  }
  h1 span,
  h1 input {
    position: absolute;
    left: 150px;
  }
  .value {
    font-weight: 400;
    padding-bottom: 20px;
  }
  label {
    display: flex;
    align-items: center;
  }
  label span {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
  h1 input {
    width: 446px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    position: absolute;
    top: -5px;
  }
`;
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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

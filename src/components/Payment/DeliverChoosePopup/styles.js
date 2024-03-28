import styled from 'styled-components';

export const DeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 80vh;
  border-radius: 16px;
  background: #fff;
  overflow: auto;
`;
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
export const DeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DeliveryItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 500px;
  height: ${(props) => (props.isDefault ? '300px' : '270px')};
  border-radius: 15px;
  border: 2px solid ${(props) => (props.isDefault ? '#f47885' : '#e3e3e3')};
  margin: 10px 0;
  padding: 25px 20px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  svg {
    margin-right: 15px;
  }
`;
export const DeleteAddArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  svg {
    cursor: pointer;
  }
`;
export const NewAddressBtn = styled.button`
  width: 80%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #d4d4d4;
  background: #fff;
  color: #ff4256;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 30px auto;
  padding: 10px 5px;
`;

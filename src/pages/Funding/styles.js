import styled from 'styled-components';

export const FundingLayout = styled.div`
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
  margin: 30px 0px;
`;
export const CityContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 40px;
`;
export const CityList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding: 15px;
`;
export const CityItem = styled.li`
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.isselected ? '#FF4256' : '#666060')};
  border-bottom: ${(props) =>
    props.isselected ? '1px solid #FF4256' : 'none'};
`;
export const FruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  max-height: 600px;
  background-color: #fff4f4;
`;
export const SelectedCityTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 40px auto;
`;
export const SelectedCityAdvertisement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  margin: 0 auto;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #ff9c2f;
  position: relative;
  svg {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: 138px;
    height: 38px;
    cursor: pointer;
  }
  margin-bottom: 70px;
`;
export const SelectedCityFruitContainer = styled.div`
  display: flex;
`;
export const SelectedCityFruitList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const SelectedCityFruitItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 360px;
    height: 239px;
  }
  h1 {
    margin-top: 5px;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  margin: 0 10px;
`;

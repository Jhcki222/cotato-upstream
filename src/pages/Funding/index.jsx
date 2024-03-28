import IconTomato from '../../assets/imgs/Funding/Tomato.png';
import IconPeach from '../../assets/imgs/Funding/Peach.png';
import IconPlum from '../../assets/imgs/Funding/Plum.png';
import { ReactComponent as IconGoCity } from '../../assets/imgs/Funding/IconGoCity.svg';
import { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

//백으로 부터 받아올 도시들에 대한 더미데이터
const cities = [
  {
    id: 1,
    cityName: '청주',
    advertisement: '저렴한 가격! 신선한 과일! 청주 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 2,
    cityName: '상주',
    advertisement: '상상주주상상주주 상주 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 3,
    cityName: '여주',
    advertisement: '여주여주여주 여주 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 4,
    cityName: '봉화',
    advertisement: '봉화봉화봉화 봉화 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 5,
    cityName: '창녕',
    advertisement: '창녕창녕창녕 창녕 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 6,
    cityName: '고원',
    advertisement: '고원고원고원 고원 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
  {
    id: 7,
    cityName: '사천',
    advertisement: '사천사천사천 사천 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  },
];

const Funding = () => {
  // 백엔드로 부터 총 마을 받아오는 과정 필요 + 이때 각 마을에 어떠한 상품들이 있는지에 대한 정보로 함께와야함 (상품들의 이미지를 보여주기 위함 + a)
  // 위의 cities변수처럼 총마을을 저장해두는 변수 필요 + 총마을에 대한 정보를 받아왔을때, setSelectCity를 통해, 받아온 마을 중 첫번째마을로 selectCity변수를 초기화할것
  // 또한 아래에 "보러가기 클릭시 라우팅 변수로 해당 도시이름을 적어주고, /funding/buying/:cityName"에서는 라우트 변수를 받아 따로 서버에 요청해야함
  const [selectCity, setSelectCity] = useState({
    id: 1,
    cityName: '청주',
    advertisement: '저렴한 가격! 신선한 과일! 청주 못난이 과일을 맛보세요!',
    fruits: [
      {
        fruitName: '토마토',
        fruitImage: IconTomato,
      },
      { fruitName: '매실', fruitImage: IconPlum },
      { fruitName: '자두', fruitImage: IconPeach },
    ],
  });
  const navigate = useNavigate();

  return (
    <S.FundingLayout>
      <S.PageTitle>겨울 제철 못난이</S.PageTitle>
      <S.CityContainer>
        <S.CityList>
          {cities.map((city) => (
            <S.CityItem
              key={city.id}
              isselected={selectCity.cityName === city.cityName}
              onClick={() => setSelectCity(city)}
            >
              {city.cityName}
            </S.CityItem>
          ))}
        </S.CityList>
      </S.CityContainer>
      <S.FruitContainer>
        <S.SelectedCityTitle>{selectCity.cityName}</S.SelectedCityTitle>
        <S.SelectedCityAdvertisement>
          {selectCity.advertisement}
          <IconGoCity
            onClick={() => {
              navigate('/funding/buying');
              window.scrollTo(0, 0);
            }}
          />
        </S.SelectedCityAdvertisement>
        <S.SelectedCityFruitContainer>
          <S.SelectedCityFruitList>
            {selectCity.fruits.map((fruit, idx) => (
              <S.SelectedCityFruitItem key={idx}>
                <img src={`${fruit.fruitImage}`} />
                <h1>{fruit.fruitName}</h1>
              </S.SelectedCityFruitItem>
            ))}
          </S.SelectedCityFruitList>
        </S.SelectedCityFruitContainer>
      </S.FruitContainer>
    </S.FundingLayout>
  );
};

export default Funding;

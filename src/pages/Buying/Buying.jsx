import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SampleImg from '../../assets/imgs/Funding/Buying1.png';
import ShareImg from '../../assets/imgs/Funding/ShareImage.svg';
import LikeImg from '../../assets/imgs/Funding/LikeImage.svg';
import Tomato from '../../assets/imgs/Funding/Tomato.png';
import Plum from '../../assets/imgs/Funding/Plum.png';
import Peach from '../../assets/imgs/Funding/Peach.png';
export default function Buying() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api추가

    const fakeProductData = [
      {
        id: 1,
        number: '선택 1',
        details: '#멋쟁이 토마토',
        name: '토마토',
        weight: '10kg',
        price: '10,000',
        quantity: 0,
        imageUrl: Tomato,
      },
      {
        id: 2,
        number: '선택 2',
        details: '#멋쟁이 매실',
        name: '매실',
        weight: '10kg',
        price: '20,000',
        quantity: 0,
        imageUrl: Plum,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      // 추가가능
    ];

    setProducts(fakeProductData);
  }, []);

  const handleQuantityChange = (product, setProducts) => (change) => {
    // 수량 변경 이벤트 핸들러
    const newQuantity = Math.max(0, product.quantity + change); // 최소값은 0으로 설정

    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: newQuantity };
        }
        return p;
      });
      return updatedProducts;
    });
  };

  const handleSelectClick = (product) => {
    // 담기 버튼 클릭 이벤트 핸들러
    // 서버로 수량 정보 전송
    console.log(`Product ${product.name} 수량: ${product.quantity}`);
    alert(product.name + ' ' + product.quantity + '개를 담았어요.');
  };

  return (
    <>
      <Wrapper>
        <HeadLine></HeadLine>
        <ContentBox>
          <ImageContainer>
            <img src={SampleImg} alt="상품" />
          </ImageContainer>
          <DescriptionContainer>
            <Info>
              마을의 펀딩 &#62;<a>청주</a>
            </Info>
            <Title>
              신품종 킹머스켓 & 샤인머스켓 <br />
              최초공개 추석 한정판
            </Title>
            <Description>
              농부의 마음으로 정직하고 신선하게프리미엄 & 신상 과일을큐레이션
              하여 선물드립니다
            </Description>
            <ButtonBox>
              <ShareButton>
                <img src={ShareImg} alt="공유버튼"></img>
              </ShareButton>
              <LikeButton>
                <img src={LikeImg} alt="찜하기버튼"></img>
              </LikeButton>
              <CartButton>담은 목록 보러가기</CartButton>
            </ButtonBox>
          </DescriptionContainer>
        </ContentBox>
        <HeadLine></HeadLine>
        <ProductTitle>상품 종류</ProductTitle>
        <ProductContainer>
          {products.length > 0 && (
            <ProductList>
              {products.map((product) => (
                <Product key={product.id}>
                  <img
                    src={product.imageUrl}
                    alt={`상품 이미지 - ${product.name}`}
                  />
                  <OptionContainer>
                    <ProductInfo>
                      {product.number} <a>{product.details}</a>
                    </ProductInfo>
                    <ProductName>
                      품 명 <b>{product.name}</b>
                    </ProductName>
                    <ProductWeight>
                      무 게 <b>{product.weight}</b>
                    </ProductWeight>
                    <ProductPrice>
                      가 격<b>{product.price}원</b>
                    </ProductPrice>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() =>
                          handleQuantityChange(product, setProducts)(-1)
                        }
                      >
                        -
                      </QuantityButton>
                      <ProductQuantity>{product.quantity}</ProductQuantity>
                      <QuantityButton
                        onClick={() =>
                          handleQuantityChange(product, setProducts)(1)
                        }
                      >
                        +
                      </QuantityButton>
                    </QuantityControl>
                    <SelectButton onClick={() => handleSelectClick(product)}>
                      담기
                    </SelectButton>
                  </OptionContainer>
                </Product>
              ))}
            </ProductList>
          )}
        </ProductContainer>
        <HeadLine></HeadLine>
        <ProductTitle>상품 소개</ProductTitle>
        <InfoContainer></InfoContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  height: 650px;
  display: flex;
  margin-top: -3rem;
  flex-direction: row;
  max-width: 1250px; //너비조정
  width: 100vw;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 535px;
  height: 399px;
  overflow: hidden;
  flex-shrink: 0; /* 이미지가 축소되지 않도록 합니다. */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  span {
    color: #a2a2a2;

    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
const Title = styled.div`
  position: relative;
  color: #2a2a2a;
  top: -3rem;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
const Info = styled.div`
  position: relative;
  width: 200px;
  top: -4rem;
  height: 30px;
  color: #a2a2a2;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.34px;
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 표현합니다. */
  a {
    top: -0.1rem;
    margin-left: 0.3rem;
    flex-shrink: 0;
    border-radius: 12.5px;
    background: #ff9c2f;
    color: #fff;
    padding: 2px 7px 1px 7px;
    text-align: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Description = styled.div`
  width: 419px;
  display: flex;
  position: relative;
  color: #5e5e5e;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonBox = styled.div`
  display: flex;
  position: relative;
  top: 5.5rem;
`;
const ShareButton = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;
const LikeButton = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;

const CartButton = styled.div`
  display: flex;
  width: 391px;
  height: 60px;
  padding: 16px 160px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--White, #fff);
  letter-spacing: 0.4px;
  border-radius: 40px;
  background: var(--Main-Color, #ff4256);
  white-space: nowrap;
  margin-left: 21px;
  margin-top: 0.3rem;
`;
const HeadLine = styled.div`
  width: 100vw;
  height: 1px;
  background: #ccc;
`;
const ProductTitle = styled.div`
  position: relative;
  display: flex;
  margin-top: 3rem;
  margin-left: -70rem;
  color: #2a2a2a;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
const ProductContainer = styled.div`
  height: 700px;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  width: 58%;
  overflow-x: auto;
  overflow-y: auto; // 세로 스크롤이 생기지 않도록 설정
  white-space: nowrap; // 가로 스크롤을 통해 한 줄에 표시
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 20px;
  width: 400px; // 상품 박스의 너비 조정
  height: 530px;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.2));
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: nowrap; // 줄 바꿈 방지
`;

const OptionContainer = styled.div`
  display: flex;
  width: 358px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  b {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 15px;
  }
`;

const ProductInfo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  a {
    color: var(--Point-Color, #ff9c2f);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 14px;
  }
`;

const ProductName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 30px;
`;

const ProductWeight = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;

const ProductPrice = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;

const QuantityControl = styled.div`
  display: flex;
  width: 116.215px;
  height: 46px;
  flex-shrink: 0;
  align-items: center;
  margin-top: 10px;
  border-radius: 84px;
  border: 1px solid #969696;
  background: #fff;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  stroke: var(--Font-Color, #2c2c2c);
  padding-bottom: 3px;
`;

const ProductQuantity = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const SelectButton = styled.div`
  width: 143px;
  display: flex;
  position: relative;
  left: 11rem;
  top: -3rem;
  height: 46px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 84px;
  border: 1px solid var(--Main-Color, #ff4256);
  background: #ff4257;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 1200px;
  height: 1000px;
  flex-shrink: 0;
  background: #f7f7f7;
`;
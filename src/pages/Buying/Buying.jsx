import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SampleImg from '../../assets/imgs/Funding/Buying1.png';
import ShareImg from '../../assets/imgs/Funding/ShareImage.svg';
import LikeImg from '../../assets/imgs/Funding/LikeImage.svg';
import CartImg from '../../assets/imgs/Funding/CartImage.svg'
import Tomato from '../../assets/imgs/Funding/Tomato.png';
import Plum from '../../assets/imgs/Funding/Plum.png';
import Peach from '../../assets/imgs/Funding/Peach.png';
import Items from './Items';
import axios from 'axios';
import LikedImg from '../../assets/imgs/Funding/LikedImage.svg'
import { useNavigate } from "react-router-dom";

export default function Buying() {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    image: '',
    location: '청주',
    title: '저렴한 가격! 신선한 과일! 청주 못난이 과일을 맛보세요!' ,
    description: '농부의 마음으로 정직하고 신선하게프리미엄 & 신상 과일을큐레이션 하여 선물드립니다',
    likeCount: 0,
    isLiked: false, 
  });

  const [isScrollContentVisible, setIsScrollContentVisible] = useState(false);

  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        const data = response.data; 
        setProductData({
          image: data.image,
          location: data.location,
          title: data.title,
          description: data.description,
          likeCount: data.likeCount,
          isLiked: data.isLiked, 
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contentBoxHeight = 700; // ContentBox의 높이 (수정 필요)

      if (scrollY > contentBoxHeight) {
        setIsScrollContentVisible(true);
      } else {
        setIsScrollContentVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLikeClick = () => {
    setProductData(prevData => ({
      ...prevData,
      likeCount: prevData.isLiked ? prevData.likeCount - 1 : prevData.likeCount + 1,
      isLiked: !prevData.isLiked,
    }));
  };
  // const handleLikeClick = () => {
  //   axios.post('your-like-api-endpoint', { productId: /* your product ID */'', isLiked: !productData.isLiked })
  //     .then(response => {
  //       const updatedData = response.data;
  //       setProductData({
  //         ...productData,
  //         likeCount: updatedData.likeCount,
  //         isLiked: updatedData.isLiked,
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error updating like status:', error);
  //     });
  // }; 서버연동

  const LikeButton = () => (
    <div
      onClick={handleLikeClick}
      style={{ cursor: 'pointer', display: 'flex', position: 'relative', marginLeft: '10px' }}
    >
      <img
        src={productData.isLiked ? LikedImg : LikeImg}
        alt="찜하기버튼"
      />
      <LikeCount>{productData.likeCount}</LikeCount>
    </div>
  );
  
  //스크롤 시 상단 고정 컨테이너
  const ScrollContent = () => (
    <FixedContainer isVisible={isScrollContentVisible}>
      <ScrollContentBox>
      <ScrollImage>
        <img src={productData.image || SampleImg} alt="상품" />
      </ScrollImage>
      <ScrollInfo>
        겨울 제철 못난이 &#62;<a>{productData.location}</a>
      </ScrollInfo>
      <ScrollTitle>
        {productData.title}
      </ScrollTitle>
      <ScrollButtonBox>
      <ShareButton>
        <img src={ShareImg} alt="공유버튼" />
      </ShareButton>
      <LikeButton onClick={handleLikeClick}>
        <img src={productData.isLiked ? LikedImg : LikeImg} alt="찜하기버튼" />
      </LikeButton>
      <ScrollCart onClick={() => navigate(`/cart`)}>
        <img src={CartImg} alt="장바구니" />
      </ScrollCart>
      </ScrollButtonBox>
      </ScrollContentBox>
    </FixedContainer>
  );

  return (
    <>
      <Wrapper>
        <HeadLine></HeadLine>
        <ScrollContent/>
        <ContentBox>
        <ImageContainer>
        <img src={productData.image || SampleImg} alt="상품" />
      </ImageContainer>
      <DescriptionContainer>
        <Info>
          겨울 제철 못난이 &#62;<a>{productData.location}</a>
        </Info>
        <Title>
          {productData.title}
        </Title>
        <Description>
          {productData.description}
        </Description>
            <ButtonBox>
              <ShareButton>
                <img src={ShareImg} alt="공유버튼"></img>
              </ShareButton>
              <LikeButton/>
              <CartButton onClick={() => navigate(`/cart`)}>담은 목록 보러가기</CartButton>
            </ButtonBox>
          </DescriptionContainer>
        </ContentBox>
        <HeadLine></HeadLine>
        <ProductTitle>상품 종류</ProductTitle>
        <ProductContainer>
          <Items isDetailPage/> 
          {/* 상품 컴포넌트 */}
        </ProductContainer>
        <HeadLine></HeadLine>
        <ProductTitle>상품 소개</ProductTitle>
        <InfoContainer></InfoContainer>
      </Wrapper>
    </>
  );
}

const FixedContainer = styled.div`
position: fixed;
top: ${({ isVisible }) => (isVisible ? '0px' : '-400px')};
width: 100%;
height : 12rem;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content : center;
border-bottom : 0.0625rem solid #DFDFDF;
z-index: 2000;
transition: top 0.3s ease-in-out;
`;

const ScrollContentBox = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  height : 12rem;

`;
const ScrollImage = styled.div`
  display: flex;
  position: relative;
  margin-left : 2rem;
  top : 2rem;
  width: 10.0625rem;
  height: 7.5rem;
  flex-shrink: 0;
  overflow: hidden;
  flex-shrink: 0; /* 이미지가 축소되지 않도록 합니다. */
  border-radius: 0.375rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ScrollInfo = styled.div`
  display : flex;
  position: relative;
  width: 200px;
  top : 3.5rem;
  margin-left : 2rem;
  height: 25px;
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
    padding: 2px 12px 2px 12px;
    text-align: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
const ScrollTitle = styled.div`
  display : flex;
  position: relative;
  color: #2a2a2a;
  margin-top : 6rem;
  margin-left : -12rem;
  font-family: Pretendard;
  font-size: 1.75rem;
  width : 60rem;
  height : 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  white-space: pre-wrap; /* 여기에 속성 추가 */
`;

const ScrollButtonBox = styled.div`
  display: flex;
  position: absolute;
  width : 16rem;
  height : 4.4rem;
  top: 4rem;
  right : 1rem;


`;

const ScrollCart = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;
const LikeCount = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 1.9rem;
  color: #868686;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.015rem;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position : relative;
`;

const ContentBox = styled.div`
  height: 550px;
  display: flex;
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
  position: absolute;
  color: #2a2a2a;
  top : 7rem;
  font-family: Pretendard;
  font-size: 28px;
  width : 20rem;
  height : auto;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  white-space: pre-wrap; /* 여기에 속성 추가 */
`;
const Info = styled.div`
  position: absolute;
  width: 200px;
  top : 5rem;
  height: 25px;
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
    padding: 2px 12px 2px 12px;
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
  height: auto;
  position: absolute;
  color: #5e5e5e;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top : 13rem;
`;

const ButtonBox = styled.div`
  display: flex;
  position: absolute;
  width : 40rem;
  top : 24.5rem;
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
  margin-bottom: 3rem;
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

const InfoContainer = styled.div`
  width: 1200px;
  height: 1000px;
  flex-shrink: 0;
  background: #f7f7f7;
`;
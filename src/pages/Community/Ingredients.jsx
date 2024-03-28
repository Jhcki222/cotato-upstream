import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ContentWrap from './components/ContentWrap';
import ReviewCard from './components/ReviewCard';

export default function Ingredients() {

    const [ingredientInfo, setIngredientInfo] = useState(null);
    const { ingredient } = useParams();
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
      setBookmarked((prev) => !prev);
    }

    const getIngredientInfo = async () => {
        try {
          const {data} = await axios.get(`/data/Ingredients/${ingredient}.json`) //북마크 됐는지도 나중에 받아와야
          return data
        }
        catch(error) {
          console.log(error)
        }
      }
    
    useEffect(() =>{
        getIngredientInfo()
        .then((res) => {
        setIngredientInfo(res);
        window.scrollTo(0, 0);
        })},[]);
    
    return (
        <div>
          <Wrap>
            <DescriptionWrap>
              <PhotoContainer>
                <img src={ingredientInfo?.image} />
              </PhotoContainer>
              <TextContainer>
                <Title>
                  {ingredientInfo?.title}
                  <BookmarkButton onClick={handleBookmark}>
                    {bookmarked ? <IoBookmark color='#FF4256' /> :<CiBookmark />}
                  </BookmarkButton>
                </Title>
                <Description>
                  {ingredientInfo?.description}
                </Description>
                <hr />

                <ShortDescription>
                  <ShortDescriptionTitle>칼로리</ShortDescriptionTitle>
                  <ShortDescriptionContent>10g당 <b style={{fontWeight:"bolder"}}>{ingredientInfo?.kcalPer10g}</b>kcal</ShortDescriptionContent>
                </ShortDescription>
                <hr />

                <ShortDescription>
                  <ShortDescriptionTitle>환경 기여도</ShortDescriptionTitle>
                  <ShortDescriptionContent><b style={{fontWeight:"bolder"}}>{ingredientInfo?.envContribute}</b>%</ShortDescriptionContent>
                </ShortDescription>
                <hr />
                
                <ShortDescription>
                  <ShortDescriptionTitle>제철 기여도</ShortDescriptionTitle>
                  <ShortDescriptionContent><b style={{fontWeight:"bolder"}}>{ingredientInfo?.seasonContribute}</b>%</ShortDescriptionContent>
                </ShortDescription>
                <hr />
              </TextContainer>
            </DescriptionWrap>
            <ReviewWrap>
              <h1>📦파믈리 생생 후기📦</h1>
              <ReviewCardWrap>
                <ReviewCard review={ingredientInfo?.review[0]}/>
                <ReviewCard review={ingredientInfo?.review[1]}/>
              </ReviewCardWrap>
            </ReviewWrap>
            {ingredientInfo?.data?
              (<ContentWrap color={'#FFF4F4'} data={ingredientInfo?.data} more={false}>

              </ContentWrap>) : null}
          </Wrap>
        </div>
    );
}
//          <h1>{ingredient}는 파라미터</h1>
//          <h1>{ingredientInfo?.id}는 json</h1>
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
    min-width: 1300px;
  align-items: center;
`
//상단 설명
const DescriptionWrap = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`

const PhotoContainer = styled.div`
  position: relative;
  width: 522px;
  height: 402px;
  overflow: hidden;
  border-radius: 1rem;
  border: transparent 0px #DADADA;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
`

const TextContainer = styled.div`
  width: 500px;
  height: 402px;
  padding-top: 1rem;
`

const Title = styled.h1`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 30px;
`

const BookmarkButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);
  box-shadow: 0px 0.3px 6px rgba(0, 0, 0, 0.2);
`

const Description = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #8F8F8F;
  line-height: 140%;
  white-space: pre-wrap;
`

const ShortDescription = styled.div`
  display: flex;
  justify-content: start;
  height: 70px;
  align-items: center;
`

const ShortDescriptionTitle = styled.h2`
  width: 160px;
  color: #1D1D1D;
`

const ShortDescriptionContent = styled.h2`
  color: #000000;
`
//후기
const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 460px;
  margin-top: 3rem;
  margin-bottom: 7rem;
  h1{
      font-weight: bold;
      font-size: 22px;
      position: relative;
      margin-bottom: 2rem;
  }
`

const ReviewCardWrap = styled.div`
  display: flex;
  gap: 3rem;
  height: 384px;
`
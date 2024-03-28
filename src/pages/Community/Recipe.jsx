import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ContentWrap from './components/ContentWrap';

export default function Recipe() {

    const [recipeInfo, setRecipeInfo] = useState(null);
    const { recipe } = useParams();
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
      setBookmarked((prev) => !prev);
    }

    const getrecipeInfo = async () => {
        try {
          const {data} = await axios.get(`/data/recipe/${recipe}.json`) //북마크 여부는 별도의 json파일로 관리?
          return data
        }
        catch(error) {
          console.log(error)
        }
      }
    
    useEffect(() =>{
        getrecipeInfo()
        .then((res) => {
        setRecipeInfo(res)
        });
        window.scrollTo(0, 0);
    },[]);
    
    return (
        <div>
          <Wrap>
            <DescriptionWrap>
              <PhotoContainer>
                <img src={recipeInfo?.image} />
              </PhotoContainer>
              <TextContainer>
                <SubTitle>
                    {recipeInfo?.subTitle}
                </SubTitle>
                <Title>
                  {recipeInfo?.title}
                  <BookmarkButton onClick={handleBookmark}>
                    {bookmarked ? <IoBookmark color='#FF4256' /> :<CiBookmark />}
                  </BookmarkButton>
                </Title>
                <TagWrap>
                        {recipeInfo?.tag.map((tag) => (
                        <Tag 
                        key={tag}
                        //onClick={  }
                        >{tag}
                        </Tag>
                    ))}
                </TagWrap>
                <Description>
                  {recipeInfo?.description}
                </Description>
                <hr />

                <ShortDescription>
                  <ShortDescriptionTitle>맛</ShortDescriptionTitle>
                  <ShortDescriptionContent><b style={{fontSize: "1.2rem"}}>{recipeInfo?.taste}</b>/5</ShortDescriptionContent>
                </ShortDescription>
                <hr />

                <ShortDescription>
                  <ShortDescriptionTitle>난이도</ShortDescriptionTitle>
                  <ShortDescriptionContent><b style={{fontWeight:"bolder"}}>{recipeInfo?.difficulty}</b></ShortDescriptionContent>
                </ShortDescription>
                <hr />
                
                <ShortDescription>
                  <ShortDescriptionTitle>예상 소요시간</ShortDescriptionTitle>
                  <ShortDescriptionContent><b style={{fontWeight:"bolder"}}>{recipeInfo?.estTime}</b></ShortDescriptionContent>
                </ShortDescription>
                <hr />
              </TextContainer>
            </DescriptionWrap>
            <Required>
                <RequiredTitle>필요한 식재료</RequiredTitle>
                <FoodWrap>
                {recipeInfo?.ingredient.map((ingredient) => (
                            <Food key={ingredient.name}>
                            <FoodImg>
                                <img src={ingredient.image} />
                            </FoodImg>
                            <h2>{ingredient.name}</h2>
                            </Food>
                        ))}
                </FoodWrap>
            </Required>
            <Required>
                <RequiredTitle>필요한 양념</RequiredTitle>
                <FoodWrap>
                {recipeInfo?.sauce.map((sauce) => (
                            <Food key={sauce.name}>
                            <FoodImg>
                                <img src={sauce.image} />
                            </FoodImg>
                            <h2>{sauce.name}</h2>
                            </Food>
                        ))}
                </FoodWrap>
            </Required>
            <Cook>
                <RequiredTitle>조리 순서</RequiredTitle>
                <ol>
                        {recipeInfo && recipeInfo?.cook.map((cook, i) => (
                        <div style={{display: "flex", alignItems: "center"}}>
                        <Index>{i+1}</Index>
                        <li key={i}>{cook}</li>
                        </div>
                    ))}
                </ol>
            </Cook>
          </Wrap>
        </div>
    );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
    min-width: 1300px;
  flex-direction: column;
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
  img{
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

const SubTitle = styled.h2`
    color: #2B2B2B;
    font-size: 1.3rem;
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

const TagWrap = styled.div`
    justify-content: space-evenly;
`

const Tag = styled.button`
    box-sizing: border-box;
    border: 1px solid #E4E4E4;
    border-radius: 30px;
    margin-right: 0.5rem;
    padding: 0.5rem;
    color: #525252;
`

const Description = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #8F8F8F;
  line-height: 140%;
  white-space: pre-wrap;
`

const ShortDescription = styled.div`
  display: flex;
  justify-content: start;
  height: 60px;
  align-items: center;
`

const ShortDescriptionTitle = styled.h2`
  width: 120px;
  margin-right: 1.5rem;
  font-size: 20px;
  color: #1D1D1D;
`

const ShortDescriptionContent = styled.h2`
  color: #000000;
`

const Required = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    width: 1100px;
    height: auto;
    margin-bottom: 2rem;

    border: 1px solid #DFDFDF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
`

const RequiredTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #212121;
`
const FoodWrap = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 1092px;
    height: auto;
    margin-bottom: 2rem;
`

const Food = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const FoodImg = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
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
    h2 {
    }
`

const Cook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    width: 1092px;
    height: auto;
    margin-bottom: 2rem;
    padding-top: 2rem;
    padding-bottom: 5rem;

    border: 1px solid #DFDFDF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    ol{
        list-style: none;
    }
    li {
        display: flex;
        font-size: 20px;
        line-height: 400%;
    }
`

const Index = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #FF4256;
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 1rem;
`
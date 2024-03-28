//찜목록
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from "../../../assets/imgs/Mypage/Recipe1.png";


export default function SavedRecipes() {
  const [RecipelistItems, setRecipelistItems] = useState([]);
  const [showEmptyRecipe, setShowEmptyRecipe] = useState(false); // 빈 찜목록 페이지 표시 여부

  useEffect(() => {
    // 이미지 및 목록 데이터를 가져옵니다.
    const fetchedItems = [
      { id: 1, info : '토마토를 좋아하고 귀찮은 건 싫은 당신을 위한,', name: '토마토 카프레제', imageUrl: Image1 , },
      { id: 2, info : '토마토를 좋아하고 귀찮은 건 싫은 당신을 위한,', name: '토마토 ', imageUrl: Image1 , },
      { id: 3, info : '토마토를 좋아하고 귀찮은 건 싫은 당신을 위한,', name: '토마토 카프레제', imageUrl: Image1 , },
      { id: 4, info : '토마토를 좋아하고 귀찮은 건 싫은 당신을 위한,', name: '토마토 카프레제', imageUrl: Image1 , },
      { id: 5, info : '토마토를 좋아하고 귀찮은 건 싫은 당신을 위한,', name: '토마토 카프레제', imageUrl: Image1 , },
      //   // 필요한 만큼 항목을 추가하세요
    ];
    setRecipelistItems(fetchedItems);
    if (fetchedItems.length === 0) {
      setShowEmptyRecipe(true);
    }
  }, []);
  

  // 이미지를 두 개씩 그룹화합니다.
  const groupedItems = groupBy(RecipelistItems, 2);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Wrapper>
      <Header>
        <a>저장한 레시피</a>
      </Header>
      <HeadLine></HeadLine>

      {showEmptyRecipe ? (
        <EmptyRecipe>저장된 레시피가 없습니다.</EmptyRecipe>
      ) : (
        <RecipeListWrapper>
          <RecipeListItems>
            {groupedItems.map((group, groupIndex) => (
              <Row key={groupIndex}>
                {group.map((item) => (
                  <RecipeListItem key={item.id}>
                    <ItemImage src={item.imageUrl} alt={item.name} />
                    <RecipeInfo>{item.info}</RecipeInfo>
                    <ItemName>{item.name}</ItemName>
                  </RecipeListItem>
                ))}
              </Row>
            ))}
          </RecipeListItems>
        </RecipeListWrapper>
      )}
    </Wrapper>
  );
}

// 이미지를 그룹화하는 함수
function groupBy(arr, groupSize) {
  return arr.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
}

const Wrapper = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;s
  
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 120px;
  width: 780px;
  position: relative;
  margin-top: 0px;

  a {
    margin-top: 40px;
    top: 70%;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 48.8125rem;
  height: 3px;
  position: relative;
  background-color: #dfdfdf;
`;

const RecipeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 55rem;
  margin-left : 6rem;

`;

const RecipeListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top : 3rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem; // 행 간격 조절
`;

const RecipeListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.4375rem;
    height: 25rem;
    flex-shrink: 0;
    margin-right : 1rem;
  align-items : center;
  justify-content : center;
  border-radius: 1.25rem;
  border: 2px solid #EBEBEB;
  background: #FFF;
  padding-top : -2rem;
 
  
`;

const ItemImage = styled.img`
  // 이미지에 대한 스타일을 추가하세요
  display : flex;
  width: 20.9375rem;
  height: 16.125rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    margin-bottom : 1rem;

`;

const ItemName = styled.div`
color: #000;
font-family: Pretendard;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right : auto;
margin-left : 2rem;
margin-top : 0.5rem;
`;
const RecipeInfo = styled.div`
color: #2B2B2B;
font-family: Pretendard;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right : auto;
margin-left : 2rem;
margin-top : 0.5rem;
`;

const EmptyRecipe = styled.div`
display : flex;
justify-content: center;
margin-top : 30%;
color: #2A2A2A;
text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  line-height: normal;
`


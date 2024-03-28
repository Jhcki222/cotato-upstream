import React from 'react'
import styled from 'styled-components'
import OneCartItem from './OneCartItem'
import { IoIosArrowForward } from "react-icons/io";

export default function CardList({item: {region, title, image, products}, onChange, checkedList}) {
  return (
    <>
      <Container>
        <FundingTitle>
          <ImageWrapper>
            <img src={image} />
          </ImageWrapper>
          <FundingInfo>
            <TownCategory>
              <p>마을의 펀딩</p>
              <IoIosArrowForward />
              <TownItem>{region}</TownItem>
            </TownCategory>
            <Title>
              <p>{title}</p>
            </Title>
          </FundingInfo>
        </FundingTitle>
        {products && products.map((product) => (
          <OneCartItem key={product.id} product={product} onChange={onChange} checkedList={checkedList}/>
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #FFF5E9; 
  margin-top: 1.5rem;
`
const FundingTitle = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  gap: 2.19rem;
  align-items: center;
  margin: 4rem 0;
`

const ImageWrapper = styled.div`
  width: 10rem;
  height: 7.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`

const FundingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.06rem;
`

const TownCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p, svg {
    color: #A2A2A2;
  }
`

const TownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 4rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.78125rem;
  background: #FF9C2F;
`

const Title = styled.div`
  p{
    color: #2A2A2A;
    font-size: 1.75rem;
    font-weight: 700;
  }
`
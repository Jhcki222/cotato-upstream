import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function OneCartItem({product, product: {id, name, subname, type, weight, price, quantity, image}, onChange, checkedList}) {
  const [quantityNum, setQuantityNum] = useState(quantity)  
  const [checked, setChecked] = useState(false)

  const handleQuantity = (num) => {
    setQuantityNum((prev) => prev+num < 1 ? 1 : prev+num)
  }

  const handleCheckbox = ({target}) => {
    setChecked(!checked)
    onChange(target.checked, id, quantityNum)
  }

  return (
    <CardWrapper>
      <input 
        type="checkbox" 
        id="buy" 
        name="buy" 
        color={`var(--main-color)`}
        onChange={(e) => handleCheckbox(e)}
        checked = {checked}
      />  
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <Description>
        <Title>
          <h2>{name}</h2>
          <p># {subname}</p>
        </Title>
        <Detail>
          <div>
            <p>품 명</p>
            <p>{type}</p>
          </div>
          <div>
            <p>무 게</p>
            <p>{weight}kg</p>
          </div>
          <div>
            <p>가 격</p>
            <p>{price.toLocaleString()}원</p>
          </div>
        </Detail>
      </Description>
      <DashedLine/>
      <QuantityAndPrice>
        <QuantityBox>
          <div>
            <p>수량</p>
          </div>
          <QuantityControl>
            <FaMinus onClick={() =>handleQuantity(-1)} />
            <p>{quantityNum}</p>
            <FaPlus onClick={() =>handleQuantity(1)} />
          </QuantityControl>
        </QuantityBox>
        <DashedLine />
        <Price>
            <p>상품금액</p>
            <p>{(quantityNum*price).toLocaleString()}원</p>
          </Price>
      </QuantityAndPrice>

    </CardWrapper>
  )
}


const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 70rem;
  height: 17rem;
  max-height: 18rem;
  border-radius: 1.25rem;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.20);
  margin-bottom: 1.8rem;

  input {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    border-radius: 5px;
    accent-color: #FF4256;
    margin: 0 1.5rem;
  }
`

const ImageWrapper = styled.div`
  width: 18rem;
  height: 13rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.87rem;
  margin: 0 2.5rem;
  flex-shrink: 0;
`

const Title = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 600;
  align-items: center;

  h2{
    font-size: 1.75rem;
  }

  p{
    font-size: 1.25rem;
    color: #FF9C2F;
  }
`

const Detail = styled.div`
  font-size: 1.25rem;

  div{
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.62rem;

    p:first-child {
      font-weight: 600;
    }
  }
`

const QuantityAndPrice = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0 2.5rem;

  div{
    display: flex;
    gap: 1rem;
    font-size: 1.25rem;

    p:first-child {
      font-weight: 600;
    }
  } 
  @media screen and (max-width: 1023px) {
    p:first-child{
      display: none;
    }
  }
`

const QuantityControl = styled.div`
  display: flex;
  min-width: 7.125rem;
  height: 2.1875rem;
  padding: 0.5rem;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  border-radius: 5.25rem;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  
  svg {
    cursor: pointer;
    stroke-width: 2px;
  }
  
  p{
    color: #2C2C2C;
    font-weight: 500;
    font-size: 1.25rem;
  }

`


const Price = styled.div`
  display: flex;
  flex-direction: column;
  color: #2A2A2A;
  letter-spacing: 0.03rem;
  text-align: center;
  margin: 0 4rem;
  p:first-child {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.56rem;
  }
  p:last-child {
    font-size: 1.75rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1023px) {
    p:first-child{
      display: none;
    }
  }
`

const DashedLine = styled.div`
  width: 5px;
  height: 100%;
  border-right: 2px dashed #EDEDED; 
  @media screen and (max-width: 1023px) {
    display: none;
  }
`
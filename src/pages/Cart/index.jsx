import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import CardList from '../../components/Cart/CartList'
import { IoCloseOutline } from "react-icons/io5";
import useCart from '../../hooks/useCart';
import Items from '../Buying/Items';
import { useNavigate } from 'react-router-dom';



export default function Cart() {
  const navigate = useNavigate()
  const {getCarts: {data: cartList}} = useCart()
  const [checkedList, setCheckedList] = useState(new Set())

  // const handleOnCheckedAll = useCallback((checked) => { 
  //   if(checked) {
  //     const checkListArr = []
  //     cartList.forEach((list) => list.forEach((product) => checkListArr.push(product.id)))
  //     setCheckedList(checkListArr)
  //   }else{
  //     setCheckedList([])
  //   }
  // },[cartList])

  const handleOnCheckedEach = useCallback((isChecked, id, quantity) => {
    if(!isChecked) {
      checkedList.add(id)
      setCheckedList(checkedList)
    }else if(isChecked && checkedList.has(id)){
      checkedList.delete(id)
      setCheckedList(checkedList)
    }
  },[cartList])


  const getTotalPrice = () => {
    let total = 0
    cartList && cartList.map((list) => {
      (list.products).map(({quantity, price}) => {
        console.log("quantity, price", quantity, price)
        total+=quantity*price
      })
    })
    return total
  }

  let totalPrice = useMemo(() => getTotalPrice(), [cartList])

  return (
    <>
      <Wrapper>
        <Header>
          <p>담은 목록</p>
        </Header>
        <CheckAndDelete>
          <CheckAll>
            <input 
              type="checkbox" 
              id="buy" 
              name="buy" 
              color={`var(--main-color)`}
              // onChange={(e) => handleOnCheckedAll(e.target.checked)}
              // checked = {
              //   checkedList.length === 0 ? false : checkedList.length === cartList.length ? true : false
              // }
            />  
            <p>전체 선택</p>
          </CheckAll>
          <DeleteChecked>
            <IoCloseOutline />
            <p>선택 삭제</p>
          </DeleteChecked>
        </CheckAndDelete>
        {
          cartList && cartList.map((item) => (
            <CardList key={item.region} item={item} onChange = {handleOnCheckedEach} checkedList={checkedList}/>
          ))
        }
        {/* <RecommendListWrapper>
          <p>이런 상품은 어때요?</p>
          <Items />
        </RecommendListWrapper> */}
      </Wrapper>
      <FinalContainer>
        <FinalWrapper>
          <PriceBox>
            <div>
              <p>최종 구매 금액</p>
              <p>{totalPrice.toLocaleString()}</p>
            </div>
            <SolidLine/>
            <div>
              <p>배송비</p>
              <p>무료</p>
            </div>
          </PriceBox>
          <GoToPayButton onClick={() => {navigate('/payment', {state: totalPrice})}}>구매하기</GoToPayButton>
        </FinalWrapper>

      </FinalContainer>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  display : flex;
  flex-direction: column;
  position : relative;

`

const Header = styled.div`
  
  display : flex;
  flex-direction: column;
  text-align : center;
  align-items: center;
  height : 120px;
  width : 780px;
  position : relative;
  margin-top : 0px;
  
  p{
    
    margin-top:40px;
    top:70%;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`
const CheckAndDelete = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;

`

const CheckAll = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 500;

  input {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 5px;
    accent-color: #FF4256;
  }
`

const DeleteChecked = styled.button`
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
    width: 1.375rem;
    height: 1.375rem;
    flex-shrink: 0;
  }
`

const RecommendListWrapper = styled.div`
  width: 100%;
  max-width: 70rem;

  p {
    font-size: 1.75rem;
    font-weight: 700;
    text-align: left;
    margin: 5.62rem 0 2.44rem 0;
  }
`

const FinalContainer = styled.div`
  width: 100%;
  height: 11rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px -2px 10px 1px #dfdfdf;
`

const FinalWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`

const PriceBox = styled.div`
  min-width: 33rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;

  gap: 3rem;
  border-radius: 0.9375rem;
  border: 1px solid #DFDFDF;
  padding: 1.25rem 3.37rem;

  div:first-child{
    flex-grow: 3;
  }
  div:lst-child{
    flex-grow: 1;
  }
  div{
    display: flex;
    gap: 1rem;
    justify-content: center;
    p{
      font-size: 1.2rem;
    }
    p:last-child {
      font-weight: 700;
    }
  }
`

const GoToPayButton = styled.button`
  width: 29rem;
  height: 100%;
  background-color: var(--main-color);
  color: white;
  font-size: 1.375rem;
  font-weight: 800;
  border-radius: 0.9375rem;

`

const SolidLine = styled.div`
  width: 5px;
  height: 1.5rem;;
  border-right: 2px solid #EDEDED; 
`
// 찜목록 없을때 페이지
import React from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function EmptyCart() {
    return (
    <Wrapper>
        <Header>
        <a>장바구니</a>
        </Header>
        <HeadLine></HeadLine>
      <EmptyCartList>
            <a>장바구니가 비었습니다.</a>
          </EmptyCartList>
    </Wrapper>
  );
}



const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    margin : 0px auto;
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
  
  a{
    
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

const HeadLine = styled.div`
  
display: flex;
flex-direction: column;
height: 3px;
width: 100%;
position: relative;
background-color: #dfdfdf;
`
const WishListWrapper = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 2px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  background-color: #DFDFDF;
`

const EmptyCartList = styled.div`
  
  display : flex;
  flex-direction: column;
  text-align : center;
  align-items: center;
  color: #686868;
  margin-top : 15%;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px; 


`



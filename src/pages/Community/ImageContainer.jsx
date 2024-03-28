import React from 'react';
import styled from 'styled-components';

export default function ImageContainer({img, keyword}) {
    return (
        <ImgContainer>
            <div>
            <img
            src={img}>
            </img> 
            <BottomTitle>
                {keyword.map((word) =>{return <button>{word}</button>;})}
            </BottomTitle>
            </div>
        </ImgContainer>
    );
}


const ImgContainer = styled.div`
position: relative;
justify-content: center; 
align-items: center; 
align-self: flex-end;
gap: 10px; 
width: 350px;
margin-bottom: 3%;
img{
  width: 350px;
  height: 350px;
  border-radius: 1rem 1rem 0 0;
  margin-top: 80px;
  margin-right : 47px;
}
`

const BottomTitle = styled.div`
position: absolute;
display: flex;
gap: 20px;
text-align: center;
justify-content: center; 
align-items: center; 
width: 350px;
height: 100px;
flex-shrink: 0;
border-radius: 0px 0px 1rem 1rem;
background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
color: #FFFFFF; 
font-family: Pretendard;
font-size: 18px;
font-style: normal;
letter-spacing: 0.36px;
bottom: 0;
left: 0px;
`
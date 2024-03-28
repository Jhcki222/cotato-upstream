import React from 'react';
import styled from 'styled-components';

const dummyData = {"word": ["", ""], "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0"};

export default function ImageContainer({keyword = dummyData, ingredient= null}) {
    return (
        <ImgContainer>
            <div>
            <img
            src={keyword.img}>
            </img> 
            <BottomTitle>
                {keyword.word.map((word) =>{return <button key={word}>{word}</button>;})}
            </BottomTitle>
            </div>
        </ImgContainer>
    );
}


const ImgContainer = styled.div`
box-sizing: border-box;
position: relative;
width: 350px;
margin-bottom: 3rem;
img{
  width: 350px;
  height: 350px;
  border-radius: 1rem;
  margin-top: 80px;
  margin-right : 47px;
  cursor: pointer;
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
cursor: pointer;
`
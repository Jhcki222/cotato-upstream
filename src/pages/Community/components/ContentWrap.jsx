import React, { useState } from 'react';
import styled from 'styled-components';
import Image01 from '../imgs/img1.png'
import Image02 from '../imgs/img2.png'
import Image03 from '../imgs/img3.png'
import { useNavigate } from 'react-router-dom';
import ImageContainer from './ImageContainer';


export default function ContentWrap({color = '#FFFFFF', more= true, data, data: {theme, Keyword1, Keyword2, Keyword3}}) {
    const navigate = useNavigate(); //나중에 data에 url까지 포함하여 navigate()에 전달
    return (
        <div>
            <Wrap color={color}>
                <ContainerText>
                    <h1>{theme}</h1>
                    {more ? <button>더보기 {'>'}</button> : ""}
                </ContainerText>
                <Container>
                <div onClick={() => { navigate(Keyword1?.url); }}>
                <ImageContainer keyword={Keyword1}/>
                </div>
                <div onClick={() => { navigate(Keyword2?.url); }}>
                <ImageContainer keyword={Keyword2}/>
                </div>
                <div onClick={() => { navigate(Keyword3?.url); }}>
                <ImageContainer keyword={Keyword3}/>
                </div>
                </Container>
            </Wrap>
        </div>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 500px;
    background-color: ${(props) => props.color};
    display: flex;
    flex-direction: column;
    min-width: 1300px;
    max-width: 120rem;
    justify-content: center;
    align-items: center;
    
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    align-items: center;
    position: relative;
    h1{
        font-weight: bold;
        font-size: 22px;
        position: relative;
    }
    button{
        position: absolute;
        left: 30rem;
        width: 5rem;
        align-self: flex-end;
    }
`

const Container = styled.div`
    width: 1280px;
    height: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

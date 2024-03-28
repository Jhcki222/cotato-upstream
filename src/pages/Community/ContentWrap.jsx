import React, { useState } from 'react';
import styled from 'styled-components';
import Image01 from './imgs/img1.png'
import Image02 from './imgs/img2.png'
import Image03 from './imgs/img3.png'
import ImageContainer from './ImageContainer';


export default function ContentWrap({color = '#FFFFFF', data}) {

    const [Keyword1, SetKeyword1] = useState(["#여름", "#가벼운"]);
    const [Keyword2, SetKeyword2] = useState(["#여름", "#소화가 잘 되는"]);
    const [Keyword3, SetKeyword3] = useState(["#여름", "#디저트"]);

    return (
        <div>
            <Wrap color={color}>
                <ContainerText>
                    <h1>여름 테마</h1>
                    <button>더보기 {'>'}</button>
                </ContainerText>
                <Container>
                <ImageContainer img={Image01} keyword={Keyword1} />
                <ImageContainer img={Image02} keyword={Keyword2} />
                <ImageContainer img={Image03} keyword={Keyword3} />
                </Container>
            </Wrap>
        </div>
    );
}

const Wrap = styled.div`
    width: 1200px;
    height: 500px;
    background-color: ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

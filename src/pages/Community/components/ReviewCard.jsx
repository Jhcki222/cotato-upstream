import React from 'react';
import styled from 'styled-components';

export default function ReviewCard( {review} ) {
    return (
        <div>
            <Wrap>
                <ReviewInfo>
                    <ProfileImage>
                        <img src={review ? review.profilePhoto : null} alt='profile' />
                    </ProfileImage>
                    <NameAndDate>
                        <h2><b style={{fontWeight:"bolder"}}>{review ? review.id : null}</b> 님</h2>
                        <h3>{review ? review.date : null} 작성됨</h3>
                    </NameAndDate>
                </ReviewInfo>
                <ReviewContent>
                    <article>{review ? review.content : null}</article>
                </ReviewContent>
            </Wrap>
        </div>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 536px;
    height: 384px;
    border: solid 1px #DFDFDF;
    border-radius: 1rem;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.07);
`

const ReviewInfo = styled.div`
    display: flex;
    height: 40px;
    padding: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    align-items: center;
`

const ProfileImage = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 100%;
    border: transparent 0px #DADADA;
    margin: 0.5rem;
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

const NameAndDate = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 1rem;
        margin-bottom: 0.1rem;
        color: #222222;
    }
    h3 {
        font-size: 1rem;
        color: #939393;
    }
`

const ReviewContent = styled.div`
    padding: 1rem;
    padding-top: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    line-height: 120%;
    article {
        white-space: pre-wrap;
        color: #484848;
    }
`
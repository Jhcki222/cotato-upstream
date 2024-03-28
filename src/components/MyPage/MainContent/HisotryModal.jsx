import React, { useState } from 'react'
import styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import RateStar from '../MainContent/Review/RateStar'

export default function HistoryModal({setModalOpen}) {
  const [review, setReview] = useState({})

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setReview({...review, [name]: value})
  }

  const TagItemArr = [
    {id: 0, 'text': '퀄리티가 좋다'},
    {id: 1, 'text': '배송이 빨랐다'},
    {id: 2, 'text': '의미가 있다'},
    {id: 3, 'text': '해당 없다'}
  ]

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <p>농작물 후기를 써주세요</p>
          <IoIosClose fontSize={'2rem'} onClick={(open) => setModalOpen(!open)}/>
        </Header>
        <TitleInput 
          name='title' 
          value={review && review.title} 
          placeholder='후기 제목을 작성해주세요'
          onChange={handleOnChange}>
        </TitleInput>
        <MainContent>
          <Wrapper>
            <p>마을 농작물 만족도</p>
            <p>별점을 주세요.</p>
            <RateStar/>
          </Wrapper>
          <Wrapper>
            <p>어떤 점이 좋았나요?</p>
            <p>마을 농작물 후원한 후기를 선택해주세요</p> 
            <TagWrapper>
              {TagItemArr.map((item, i) => (
                <TagItem key={i}>{item.text}</TagItem>
              ))}
            </TagWrapper>
          </Wrapper>
          <Wrapper>
            <p>상세 후기를 알려주세요</p>
            <p>마을 사람들과 후원자에게 모두 큰 도움이 될 거에요~!</p>
            <DetailWrapper>
              <div>사진 업로드</div>
              <DetailTextarea placeholder='후기를 작성해주세요'></DetailTextarea>
            </DetailWrapper>
          </Wrapper>
          <UploadButtonWrapper>
            <UploadButton>후기 올리기</UploadButton>
          </UploadButtonWrapper>
        </MainContent>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`

const ModalContainer = styled.div`
  width: 40%;
  height: 85%;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: white;
  border-radius: 1.25rem;
  padding: 2rem;
  color: #2A2A2A;

`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  p{
    font-size: 1.5rem;
    font-weight: 600;
  }
`

const TitleInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #DFDFDF;
  border-radius: 1rem;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1rem;
`

const Wrapper = styled.div`
  text-align: center;
  margin: 1rem 0;

  p:first-child {
    font-size: 1.375rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  p:last-child {
    color: #686868;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`

const TagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.75rem;
`

const TagItem = styled.div`
  padding: 0.75rem 1.45rem;
  font-weight: 500;
  border: 1px solid #DFDFDF;
  border-radius:1.5rem;
`
const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  & > div{
    border: 1px solid #DFDFDF;
    padding: 2rem;
    border-radius: 1rem;
  }
`

const DetailTextarea = styled.textarea`
  width: 75%;
  border-radius: 1rem;
  border: 1px solid #DFDFDF;
  padding: 1.5rem;
`

const UploadButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const UploadButton = styled.button`
  border-radius: 1.2rem;
  background-color: #FF4256;
  color: white;
  padding: 0.69rem 1.3rem;
`
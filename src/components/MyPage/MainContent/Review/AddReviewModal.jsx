import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import { BsCameraFill } from "react-icons/bs";
import OnePreviewImgBox from './OnePreviewImgBox';
import { PiStarFill } from "react-icons/pi";

export default function AddReviewModal({setModalOpen, title}) {
  const [star, setStar] = useState(0)
  const [checkedTags, setCheckedTags]= useState([false, false, false, false])
  const [images, setImages] = useState({});
  const [textarea, setTextarea] = useState('')

  const [imgCount, setImgCount] = useState(0)
  const imgInputRef = useRef()


  const handleStarRate = (i) => {
    setStar(i+1)
  }

  const handleTagItem = (e) => {
    const {value} = e.target
    setCheckedTags((checks) => checks.map((c, i) =>( i.toString() === value ? !c : c)))
    console.log("value", value)
    console.log(checkedTags)
  }

  const handleUploadImg = (e) => {
    const {files} = e.target

    for(const [key, value] of Object.entries(files)) {
      console.log(value)
      setImages((images) => ({...images, [value.name] : value}))
    }
    console.log("imags", images)
    return;

  }

  const handleTextarea = (e) => {
    setTextarea(e.target.value)
  }


  const removeImg = (imgName) => {
    delete images[imgName]
    setImages({...images})
  }

  const imgCountFunc = () => {
    let temp = Object.keys(images).length
    setImgCount(temp)
  }

  useEffect(() => {
    imgCountFunc()
  },[images])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()

    formData.append("files", images)
    formData.append("star", JSON.stringify(star))
    formData.append("tag", JSON.stringify(checkedTags))
    formData.append("text", JSON.stringify(textarea))

    // addReview 함수 호출
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
        <ReviewTitle>
          <p>{title}</p>
        </ReviewTitle>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <RowWrapper>
            <Wrapper>
              <div>
                <p>농작물 만족도</p>
                <p>별점을 주세요.</p>
              </div>
              <RateStarWrapper>
                {[...Array(parseInt(5))].map((n, i) => {
                    return <PiStarFill onClick={() => handleStarRate(i)} fill={i < star ? '#FAE846' : '#dfdfdf'}/>
                })}
              </RateStarWrapper>

            </Wrapper>
            <Wrapper>
              <div>
                <p>어떤 점이 좋았나요?</p>
                <p>마을 농작물 후원한 후기를 선택해주세요</p> 
              </div>
              <TagWrapper>
                {TagItemArr.map(({id, text}, idx) => (
                  <CheckBoxWrapper key={text}>
                    <CheckBoxInput type='checkbox' value={id} name="tag" onChange={handleTagItem} checked={checkedTags[idx]}/>
                    <CheckBoxText>{text}</CheckBoxText>
                  </CheckBoxWrapper>
                ))}
              </TagWrapper>
            </Wrapper>

          </RowWrapper>
          <Wrapper>
            <div>
              <p>상세 후기를 알려주세요</p>
              <p>마을 사람들과 후원자에게 모두 큰 도움이 될 거에요~!</p>
            </div>

            <UploadImgContainer>
              <UploadImageButton id='file'>
                <input ref={imgInputRef} name='file' id='file' type='file'accept='image/*' onChange={handleUploadImg} multiple/>
                <BsCameraFill fontSize={'3.7rem'} color='#686868'/>
                <p>{`${imgCount}/5`}</p>
              </UploadImageButton>
              <ImgPreviewList>
                  {images && Object.keys(images).map((name, idx) => (
                    <OnePreviewImgBox file={images[name]} imgName={name} removeImg={removeImg}/>
                  ))}
              </ImgPreviewList>              
            </UploadImgContainer>
            <DetailTextarea placeholder='후기를 작성해주세요' value={textarea ?? ""} onChange={handleTextarea}></DetailTextarea>
          </Wrapper>
          <UploadButtonWrapper>
            <UploadButton>후기 올리기</UploadButton>
          </UploadButtonWrapper>
        </FormContainer>

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
  min-height: 54.4375rem;
  background-color: rgba(0,0,0,0.5);
`

const ModalContainer = styled.div`
  width: 40%;
  min-width: 46.5rem;
  max-height: 55rem;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  border-radius: 1.25rem;
  padding: 2rem;
  color: #2A2A2A;
  overflow: auto;
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

  svg {
    cursor: pointer;
  }
`

const ReviewTitle = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 0.9375rem;
  border: 1px solid #DFDFDF;
  font-size: 0.875rem;
  font-weight: 700;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1rem;
`

const RowWrapper = styled.div`
  display: flex;
  gap: 5.75rem;
  justify-content: center;
`

const Wrapper = styled.div`
  text-align: center;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  p:first-child {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  p:last-child {
    color: #686868;
    font-weight: 400;
    font-size: 0.9375rem;
  }
`

const RateStarWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 3rem;

  svg{
    width: 2.5rem;
    height: 2.5rem;
  }
`


const TagWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-top: 1.5rem;
  gap: 1rem;
`

const CheckBoxWrapper = styled.div`
  min-width: fit-content;
  min-width: 8.1875rem;
  height: 2.1875rem;
  font-weight: 500;
  display: flex;
  position: relative;

`

const CheckBoxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  appearance: none;
  -webkit-appearance: none;

  &:checked~p {
    border: 1.5px solid #FF4256;
    background: rgba(255, 66, 86, 0.13);
    color: #FF4256;
    font-weight: 500;
  }
`

const CheckBoxText = styled.p`
  width: 100%;    
  height: 100%;
  padding: 0.56rem 1.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2A2A2A;
  border: 1px solid #DFDFDF;
  border-radius:1.5rem;

`


const UploadImgContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1.5rem 0;
`

const UploadImageButton = styled.label`
  width: 8.7rem;
  min-width: 8.7rem;
  height: 8.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  border: 1px solid #DFDFDF;
  border-radius: 1rem;
  margin-right: 0.63rem;
  cursor: pointer;

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}
`

const DetailTextarea = styled.textarea`
  width: 100%;
  flex-grow: 1;
  min-height: 8.7rem;
  border-radius: 1rem;
  border: 1px solid #DFDFDF;
  padding: 1.5rem;
  resize: none;
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

const ImgPreviewList = styled.div`
  display: flex;
  flex-grow: 1 0 auto;
  gap: 0.63rem;
  overflow-x: auto;
`


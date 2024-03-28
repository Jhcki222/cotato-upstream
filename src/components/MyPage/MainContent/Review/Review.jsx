import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OneReviewItem from './OneReviewItem'
import axios from 'axios'
import AddReviewModal from './AddReviewModal'

export default function Review() {
  const [reviewList, setReviewList] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('')

  const getReviewList = async () => {
    try {
      const {data} = await axios.get('/data/MyPage/review_list.json')
      return data
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getReviewList()
    .then((res) => {
      setReviewList(res)
    })
  },[])


  return (
    <>
      <Container>
        <p>제철과일 후기</p>
        <Line/>
        <ReviewWrapper>
          {reviewList && reviewList.map((review, i) => (
            <>
              <OneReviewItem key={i} review={review} setModalOpen={setModalOpen} setTitle={setTitle}/>
              {i < (reviewList.length-1) && <hr />}
            </>
          ))}
        </ReviewWrapper>
      </Container>
      {modalOpen && <AddReviewModal setModalOpen={setModalOpen} title={title}/>}
    </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    font-size: 1.5625rem;
    font-weight: 600;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #DFDFDF;
  margin-top: 2.8rem;
  margin-bottom: 1rem;
`

const ReviewWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #DFDFDF;
  height: fit-content;
`
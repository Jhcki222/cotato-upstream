//후원내역조회
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OneReviewItem from './Review/OneReviewItem'
import axios from 'axios'
import HistoryModal from './HisotryModal'
import Image1 from "../../../assets/imgs/CartApple.png";



export default function History() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showEmptyWish, setShowEmptyWish] = useState(false); // 빈 찜목록 페이지 표시 여부
  const [filter, setFilter] = useState('진행중'); // 초기 필터: 진행중
  const [selectedPeriod, setSelectedPeriod] = useState('오늘'); // 기간 선택 버튼
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  }; //조회 기간 변경 핸들러
  
  
  const [reviewList, setReviewList] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

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

  const [purchaseCount, setPurchaseCount] = useState(0); // 구매내역 개수
const [cancelCount, setCancelCount] = useState(0); // 취소/교환/반품 개수

  

  const filteredItems = wishlistItems.filter((item) => {
    if (filter === '구매내역') {
      // 구매내역 페이지
      return item.status === '구매내역';
    } else if (filter === '취소/교환/반품') {
      // 취소내역 페이지
      return item.status === '취소/교환/반품';
    }
    return true; // 다른 경우 모두 보기
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Wrapper>
      <Header>
        <a>구매/배송 내역 조회</a>
      </Header>
      <HeadLine></HeadLine>

      {/* WishButton 컴포넌트를 렌더링하고 버튼 클릭 시 필터를 변경 */}
      <HistoryButton>
    <Button1 
      active={filter === '구매내역'} 
      onClick={() => handleFilterChange('구매내역')}
      borderRadius="15px 0px 0px 15px"
    >
      구매내역 조회 ({purchaseCount}건)
    </Button1>
    <Button1 
      active={filter === '취소/교환/반품'} 
      onClick={() => handleFilterChange('취소/교환/반품')}
      borderRadius="0px 15px 15px 0px"
    >
      취소/교환/반품 내역 ({cancelCount}건)
    </Button1>
  </HistoryButton>
    <InqueryWrapper>
    
        <ButtonGroup>
        <b>조회 기간</b>{['오늘', '1개월', '3개월', '6개월', '기간설정'].map((period) => (
            <Button2
              key={period}
              active={selectedPeriod === period}
              onClick={() => handlePeriodChange(period)}
            >
              {period}
            </Button2>
          ))}
        </ButtonGroup>
    </InqueryWrapper>

      {showEmptyWish ? (
        <EmptyWish />
      ) : (
        <HistoryWrapper>
          {reviewList && reviewList.map((review, i) => (
            <OneReviewItem key={i} review={review} setModalOpen={setModalOpen}/>
          ))}
          <hr/>
        </HistoryWrapper>
      )}
      {modalOpen && <HistoryModal setModalOpen={setModalOpen} />}
    </Wrapper>
  );
}



const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 120px;
  width: 780px;
  position: relative;
  margin-top: 0px;

  a {
    margin-top: 40px;
    top: 70%;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 3px;
  width: 100%;
  position: relative;
  background-color: #dfdfdf;
`;

const InqueryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 100%;
`;



const HistoryWrapper = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #DFDFDF;
  height: fit-content;
`

const HistoryButton = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
  flex-direction : row;
  margin-top: 20px;
  background-color: ${(props) => (props.active ? '#ccc' : '#fff')}; /* 눌린 버튼은 회색, 아닌 버튼은 하얀색 */
`;

const Button1 = styled.button`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 51px;
  flex-shrink: 0;
  border: 1px solid #DFDFDF;
  cursor: pointer;
  background: ${(props) => (props.active ? '#ccc' : '#fff')};
  border-radius: ${(props) => props.borderRadius};
  &:focus {
    outline: none; // 버튼 포커스 시 아웃라인 제거
  }
`;

const Button2 = styled.button`
  width: 116.806px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 25.5px;
  border: 1px solid #DFDFDF;
  margin-right: 20px; // 버튼 간격 조절
  margin-top : 10px;
  padding: 0 15px; // 좌우 패딩
  cursor: pointer;
  background: ${(props) => (props.active ? '#ccc' : '#fff')};
  &:focus {
    outline: none; // 버튼 포커스 시 아웃라인 제거
  }
  &:last-child {
    margin-right: 0; // 마지막 버튼의 경우 우측 마진 제거
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
  align-items : center;
  b{

    margin-top : 9px;
    margin-right : 25px;
  }
`;
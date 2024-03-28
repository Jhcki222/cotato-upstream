import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

import TruckIcon from "../../assets/imgs/Mypage/InitMypageBtn/truck.png";
import HeartIcon from "../../assets/imgs/Mypage/InitMypageBtn/heart.png";
import CartIcon from "../../assets/imgs/Mypage/InitMypageBtn/cart.png";
import FeedBackIcon from "../../assets/imgs/Mypage/InitMypageBtn/feedback.png";
import QuestionIcon from "../../assets/imgs/Mypage/InitMypageBtn/question_circle.png";
import ChatBubbleIcon from "../../assets/imgs/Mypage/InitMypageBtn/chat_bubble.png";
import BookMarkIcon from "../../assets/imgs/Mypage/InitMypageBtn/bookmark.png"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileBanner from "../../components/ProfileBanner";

export default function InitMypage() {
  const MyCropBtn = [
    { id: 0, text: "구매내역 조회", icon: TruckIcon },
    { id: 1, text: "찜한 목록", icon: HeartIcon },
    { id: 2, text: "제철과일 후기", icon: FeedBackIcon },
    { id: 3, text: "저장한 레시피", icon: BookMarkIcon },
  ];

  const CustomerCenterBtn = [
    { id: 4, text: "FAQ", icon: QuestionIcon },
    { id: 5, text: "1:1 문의", icon: ChatBubbleIcon },
  ];

  const navigate = useNavigate();

  const handleOnClick = (id, text) => {
    console.log(id);
    navigate("/mypage/detail", { state: { id: id, text: text } });
  };

  return (
    <>
    <ProfileBanner/>
      <Wrapper>
        <Container>
                  <p>나의 작물</p>
        <ButtonWrapper>
          {MyCropBtn.map(({ id, text, icon }) => (
            <ButtonItem key={id} onClick={() => handleOnClick(id, text)}>
              <div>
                <img key={id} src={icon} alt="mySvgImage" />
                {text}
              </div>
              <HiOutlineChevronRight />
            </ButtonItem>
          ))}
        </ButtonWrapper>

        <p>고객센터</p>
        <ButtonWrapper>
          {CustomerCenterBtn.map(({ id, text, icon }) => (
            <ButtonItem key={id} onClick={() => handleOnClick(id, text)}>
              <div>
                <img key={id} src={icon} alt="mySvgImage" />
                {text}
              </div>
              <HiOutlineChevronRight />
            </ButtonItem>
          ))}
        </ButtonWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const ProfileBox = styled.div`
  width: 100vw;
  height: 18.4rem;
  background-color: #fff5e9;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  p {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 5.75rem 0 1.31rem 0;
  }
`;

const Container = styled.div`
  width: 1400px;
  margin : 0px auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 4.25rem;
  grid-gap: 1rem;
  justify-items: center;
`;

const ButtonItem = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  border: 1px solid #dfdfdf;
  border-radius: 1rem;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  font-size: 1.125rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-shrink: 0;
  }
`;

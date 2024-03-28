//프로필 상단 배너
import React, { useEffect, useState } from 'react';

import styled from "styled-components";
import { LuChevronRight } from "react-icons/lu";
import ProfileImage from "../../assets/imgs/mypage_profile.png";
import CarrotImg from "../../assets/imgs/Carrot.png";
import PlantImg from "../../assets/imgs/growing_plant.png";
import SettingImg from "../../assets/imgs/setting_icon.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ProfileBanner() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    profileImage: ProfileImage,
    gradeImage: CarrotImg,
    gradeName: '작물지킴이',
    userName: '홍길동',
    co2Reduced: '0g',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await axios.get('your-api-endpoint');
        setUserData(response.data); // Assuming the response is an object with the same structure as userData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <BannerContainer>
      <Wrapper>
      <ProfileContainer>
        <ProfileWrapper>
          <ImageBox>
            <img src={userData.profileImage} alt="Profile" />
          </ImageBox>
          <TextBox>
            <GradeImage
              src={userData.gradeImage}
              onClick={() => {
                navigate(`/grading`);
              }}
              alt="Grade"
            />
            <c onClick={() => navigate(`/grading`)}>{userData.gradeName}</c>
            <a>
              {userData.userName}
              <b>님</b>
              <SetIcon
                src={SettingImg}
                onClick={() => {
                  navigate(`/mypage/profile/userInfo`);
                }}
                alt="Settings"
              ></SetIcon>
            </a>
          </TextBox>
        </ProfileWrapper>
        
        <RightContainer>
          <Plant src={PlantImg} alt="Plant" />
          <a>
            Co2를 <b>{userData.co2Reduced}</b>만큼 줄였어요!
            <LuChevronRight />
          </a>
          <FundingButton
            onClick={() => {
              navigate(`/funding`);
            }}
          >
            못난이 친구들 보러가기
          </FundingButton>
        </RightContainer>
      </ProfileContainer>
      </Wrapper>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 294px;
  width : auto;
  background-color: #fff5e9;
  min-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
width : 1900px;
justify-content: center;

`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 236px;
  width: 300px;
  position: relative;
  margin-top: 40px;
  margin-right: 40%;
  border-right: 2px solid #dfdfdf;
  background-color: #fff5e9;
`;

const RightContainer = styled.div`
  position: relative;
  margin-left: 500px;
  margin-top: -195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  width: 500px;
  text-align: center;
  a {
    color: #000;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.56px;
    margin-bottom: 30px;
  }
  b {
    color: #000;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.7px;
  }
  c {
    font-size: 35px;
    color: rgba(159, 159, 159, 1);
  }
  svg {
    position: relative;
    margin-left: 80%;
    transform: translate(0, -103%);
    font-size: 2rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 140px;
  margin-left: 35%;
  text-align: center;
`;

const SetIcon = styled.img`
  display: flex;
  position: relative;
  width: 19px;
  height: 19px;
  margin-left: 7.5rem;
  bottom: 2rem;
  cursor: pointer;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0px;
  height: 115px;
  width: 115px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0px;
  height: 100%;
  width: 100%;

  a {
    margin-right: 15px;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.6px;
  }
  b {
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  c {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 3px;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    cursor: pointer;
  }
`;

const GradeImage = styled.img`
  display: flex;
  position: relative;
  top: 23%;
  margin-left: 10px;
  flex-direction: column;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const Plant = styled.img`
  display: flex;
  position: relative;
  top: 40px;
  margin-top: 50px;
  margin-left: 55px;
  position: relative;
  width: 43px;
  height: 43px;
`;
const FundingButton = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 407px;
  height: 100x;
  border-radius: 17px;
  background: #ff6565;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  margin-left: 50px;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
  color: #fff;

  &:hover {
    background: #e89590;
  }
  &:active {
    background: #e89590;
  }
`;

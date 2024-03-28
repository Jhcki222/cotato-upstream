import styled from "styled-components";
import ProfileImage from "../../assets/imgs/mypage_profile.png";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <Wrapper>
      <Line />
      <ProfileImgArea>
        <h1>프로필 사진</h1>
        <img src={ProfileImage} />
        <Link to={`/mypage/profile/edit-profile`}>변경하기</Link>
      </ProfileImgArea>
      <Line />
      <Box>
        <h1>닉네임</h1>
        <h1>홍길동</h1>
        <Link to={`/mypage/profile/edit-profile`}>변경하기</Link>
      </Box>
      <Line />
      <Box>
        <h1>이메일</h1>
        <h1>OOOOOnaver.com</h1>
        <Link to={`/mypage/profile/edit-profile`}>변경하기</Link>
      </Box>
      <Line />
      <Box>
        <h1>연락처</h1>
        <h1>010-1234-5678</h1>
        <Link to={`/mypage/profile/edit-profile`}>변경하기</Link>
      </Box>
      <Line />
      <SmallBox>
        <h1>로그아웃</h1>
        <h1>패밀리탈퇴</h1>
      </SmallBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-left: 2.5rem;
  position: relative;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dfdfdf;
`;
const ProfileImgArea = styled.div`
  display: flex;
  align-items: center;
  width: 753px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 25px;
  margin-bottom: 25px;
  h1 {
    margin-right: 100px;
    font-weight: 600;
  }
  img {
    margin-right: 450px;
    width: 60px;
    height: 60px;
  }
  a {
    position: absolute;
    right: 0;
    border-radius: 0.94rem;
    border: 1px solid #ff4256;
    color: #ff4256;
    padding: 5px 11px;
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
  width: 753px;
  height: 26px;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 25px;

  h1:first-child {
    font-weight: 600;
    margin-right: 138px;
  }
  a {
    position: absolute;
    right: 0;
    border-radius: 0.94rem;
    border: 1px solid #ff4256;
    color: #ff4256;
    padding: 5px 11px;
    cursor: pointer;
  }
`;
const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 753px;
  height: 60px;
  margin-top: 30px;
  h1 {
    font-weight: 600;
  }
  h1:first-child {
    color: #ff4256;
  }
`;

export default UserInfo;

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import UserSideMenu from "./UserSideMenu";

const Profile = () => {
  return (
    <>
      <ProfileTitle>프로필 설정</ProfileTitle>
      <Wrapper>
        <UserSideMenu />
        <MainContent>
          <Outlet />
        </MainContent>
      </Wrapper>
    </>
  );
};

const ProfileTitle = styled.div`
  color: #2a2a2a;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
  margin-top: 20px;
  margin-bottom: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 3.6rem 11.25rem 0 11.25rem;
  box-sizing: border-box;
`;
const MainContent = styled.div`
  flex-grow: 4;
`;
export default Profile;

import React from "react";
import { LuChevronRight } from "react-icons/lu";
import { useLocation, useNavigate, useMatch } from "react-router-dom";
import styled from "styled-components";

const UserSideMenu = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const profileMenu = [
    { id: 0, path: "/mypage/profile/userInfo", menu: "내 정보" },
    { id: 1, path: "/mypage/profile/deliver", menu: "배송지" },
    { id: 2, path: "/mypage/profile/alert", menu: "알림" },
  ];

  return (
    <>
      <ProfileMenuWrapper>
        <MenuWrapper
          isEdit={currentPath.includes("edit-profile")}
          isUserInfo={currentPath === profileMenu[0].path}
        >
          {profileMenu.map(({ path, menu }) => (
            <MenuItem
              isActive={path === currentPath}
              onClick={() => {
                navigate(`${path}`);
              }}
            >
              {menu}
              <LuChevronRight />
            </MenuItem>
          ))}
        </MenuWrapper>
      </ProfileMenuWrapper>
    </>
  );
};

const ProfileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;
const MenuWrapper = styled.div`
  border-radius: 0.94rem;
  border: 1px solid #dfdfdf;
  height: fit-content;
  div:first-child {
    font-weight: ${props => (props.isEdit || props.isUserInfo ? 700 : 400)};
    color: ${props =>
      props.isEdit || props.isUserInfo
        ? `var(--main-color)`
        : `var(--font-color-1)`};
  }
`;
const MenuItem = styled.div`
  width: 259px;
  display: flex;
  padding: 1.25rem 1.8rem;
  justify-content: space-between;
  font-size: 1.0625rem;
  font-weight: ${props => (props.isActive ? 700 : 400)};
  color: ${props =>
    props.isActive ? `var(--main-color)` : `var(--font-color-1)`};
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  cursor: pointer;
`;
export default UserSideMenu;

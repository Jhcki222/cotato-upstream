import React, { useState } from 'react';
import { ReactComponent as Farmely } from '../../assets/imgs/Farmely2.svg';
import styled from 'styled-components';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import {
  NavLink,
  Link,
  useNavigate,
  useMatch,
  useLocation,
} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';
import axios from 'axios';

export default function Navbar() {
  const location = useLocation();
  const paymentStateExists = location.state && location.pathname === '/payment';
  const [isLogin, setIsLogin] = useRecoilState(UserLoginState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const introMatch = useMatch('/intro');
  const fundingMatch = useMatch('/funding');
  const communityMatch = useMatch('/community');
  const popupMatch = useMatch('/popup');
  const paymentMatch = useMatch('/payment');
  const navigate = useNavigate();
  const handleCart = () => {
    if (!isLogin) {
      alert('먼저 로그인 하세요');
    } else {
      navigate('/funding/buying');
    }
  };
  const handleLogout = async () => {
    const idReturn = await axios.post('https://kapi.kakao.com/v1/user/unlink');
    console.log('id Return', idReturn);
    // 백엔드주소로 logout요청
    setIsLogin(false);
    navigate('/');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Header>
        <Logo>
          <Link to="/">
            <Farmely />
          </Link>
        </Logo>
        <LoginBox>
          {!isLogin ? (
            <NavLink to="/login">로그인</NavLink>
          ) : (
            <NavLink to="/mypage">마이페이지</NavLink>
          )}
          <HiOutlineShoppingCart
            font-size="1.5rem"
            onClick={handleCart}
            className="icon-pointer"
          />
          {isLogin && (
            <FiLogOut onClick={handleLogout} className="icon-pointer" />
          )}
        </LoginBox>
      </Header>
      <Menu>
        <MenuIcon onClick={toggleMenu}>
          <HiOutlineMenu
            font-size="1.5rem"
            style={{ color: isMenuOpen ? 'orange' : '' }}
          />
          {isMenuOpen && (
            <HambergerMenu>
              <NavLink to="/intro">파밀리 소개</NavLink>
              <NavLink to="/funding">제철 못난이</NavLink>
              <NavLink to="/community">커뮤니티</NavLink>
              <NavLink to="/popup">파밀리 팝업</NavLink>
              <NavLink to="/popup" className="diff">
                구매내역 조회
              </NavLink>
              <NavLink to="/popup" className="diff">
                장바구니
              </NavLink>
              <NavLink to="/funding/buying" className="diff">
                찜한목록
              </NavLink>
              <NavLink to="/popup" className="diff">
                제철과일 후기
              </NavLink>
              <NavLink to="/popup" className="diff">
                고객센터
              </NavLink>
            </HambergerMenu>
          )}
        </MenuIcon>
        <NavLink to="/intro" style={{ color: introMatch ? '#ff4256' : '' }}>
          파밀리 소개
        </NavLink>
        {paymentMatch ? (
          paymentStateExists ? (
            <NavLink to="/funding" style={{ color: '#ff4256' }}>
              제철못난이
            </NavLink>
          ) : (
            <NavLink to="/payment" style={{ color: '#ff4256' }}>
              제철과일 구매
            </NavLink>
          )
        ) : (
          <NavLink
            to="/funding"
            style={{ color: fundingMatch ? '#ff4256' : '' }}
          >
            제철못난이
          </NavLink>
        )}
        <NavLink
          to="/community"
          style={{ color: communityMatch ? '#ff4256' : '' }}
        >
          커뮤니티
        </NavLink>
        <NavLink to="/popup" style={{ color: popupMatch ? '#ff4256' : '' }}>
          파밀리 팝업
        </NavLink>
      </Menu>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  height: 10rem;
  justify-content: center;
  gap: 3.2rem;
  overflow: hiddlen;
  margin-bottom: 28px;
  white-space: nowrap;
  a {
    color: #686868;
    text-decoration: none;
  }
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  a {
    font-weight: 500;
  }
`;
const Logo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const LoginBox = styled.div`
  display: flex;
  position: relative;
  gap: 1.5rem;
  left: 220px;
  justify-content: center;
  align-items: center;
  .icon-pointer {
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 80%;
  min-width: 1200px;
  max-width: 1800px;
  a {
    font-size: 1.25rem;
    font-weight: 500;
  }
  margin: 0 auto;
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;
const HambergerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 0px 0px 13px 13px;
  border: 1px solid #ff9c2f;
  bottom: -460px;
  z-index: 1000;
  a {
    width: 155px;
    background-color: #fff;
    padding: 14px 54px 14px 16px;
  }
  .diff {
    background-color: #ff9c2f;
    color: white;
  }
  a:hover {
    transform: scale(1.05);
    background-color: #ff9c2f;
    color: white;
  }
  a:last-child {
    border-radius: 0px 0px 13px 13px;
  }
`;
const MypageBox = styled.nav`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  left: 11rem;
  align-items: center a {
    font-weight: 500;
    color: #686868;
  }
`;

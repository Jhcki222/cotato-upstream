import React from 'react';
import styled from 'styled-components';
import LoginImg from '../../assets/imgs/login_bg.png';
import LoginLogo from '../../assets/imgs/Login/LoginLogo.png';
import { ReactComponent as LoginStartMsg } from '../../assets/imgs/login_start_msg.svg';
import KakaoImg from '../../assets/imgs/kakao_login.png';
import NaverImg from '../../assets/imgs/naver_login.png';

export default function Login() {
  const handleKakaoLogin = () => {
    // kakao login api 연결
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
    const config = {
      client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URL,
      response_type: 'code',
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;

    window.location.href = finalUrl;
  };

  const handleNaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URL;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${'test'}&response_type=code`;

    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <LoginContainer>
        <LoginBg />
        <Overlay />
        <LoginWrapper>
          <p>로그인</p>
          <img src={LoginLogo} />
          <LoginBtn>
            <LoginStartMsg />
            <SocialLogin onClick={handleKakaoLogin} socialImg={KakaoImg} />
            <SocialLogin onClick={handleNaverLogin} socialImg={NaverImg} />
          </LoginBtn>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  position: relative;
  height: calc(100vh - 10rem);
`;

const LoginBg = styled.div`
  background: no-repeat;
  background-size: 100vw;
  background-image: url(${LoginImg});
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(47, 23, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 4rem;
  color: white;
  font-size: 1.875rem;
  font-weight: 900;
  text-align: center;

  p {
    margin-bottom: 0.8rem;
  }
`;

const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2.6rem;
`;

const SocialLogin = styled.img.attrs((props) => ({
  src: props.socialImg,
}))`
  width: 25rem;
  height: 3.75rem;
  cursor: pointer;
  margin-bottom: 10px;
`;

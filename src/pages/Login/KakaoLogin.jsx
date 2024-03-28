import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';
import { axiosInstance } from '../../apis';
import { useMutation } from '@tanstack/react-query';
import { handleLogin, handleSilentRefresh } from '../../apis/Login';
import { checkAccessToken } from '../../apis/Login/index';

const getKakaoToken = async (client_id, redirect_uri, code) => {
  const baseUrl = 'https://kauth.kakao.com/oauth/token';
  const config = {
    grant_type: 'authorization_code',
    client_id,
    redirect_uri,
    code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const { data: tokenRequest } = await axios.post(finalUrl); // 카카오 토큰 발급

  /* (로그아웃시) 카카오 연결끊기 로직을 위한 임시 코드*/
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${tokenRequest.access_token}`;

  return tokenRequest;
};

const KakaoLogin = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(UserLoginState);
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const code = useSearchParams()[0].get('code');

  const onLoginSuccess = ({
    accessToken,
    refreshToken,
    accessTokenExpiration,
  }) => {
    axiosInstance.defaults.headers.common['Authorization'] = accessToken;
    setTimeout(() => {
      SlientRefresh(refreshToken);
    }, accessTokenExpiration - 60000);
  };
  const { mutate: SlientRefresh } = useMutation({
    mutationFn: handleSilentRefresh,
    onSuccess: (data) => {
      try {
        onLoginSuccess(data);
      } catch (err) {
        console.log('리프레쉬 토큰 -> 로그인 요청 실패');
      }
    },
    onError: (err) => {
      console.log('리프레쉬 토큰 요청 실패!', err);
    },
  });
  const { mutate: LoginUser } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      console.log('로그인 성공!');
      console.log('백엔드로 부터 받은 data', data);

      const {
        accessToken,
        refreshToken,
        accessTokenExpiration,
        refreshTokenExpiration,
      } = data;

      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;

      setTimeout(() => {
        try {
          SlientRefresh(refreshToken);
        } catch (err) {
          console.log('slient refresh 에러', err);
        }
      }, accessTokenExpiration - 60000);
    },
    onError: (err) => {
      console.log('로그인 요청 실패!', err);
    },
  });

  const getUserTotalInfo = async () => {
    const tokenRequest = await getKakaoToken(client_id, redirect_uri, code);

    const { data: userInfo } = await axios.get(
      `https://kapi.kakao.com/v2/user/me`,
      {
        headers: {
          Authorization: `Bearer ${tokenRequest.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    const { data: serviceInfo } = await axios.get(
      `https://kapi.kakao.com/v2/user/service_terms`,
      { headers: { Authorization: `Bearer ${tokenRequest.access_token}` } }
    );

    console.log('사용자 서비스 정보', serviceInfo);

    return {
      providerName: 'kakao',
      serviceUsingAgree: serviceInfo.service_terms
        ? serviceInfo.service_terms[0].agreed
          ? 'Y'
          : 'N'
        : 'N',
      personalInformationAgree: serviceInfo.service_terms
        ? serviceInfo.service_terms[2].agreed
          ? 'Y'
          : 'N'
        : 'N',
      marketingAgree: serviceInfo.service_terms
        ? serviceInfo.service_terms[1].agreed
          ? 'Y'
          : 'N'
        : 'N',
      access_token: tokenRequest.access_token,
    };
  };

  const checkAccessToken = async () => {
    const { data } = await axiosInstance.post('/api/v1/auth/login/accesstoken');
    console.log('accessToken 유효한지 확인', data);
  };

  useEffect(() => {
    const fetchUserInfoAndLogin = async () => {
      try {
        const {
          providerName,
          serviceUsingAgree,
          personalInformationAgree,
          marketingAgree,
          access_token,
        } = await getUserTotalInfo();

        LoginUser({
          providerName,
          serviceUsingAgree,
          personalInformationAgree,
          marketingAgree,
          access_token,
        });
        setIsLogin(true);
        navigate('/');
      } catch (err) {
        console.log('카카오 로그인 에러!!', err);
      }
    };

    fetchUserInfoAndLogin();
  }, []);

  return (
    <CenteredContainer>
      <Loader />
    </CenteredContainer>
  );
};

export default KakaoLogin;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Jump = keyframes`
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;
const Shadow = keyframes`
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`;
const Loader = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  position: relative;

  &:before {
    content: '';
    width: 120px;
    height: 10px;
    background: #f0808050;
    position: absolute;
    top: 140px;
    left: 0;
    border-radius: 50%;
    animation: ${Shadow} 0.5s linear infinite;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: ${Jump} 0.5s linear infinite;
  }
`;

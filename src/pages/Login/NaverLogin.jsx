import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function NaverLogin() {
  const navigate = useNavigate()
  const setIsLogin = useSetRecoilState(UserLoginState);
  

  const getNaverToken = async () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET
    const code = new URL(window.location.href).searchParams.get("code")
    const NAVER_TOKEN_URL = `/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}&state=${'test'}`

    const { data } = await axios.post(NAVER_TOKEN_URL);
    console.log(data);
    setIsLogin(true)
    navigate('/')
  }

  useEffect(() => {
    getNaverToken()
  },[])

  return (
    <div>NaverLogin</div>
  )
}

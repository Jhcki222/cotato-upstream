import axios from 'axios';
import { axiosInstance } from '..';

export const handleLogin = async (data) => {
  const { access_token, ...restOfTheObject } = data;

  return axiosInstance.post(`/api/v1/auth/register`, restOfTheObject, {
    headers: { Authorization: `Bearer ${access_token}` },
    withCredentials: true,
  });
};

export const handleSilentRefresh = async (refreshToken) => {
  return axiosInstance.post(
    '/api/v1/auth/renew',
    {},
    {
      headers: { Authorization: `Bearer ${refreshToken}` },
      withCredentials: true,
    }
  );
};

export const checkAccessToken = () => {
  return axiosInstance.post(`/api/v1/auth/login/accessToken`);
};

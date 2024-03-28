import { axiosInstance } from '..';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get(`/api/v1/user/profile`);
  return data;
};

export const postUserInfo = async () => {
  return axiosInstance.post();
};

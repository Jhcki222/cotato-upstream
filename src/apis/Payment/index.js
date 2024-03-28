import { axiosInstance } from '..';

export const fetchDeleteAddress = (addressId) => {
  return axiosInstance.delete(`/api/v1/addresses/${addressId}`);
};

export const fetchAddAddress = (address) => {
  return axiosInstance.post('/api/v1/addresses', { address });
};

export const fetchGetDefaultAddress = async () => {
  const { data } = await axiosInstance.get('/api/v1/addresses/default');
  return data;
};

export const fetchGetAllAddress = async () => {
  const { data } = await axiosInstance.get(`api/v1/address/all`);
  return data;
};

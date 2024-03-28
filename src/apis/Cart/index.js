import axios from "axios";
import { axiosInstance } from "..";

export const getAllCartList = async () => {
  // const { data } = await axiosInstance.get(`/api/v1/carts`);
  const {data} = await axios.get('/data/Cart/cart_list.json')
  return data;
}
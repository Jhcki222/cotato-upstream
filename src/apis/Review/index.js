import { axiosInstance } from "..";

export const addReview = async (formData) => {
   const {data} = await axiosInstance.post('/api/v1/', formData, {
    headers:{
      "Content-Type" : "multipart/form-data"
    }
  });
  return data
};

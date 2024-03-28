import React, { useState, useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import { CiCircleRemove } from 'react-icons/ci'
import CustomSelect from './CustomSelect'
import UploadPhoto from '../../assets/imgs/Group 64622.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function OneOnOnePosting({
  endEdit,
}
) {
    const Category = [{key: "All", value: "전체"},
                      {key: "Pay", value: "결제 문의"},
                      {key: "Shipping", value: "배송 문의"},
                      {key: "Cancel", value: "취소/반품/환불 문의"},
                      {key: "Other", value: "기타 문의"}];
                    
    
    const navigate = useNavigate();

    const [option, setOption] = useState(false);

    const [categoryIdx, setCategoryIdx] = useState(0);


    const [title, setTitle] = useState("");
    const [postContent, setPostContent] = useState("====================\n\n1. 주문번호\n\n\n2. 문의내용\n");

    const handleCancel = (e) => {
        e.preventDefault();
        endEdit();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const receiveSelectValue = (rcv) => {
        setCategoryIdx(Category.findIndex(v => v.value === rcv));
        setSelectValue(rcv);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handlePostChange = (e) => {
        setPostContent(e.target.value);
    }

    // 이미지 업로드 관련
    const [images, setImages] = useState([]);
    const [selectValue, setSelectValue] = useState('');
    const [previewImages, setPreviewImages] = useState([]);

    const handleImageChange = (e) => {
        const files = e.target.files;

    if (files.length + images.length > 5) {
      alert('You can upload up to 5 images.');
      return;
    }

    const newImages = [...images];
    const newPreviewImages = [...previewImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check file size (30MB limit)
      if (file.size > 30 * 1024 * 1024) {
        alert('File size exceeds the limit of 30MB.');
        continue;
      }

      const imageUrl = URL.createObjectURL(file);

      newImages.push(file);
      newPreviewImages.push(imageUrl);
    }

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    const newPreviewImages = [...previewImages];

    newImages.splice(index, 1);
    newPreviewImages.splice(index, 1);

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };
      
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      
      // Create a new FormData object
      const formData = new FormData();
      
      // Append each image to the formData
      images.forEach((image) => {
        formData.append('images', image);
      });
      
      // Append other form fields to the formData
      formData.append('title', title);
      formData.append('postContent', postContent);
      formData.append('selectValue', selectValue);
    /*
      try {
        // Make a POST request using Axios
        const response = await axios.post('your_api_endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        // Handle the response as needed
        console.log('Response:', response.data);
      } catch (error) {
        // Handle errors
        console.error('Error uploading images:', error);
      }*/
      
      endEdit();
    };
    //이미지 업로드 관련

    const clickWrapp = (event) => {
        if(!event.target.classList.contains('sel')){
            setOption(current => !current);
        }
      };

    useEffect(() => {
        document.addEventListener("click", clickWrapp);
    }, []);  
           
  return (
    <HelpContainer>
        <form onSubmit={handleFormSubmit}>
        <CategoryContainer>
            카테고리
            <div style={{display:'flex'}}>
                
                {/*
                <Select name='category'>
                    <option value="All">전체</option>
                    <option value="Pay">후원/결제 문의</option>
                    <option value="Shipping">배송 문의</option>
                    <option value="Cancel">취소/반품/환불 문의</option>
                    <option value="Other">기타 문의</option>
                </Select>*/
                }
                
                <CustomSelect optionData = {Category} sendValueFunction={receiveSelectValue} isShow={option} width='400px' />
                <Select name='DetailCategory'>
                    <option value="Detail">상세유형</option>
                </Select>
            </div>
        </CategoryContainer>
        <hr/>
        <CategoryContainer>
            <Label htmlFor = "title">제목</Label>
            <Input id='title' value={title} onChange={handleTitleChange}></Input>
        </CategoryContainer>
        <hr/>
        <InputContainer>
            내용
        <ContentBox>
        <PostInput 
        value={postContent}
        onChange={handlePostChange}
        ></PostInput>
        <PhotoContainer>
            <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            id="fileInput"
            onChange={handleImageChange}
        />
        <button type="button" onClick={handleUploadClick}>
            <img src={UploadPhoto} alt="Upload Button" style={{ width: '100px', height: '100px' }} />
        </button>
            {images.length<=0 && <PhotoText>
            · 30MB 이하의 이미지만 업로드 가능합니다.<br/>
            · 상품과 무관한 내용은 삭제 될 수 있습니다.<br/>
            · 사진은 최대 5장까지 등록 가능합니다.
            </PhotoText>}
            {previewImages.map((previewImage, index) => (
          <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }}>
            <img src={previewImage} alt={`preview-${index}`} style={{ width: '100px', height: '100px' }} />
            <button onClick={() => handleImageRemove(index)} style={{ position: 'absolute', top: 0, right: 0 }}>
              <CiCircleRemove/>
            </button>
          </div>
        ))}
        </PhotoContainer>
        </ContentBox>
        </InputContainer>
        <CancelButton onClick={handleCancel}>취소하기</CancelButton>
        <SubmitButton onClick={handleFormSubmit}>등록하기</SubmitButton>
        </form>
    </HelpContainer>
  )
}



const HelpContainer = styled.div`
    text-align: center;
    width: 1000px;
    padding: 5px;
`
const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5px;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 5px;
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 5px;
    
`

const PhotoContainer = styled.div`
    display: flex;
    padding: 15px 5px;
`

const PhotoText = styled.h2`
    display: flex;
    padding: 15px 10px;
    text-align: left;
    line-height: normal;
    color: gray;
`

const Select = styled.select`
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'%3E%3C/path%3E%3C/svg%3E") no-repeat 95% 50%;
    padding: 5px;
    margin: 5px;
    width: 390px;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const Label = styled.label`
`

const Input = styled.input`
    padding: 5px;
    margin: 5px;
    width: 800px;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const PostInput = styled.textarea`
padding: 5px;
height: 350px;
width: 800px;
border: solid 2px #DFDFDF;
border-radius: 10px;    
`

const SearchButton = styled.button`
    padding: 5px;
    width: 60px;
    border: solid 2px black;
    border-radius: 10px;
`

const PostContainer = styled.div`
    margin: 50px;
`

const PostButton = styled.button`
    margin: 20px;
    padding: 20px;
    padding-left:200px;
    padding-right:200px;
    border-radius: 15px;
    background-color: #FF4256;
    color:white;
    
`

const SubmitButton = styled.button`
    margin: 20px;
    padding: 20px;
    width: 400px;
    padding-left:100px;
    padding-right:100px;
    border-radius: 15px;
    background-color: #FF4256;
    color:white;
`

const CancelButton = styled.button`
    margin: 20px;
    padding: 20px;
    width: 400px;
    padding-left:100px;
    padding-right:100px;
    border-radius: 15px;
    border: 2px solid #676767;
    background-color: #ffffff;
    color:#676767;
`
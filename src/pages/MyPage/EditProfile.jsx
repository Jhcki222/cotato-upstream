import styled from 'styled-components';
import ProfileImage from '../../assets/imgs/mypage_profile.png';
import { ReactComponent as FileSelectBtn } from '../../assets/imgs/Mypage/EditProfile/FileSelectBtn.svg';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { getUserInfo, postUserInfo } from '../../apis/User';
const EditProfile = () => {
  const [imageSrc, setImageSrc] = useState('');
  const fileInputRef = useRef();
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
  const { mutate: editUserInfo } = useMutation({ mutationFn: postUserInfo });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '홍길동',
      userEmail: 'OOOOO@naver.com',
      userPhoneNumber: '010-1234-5678',
    },
  });
  const onValid = (data) => {
    //유효성 check과정 필요
    //editUserInfo(data로 부터 온값들 객체로 전달); // post요청
    console.log(data);
  };
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <Wrapper onSubmit={handleSubmit(onValid)}>
      <Line />
      <ProfileImgArea>
        <h1>프로필 사진</h1>
        <img src={imageSrc ? imageSrc : ProfileImage} />
        <FileSelectBtn onClick={handleCustomButtonClick} />
        <input
          type="file"
          {...register('userImage', { required: '사진을 선택하세요' })}
          ref={fileInputRef}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }}
          style={{ display: 'none' }}
        />
        <input type="submit" value="저장" />
      </ProfileImgArea>
      <Line />
      <Box>
        <h1>닉네임</h1>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          {...register('username', { required: '이름을 입력해주세요' })}
        />
        <span>{errors.username && errors.username.message}</span>
        <input type="submit" value="저장" />
      </Box>
      <Line />
      <Box>
        <h1>이메일</h1>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          {...register('userEmail', { required: '이메일을 입력해주세요' })}
        />
        <span>{errors.userEmail && errors.userEmail.message}</span>
        <input type="submit" value="인증메일 전송" />
      </Box>
      <Line />
      <Box>
        <h1>연락처</h1>
        <input
          type="text"
          placeholder="연락처를 입력하세요"
          {...register('userPhoneNumber', { required: '연락처를 입력하세요' })}
        />
        <span>{errors.userPhoneNumber && errors.userPhoneNumber.message}</span>
        <input type="submit" value="인증번호 전송" />
      </Box>
      <Line />
      <SmallBox>
        <h1>로그아웃</h1>
        <h1>패밀리탈퇴</h1>
      </SmallBox>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-left: 2.5rem;
  position: relative;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dfdfdf;
`;
const ProfileImgArea = styled.div`
  display: flex;
  align-items: center;
  width: 753px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 25px;
  margin-bottom: 25px;
  svg {
    cursor: pointer;
  }
  h1 {
    margin-right: 100px;
    font-weight: 600;
  }
  img {
    margin-right: 20px;
    width: 60px;
    height: 60px;
  }
  input[type='submit'] {
    position: absolute;
    right: 0;
    border-radius: 0.94rem;
    border: 1px solid #ff4256;
    background-color: #ff4256;
    color: #ffffff;
    padding: 5px 11px;
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  width: 753px;
  height: 26px;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 25px;

  span {
    color: #ff4256;
  }
  h1:first-child {
    font-weight: 600;
    margin-right: 138px;
  }

  input[type='text'],
  input[type='email'] {
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    margin-right: 20px;
  }
  input[type='submit'] {
    position: absolute;
    right: 0;
    border-radius: 0.94rem;
    border: 1px solid #ff4256;
    background-color: #ff4256;
    color: #ffffff;
    padding: 5px 11px;
    cursor: pointer;
  }
`;
const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 753px;
  height: 60px;
  margin-top: 30px;
  h1 {
    font-weight: 600;
  }
  h1:first-child {
    color: #ff4256;
  }
`;

export default EditProfile;

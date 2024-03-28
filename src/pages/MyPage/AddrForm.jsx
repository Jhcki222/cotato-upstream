import React, { useEffect } from 'react';
import { useForm, reset } from "react-hook-form";
import { styled } from 'styled-components';
import DaumPostcode from "react-daum-postcode";

export default function AddrForm({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1_000));
    const addr = JSON.stringify(data)
    alert(addr);
    if(initValue.id != ""){
      editAddr(data);}
    else{
      addAddr(data);}
    endEdit();
    },
    initValue,
    addAddr,
    editAddr,
    endEdit,
    }) {
    const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    reset,
    } = useForm();

    const onCompletePost = data => {
      setModalState(false);
      setInputAddressValue(data.address);
      setInputZipCodeValue(data.zonecode);
    };


    const handleCancel = () => {
      endEdit();
    }

    useEffect(() => {
      // you can do async server request and fill up form
      // 수정시 서버에서 id로 정보 받아와서 채워넣음
      setTimeout(() => {
        reset({
          AddrName: initValue.AddrName,
          name: initValue.name,
          address: initValue.address,
          DetailAddress: initValue.DetailAddress,
          Call: initValue.DetailAddress,
        });
      }, 100);
    }, [reset]);

    return (
      <div>
      <hr />
    <AddressForm onSubmit={handleSubmit(onSubmit, oninvalid)}>
      <div>
      <InputBox>
      <label htmlFor="AddrName">배송지명</label>
      <StyledInput
        id="AddrName"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.AddrName ? "true" : "false") : undefined
        }
        {...register("AddrName", {
          required: "배송지명은 필수 입력입니다.",
          pattern: {
            //정규식
          }
        })}
      />
      </InputBox>
      {errors.AddrName && <StyledSmall role="alert">{errors.AddrName.message}</StyledSmall>}

      <InputBox>
      <label htmlFor="name">받는 사람</label>
      <StyledInput
        id="name"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.name ? "true" : "false") : undefined
        }
        {...register("name", {
          required: "이름은 필수 입력입니다.",
          pattern: {
            //정규식
          }
        })}
      />
      </InputBox>
      {errors.name && <StyledSmall role="alert">{errors.name.message}</StyledSmall>}

      <InputBox>
      <label htmlFor="address">주소</label>
      <StyledInput
        id="address"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.address ? "true" : "false") : undefined
        }
        {...register("address", {
          required: "주소는 필수 입력입니다.",
        })}
      />
      </InputBox>
      {errors.address && <StyledSmall role="alert">{errors.address.message}</StyledSmall>}

      <InputBox>
      <label htmlFor="DetaillAddress">상세 주소</label>
      
      <StyledInput
        id="DetailAddress"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.DetailAddress ? "true" : "false") : undefined
        }
        {...register("DetailAddress", {
          required: "주소는 필수 입력입니다.",
        })}
      />
      </InputBox>
      {errors.DetailAddress && <StyledSmall role="alert">{errors.DetailAddress.message}</StyledSmall>}

      <InputBox>
      <label htmlFor="Call">연락처</label>
      <StyledInput
        id="Call"
        type="tel"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.Call ? "true" : "false") : undefined
        }
        {...register("Call", {
          required: "연락처는 필수 입력입니다.",
          pattern: {
            //정규식
          }
        })}
      />
      </InputBox>
      {errors.Call && <StyledSmall role="alert">{errors.Call.message}</StyledSmall>}
      </div>
    <ButtonBox>
      <SaveButton type="submit" disabled={isSubmitting} onClick = {handleSubmit}>저장</SaveButton>
      <CancelButton type="reset" disabled={isSubmitting} onClick = {handleCancel}>취소</CancelButton>
    </ButtonBox>
    </ AddressForm>
    </div>
    );
}



const AddressForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-weight: bold;
    color: #2A2A2A;
    width: 100px;
    margin-right: 4rem;
  }
`

const StyledInput = styled.input`
  width: 500px;
  height: 2rem;
  margin: 1.5rem;
  border-style: solid;
  border-color: #DFDFDF;
  border-width: 1px;
  border-radius: 0.2rem;
`

const ButtonBox = styled.div`
    margin: 0.5rem;
    margin-top: 1.5rem;
`

const SaveButton = styled.button`
    background-color: #FF6565;
    color: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 10rem;
    width: 50px;
    height: 25px;
    margin-right:1rem;
    border-color: transparent;
`

const CancelButton = styled.button`
    color: #2A2A2A;
    background-color: white;
    border-color: #DFDFDF;
    border-style: solid;
    border-width: 1px;
    border-radius: 10rem;
    width: 50px;
    height: 25px;
    margin-right:1rem;
`

const StyledSmall = styled.small`
    text-align: center;
    font-weight: bold;
    margin-left: 50%;
    color: #FF6565;
`
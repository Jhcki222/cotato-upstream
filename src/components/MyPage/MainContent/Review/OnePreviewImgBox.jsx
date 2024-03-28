import React from 'react'
import styled from 'styled-components'
import {ReactComponent as RemoveImgIcon} from '../../../../assets/imgs/Mypage/remove_upload_img.svg'


export default function OnePreviewImgBox({file, imgName, removeImg}) {
  return (
    <>
      <ItemBox>
        <PreviewImg src={URL.createObjectURL(file)}/>
        <RemoveImgIcon onClick={() => removeImg(imgName)}/>
      </ItemBox>

    </>
  )
}

const ItemBox = styled.div`
  position: relative;
  width: 8.7rem;
  min-width: 8.7rem;
  height: 8.7rem;
  border-radius: 0.9375rem;
  overflow: hidden;
  flex-basis: 8.75rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    cursor: pointer;
  }
`

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
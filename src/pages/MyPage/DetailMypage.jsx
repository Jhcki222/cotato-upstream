import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideMenu from '../../components/MyPage/SideMenu';
import styled from 'styled-components';
import History from '../../components/MyPage/MainContent/History';
import WishList from '../../components/MyPage/MainContent/WishList';
import Cart from '../../components/MyPage/MainContent/Cart';
import Review from '../../components/MyPage/MainContent/Review/Review';
import FAQ from '../../components/MyPage/MainContent/FAQ';
import Inquiry from '../../components/MyPage/MainContent/Inquiry';
import ProfileBanner from '../../components/ProfileBanner';
import SavedRecipes from '../../components/MyPage/MainContent/SavedRecipes';

export default function DetailMypage() {

  const location = useLocation();
  const id = location.state.id

  const [curIdx, setCurIdx] = useState(id)
  const [comp, setComp] = useState()

  useEffect(() => {
    console.log("curIdx", curIdx)

    switch(curIdx) {
      case 0:
        setComp(<History/>)
        break;
      case 1:
        setComp(<WishList/>)
        break;
      case 2:
        setComp(<Review/>)
        break;
      case 3:
        setComp(<SavedRecipes/>)
        break;
      case 4: 
        setComp(<FAQ/>)
        break;
      case 5: 
        setComp(<Inquiry/>)
        break;
    }
  },[curIdx]);

  return (
    <>
      <ProfileBanner/>
      <Container>
        <SideMenu id={id} curIdx={curIdx} setCurIdx={setCurIdx}/>
        <MainContent>
          {comp}
        </MainContent>
      </Container>

    </>
  )
}

const ProfileBox = styled.div`
  height: 18.4rem;
  background-color: #FFF5E9;

`
const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  gap: 5rem;
  margin: 3.62rem auto 0;
  box-sizing: border-box;
  
`

const MainContent = styled.div`
  width: 48.25rem;
  max-width: 48.75rem;
`
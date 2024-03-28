import React, { useEffect } from 'react'
import {ReactComponent as Farmely} from '../../assets/imgs/Farmely3.svg'
import Image1 from '../../assets/imgs/MainBanner1.png';
import apple1 from '../../assets/imgs/Intro/image 173.png'
import apple2 from '../../assets/imgs/Intro/image 170.png'
import apple3 from '../../assets/imgs/Intro/image 171.png'
import apple4 from '../../assets/imgs/Intro/image 172.png'
import envProb1 from '../../assets/imgs/Intro/unsplash_E5kBdpQ7kQw.png'
import envProb2 from '../../assets/imgs/Intro/unsplash_FxnqdmKBJps.png'
import envProb3 from '../../assets/imgs/Intro/unsplash_6xeDIZgoPaw.png'
import econoProb1 from '../../assets/imgs/Intro/unsplash_xDwEa2kaeJA.png'
import econoProb2 from '../../assets/imgs/Intro/unsplash_sFydXGrt5OA.png'
import problem from '../../assets/imgs/Intro/Group 64722.png'
import introCard1 from '../../assets/imgs/Intro/Group 64732.png'
import introCard2 from '../../assets/imgs/Intro/Group 64727.png'
import introCard3 from '../../assets/imgs/Intro/Group 64726.png'
import mission1 from '../../assets/imgs/Intro/mission1.png'
import mission2 from '../../assets/imgs/Intro/mission2.png'
import mission3 from '../../assets/imgs/Intro/mission3.png'
import potato from '../../assets/imgs/Intro/potato.png'
import carrot from '../../assets/imgs/Intro/carrot.png'
import paprica from '../../assets/imgs/Intro/paprica.png'
import pea from '../../assets/imgs/Intro/pea.png'
import afford from '../../assets/imgs/Intro/afford.png'
import envfriendly from '../../assets/imgs/Intro/envfriendly.png'
import OneOnOneHelp from '../../components/OneOnOneHelp/OneOnOneHelp'
import OneOnOnePosting from '../../components/OneOnOneHelp/OneOnOnePosting'
import AddrSetMypage from '../MyPage/AddrSetMypage'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "후원/결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];
            

const TitleOrContent = [{key: "Title", value: "제목"},
                    {key: "Content", value: "내용"},
                    {key: "TitleContent", value: "제목+내용"}];

export default function Intro() {

  useEffect(() =>{
    window.scrollTo(0, 0);},[]);
    
  return (
    <>
    <div className='w-full h-auto box-border flex flex-col items-center justify-between text-text xl:overflow-hidden'>
      <div className=''>
      <BannerWrap>
          <div>
            <img src={Image1} alt="Banner 2" />
            <div>
            <BannerShadow>
              <Span1>
                농가와 소비자가 함께하는
                <br /> 지속 가능한 농업
              </Span1>
              <Span2>함께하는 환경 보호! 마을과 상생하는 프로젝트</Span2>
              <Link to="/funding">
                <button>지속 가능한 농업 동참하기</button>
              </Link>
            </BannerShadow>
            </div>
          </div>
      </BannerWrap>
      </div>
      <div>
      <div className='text-center box-border' style={{marginLeft: 'auto', marginRight: 'auto', width: '1280px'}}>
        <h3 className=' text-2xl mt-20 font-bold'>못난이 농작물이란?</h3>
        <p className='text-xl mt-5'>맛이나 영양은 그대로지만, 색 · 흠집 여부 · 크기 등의 외관이 품질 구분 기준 표준에 미달하는 비규격 농산물입니다.</p>
        <div className='flex justify-center my-10'>
          <div className='mx-10 my-5'><img src = {apple1} alt='표준' className='max-h-40'/>표준</div>
          <div className='mx-10 my-5'><img src = {apple2}  alt='색' className='max-h-40'/>색</div>
          <div className='mx-10 my-5'><img src = {apple3}  alt='크기' className='max-h-40'/>크기</div>
          <div className='mx-10 my-5'><img src = {apple4}  alt='흠집' className='max-h-40'/>흠집</div>
        </div>
        <div className='my-7 mb-40 leading-normal'>
          <h4 className='font-semibold text-xl'>전체 농산물의 30%를 차지하는 이 못난이들은 외형이 다르다는 이유로 버려지고 있습니다.</h4>
          <h5 className='text-xl mt-1'>이로 인해 다음의 문제들이 발생하게 됩니다.</h5>
        </div>
      </div>
      </div>
      {/*<div className='text-center bg-orange-100 h-auto p-5'>
          <div className='m-auto'>
            <h3 className='m-5 font-bold'>환경적 문제</h3>
              <div className='flex justify-evenly mx-10 font-semibold'>
                  <div className='relative'>
                  <img src={envProb1} alt='썩으면서 악취 발생' className='h-52'/>
                  <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50 whitespace-nowrap'>썩으면서 악취 발생</h5>
                  </div>
                  <div className='relative'>
                    <img src={envProb2} alt='수질 오염 발생' className=' h-52'/>
                    <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>수질 오염 발생</h5>
                  </div>
                  <div className='relative'>
                    <img src={envProb3} alt='온실가스 배출' className=' h-52'/>
                    <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>온실가스 배출</h5>
                  </div>
              </div>
          </div>
          <div className='m-auto'>
            <h3 className='my-5 mt-10 font-bold'>경제적 문제</h3>
            <div className='flex justify-evenly mx-28 font-semibold whitespace-nowrap'>
              <div className='relative'>
                <img src={econoProb1} alt='노동력 낭비' className=' h-52'/>
                <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>노동력 낭비</h5>
              </div>
              <div className='relative'>
                <img src={econoProb2} alt='농산물 재배에 투입된 자원 낭비' className=' h-52'/>
                <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50 leading-tight'>농산물 재배에<br/>투입된 자원 낭비</h5>
              </div>
            </div>
          </div>
      </div>*/}
      <div style={{backgroundColor: '#FFEDDA', width:'100vw', overflow:'hidden', display:'flex', justifyContent:'center', alignContent:'center'}}>
        <div style={{}}>
          <img style={{width: '1280px', display:'block', minWidth:'1280px'}} src = {problem} className='' alt = '문제점'/>
        </div>
      </div>
      <div>
      <div className='justify-center text-center my-16 relative box-border' style={{marginLeft: 'auto', marginRight: 'auto', width: '1280px'}}>
      <BlurImg2 top="-200px" left="-500px" />
      <BlurImg1 top="0px" left="-800px" />
        <div className='flex justify-center mx-4'>
          <img src={introCard1} alt='개성있는 외형을 가진 농산물' className='' />
        </div>
        <h2 className='font-bold text-2xl my-7 flex items-center justify-center'><Farmely fill='#2A2A2A' className='mx-3'/>가 생각하는 못난이</h2>
        <div className='flex justify-center'>
          <div className='flex justify-center mx-4 mr-20 my-2'>
            <img src={introCard2} alt='수요를 넘어선 잉여 생산물' className='w-full h-auto max-w-full' />
          </div>
          <div className='flex justify-center mx-4 ml-20 my-2'>
            <img src={introCard3} alt='기타 도매할 길이 없는 농산물' className='w-full h-auto max-w-full' />
          </div>
        </div>
      </div>
      </div>
      <div style={{boxSizing:"border-box",width:"1120px", height:"1px", backgroundColor:"#ffe0e0",color:"#ffe0e0",}}/>
      <div>
      <div className='text-center font-semibold' style={{marginLeft: 'auto', marginRight: 'auto', width: '1280px'}}>
        <h2 className='mt-10 text-2xl font-extrabold'>우리의 미션</h2>
        <h5 className='my-10 text-xl font-light'>못난이 농작물을 이해하고 경험하며, 함께하는 것입니다</h5>
        <div className='flex flex-wrap justify-evenly my-5'>
          <div className='w-1/3 min-w-min'>
            <img className='max-h-80 m-auto' src={mission1} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3  min-w-min text-center'>
            <h5 className='text-brand text-xl my-5'>못난이 농작물 이해하기</h5>
            <h6 className='leading-tight font-light text-lg'>외형만 다르고 맛과 영양은 동일한, 못나지 않은,<br/>서로 개성이 다른 친구들일 뿐입니다.</h6>
          </div>
        </div>
        <div className='flex flex-row-reverse flex-wrap justify-evenly my-5'>
          <div className='w-1/3 min-w-min'>
            <img className='max-h-80 m-auto' src={mission2} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3 min-w-max text-center'>
            <h5 className='text-brand text-xl my-5'>개성이 다른 친구들 경험해보기</h5>
            <h6 className='font-light text-lg'>재미있게 알아가는 개성 충만 못난이 친구들</h6>
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly my-5'>
        <div className='w-1/3 min-w-min'>
            <img className='max-h-80 m-auto' src={mission3} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3 min-w-min text-center'>
            <h5 className='text-brand my-5 text-xl leading-tight'>농가와 소비자가 함께하는<br/>지속 가능한 농업</h5>
            <h6 className='leading-tight font-light text-lg'>함께하는 환경 보호<br/>농가와 상생하는 프로젝트</h6>
          </div>
        </div>
      </div>
      </div>
      <div style={{boxSizing:"border-box",width:"1000px", height:"1px", backgroundColor:"#ffe0e0",color:"#ffe0e0", marginTop:"80px"}}/>
      <div className='overflow-hidden w-full'>
      <div className='text-center relative' style={{marginLeft: 'auto', marginRight: 'auto', width: '1280px'}}>
        <BlurImg4 top="000px" right="-500px" />
        <BlurImg3 top="300px" right="-700px" />
        <h3 className='my-10 mt-20 text-2xl leading-tight font-bold'>못난이 친구들을 직접 만나볼 수 있는<br/>펀딩 프로젝트</h3>
        <div className='text-2xl'>
          마을 섭외 과정 동영상
        <iframe></iframe>
        </div>
        <div>
        <div className='flex justify-evenly'>
          <div className='flex justify-evenly'>
            <img className='h-24 relative top-20 left-40' src={carrot} alt='당근'/>
            <img className='h-20 relative top-6 left-60' src={potato} alt='감자'/>
          </div>
          <div className='p-10 text-xl leading-normal font-bold mx-auto'>
            <h5>못난이 친구들과 함께!</h5>
            <h5>마을 농장과 함께!</h5>
            <h5>우리의 미션을 함께!</h5>
          </div>
          <div className='flex justify-evenly'>
            <img className='h-24 relative top-1 right-60' src={paprica} alt='파프리카'/>
            <img className='h-24 relative top-20 right-40' src={pea} alt='완두콩'/>
          </div>
        </div>
          <div className='mx-auto flex justify-around bg-orange-100 p-12 pt-8 rounded-2xl font-bold' style={{marginLeft: 'auto', marginRight: 'auto', width: '1000px'}}>
            <div><h2 className='my-5'>합리적인 가격으로</h2><img src={afford} alt='합리적인 가격으로'/></div>
            <div><h2 className='my-5'>친환경적으로</h2><img src={envfriendly} alt='친환경적으로'/></div>
          </div>
        </div>
        <h4 className='m-10 leading-normal text-xl'>전국 곳곳에서 우리를 기다리는 못난이 친구들을<br/>마을과 함께하는 펀딩 프로젝트로 함께 해봐요!</h4>
      </div>
    </div>
    </div>
    </>
  )
}

const BannerWrap = styled.div`
  display : flex;
  position : relative;
  width: 120rem;
  height: 551px;
  flex-shrink: 0;
  align-items: center;
  justify-content : center;
  overflow: hidden;
`;

const BannerShadow = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 900px;
  height: 90%;
  transform: translate(110%, -110%);
  // background-color:rgba(0, 0, 0, 0.61);
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 21rem;
    height: 4rem;
    background-color: #ff6565;
    color: white;
    text-align: center;
    line-height: 65px;
    text-decoration: none;
    border: none;
    border-radius: 17px;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.0275rem;
    margin-top: -4rem;
  }
  a {
    margin-top: 9rem;
    margin-bottom: 3rem;
    color: #2a2a2a;
    text-align: center;
    font-family: Pretendard;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.38px;
  }
  button:hover {
    background-color: #f78181;
  }
`;

const Span1 = styled.div`
  margin-top: 145px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.76px;
`;

const Span2 = styled.div`

  margin-top: 29px;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.025rem;
`;

const BlurImg1 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 156, 47, 0.20);
// background: green;
filter: blur(100px);
top: ${props => props.top};
left: ${props => props.left};
z-index: -1;
`

const BlurImg2 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 66, 86, 0.15);
// background: red;
filter: blur(100px);
top: ${props => props.top};
left: ${props => props.left};
z-index: -1;
`
const BlurImg3 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 156, 47, 0.20);
// background: green;
filter: blur(100px);
top: ${props => props.top};
right: ${props => props.right};
z-index: -1;
`

const BlurImg4 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 66, 86, 0.15);
// background: red;
filter: blur(100px);
top: ${props => props.top};
right: ${props => props.right};
z-index: -1;
`
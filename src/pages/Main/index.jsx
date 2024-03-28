import React from 'react';
import Image01 from '../../assets/imgs/MainBanner2.png';
import Image02 from '../../assets/imgs/login_bg.png';
import Image03 from '../../assets/imgs/main_cook_1.png';
import Image04 from '../../assets/imgs/main_cook_2.jpg';
import Image05 from '../../assets/imgs/main_banner_2.png';
import Image10 from '../../assets/imgs/main_bottom_1.png';
import Image11 from '../../assets/imgs/main_bottom_2.png';
import Image12 from '../../assets/imgs/main_bottom_3.png';
import Image13 from '../../assets/imgs/MainBanner1.png';
import Image14 from '../../assets/imgs/MainBanner3.png';
import Image15 from '../../assets/imgs/bottom_banner1.png'
import Image16 from '../../assets/imgs/bottom_banner2.png'
import Image17 from '../../assets/imgs/bottom_banner3.png'
import Image18 from '../../assets/imgs/bottom_banner4.png'
import Image19 from '../../assets/imgs/bottom_banner5.png'
import Image20 from '../../assets/imgs/bottom_banner6.png'
import Image21 from '../../assets/imgs/bottom_banner7.png'
import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/funding');
  };
  return (
    <>
      <Wrapper>
        <BannerWrap>
        <StyledSlider {...settings}>
          <div>
            <img src={Image01} alt="Banner 1" />
            <div>
            <BannerShadow>
              <Span1>
                농가와 소비자가 함께하는
                <br /> 지속 가능한 농업
              </Span1>
              <Span2>함께하는 환경 보호! 마을과 상생하는 프로젝트</Span2>
              <Link to="/funding">
                <button>마을구출 동참하기</button>
              </Link>
            </BannerShadow>
            </div>
          </div>
          <div>
            <img src={Image13} alt="Banner 2" />
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

          <div>
            <img src={Image14} alt="Banner 3" />
            <div>
            <BannerShadow>
              <a>
                우리를 기다리는 못난이 친구들이 누구일까? <br></br>농가와
                함께하는 상생 프로젝트 알아보기!!
              </a>
              <Link to="/funding">
                <button>지속 가능한 농업 동참하기</button>
              </Link>
            </BannerShadow>
            </div>
          </div>
        </StyledSlider>
        </BannerWrap>

        <SubTitle>
          다채롭기만한.<br></br>
          <span>똑같이 알록달록한 농작물</span>
        </SubTitle>
        <SubContainer1>
          <img src={Image02}></img>
        </SubContainer1>
        <SubTitle2>싸고 맛있는.</SubTitle2>
        <SubContainer2>
          <BlurImg1 top="-200px" left="-400px" />
          <BlurImg2 top="-180px" left="-200px" />
          <img src={Image03}></img>
          <img src={Image04}></img>
          <BlurImg1 top="200px" left="800px" />
          <BlurImg2 top="180px" left="600px" />
        </SubContainer2>

        <ButtonWrapper>
          <Link to="/intro">
            <button>이름만 못난이인 농작물 더 알아보기</button>
          </Link>
        </ButtonWrapper>
        <SubContainer3>
          <a>
            마을과 함께하는
            <br />
            상생 프로젝트
          </a>
          <UserWrapper>
            <img src={Image05}></img>
            <Shadow>
              <a>
                농가와 소비자가 함께하는
                <br /> 지속 가능한 농업
              </a>
              <b>
                함께하는 환경 보호!
                <br />
                농가와 상생하는 프로젝트
              </b>
              <button onClick={handleButtonClick}>
                못난이 친구들 구출 동참하기
              </button>
            </Shadow>
          </UserWrapper>
          <ImgContainer>
      <ImgColumn>
      <img src={Image15} alt="Image 06" style={{ width: '14.6875rem' ,height: '15.125rem' ,  marginBottom: '0.94rem'}} />
      <img src={Image16} alt="Image 06" style={{ width: '14.6875rem' ,height: '6.625rem' }} />
      </ImgColumn>
      <ImgColumn>
      <img src={Image17} alt="Image 06" style={{ width: '18.875rem' ,height: '10.625rem',  marginBottom: '0.94rem',  marginRight: '1.88rem' }} />
      <img src={Image18} alt="Image 06" style={{ width: '18.875rem' ,height: '11.3125rem',  marginRight: '1.88rem' }} />
      </ImgColumn>
      <ImgColumn>
      <img src={Image19} alt="Image 06" style={{ width: '15.3125rem' ,height: ' 22.6875rem', marginRight: '1.88rem' }} />
      </ImgColumn>
      <ImgColumn>
        <img src={Image20} alt="Image 06" style={{ width: '16.4375rem' ,height: '13.3125rem', marginBottom: '0.94rem' }} />
        <img src={Image21} alt="Image 06" style={{ width: '16.4375rem' ,height: ' 8.3125rem' }} />
      </ImgColumn>
    </ImgContainer>
        </SubContainer3>
        <BottomContainer>
          <a>우리의 미션</a>
          <ImgContainer2>
            <BlurImg1 top="0" left="-400px" />
            <BlurImg2 top="0" left="-50px" />
            <div>
              <img src={Image10}></img>
              <BottomTitle>지속가능한 농업</BottomTitle>
            </div>
            <div>
              <img src={Image11}></img>
              <BottomTitle>환경 보호</BottomTitle>
            </div>
            <div>
              <img src={Image12}></img>
              <BottomTitle>
                못난이 농작물
                <br /> 인식 개선 · 체험
              </BottomTitle>
            </div>
            <BlurImg1 top="300px" left="800px" />
            <BlurImg2 top="300px" left="600px" />
          </ImgContainer2>
          <Link to="/intro">
            <button>이름만 못난이인 농작물 더 알아보기</button>
          </Link>
        </BottomContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
   min-width: 1300px;
   
  margin: 0 auto;

`;
const BannerWrap = styled.div`
display : flex;
position : relative;
width: 1920px;
height: 32.4375rem;
flex-shrink: 0;
align-items: center;
justify-content : center;
`
const StyledSlider = styled(Slider)`
width: 100%;
min-width : 1080px;
height : 100%;
flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  .slick-prev,
  .slick-next {
    font-size: 24px;
    z-index: 1;
  }
  img{
    width : 100%;
    height : 95%;
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

const SubTitle = styled.div`
  display: flex;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  margin-top: 5rem;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2.5rem;
  span {
    display: flex;
    position: relative;
    color: #b5b5b5;
    align-items: center;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    padding-top: 18px;
  }
`;

const SubContainer1 = styled.div`
  position: relative;
  width: 100%;
  height: 455px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f0efe9;

  img {
    position: relative;
    width: 683px;
    height: 455px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const SubTitle2 = styled.div`
  display: flex;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2.5rem;
`;

const SubContainer2 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: 40px;
  img {
    width: 400px;
    position: relative;
    height: 250px;
    border-radius: 1rem;
  }
`;
const ButtonWrapper = styled.div`
  text-align: center;
  button {
    margin-top: 100px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 496px;
    height: 65px;
    background-color: #ff9c2f;
    color: white;
    text-align: center;
    line-height: 65px;
    text-decoration: none;
    border: none;
    border-radius: 17px;
    font-size: 22px;
    font-weight: bold;
  }
  button:hover {
    background-color: #f5da81;
  }
`;

const SubContainer3 = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffeedb;
  a {
    display: flex;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    padding: 60px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 2.5rem;
  }
`;

const UserWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 1080px;
    height: 599px;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 10px;
  }
`;
const Shadow = styled.div`
  position: absolute;
  height: 600px;
  top: 50%;
  left: 17.3%;
  width: 30%;
  transform: translate(-55%, -50%);
  border: 1px solid black;
  border-radius: 1rem 0 0 1rem;
  background-color: rgba(0, 0, 0, 0.61);
  justify-content: center;
  text-align: center;
  button {
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 11%;
    border-radius: 17px;
    background: #ff4256;
    color: white;
    text-align: center;
    line-height: 65px;
    text-decoration: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
    margin-top: 129px;
    overflow: hidden;
    white-space: nowrap;
  }
  button:hover {
    background: #f78181;
  }
  a {
    color: #fff;
    height: 100px;
    margin-top: 100px;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.3px;
    margin-bottom: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }
  b {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
    overflow: hidden;
    white-space: nowrap;
  }
`;
const ImgContainer = styled.div`
  display: grid;
  width : 1120px;
  height : 30rem;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  position : relative;
  flex-direction : column;
  justify-content : center;
  align-items:center;
  flex-shrink: 0;
`;

const ImgColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin : 0rem 1rem 0rem 1rem;
  flex-shrink: 0;
  img {

    border-radius: 1rem 1rem 0 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  a {
    margin-bottom: -65px;
    display: flex;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    padding: 60px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 2.5rem;
  }
  button {
    margin-top: 100px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 496px;
    height: 65px;
    background-color: #ff9c2f;
    color: white;
    text-align: center;
    line-height: 65px;
    text-decoration: none;
    border: none;
    border-radius: 17px;
    font-size: 22px;
    font-weight: bold;
  }
  button:hover {
    background: #f5da81;
  }
`;

const ImgContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 300px;
    height: 250px;
    border-radius: 1rem 1rem 0 0;
    margin-top: 80px;
    margin-right: 47px;
  }
`;
const BottomTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 65.933px;
  flex-shrink: 0;
  border-radius: 0px 0px 14px 14px;
  background: rgba(243, 243, 243, 0.6);
  color: #2a2a2a;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.36px;
`;
const BlurImg1 = styled.div`
  position: absolute;
  width: 466px;
  height: 466px;
  flex-shrink: 0;
  border-radius: 466px;
  background: rgba(255, 156, 47, 0.2);
  // background: green;
  filter: blur(100px);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: -1;
`;

const BlurImg2 = styled.div`
  position: absolute;
  width: 466px;
  height: 466px;
  flex-shrink: 0;
  border-radius: 466px;
  background: rgba(255, 66, 86, 0.15);
  // background: red;
  filter: blur(100px);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: -1;
`;

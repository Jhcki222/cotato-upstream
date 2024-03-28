//등급표
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 
import Carrot from '../../../assets/imgs/Carrot.png';
import Plant from '../../../assets/imgs/growing_plant.png';
import Farmer from '../../../assets/imgs/Mypage/Farmer.png';
import Earth from '../../../assets/imgs/Mypage/Earth.png';
import Flag from '../../../assets/imgs/Mypage/Flag.png';

export default function Grading() {
  const [username, setUsername] = useState('');
  const [co2Reduction, setCo2Reduction] = useState(null);
  const [grade, setGrade] = useState('');
  const [gradeImage, setGradeImage] = useState('');
  const [gradeDescription, setGradeDescription] = useState('');

  useEffect(() => {
    // 서버에서 사용자 이름, co2 감소량, 등급 정보, 등급 이미지, 등급 설명을 가져오는 로직
    fetchUserDataFromServer()
      .then((data) => {
        setUsername(data.username);
        setCo2Reduction(data.co2Reduction);
        setGrade(data.grade);
        setGradeImage(data.gradeImage);
        setGradeDescription(data.gradeDescription);
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, []);

  // 실제 서버에서 데이터를 가져오는 함수
  function fetchUserDataFromServer() {
    const serverUrl = 'https://example.com/api/userData'; // 실제 서버 URL로 대체
    return fetch(serverUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`데이터 가져오기 실패 (HTTP 상태 코드: ${response.status})`);
        }
        return response.json();
      })
      .catch((error) => {
        throw new Error(`데이터 가져오기 실패: ${error.message}`);
      });
  }

  return (
    <Wrapper>
      <UserWrapper>
        {/* <p1>{`${username}님은`}</p1> */}
        <p1>{`홍길동님은`}</p1>
        <ImageWrapper>
            <GradeImage src={Carrot} alt={grade} />
        </ImageWrapper>
        <p2>{`작물지킴이`}</p2>
        {/* <p2>{`${grade}`}</p2> */}
        <InfoWrapper>
            <PlantImg src ={Plant}></PlantImg><p3>{`co2를 ${co2Reduction}만큼 줄였어요!`}</p3>
   
        </InfoWrapper>

        <p4>{`작물 0g당 0g의 co2를 절감할 수 있어요`}</p4>
        <p5>{`작물 0g당 0g의 co2를 절감할 수 있어요`}</p5>
      </UserWrapper>
      <BlurImg1 top="0" left="1400px" />
      <br></br><br></br>

      <GradeWrapper>
      <BlurImg2 top="200px" left="1500px" />

        <GradeItem>
      <BlurImg1 top="400" left="-200px" />


          <ImageWrapper>
            <GradeImage src={Carrot} alt="작물지킴이" />
          </ImageWrapper>
          <GradeContent>
    <BlurImg2 top="700" left="-150px" />

            <GradeName>작물지킴이</GradeName>

            <GradeDescription>co2 줄인 양 00g미만</GradeDescription>
           
          </GradeContent>
        </GradeItem>
      </GradeWrapper>
      <GradeSeparator />
      <GradeWrapper>
        <GradeItem>
          <ImageWrapper>
            <GradeImage src={Farmer} alt="마을지킴이" />
          </ImageWrapper>
          <GradeContent>

            <GradeName>마을지킴이</GradeName>
            <GradeDescription>co2 줄인 양 00g이상 00g미만</GradeDescription>
          </GradeContent>
        </GradeItem>
      </GradeWrapper>
      <GradeSeparator />
      <GradeWrapper>
        <GradeItem>
          <ImageWrapper>
            <GradeImage src={Flag} alt="나라지킴이" />
          </ImageWrapper>
          <GradeContent>
            <GradeName>나라지킴이</GradeName>
            <GradeDescription>co2 줄인 양 00g이상 00g미만</GradeDescription>
          </GradeContent>
        </GradeItem>
      </GradeWrapper>
      <GradeSeparator />
      <GradeWrapper>
        <GradeItem>
          <ImageWrapper>
            <GradeImage src={Earth} alt="지구지킴이" />
          </ImageWrapper>
          <GradeContent>
            <GradeName>지구지킴이</GradeName>
            <GradeDescription>co2 줄인 양 00g 이상</GradeDescription>
          </GradeContent>
        </GradeItem>
      </GradeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-top : 2rem;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const UserWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  position: relative;

  p1 {
    color: #2A2A2A;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.48px;
  }
  p2{
    margin-top:1rem;
    color: #EA7C02;
    text-align: center;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.72px;
  }
  p3{
    
    color: #2A2A2A;
    text-align: center;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
    margin-right: 0.5rem; /* PlantImg와의 간격 설정 */
    flex-shrink: 0; 
  }
  p4{
    margin-top : 2rem;
    color: #2A2A2A;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
  }
  p5{
    color: #2A2A2A;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;

const ImageWrapper = styled.div`
  margin-top:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 144px;
  border : 1px solid #D97704;
  border-radius: 50%; 
`;

const GradeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const PlantImg = styled.img`
  display: flex;
  position: relative;
  width: 43px;
  height: 43px;
`;

const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;

const GradeItem = styled.div`
  display: flex;
  align-items: center;
  margin-left : 30%;
  margin-bottom: 1rem;
  text-align: center;
`;

const GradeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem; /* 이미지와 내용 사이 여백 조정 */
`;

const GradeSeparator = styled.div`
  width: 1000px;
  height: 1.7px;
  background: #E1E1E1;
  margin-top: 1rem;
`;

const GradeName = styled.p`
  color: #2A2A2A;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
`;

const GradeDescription = styled.p`
  margin-top : 1rem;
  color: #2A2A2A;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.44px;
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


import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import Image01 from './imgs/img1.png'
import Image02 from './imgs/img2.png'
import Image03 from './imgs/img3.png'
import ContentWrap from './components/ContentWrap';

export default function Community() {

    const [tagButtonList, setTagButtonList] = useState(["#가벼운", "#여름", "#런치", "#디너"]);
    const [selectedTag, setSelectedTag] = useState(null);
    const handleTagChange = (tag) => {
        if(selectedTag !== tag)
            setSelectedTag(tag);
        else if(selectedTag === tag)
            setSelectedTag(null);
     };
     


    const [data, setData] = useState([{
        "theme": "",
        "Keyword1": {"word": ["", ""],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/tomato"},
        "Keyword2": {"word": ["#다이어트", "#에피타이저"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/plum"},
        "Keyword3": {"word": ["#여름", "#디저트"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/cherry"}
    },{
        "theme": "",
        "Keyword1": {"word": ["#가벼운", "#디저트"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/tomato"},
        "Keyword2": {"word": ["#다이어트", "#에피타이저"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/plum"},
        "Keyword3": {"word": ["#여름", "#디저트"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/cherry"}
    },{
        "theme": "",
        "Keyword1": {"word": ["#가벼운", "#디저트"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/tomato"},
        "Keyword2": {"word": ["#다이어트", "#에피타이저"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/plum"},
        "Keyword3": {"word": ["#여름", "#디저트"],
                    "img": "https://static.hillarys.co.uk/asset/media/9635/pure-white.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0",
                    "url": "/ingredients/cherry"}
    }]);

    const getCommunity = async () => {
        try {
          const {data} = await axios.get(`/data/Community/community.json`)
          return data
        }
        catch(error) {
          console.log(error)
        }
      }

    useEffect(() => {
    getCommunity()
    .then((res) => {
    setData(res);
    })}, [])

    // useEffect(() =>{

    // },[selectedTag])

    return (
        <Wrapper>
            <Container>
                <InputWrap>
                    <SearchInput />
                    <SearchButton>
                        <FiSearch color='#6A6A6A' size='1.2rem' />
                    </SearchButton>
                </InputWrap>
                <ButtonWrap>
                    <TagWrap>
                        {tagButtonList.map((tag) => (
                            <TagButton 
                            key={tag}
                            active={selectedTag === tag}
                            onClick={() => handleTagChange(tag)}>{tag}</TagButton>
                        ))}
                    </TagWrap>
                    <PostButton>글쓰기</PostButton>
                </ButtonWrap>
            </Container>
            {(selectedTag === null) ? //tag 선택되면 컨텐츠 필터링
            (<div>
            <ContentWrap color={'#FFF4F4'} data={data[0]}>

            </ContentWrap>
            <ContentWrap data={data[1]}>

            </ContentWrap>
            <ContentWrap data={data[2]}>

            </ContentWrap>
            </div>) :
            (<div>

            </div>)
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
`
const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
//검색창
const InputWrap = styled.div`
    box-sizing: border-box;
    margin: auto;
    margin-top: 3rem;
    border: solid 2px #DADADA;
    border-radius: 5rem;
    width: 800px;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchInput = styled.input`
    border: solid 0px #DADADA;
    background-color: transparent;
    width: 740px;
    height: 3rem;
    outline: none;
`
const SearchButton = styled.button`
    border: solid 0px;
    height: 3rem;
`
//태그, 글쓰기버튼
const ButtonWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 1280px;
`
const TagWrap = styled.div`
    justify-content: space-evenly;
`

const TagButton = styled.button`
    margin: auto;
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: solid 1px;
    border-color:  ${(props) => (props.active ? '#ff4256' : '#bfbfbf')};
    border-radius: 5rem;
    width: auto;
    height: 3rem;
    color:  ${(props) => (props.active ? '#ff4256' : '#969696')};
`
const PostButton = styled.button`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: solid 0px #BFBFBF;
    border-radius: 5rem;
    width: 7rem;
    height: 3rem;
    background-color: #FF4256;
    color: #F3F3F3;
`
//컨텐츠
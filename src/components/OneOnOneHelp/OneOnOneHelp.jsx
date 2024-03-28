import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import axios from 'axios';
import CustomSelect from './CustomSelect';
import OneOnOnePosting from './OneOnOnePosting';
import Accordion from './Accordian';

export default function OneOnOneHelp() {
    function handleCategoryButton(e) {
        e.preventDefault();
    }
    const [option, setOption] = useState(false);

    const [isEditting, setIsEditting] = useState(false);

    const [categoryIdx, setCategoryIdx] = useState(0);
    const [titleOrContentIdx, setTitleOrContentIdx] = useState(0);

    const [posts, setPosts] = useState([]); // 게시글 데이터는 자신의 상태나 API에서 가져온 데이터로 초기화

    // 현재 페이지를 state로 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지당 게시글 수
    const postsPerPage = 5;

    // 현재 페이지의 게시글 범위 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 이벤트 핸들러
    const handlePageChange = (pageNumber) => {
        
        setCurrentPage(pageNumber);
    };

    const handlePost = () => {
        setIsEditting(1);
    }
    const endEdit = () => {
        setIsEditting(0);
    }


    const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];

    const TitleOrContent = [{key: "Title", value: "제목"},
                    {key: "Content", value: "내용"},
                    {key: "TitleContent", value: "제목+내용"}];


    const receiveCategoryValue = (rcv) => {
        setCategoryIdx(Category.findIndex(v => v.value === rcv));
        console.log(Category.findIndex(v => v.value === rcv));
    }

    const receiveTitleOrContent = (rcv) => {
        setTitleOrContentIdx(TitleOrContent.findIndex(v => v.value === rcv));
        console.log(TitleOrContent.findIndex(v => v.value === rcv));
    }

    const clickWrapp = (event) => {
        if(!event.target.classList.contains('sel')){
            setOption(current => !current);
        }
      };

    useEffect(() => {
        document.addEventListener("click", clickWrapp);
    }, []);  

    const getPosts = async () => {
        try {
          const {data} = await axios.get(`/data/MyPage/OneOnOne.json`)
          return data
        }
        catch(error) {
          console.log(error)
        }
      }
    
    useEffect(() =>{
        getPosts()
        .then((res) => {
        setPosts(res);
        window.scrollTo(0, 0);
        })},[isEditting]);
                
  return (
    <HelpContainer>
        {isEditting == 0 && <div>
        <HelpText>1:1 문의</HelpText>
        <hr />
        <CategoryContainer>
            <form>
                {/*<Select name='category'>
                    <option value="All">전체</option>
                    <option value="Pay">결제 문의</option>
                    <option value="Shipping">배송 문의</option>
                    <option value="Cancel">취소/반품/환불 문의</option>
                    <option value="Other">기타 문의</option>
                </Select>
                <Select name='TitleOrContent'>
                    <option value="Title">제목</option>
                    <option value="Content">내용</option>
                    <option value="TitleContent">제목+내용</option>
                </Select>*/}
                {/*
                <div style={{display:'flex'}}>
                <CustomSelect optionData = {Category} sendValueFunction={receiveCategoryValue} isShow={option} width='160px' />
                <CustomSelect optionData = {TitleOrContent} sendValueFunction={receiveTitleOrContent} isShow={option} width='160px' />
                <SearchInput></SearchInput>
                <SearchButton onClick={handleCategoryButton}>검색</SearchButton>
                </div>
                */}
            </form>
        </CategoryContainer>
        <PostContainer>
            {posts.length>0 ? <div>
        {currentPosts.map((post) => (
            <Accordion key = {post.id} title = {post.title} content={post.content} status={post.status} />
        ))}

        {/* 리스트 버튼 생성 */}
        <div style={{margin: '1rem'}}>
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <IndexButton 
            key={index} 
            onClick={() => handlePageChange(index + 1)}
            style={{margin: '1rem'}}
            active={currentPage === index+1}>
                {index + 1}
            </IndexButton>
            ))}
        </div>
        </div>
      :
            "게시글이 없습니다."
            }
        </PostContainer>
        <PostButton onClick={handlePost}>글쓰기</PostButton>
        </div>}
        {isEditting ? <OneOnOnePosting endEdit={endEdit}/> : ""}
    </HelpContainer>
  )
}

const HelpText = styled.h1`
    margin: 3rem;
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
`

const HelpContainer = styled.div`
    text-align: center;
    width: 900px;
`
const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 20px;
`

const Select = styled.select`
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'%3E%3C/path%3E%3C/svg%3E") no-repeat 95% 50%;
    padding: 5px;
    margin: 5px;
    width: 11vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`

const IndexButton = styled.button`
    color: ${(props) => (props.active ? '#2a2a2a' : '#a7a7a7')};
`

const SearchInput = styled.input`
    padding: 5px;
    margin:5px;
    width: 25vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`

const SearchButton = styled.button`
    padding: 5px;
    margin: 5px;
    width: 60px;
    height: 2rem;
    align-items: center;
    border: solid 1px black;
    border-radius: 10px;
`

const PostContainer = styled.div`
    margin: 5px;
    text-align: center;
`

const PostButton = styled.button`
    margin: 1rem;
    width: 580px;
    height: 48.66px;
    border-radius: 15px;
    border: 1px solid #FF4256;
    background-color: #ffffff;
    color: #FF4256;
    
`

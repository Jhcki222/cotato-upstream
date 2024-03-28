import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import axios from 'axios';
import Accordion from '../../OneOnOneHelp/Accordian';

export default function FAQPage() {

    const [posts, setPosts] = useState([]); // 게시글 데이터는 자신의 상태나 API에서 가져온 데이터로 초기화

    // 현재 페이지를 state로 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지당 게시글 수
    const postsPerPage = 4;

    // 현재 페이지의 게시글 범위 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 이벤트 핸들러
    const handlePageChange = (pageNumber) => {
        
        setCurrentPage(pageNumber);
    };


    const getPosts = async () => {
        try {
          const {data} = await axios.get(`/data/MyPage/FAQ.json`)
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
        })},[]);
                
  return (
    <HelpContainer>
        <div>
        <HelpText>FAQ</HelpText>
        <hr />
        <PostContainer>
            {posts.length>0 ? <div>
        {currentPosts.map((post) => (
            <Accordion key = {post.id} title = {post.title} content={post.content} status={"FAQ"} />
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
        </div>
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

const IndexButton = styled.button`
    color: ${(props) => (props.active ? '#2a2a2a' : '#a7a7a7')};
`

const PostContainer = styled.div`
    margin: 5px;
    text-align: center;
`

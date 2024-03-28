import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AccordionMenu = ({ key, title, content, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (status !== "inProgress") {
      setIsOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <AccordionWrap>
      <div key={key} className={`que ${isOpen ? 'on' : ''}`} onClick={handleToggle}>
        <span>{title}</span>
        <div className="arrow-wrap">
          {status !== "inProgress" ? (
            status === "closed" ?
            "답변 완료" : ""
          ) : "답변 중"}
          
        </div>
      </div>
      <div className={`anw ${isOpen ? 'active' : ''}`}>
        <span>{content}</span>
      </div>
    </AccordionWrap>
  );
};

export default AccordionMenu;

const AccordionWrap = styled.div`
  * {
    box-sizing: border-box;
  }

  .que:first-child {
    border-top: 0px solid #dddddd;
  }

  .que {
    position: relative;
    padding: 20px 10px;
    cursor: pointer;
    text-align: start;
    font-size: 16px;
    border-bottom: 1px solid #dddddd;
  }

  .que::before {
    display: inline-block;
    content: 'Q.';
    font-size: 16px;
    color: #2A2A2A;
    margin: 0 5px;
  }

  .que.on>span {
    font-weight: bold;
    color: #FF4256;
  }

  .anw {
    display: none;
    overflow: hidden;
    font-size: 16px;
    text-align: start;
    white-space: normal;
    background-color: #f0f0f0;
    padding: 27px 10px;
  }

  .anw::before {
    display: inline-block;
    content: 'A';
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin: 0 5px;
  }

  .anw.active {
    display: block;
  }

  .arrow-wrap {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }
`;
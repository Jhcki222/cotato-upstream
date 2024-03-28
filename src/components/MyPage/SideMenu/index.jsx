import React from 'react';
import { LuChevronRight } from 'react-icons/lu';
import styled from 'styled-components';

export default function SideMenu({ curIdx, setCurIdx }) {
  const MyCropBtn = [
    { id: 0, text: '구매 내역 조회' },
    { id: 1, text: '찜한 목록' },
    { id: 2, text: '제철과일 후기' },
    { id: 3, text: '저장한 레시피' },
  ];
  const CustomerCenterBtn = [
    { id: 4, text: 'FAQ' },
    { id: 5, text: '1:1 문의' },
  ];

  const handleOnClick = (id, text) => {
    setCurIdx(id);
  };

  return (
    <Container>
      <CateSection>
        <p>나의 작물</p>
        <MenuWrapper>
          {MyCropBtn.map(({ id, text }) => (
            <>
              <MenuItem
                key={id}
                onClick={() => handleOnClick(id, text)}
                isCurIdx={id === curIdx}
              >
                {text}
                <LuChevronRight />
              </MenuItem>
              <hr />
            </>
          ))}
        </MenuWrapper>
      </CateSection>
      <CateSection>
        <p>고객센터</p>
        <MenuWrapper>
          {CustomerCenterBtn.map(({ id, text }) => (
            <>
              <MenuItem
                key={id}
                onClick={() => handleOnClick(id, text)}
                isCurIdx={id === curIdx}
              >
                {text}
                <LuChevronRight />
              </MenuItem>
              <hr />
            </>
          ))}
        </MenuWrapper>
      </CateSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
  min-width: 16.2rem;
  gap: 3.8rem;
`;

const CateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  & > p {
    font-size: 1.5625rem;
    font-weight: 600;
  }
`;

const MenuWrapper = styled.div`
  border-radius: 0.94rem;
  border: 1px solid #dfdfdf;
  height: fit-content;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1.25rem 1.8rem;
  justify-content: space-between;
  font-size: 1.0625rem;
  font-weight: ${(props) => (props.isCurIdx ? 700 : 400)};
  color: ${(props) =>
    props.isCurIdx ? `var(--main-color)` : `var(--font-color-1)`};
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-end;
`
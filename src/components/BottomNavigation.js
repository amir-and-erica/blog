import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {NavArrow} from './icons'

const ReturnLink = styled.div`
  margin-top: 30px;
  padding: 5px 30px 5px 10px;
  background-color: darkslateblue;
  text-align: center;
  display: inline-block;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
`
const ArrowContainer = styled.div`
  display: inline-block;
  transform: rotate(180deg);
  margin-right: 10px;
`
const ReturnText = styled.h3`
  color: white;
  display: inline-block;
`
const BottomNavigation = () => {
  return(
    <Link to="/">
      <ReturnLink>
        <ArrowContainer><NavArrow color="#fff"/></ArrowContainer>
        <ReturnText>Return to the front page</ReturnText>
      </ReturnLink>
    </Link>
  )
}

export default BottomNavigation;

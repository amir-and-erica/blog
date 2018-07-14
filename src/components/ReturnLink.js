import React from 'react'
import styled from 'styled-components'
import Color from '../layouts/colors'

const ReturnLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 3px 20px;
  background-color: ${Color('blue')};
  display: block;
  border-radius: 2px;
  @media not all and (hover: none) {
		&:hover {
      color: white;
      background-color: ${Color('blue',0,-10)};
    }
  }
`

const Position = styled.div`
  position: absolute;
  top: 287px;
  left: -86px;
  transform: rotate(90deg);
  z-index: 2;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

class ReturnTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 30,
    }
  }

  render() {
    return(
      <Position>
        <ReturnLink href="https://bythebay.cool/">
          <h3 style={{fontWeight: "normal", margin: 0}}>Return to bythebay.cool</h3>
        </ReturnLink>
      </Position>
    )
  }
}

export default ReturnTag

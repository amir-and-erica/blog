import React from 'react'
import styled from 'styled-components'
import Color from '../layouts/colors'

const ReturnLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 3px 20px;
  background: linear-gradient(45deg,${Color('darkpurple')},${Color('blue')})};
  display: block;
  border-radius: 2px;
  @media not all and (hover: none) {
		&:hover {
      color: white;
      background: linear-gradient(45deg,${Color('darkpurple', 0, 10)},${Color('blue', 0, 10)});
    }
  }
`

const Position = styled.div`
  position: absolute;
  top: 287px;
  left: -86px;
  transform: rotate(90deg);
  z-index: 2;
  box-shadow: 2px 3px 10px rgba(0,0,0,0.3);
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

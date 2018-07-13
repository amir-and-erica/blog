import React from 'react'
import styled from 'styled-components'
import shadowPattern from '../layout/images/shadowPattern.png'

const Shadow = styled.div`
	position: absolute;
	top: 10px;
	left: ${props=>props.isEven?20:-20}px;
	width: 100%;
	height: 100%;
	background-image: url('${shadowPattern}');
	background-repeat: repeat;
`;

const PostContainer = styled.div`
  position: relative;
  margin: 40px 0;
  background: white;
`

class IndexPagePost extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     showBoxShadow: false,
  //   }
  // }
	//
  // handleMouseEnter = () => {
  //   this.setState({
  //     showBoxShadow: true,
  //   })
  // }
	//
  // handleMouseLeave = () => {
  //   this.setState({
  //     showBoxShadow: false,
  //   })
  // }
	//
  render() {
    return(
      <PostContainer>
        {this.props.children}
      </PostContainer>
    )
  }

}

export default IndexPagePost

import React from 'react'
import Link from 'gatsby-link'
import Color from '../layout/colors'
import styled from 'styled-components'
import logo from '../layout/images/logo-filled.png'
import logoText from '../layout/images/text.png'

const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: ${Color('pink')};
  height: 50px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Flex = styled.div`
  display: flex;
`

const Padding = styled.div`
  width: 40px;
`

const Logo = styled.img`
  height: 30px;
  width: auto;
`
const LogoText = styled.img`
  height: 30px;
  transform: translate(${props=>props.logoPos}px);
  transition: transform 150ms ease-out;
  position: absolute;
  left: -20px;
  width: auto;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 3px 20px;
`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoPos: 0
    }
  }
  handleMouseEnter = () => {
    this.setState({logoPos: 35});
  }

  handleMouseLeave = () => {
    this.setState({logoPos: 0});
  }

  render() {

    const links = navLinks.map( (link,i) => {
      return(
        <NavLink key={i} to={link.to}><h4>{link.label}</h4></NavLink>
      )
    })
    return(
      <Nav>
        <InnerContainer>
          <Flex>
            <Padding/>
            <Link style={{marginTop: 4}}to="/">
              <Logo
                src={logo}
                alt="By The Bay logo"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
              <LogoText src={logoText} alt="logo text" logoPos = {this.state.logoPos}/>
            </Link>
          </Flex>
          <Flex>
            {links}
            <Padding/>
          </Flex>
        </InnerContainer>
      </Nav>
    )
  }
}


const navLinks = [
  { label:"Posts", to: "/"},
  { label:"Tags", to: "/tags/"},
]

export default Navbar

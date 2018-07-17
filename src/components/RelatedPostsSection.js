import React from 'react'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'
import Link from 'gatsby-link'
import Color from '../layouts/colors'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

const PostContainer = styled.div`
  width: 200px;
  padding: 20px 40px;
  border-radius: 2px;
`

const DropShadow = styled.div`
  padding: 0;
  margin: 15px 30px;
  border-top: 4px solid #666;
  box-shadow: 3px 4px 10px rgba(0,0,0,0.3);
  transition-property: transform, box-shadow;
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  @media not all and (hover: none) {
    &:hover {
      transform: translateY(-4px);
      border-top: 4px solid ${props=>props.color?Color(props.color):Color('teal')};
      box-shadow: 6px 5px 18px rgba(0,0,0,0.2);
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`
const PostDescription = styled.div`
  font-size: 14px;
`
const SectionTitle = styled.h2`
  text-align: center;
`

const RelatedPostsSection = (props) => {
  return(
    <div>
      <SectionTitle>Read some related posts</SectionTitle>
      <Spacer height={20}/>
      <Container>
        {
          props.posts.map((post, i)=>{
            const {title, description, color} = post.node.frontmatter;
            return(
              <StyledLink to={post.node.fields.slug}>
                <DropShadow color={color}>
                  <PostContainer key={i} >
                    <h3>{title}</h3>
                    <PostDescription>{description}</PostDescription>
                  </PostContainer>
                </DropShadow>
              </StyledLink>

            )
          })
        }
      </Container>
    </div>
  )
}

export default RelatedPostsSection

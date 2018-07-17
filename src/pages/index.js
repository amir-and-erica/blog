import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Color from '../layouts/colors'
import IndexPagePost from '../components/IndexPagePost'
import {Spacer} from '../layouts/util'
import Head from '../layouts/head'

const PostMetaTextContainer = styled.div`
  margin-right: 20px;
  width:60%;
`

const Line = styled.div`
  margin-top: 12px;
  height: 4px;
  border-radius: 2px;
  width: 100%;
  background-color: ${props=>props.color?Color(props.color):Color('pink')};
`

const PostTitle = styled.h2`
  text-decoration: none;
  color: #323232;
  text-align: right;
  margin: 0;

  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${props=>props.color?Color(props.color):'#333'};
    }
  }
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const PostImageContainer = styled.div`
  width: 80%;
`
const PostImage = styled.img`
  object-fit: cover;
  width: calc(100% - 20px);
  max-height: 66px;
  border-radius: 2px;
  margin-right: 20px;
`

const PostLink = styled(Link)`
  text-decoration: none;
`
const KeepReading = styled(Link)`
  text-align: right;
  margin-top: 10px;
  text-decoration: none;
  color: #333;
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${props=>props.color?Color(props.color):'#333'};
    }
  }
`
const Author = styled.h4`
  color: #999;
  text-align: right;
  margin-top: 10px;
`

const Date = styled.h4`
  color: #999;
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: right;
  margin-right: 20px;
`
const BlogTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;
`
const BlogDescription = styled.div`
  margin-left: 30px;
  margin-top: 9px;
  font-style: italic;
`
const BlogName = styled.h1`
  font-size: 70px;
  letter-spacing: -4px;
`
const Excerpt = styled.div`
  margin-top: 19px;
  margin-bottom: 20px;
`


class IndexPage extends React.Component {
  // <PostImageContainer>
  //   <PostImage src={image} alt=""/>
  // </PostImageContainer>
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const allPosts = posts.map(({ node: post }) => {
      const {color, image, date, title, author} = post.frontmatter;
      return(
        <IndexPagePost key={post.id}>
          <Row>
            <Col
              xsOffset={1} xs={10}
              smOffset={2} sm={8}
              mdOffset={0} md={5}
              lgOffset={0} lg={5}
            >
              <MetaContainer>
                <Date>{date}</Date>

                <PostMetaTextContainer>
                  <PostLink to={post.fields.slug}>
                    <PostTitle color={color}>
                      {title}
                    </PostTitle>
                  </PostLink>
                  <Author>By {author}</Author>
                </PostMetaTextContainer>
              </MetaContainer>
            </Col>

            <Col
              xsOffset={1} xs={10}
              smOffset={2} sm={8}
              mdOffset={0} md={5}
              lgOffset={0} lg={5}
            >
              <Line color={color}/>
              <Excerpt>{post.excerpt}</Excerpt>
              <KeepReading to={post.fields.slug} color={color}>
                <h3>Keep Reading →</h3>
              </KeepReading>
              <Spacer height={10}/>
            </Col>
          </Row>

        </IndexPagePost>
      )
    }
  );

    return (
      <div>
        <Head/>
        <BlogTitle>
          <BlogName>BTW</BlogName>
          <BlogDescription>Our sidebar on journalism, local issues, and elections.</BlogDescription>
        </BlogTitle>
        {allPosts}
      </div>
    )
  }
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            author
            templateKey
            color
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

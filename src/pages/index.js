import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Color from '../layout/colors'
import IndexPagePost from '../components/IndexPagePost'
import {Spacer} from '../layout/util'
import Head from '../layout/head'

const PostTitle = styled.h2`
  text-decoration: none;
  color: #323232;
  text-align: right;
  margin: 0;
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostLink = styled(Link)`
  text-decoration: none;
`
const KeepReading = styled(Link)`
  text-align: right;
  margin-top: 10px;
  text-decoration: none;
`
const Date = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: right;
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
  margin-top: 37px;
  margin-left: 20px;
  margin-bottom: 20px;
`


class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const allPosts = posts.map(({ node: post }) => (
      <IndexPagePost key={post.id}>
        <Row>
          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={2} md={3}
            lgOffset={2} lg={3}
          >
            <Date>{post.frontmatter.date}</Date>
            <PostLink to={post.fields.slug}>
              <PostTitle>
                {post.frontmatter.title}
              </PostTitle>
            </PostLink>
          </Col>

          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={0} md={5}
            lgOffset={0} lg={5}
          >
            <Excerpt>{post.excerpt}</Excerpt>
            <KeepReading to={post.fields.slug}>
              <h3>Keep Reading →</h3>
            </KeepReading>
            <Spacer height={10}/>
            <hr/>
          </Col>
        </Row>

      </IndexPagePost>
    ));

    return (
      <React.Fragment>
        <Head/>
        <BlogTitle>
          <BlogName>BTW</BlogName>
          <BlogDescription>Our sidebar on journalism, local issues, and elections.</BlogDescription>
        </BlogTitle>
        {allPosts}
      </React.Fragment>
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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

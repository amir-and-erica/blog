import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'

const Title = styled.h1`
  text-align: center;
  margin-bottom: 5px;
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: center;
`

export const BlogPostTemplate = (props) => {
  const { content, contentComponent, description, tags, title, helmet,} = props;
  const PostContent = contentComponent || Content

  const postTags = tags && tags.length ? (
    <span>
      <ul>
        {tags.map(tag => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              <h3>{tag}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </span>
  )
  : null;

  return (
    <div>
      {helmet || ''}
      <Row>
        <Col
          xsOffset={1} xs={10}
          smOffset={2} sm={8}
          mdOffset={3} md={6}
          lgOffset={3} lg={6}
        >
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
          <Spacer height={30}/>
          <PostContent content={content} />
          <Spacer height={30}/>
          <h4>Tags</h4>
          <Spacer height={15}/>
          {postTags}
        </Col>
      </Row>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

const HTMLContent = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
)

const Content = ({ content }) => (
  <div>{content}</div>
)


export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

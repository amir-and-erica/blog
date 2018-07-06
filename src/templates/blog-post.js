import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'
import Line from '../components/rounded-line'
import TagsSection from '../components/TagsSection'
import '../layouts/template-styles/blog-post-style-1.css'

const Title = styled.h1`
  text-align: center;
  margin-bottom: 5px;
  margin-top: 60px;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: center;
`

export class BlogPostTemplate extends React.Component {

  componentDidMount() {
    // TODO: add line to h2
    // console.log(document.getElementsByTagName('h2'))
    // document.querySelector('h2').insertAdjacentHTML('afterend','<span>hello</span>')
  }

  render() {

    const { content, contentComponent, description, tags, title, helmet,} = this.props;
    const PostContent = contentComponent || Content;

    return (
      <div>
        {helmet || ''}
        <Row>
          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={2} md={8}
            lgOffset={2} lg={8}
          >
            <Title>{title}</Title>
          </Col>
          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={3} md={6}
            lgOffset={3} lg={6}
          >
            <Subtitle>{description}</Subtitle>
            <Spacer height={30}/>
            <Line/>
          </Col>
        </Row>
        <div className="blog-post-body">
          <PostContent content={content} />
          <Spacer height={30}/>

          <TagsSection data={tags}/>
        </div>
      </div>
    )
  }
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

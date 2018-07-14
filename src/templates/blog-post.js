import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet'
import Head from '../layouts/head'
import { kebabCase } from 'lodash'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'
import Line from '../components/rounded-line'
import TagsSection from '../components/TagsSection'
import '../layouts/template-styles/blog-post-style-1.css'
import Color from '../layouts/colors'

const Title = styled.h1`
  text-align: left;
  margin-bottom: 5px;
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: left;
`
const Author = styled.h4`
  color: #777;
`

const Date = styled.h4`
  color: #999;
`
const Attribution = styled.div`
  margin-top: 180px;
  border-top: 4px solid ${Color('pink')};
`


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        slug={post.fields.slug}
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

export class BlogPostTemplate extends React.Component {

  componentDidMount() {
    // TODO: add line to h2
    // console.log(document.getElementsByTagName('h2'))
    // document.querySelector('h2').insertAdjacentHTML('afterend','<span>hello</span>')
  }

  render() {

    const { content, contentComponent, frontmatter, slug} = this.props;
    const  { description, tags, title, date, author} = frontmatter;
    const PostContent = contentComponent || Content;
    return (
      <div>
        <Head
          url={`https://blog.bythebay.cool/${slug}`}
          title={`${title} – By The Way`}
          headline={title || "By The Way blog post"}
          description={description || "Yes of course it's something interesting."}
        />
        <Row>
          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={1} md={6}
            lgOffset={1} lg={6}
          >
            <Spacer height={60} xsHeight={30}/>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Col>
          <Col
            xsOffset={1} xs={10}
            smOffset={2} sm={8}
            mdOffset={1} md={4}
            lgOffset={1} lg={4}
          >
            <Attribution>
              <Spacer height={25}/>
              <Author>By {author}</Author>
              <Date>{date}</Date>
            </Attribution>
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
  helmet: PropTypes.instanceOf(Helmet),
}


export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

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
import SocialMediaButtons from '../components/socialMediaButtons'
import RelatedPosts from '../components/RelatedPostsSection'
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
  margin-top: ${props=>props.offset}px;
  border-top: 4px solid ${props=>props.color?Color(props.color):Color('pink')};
  @media screen and (max-width: 767px) {
    margin-top: 0;
    width: 100%;
  }
`


const BlogPost = ({ data }) => {
  const { relatedPosts, blogPostData: post } = data;
  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        slug={post.fields.slug}
        related={relatedPosts.edges}
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
  constructor(props) {
    super(props);
    this.state = { topOffset: 113 }
  }

  componentDidMount() {
    // this.setState({topOffset: document.querySelector('h1').getBoundingClientRect().x});

    // TODO: add line to h2
    // console.log(document.getElementsByTagName('h2'))
    // document.querySelector('h2').insertAdjacentHTML('afterend','<span>hello</span>')
  }

  render() {
    const { content, contentComponent, frontmatter, slug, related} = this.props;
    const  { description, tags, title, date, author, color, smTitle, smDescription} = frontmatter;
    const PostContent = contentComponent || Content;
    const SocialTitle = smTitle || title;
    const SocialDescription = smDescription || description;
    return (
      <div>
        <Head
          url={`https://blog.bythebay.cool/${slug}`}
          title={`${SocialTitle} – By The Way`}
          headline={SocialTitle || "By The Way blog post"}
          description={SocialDescription || "Yes of course it's something interesting."}
        />
        <Row>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={6}
            lgOffset={1} lg={6}
          >
            <Spacer height={60} xsHeight={30}/>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Col>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={4}
            lgOffset={1} lg={4}
          >
            <Attribution color={color} offset={this.state.topOffset}>
              <Spacer height={25}/>
              <Author>By {author}</Author>
              <Date>{date}</Date>
            </Attribution>

          </Col>
        </Row>
        <div className="blog-post-body">
          <Spacer height={30}/>
          <PostContent content={content} />
          <Spacer height={30}/>
          <Line color={Color(color)}/>
        </div>
        <SocialMediaButtons
          title={SocialTitle}
          description={SocialDescription}
          url={`https://blog.bythebay.cool/${slug}`}
        />
        <RelatedPosts posts={related}/>
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
    blogPostData: markdownRemark(id: { eq: $id }) {
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
        color
        smTitle
        smDescription
        tags
      }
    }

    relatedPosts: allMarkdownRemark(
      limit: 3,
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {tags: {eq: "voice"}}}
    ) {
      edges {
        node {
          frontmatter {
						title
            description
            color
          }
					fields {
            slug
          }
        }
      }
    }
  }
`

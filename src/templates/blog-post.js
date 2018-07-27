import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet'
import Head from '../layouts/head'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'
import Line from '../components/rounded-line'
import '../layouts/template-styles/blog-post-style-1.css'
import Color from '../layouts/colors'
import SocialMediaButtons from '../components/socialMediaButtons'
import RelatedPosts from '../components/RelatedPostsSection'
import BottomNavigation from '../components/BottomNavigation'
import JimmyHead from './images/jimmy.png'
import YvonneHead from './images/yvonne.png'

const FrontImage = styled.img`
  max-height: 200px;
  width: 100%;
  margin-top: 15px;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0 2px 10px #eee;
`
const TitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`

const Title = styled.h1`
  text-align: left;
  margin-bottom: 5px;
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: left;
`
const AuthorAndDate = styled.div`
  display: flex;
`

const Author = styled.h4`
  color: #777;
`

const Timestamp = styled.h4`
  color: #999;
`

const Attribution = styled.div`
  margin-top: ${props=>props.offset}px;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 10px;
    width: calc(100% - 20px);
  }
`


const BlogPost = (props) => {
  const thisPostsId = props.pathContext.id;
  const { relatedPosts, blogPostData: post } = props.data;
  let related = [];
  // remove self from related posts
  for( let i = 0; i < relatedPosts.edges.length; i++ ){
    if (relatedPosts.edges[i].node.id !== thisPostsId) {
      related.push(relatedPosts.edges[i]);
    }
  }
  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        slug={post.fields.slug}
        related={related}
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
    this.state = { topOffset: 108 }
  }

  componentDidMount() {
    // this.setState({topOffset: document.querySelector('h1').getBoundingClientRect().x});

    // TODO: add line to h2
    // console.log(document.getElementsByTagName('h2'))
    // document.querySelector('h2').insertAdjacentHTML('afterend','<span>hello</span>')
  }

  render() {
    const { content, contentComponent, frontmatter, slug, related} = this.props;
    const  {
      description,
      tags,
      title,
      dateCreated,
      dateModified,
      author,
      color,
      smTitle,
      smDescription,
      image
    } = frontmatter;
    const dateOptions = {month: "2-digit", day: "2-digit", year: "2-digit", hour: '2-digit', minute:'2-digit'}
    const dateCreatedObj = new Date(dateCreated);
    const dateModifiedObj = new Date(dateCreated);
    const timestamp = (dateCreatedObj.getTime() !== dateModifiedObj.getTime()) ?
      `Last updated on \r\n${dateModifiedObj.toLocaleString([], dateOptions)}` :
      `Published on ${dateCreatedObj.toLocaleString([], dateOptions)}`;
    const PostContent = contentComponent || Content;
    const SocialTitle = smTitle || title;
    const SocialDescription = smDescription || description;
    const urlToFrontImage = image ? "https://blog.bythebay.cool"+image : undefined;
    let headImg = null;
    if (author) {
      switch (author.toLowerCase()) {
        case 'jimmy chion':
          headImg = JimmyHead;
          break;
        case 'yvonne leow':
          headImg = YvonneHead;
          break;
        default:
          break;
      }
    }
    return (
      <div>
        <Head
          url={`https://blog.bythebay.cool/${slug}`}
          title={`${SocialTitle} – By The Way`}
          headline={SocialTitle || "By The Way blog post"}
          description={SocialDescription || "Yes of course it's something interesting."}
          author={author}
          dateCreated={dateCreatedObj}
          dateModified={dateModifiedObj}
          image={urlToFrontImage}
        />
        <Row>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={6}
            lgOffset={1} lg={6}
          >
            <TitleContainer>
              <Spacer height={60} xsHeight={30}/>
              <Title>{title}</Title>
              <Subtitle>{description}</Subtitle>
            </TitleContainer>
          </Col>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={4}
            lgOffset={1} lg={4}
          >
            <Attribution offset={this.state.topOffset}>
              <Line color={Color(color)}/>
              <Spacer height={25}/>
              <AuthorAndDate>
                { headImg && <img className='author-head-img' src={headImg} alt="author"/> }
                <div>
                  <Author>By {author}</Author>
                  <Timestamp>{timestamp}</Timestamp>
                </div>
              </AuthorAndDate>
            </Attribution>

          </Col>
        </Row>
        <div className="blog-post-body">
          {image && <FrontImage src={image}/>}
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
        <BottomNavigation/>
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
  query BlogPostByID($id: String!, $tags: [String!]!) {
    blogPostData: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        author
        dateCreated
        dateModified
        title
        description
        color
        smTitle
        smDescription
        tags
        image
      }
    }

    relatedPosts: allMarkdownRemark(
      limit: 4,
      sort: {fields: [frontmatter___dateCreated], order: DESC},
      filter: {frontmatter: {tags: {in: $tags}}}
    ) {
      edges {
        node {
          id
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

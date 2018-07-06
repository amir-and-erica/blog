import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'

const Container = styled.div`
  text-align: center;
`


class TagRoute extends React.Component {
  render() {
    const {data, pathContext} = this.props;
    const posts = data.allMarkdownRemark.edges
    const postLinks = posts.map(post => {
      const {frontmatter, fields} = post.node;
      return(
        <Link key={fields.slug} to={fields.slug}>
          <h2>{frontmatter.title}</h2>
        </Link>
      )
    })
    const tag = pathContext.tag
    const title = data.site.siteMetadata.title
    const totalCount = data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <React.Fragment>
        <Helmet title={`${tag} | ${title}`} />
        <Spacer height={70}/>
        <Container>
          <h4>{tagHeader}</h4>
          {postLinks}
          <Spacer height={70}/>
          <Link to="/tags/"><h3>Browse all topics</h3></Link>
        </Container>
      </React.Fragment>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

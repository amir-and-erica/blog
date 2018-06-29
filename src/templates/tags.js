import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class TagRoute extends React.Component {
  render() {
    const {data, pathContext} = this.props;
    const posts = data.allMarkdownRemark.edges
    const postLinks = posts.map(post => {
      const {frontmatter, fields} = post.node;
      return(
        <li key={fields.slug}>
          <Link to={fields.slug}>
            <h2>{frontmatter.title}</h2>
          </Link>
        </li>
      )
    })
    const tag = pathContext.tag
    const title = data.site.siteMetadata.title
    const totalCount = data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <div>
        <Helmet title={`${tag} | ${title}`} />
        <div>
          <h3>{tagHeader}</h3>
          <ul>
            {postLinks}
          </ul>
          <Link to="/tags/">Browse all tags</Link>
        </div>
      </div>
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

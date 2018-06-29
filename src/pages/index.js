import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const allPosts = posts.map(({ node: post }) => (
        <div className="content" key={post.id}>
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span>&bull;</span>
          <p>{post.frontmatter.date}</p>

          {post.excerpt}
          <Link to={post.fields.slug}>
            Keep Reading →
          </Link>
        </div>
      ));
    return (
      <div>
        <div className="content">
          <h1>Latest Stories</h1>
        </div>
        {allPosts}
      </div>
    )
  }
}

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

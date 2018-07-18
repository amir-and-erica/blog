import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    frontmatter={{
      title:entry.getIn(['data','title']),
      description:entry.getIn(['data','description']),
      author:entry.getIn(['data','author']),
      date:entry.getIn(['data','date']),
      image:entry.getIn(['data','image']),
    }}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

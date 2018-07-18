import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  console.log(entry)
  return(
    <BlogPostTemplate
      content={widgetFor('body')}
      frontmatter={{
        title:entry.getIn(['data','title']),
        description:entry.getIn(['data','description']),
        author:entry.getIn(['data','author']),
        date:entry.getIn(['data','date']),
        image:entry.getIn(['data','image']),
        color: entry.getIn(['data','color'])
      }}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

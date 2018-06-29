import React from 'react'
import PropTypes from 'prop-types'

const HTMLContent = (props) => {
  const {className, content} = props;
  return(
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export {HTMLContent};
export default Content;

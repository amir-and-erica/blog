import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

const TemplateWrapper = (props) => (
  <div>
    <Helmet title="By The Bay blog" />
    <Navbar />
    {props.children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

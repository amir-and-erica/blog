import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from './footer'
import {Spacer} from './util'
import './style.css'

const TemplateWrapper = (props) => (
  <div style={{background:"white"}}>
    <Helmet title="By The Bay blog" />
    <Navbar />
    {props.children()}
    <Spacer height={70}/>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

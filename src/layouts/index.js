import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import ReturnLink from '../components/ReturnLink'
import Footer from './footer'
import {Spacer} from './util'
import './style.css'

const TemplateWrapper = (props) => (
  <div style={{background:"white"}}>
    <Navbar />
    <ReturnLink/>
    {props.children()}
    <Spacer height={70}/>
    <Footer/>
  </div>
)



export default TemplateWrapper

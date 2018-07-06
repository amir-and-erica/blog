import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {TagsContainer, TagLink, TagTitle} from '../../components/TagsSection'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Container >
    <Helmet title={`Tags | ${title}`} />

    <h1>Browse by topic</h1>
    <TagsContainer >
      {group.map(tag => (
        <TagLink key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          <TagTitle>{tag.fieldValue} ({tag.totalCount})</TagTitle>
        </TagLink>
      ))}
    </TagsContainer>
  </Container>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

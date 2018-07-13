import React from 'react'
import Head from '../../layout/head'
import Link from 'gatsby-link'
import styled from 'styled-components'
import TemplateWrapper from '../../layout/index'
import {TagsContainer, TagLink, TagTitle} from '../../components/TagsSection'
import {kebabCase} from 'lodash'

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
  <TemplateWrapper>
    <Container >
      <Head
        url={`https://blog.bythebay.cool/tags/`}
        title={`Tags | ${title}`}
        headline={`${title} posts by tags`}
        description="A collection of posts"
      />

      <h1>Browse by topic</h1>
      <TagsContainer >
        {group.map(tag => (
          <TagLink key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <TagTitle>{tag.fieldValue} ({tag.totalCount})</TagTitle>
          </TagLink>
        ))}
      </TagsContainer>
    </Container>
  </TemplateWrapper>
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

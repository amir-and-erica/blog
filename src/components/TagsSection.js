import React from 'react'
import styled from 'styled-components'
import {Spacer} from '../layouts/util'
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'
import Color from '../layouts/colors'

const Container = styled.div`
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TagsTitle = styled.h4`
  text-align: center;
`

export const TagLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  background-color: ${Color('teal')};
  padding: 2px 10px;
  margin-right: 10px;
  margin-bottom: 3px;
  border-radius: 4px;
  text-align: left;
  @media not all and (hover: none) {
    &:hover {
      color: white;
      background-color: ${Color('teal', 0, 10)};
    }
  }
`;

export const TagTitle = styled.h3`
  margin: 0;
`

const TagsSection = (props) => {
  const tags = props.data;
  const postTags = tags && tags.length ? (
    <TagsContainer>
      {tags.map(tag => (
        <TagLink key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}>
          <TagTitle>{tag}</TagTitle>
        </TagLink>
      ))}
    </TagsContainer>
  )
  : null;
  return(
    postTags ?
    <div>
      <TagsTitle>More posts on the topics of</TagsTitle>
      <Spacer height={15}/>
      {postTags}
    </div>
    :
    <div/>
  );
}

export default TagsSection

/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Card from './Card'
import { colors } from '../../tailwind'

const GridContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const GridRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const ProjectGrid = ({ projects }) => (
  <GridContainer>
    <GridRow>
      {projects.map(project => (
        <Card
          title={project.title}
          bg={project.acf.project_color}
          key={`proj-card-${project.id}`}
          img={project.featured_media.localFile.childImageSharp}
        />
      ))}
    </GridRow>
  </GridContainer>
)

export const BlogGrid = ({ posts }) => (
  <GridContainer>
    <GridRow>
      {posts.map(post => (
        <Card
          title={post.title}
          bg={colors.grey}
          key={post.id}
          slug={post.slug}
          type="blog"
          media={post.featured_media}
        />
      ))}
    </GridRow>
  </GridContainer>
)

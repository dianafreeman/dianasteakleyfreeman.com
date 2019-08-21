/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import ProjectCard from './ProjectCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

class CardGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: this.props.projects,
    }
  }
  // get the number of projects
  // chooose three per row

  render() {
    return (
      <GridContainer>
        <GridRow>
        {this.state.projects.map(project => (
          <ProjectCard
            title={project.title}
            bg={project.acf.project_color}
            key={`proj-card-${project.wordpress_id}`}
            img={project.featured_media.localFile.childImageSharp.resolutions.src}
          />
        ))}
        </GridRow>
      </GridContainer>
    )
  }
}
export default CardGrid

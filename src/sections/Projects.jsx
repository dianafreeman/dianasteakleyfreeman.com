import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Title, BigTitle } from '../elements/Titles'
import { ParallaxBackground, Section } from '../elements/Parallax'
import { ProjectGrid } from '../components/CardGrid'
import { UpDown, UpDownWide } from '../styles/animations'
import { hidden } from '../styles/utils'

const IconWrapper = styled.a`
  ${tw`absolute text-white rounded-full border-solid border text-4xl flex p-2`}
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  background: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const Projects = ({ offset, technologies, projects }) => {
  return (
    <>
      <ParallaxBackground speed={0.3} offset={offset}>
        <UpDownWide>{/* some stuff */}</UpDownWide>
        <UpDown>{/* Icons will Go Here */}</UpDown>
      </ParallaxBackground>
      <Section offset={offset} speed={0.1}>
        <BigTitle>Projects</BigTitle>
        <div>
          <ProjectGrid projects={projects} />
        </div>
      </Section>
    </>
  )
}

export default Projects

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
  technologies: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
}

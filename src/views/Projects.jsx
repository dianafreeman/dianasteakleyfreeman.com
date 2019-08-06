import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaBootstrap, FaGrunt, FaSass, FaHtml5, FaCss3, FaReact, FaAdobe } from 'react-icons/fa'
import { colors } from '../../tailwind'
import { Title, BigTitle } from '../elements/Titles'
import { Divider, Section } from '../elements/Parallax'
import ProjectSlider from '../components/Slider'
import { UpDown, UpDownWide } from '../styles/animations'
import { hidden } from '../styles/utils'
import SVG from '../components/SVG'

const IconWrapper = styled.a`
  ${tw`absolute text-white rounded-full border-solid border text-4xl flex p-2`}
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  background: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const Projects = ({ children, offset }) => (
  <>
    <Divider speed={0.3} offset={offset}>
      <UpDownWide>
        <IconWrapper fill={colors['purple-dark']} left="80%" top="10%">
          <FaBootstrap />
        </IconWrapper>
        <IconWrapper fill={colors['orange-dark']} left="90%" top="30%">
          <FaGrunt />
        </IconWrapper>
        <IconWrapper stroke={colors['blue-lightest']} left="30%" top="45%">
          <FaCss3 />
        </IconWrapper>
        <IconWrapper icon="circle" fill={colors['pink-dark']} left="70%" top="60%">
          <FaSass />
        </IconWrapper>
      </UpDownWide>
      <UpDown>
        <IconWrapper icon="circle" fill={colors['blue-dark']} left="55%" top="60%">
          <FaHtml5 />
        </IconWrapper>
        <IconWrapper fill={colors['blue-darkest']} left="75%" top="30%">
          <FaReact />
        </IconWrapper>
        <IconWrapper icon="upDown" hiddenMobile fill={colors['grey-darkest']} left="45%" top="45%">
          <FaAdobe />
        </IconWrapper>
      </UpDown>
    </Divider>
    <Section offset={`${offset}`} speed={0.1}>
        <BigTitle>Projects</BigTitle>
      <ProjectSlider />
    </Section>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Section } from '../elements/Parallax'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const Projects = ({ children, offset }) => (
  <>
    <Divider
      bg="linear-gradient(to right,#555454 0%, #23262b 100%);"
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={0.4}
      offset={offset}
      factor={1}
    >
      <Section>
        <p>Icons Go Here</p>
      </Section>
    </Divider>
    <Content speed={0.4} offset={`${offset}`} factor={1}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

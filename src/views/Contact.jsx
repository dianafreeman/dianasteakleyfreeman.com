import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { FaTwitter, FaLinkedin, FaGithub, FaDesktop, FaMedium } from 'react-icons/fa'
import { Divider } from '../elements/Parallax'
import Content from '../elements/Content'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'

const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${waveAnimation('20s')};
  }
`

const SocialButton = styled.a`
  ${tw`p-5`}
  background: ${colors.black};
  border: 1px: solid white;
  color: white;
  border-radius: 100%;
  padding: 1em;
  margin: 1em;
  
`

const Contact = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>
      <WaveWrapper>
        <InnerWave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SocialButton href="" fill={colors['blue-lightest']} target="_blank" rel="noreferrer noopener">
          <FaLinkedin />
        </SocialButton>
      </UpDown>
      <UpDownWide>
        <SocialButton href="" fill={colors['grey-darkest']} target="_blank" rel="noreferrer noopener">
          <FaTwitter />
        </SocialButton>
        <SocialButton href="" fill={colors['grey-darkest']} target="_blank" rel="noreferrer noopener">
          <FaGithub />
        </SocialButton>
      </UpDownWide>
    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

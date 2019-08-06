import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import styled, { css } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import { fonts } from '../../tailwind'

const Wrapper = styled.div``
const TypedWrapper = styled.div`
  position: absolute;
  right: 1em;
  text-align: right;
  width: 60%;
`
const TargetSpan = styled.span`
  white-space: normal;
`
const Typefaces = [fonts.typed, fonts.creative, false]
const HeroSub = styled(Subtitle)`
  opacity: 0;
`

class TypedTitle extends Component {
  componentDidMount() {
    const { strings } = this.props
    const hideCursor = typed => {
      typed.cursor.style.display = 'none'
    }
    // TypedJS Options
    const options = {
      strings,
      backspeed: 1000,
      typeSpeed: 90,
      showCursor: true,
      autoInsertCss: true,
      startDelay: 1000,
      onComplete: hideCursor,
    }
    // Set this this.el to refer to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <Wrapper>
          <TypedWrapper className="type-wrap">
            <TargetSpan
              ref={el => {
                this.el = el
              }}
            />
          </TypedWrapper>
        </Wrapper>
      </>
    )
  }
}

export default TypedTitle

TypedTitle.propTypes = {
  strings: PropTypes.array.isRequired,
}

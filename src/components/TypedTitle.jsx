import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

const Wrapper = styled.div``
const TypedWrapper = styled.div``
const TargetSpan = styled.span`
  white-space: normal;
`

class TypedTitle extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // this.setState({ complete: false })

    const onComplete = typed => {
      typed.cursor.style.display = 'none'
      Object.values(this.el.children).map(el => (el.classList.length > 0 ? el.classList.remove(el.classList) : false))
    }

    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      backspeed: 1000,
      typeSpeed: 90,
      showCursor: true,
      autoInsertCss: true,
      startDelay: 1000,
      onComplete,
    }
    // this.el refers to the <span> in the render() method
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
        <Subtitle>I'm Diana</Subtitle>
        <Subtitle>How can I help?</Subtitle>
      </>
    )
  }
}

export default TypedTitle

TypedTitle.propTypes = {
  strings: PropTypes.array.isRequired,
}

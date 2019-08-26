import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Typed from 'typed.js'
import { BigTitle } from '../elements/Titles'

const Wrapper = styled.div``
const TypedWrapper = styled.div`
  text-align: center;
  padding: 2em;
`
const TargetSpan = styled(BigTitle)`
  display: inline;
  white-space: normal;

  .typed-cursor {
    color: white;
    font-size: 100%;
    font-family: 'Cantata One', serif;
  }
`

class TypedTitle extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
  }

  componentDidMount() {
    const { strings } = this.props

    const hideCursor = typed => {
      typed.cursor.style.display = 'none'
    }
    const onComplete = typed => {
      hideCursor(typed)
      this.setState({ complete: true })
    }
    // TypedJS Options
    const options = {
      strings,
      backspeed: 1000,
      typeSpeed: 120,
      showCursor: true,
      autoInsertCss: true,
      startDelay: 1000,
      onComplete,
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
    const { complete } = this.state
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

import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import styled, { css } from 'styled-components'
import { BigTitle } from '../elements/Titles'

const Wrapper = styled.div``
const TypedWrapper = styled.div`
  text-align: center;
`
const TargetSpan = styled.span`
  white-space: normal;
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
      typeSpeed: 90,
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
            <BigTitle>
              <TargetSpan
                ref={el => {
                  this.el = el
                }}
              />
            </BigTitle>
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

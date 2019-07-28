import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import { useSpring, animated } from 'react-spring'

class TypedTitle extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    const onStringTyped = (index, el) => {
      console.log(el)
    }

    const onComplete = () => {
      console.log('done')
    }
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      backspeed: 1000,
      typeSpeed: 90,
      showCursor: true,
      autoInsertCss: true,
      startDelay: 1800,
      onStringTyped,
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
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'normal' }}
            ref={el => {
              this.el = el
            }}
          />
        </div>
      </div>
    )
  }
}

export default TypedTitle

TypedTitle.propTypes = {
  strings: PropTypes.array.isRequired,
}

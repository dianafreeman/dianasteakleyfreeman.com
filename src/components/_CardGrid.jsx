
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

const Container = styled.div`
  ${tw` w-2/3 block absolute`}
  right: 5vw;
`
const NavCard = styled.div`
  ${tw`shadow-lg rounded-lg text-white mt-3 text-center mx-auto relative`};
  background: ${props => props.bg};
  height: 100px;
`
const NavTitle = styled.h4`
  ${tw`text-white relative text-center text-xl`}
`
class CardGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: null,
      nav: null,
      projects: this.props.projects,
    }
  }

  componentDidMount() {
    this.setState({
      slider: this.slider,
      nav: this.nav,
    })
  }

  render() {
    const SliderSettings = {
      asNavFor: this.state.nav,
      ref: slider => (this.slider = slider),
      slidesToShow: 1,
      swipeToSlide: false,
      focusOnSelect: false,
      arrows: false,
    }

    const NavSettings = {
      asNavFor: this.state.slider,
      centerMode: true,
      slidesToShow: 3,
      ref: slider => (this.nav = slider),
      arrows: true,
      swipeToSlide: true,
      focusOnSelect: true,
    }

    return (
      <Container>
        <Slider {...SliderSettings} key="slider">
          {this.state.projects.map(project => (
            <ProjectCard
              title={project.title}
              bg={project.acf.project_color}
              key={`proj-card-${project.wordpress_id}`}
              img={project.featured_media.localFile.childImageSharp.resolutions.src}
            />
          ))}
        </Slider>
        <Slider {...NavSettings} key="slider-nav">
          {this.state.projects.map(project => (
            <NavCard key={`nav-card${project.wordpress_id}`} bg={project.acf.project_color}>
              <NavTitle key={`nav-title${project.wordpress_id}`}>{project.title}</NavTitle>
            </NavCard>
          ))}
        </Slider>
      </Container>
    )
  }
}
export default CardGrid

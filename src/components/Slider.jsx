/* eslint-disable */
import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import ProjectCard from './ProjectCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProjectsWrapper = styled(Slider)`
  ${tw`justify-between mt-8 lg:w-2/3 align-right`};
  `

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
      <ProjectsWrapper {...settings}>
        <ProjectCard
          title="Freiheit"
          link="https://www.behance.net/gallery/58937147/Freiheit"
          bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          This project is my entry to Adobe's #ChallengeYourPerspective contest.
        </ProjectCard>
        <ProjectCard
          title="Harry Potter"
          link="https://www.behance.net/gallery/52915793/Harry-Potter"
          bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
        >
          I entered the DOCMA 2017 award with this Harry Potter inspired image.
        </ProjectCard>
        <ProjectCard
          title="Tomb Raider"
          link="https://www.behance.net/gallery/43907099/Tomb-Raider"
          bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
        >
          Recreation of a Tomb Raider Wallpaper (Fan Art)
        </ProjectCard>
        <ProjectCard
          title="Eagle"
          link="https://www.behance.net/gallery/38068151/Eagle"
          bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
        >
          A fantasy image manipulation relocating the habitat of wild animals.
        </ProjectCard>
      </ProjectsWrapper>
  );
  };
export default ProjectSlider

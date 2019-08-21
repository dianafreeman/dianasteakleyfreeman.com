/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";

const CardWrapper = styled.div`
  ${tw`shadow-lg no-underline rounded-lg text-white w-3/5 relative text-center`};
  background: ${props => props.bg}50;
  min-height: 200px;
  margin: 1em;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
;`

const TextWrapper = styled.div`
  ${tw`font-sans text-small`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const CardTitle = styled.h3`
  font-weight: 500;
`;

const ProjectCard = ({ title, bg, img }) => {
  return (
    <CardWrapper bg={bg}>
      {/* <ImgWrapper img={img}> */}
        <CardTitle>{title}</CardTitle>
      {/* </ImgWrapper> */}
    </CardWrapper>
  );
};
export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
};

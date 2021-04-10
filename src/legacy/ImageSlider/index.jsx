import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import { styled } from '@material-ui/core/styles';
import { useTransition, animated, useSpring } from 'react-spring';

const ImageWrapper = styled(animated(Box))({
  position: 'relative',
  borderRadius: '100%',
  width: '100%',
  height: '100%',
  textAlign: 'center',
});

const DIRECTIONS = {
  PREV: 'PREV',
  NEXT: 'NEXT',
};

function ImageSlider({ images, startingIndex, size }) {
  if (!images)
    return (
      <Alert severity="error">
        <code>images</code> are required.
      </Alert>
    );

  const [imageIdx, setImageIdx] = useState(startingIndex);
  const { NEXT, PREV } = DIRECTIONS;

  const [springDirection, setSpringDirection] = useState(NEXT);

  const maxIndex = images.length - 1;
  const nextSlideIndex = (currentIdx) =>
    currentIdx === maxIndex ? 0 : currentIdx + 1;
  const prevSlideIndex = (currentIdx) =>
    currentIdx === 0 ? maxIndex : currentIdx - 1;

  const goToNextSlide = async () => {
    await setSpringDirection(NEXT);
    setImageIdx(nextSlideIndex);
  };
  const goToPrevSlide = async () => {
    await setSpringDirection(PREV);
    setImageIdx(prevSlideIndex);
  };

  const maybeClickedLeftSection = (e) => {
    const { offsetLeft } = e.currentTarget;
    const halfSize = size / 2;
    const mousePos = { x: e.clientX, y: e.clientY };
    const halfwayPoint = offsetLeft + halfSize;
    const didClickLeft = mousePos.x < halfwayPoint;
    return didClickLeft;
  };

  const handleClick = (e) => {
    const clickedLeftSection = maybeClickedLeftSection(e);

    if (clickedLeftSection) return goToPrevSlide();
    goToNextSlide();
  };

  const prevOffset = springDirection === PREV ? -(size * 2) : size * 2;
  const nextOffset = springDirection === PREV ? size * 2 : -(size * 2);

  const transitions = useTransition(imageIdx, null, {
    from: { left: prevOffset },
    enter: { left: 0 },
    leave: { left: nextOffset },
  });

  return (
    <Box
      height={size}
      width={size}
      borderRadius="100%"
      bgcolor="lightblue"
      marginBottom={4}
      marginTop={4}
      onClick={handleClick}
    >
      <Box
        height="inherit"
        pt={3}
        position="relative"
        bgcolor="primary"
        overflow="hidden"
        borderRadius="100%"
      >
        {transitions.map(({ item, key, props }) => {
          return (
            <ImageWrapper
              style={{ ...props, position: 'absolute', height: '100%' }}
            >
              <img src={images[item]} style={{ height: 'inherit' }} alt="" />
            </ImageWrapper>
          );
        })}
      </Box>
    </Box>
  );
}

ImageSlider.propTypes = {
  startingIndex: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ImageSlider.defaultProps = {
  startingIndex: 0,
  size: 200,
};
export default ImageSlider;

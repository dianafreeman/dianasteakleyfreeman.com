import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.

function ParallaxLayer({ children, offset, value, speed = 0.1 }) {
  const calc = (o) => `translateY(${o * speed}px)`;
  const ref = useRef();
  const [{ topOffset }, set] = useSpring(() => ({ topOffset: offset }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const topOffset = window.pageYOffset - posY;
    set({ topOffset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // CHECK THE IMPLEMENTATON IN REACT-SPRING
  //

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
      }}
      ref={ref}
    >
      <animated.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100px',
          top: topOffset,
          transform: topOffset.interpolate(calc),
        }}
      >
        {children}
      </animated.div>
    </div>
  );
}

ParallaxLayer.propTypes = {};

export default ParallaxLayer;

import { useState, useLayoutEffect, useRef } from 'react';

const useElementVisibility = () => {
  /*
   * -- usage --
   * const [ref, {isVisible, percentVisible}] = useElementVisibility()
   *
   */
  const [isVisible, setIsVisible] = useState(false);
  const [percentVisible, setPercentVisible] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (el) => el.getBoundingClientRect().top;
    const getHeight = (el) => el.offsetHeight;

    const divTopPosition = topPos(divRef.current);

    const divHeight = getHeight(divRef.current);

    const onScroll = () => {
      console.log('scrolling');
      const scrollPos = window.scrollY + window.innerHeight;
      /* Element has been scrolled to */
      console.log(scrollPos);
      if (divTopPosition < scrollPos) {
        setIsVisible((state) => !state);
        let activePercentVisible = ((scrollPos - divTopPosition) * 100) / divHeight;
        if (activePercentVisible > 100) activePercentVisible = 100;
        if (activePercentVisible < 0) activePercentVisible = 0;
        setPercentVisible(activePercentVisible);
      } else if (divTopPosition > scrollPos) {
        /* Element has been  scrolled away (up) */
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [divRef.current]);

  return [divRef, { isVisible, percentVisible }];
};

export default useElementVisibility;

// const useVisibility = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [percentVisible, setPercentVisible] = useState(0);

//   const onScroll = () => {
//     console.log('scrolling');
//     const scrollPos = window.scrollY + window.innerHeight;
//     /* Element has been scrolled to */
//     console.log(scrollPos);
//     if (divTopPosition < scrollPos) {
//       setIsVisible((state) => !state);
//       let activePercentVisible = ((scrollPos - divTopPosition) * 100) / divHeight;
//       if (activePercentVisible > 100) activePercentVisible = 100;
//       if (activePercentVisible < 0) activePercentVisible = 0;
//       setPercentVisible(activePercentVisible);
//     } else if (divTopPosition > scrollPos) {
//       /* Element has been  scrolled away (up) */
//       setIsVisible(false);
//     }
//   };
//   return [isVisible, percentVisible];
// };

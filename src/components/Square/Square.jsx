import React, { useRef, useState, useEffect } from 'react';

const Square = ({ props }) => {
  const heightRef = useRef(null);
  const [wrapperHeight, setHeight] = useState(0);
  useEffect(() => {
    heightRef.current && setHeight(heightRef.current.clientWidth);
  });
  return <div ref={heightRef} style={{minHeight: wrapperHeight}} {...props}/>
}

export default Square;

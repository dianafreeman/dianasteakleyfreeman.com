import React, { useState, useRef, useEffect } from 'react';

function useResource() {
  const [resource, set] = useState();
  const ref = useRef();

  useEffect(() => void set(ref.current), [ref]);
  return [ref, resource];
}

export default useResource;

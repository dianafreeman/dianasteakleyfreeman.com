import { useEffect, useState } from "react";

function useWindowDimensions() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    // Clean up!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default useWindowDimensions;

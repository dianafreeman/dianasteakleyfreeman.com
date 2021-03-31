import { useEffect } from 'react';
import debounce from './debounce';

function useDebouncedScroll(callbackFn) {
  useEffect(() => {
    const handleScroll = () => callbackFn();
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll));
    };
  }, [debounce]);
}

export default useDebouncedScroll;

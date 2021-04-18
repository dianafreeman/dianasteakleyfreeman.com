export default function debounce(func, wait = 5, immediate = true, ...rest) {
  let timeout;
  return function () {
    const context = this;
    const args = rest;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

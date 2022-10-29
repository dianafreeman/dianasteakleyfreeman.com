/** @type {import('@sveltejs/kit').ParamMatcher} */
const SUBCATS = ['code', 'art', 'design']

export function match(param) {
    return SUBCATS.includes(param);
  }
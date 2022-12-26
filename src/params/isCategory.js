/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return ["blog", "projects", "resources"].includes(param);
}

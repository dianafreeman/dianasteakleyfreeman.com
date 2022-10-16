import LayoutStore from '$stores/LayoutStore';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const { validSubCategories } = LayoutStore
    return validSubCategories.includes(param);
}
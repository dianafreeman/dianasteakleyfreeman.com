import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<h1 class="my-10 font-bold text-5xl" data-svelte-h="svelte-1gljkgc">Coming soon!</h1>`;
});
export {
  Page as default
};

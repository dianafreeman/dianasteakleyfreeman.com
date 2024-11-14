import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { M as Masonry } from "../../../chunks/Masonry.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="pb-10"><h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow mb-4 text-center font-black pt-7">${escape(data.metadata.title)}.</h1> <p class="text-center my-10">${escape(data.metadata.description)}</p></div> ${validate_component(Masonry, "Masonry").$$render($$result, { items: data.entries }, {}, {})}`;
});
export {
  Page as default
};

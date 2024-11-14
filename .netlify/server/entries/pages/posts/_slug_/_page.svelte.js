import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { B as ButtonLink } from "../../../../chunks/ButtonLink.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="text-white px-6 py-10 lg:px-8"><div class="mx-auto max-w-3xl text-base/7"><h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow my-10 text-center font-black pt-7">${escape(data.title)}</h1> ${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      borders: false,
      iconProps: { type: "back", large: false },
      class: "my-5 bg-black text-white border border-dark-gray hover:text-sky-blue active:text-sky-blue focus:text-sky-blue p-5 my-10 font-bold",
      href: "/" + data.category.slug
    },
    {},
    {
      default: () => {
        return `Back to ${escape(data.category.title)}`;
      }
    }
  )} <div class="markdown mt-10"><!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --></div> <div class="my-5 text-right">${data.link ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      target: "_blank",
      href: data.link,
      iconProps: { type: "externalLink", large: true }
    },
    {},
    {
      default: () => {
        return `Open in new window`;
      }
    }
  )}` : ``}</div></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, b as add_attribute, g as each, v as validate_component } from "./ssr.js";
const MasonryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { imageSrc } = $$props;
  let { imageAltText } = $$props;
  let { tags } = $$props;
  let { target } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  if ($$props.imageAltText === void 0 && $$bindings.imageAltText && imageAltText !== void 0)
    $$bindings.imageAltText(imageAltText);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `  <div class="${escape("border-white", true) + " w-fit m-auto border break-inside-avoid mb-4 p-2 shadow-lg"}"><div class="min-w-sm max-w-sm overflow-hidden m-auto">${imageSrc ? `<img class="${"w-full " + escape("grayscale", true)}"${add_attribute("src", imageSrc, 0)}${add_attribute("alt", imageAltText, 0)}>` : ``} <div class="px-6 py-4"><div class="font-bold text-xl mb-2"><a${add_attribute("href", `/${target}`, 0)} class="${"outline-none " + escape("text-white", true) + " hover:text-sky-blue active:text-sky-blue focus:text-sky-blue"}">${escape(title)}</a></div> ${description ? `<p class="text-gray-700 text-base">${escape(description)}</p>` : ``}</div> <div class="px-6 pt-4 pb-2">${tags ? `${each(tags, (tag) => {
    return `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${escape(tag)} </span>`;
  })}` : ``}</div></div></div>`;
});
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="columns-1 md:columns-2 lg:columns-3">${each(items, (item) => {
    return ` ${validate_component(MasonryCard, "MasonryCard").$$render(
      $$result,
      {
        target: `/posts/${item.slug}`,
        title: item.title,
        imageSrc: item.image,
        date: new Date(item.date).toDateString()
      },
      {},
      {}
    )} `;
  })}</div>`;
});
export {
  Masonry as M
};

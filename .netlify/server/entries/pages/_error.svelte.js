import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-jisvly_START -->${$$result.title = `<title>Error ${escape($page.status)}</title>`, ""}<!-- HEAD_svelte-jisvly_END -->`, ""} <section class="h-full"><div class="align-center relative my-12 lg:max-w-3xl lg:p-5"><p class="text-6xl font-thin" data-svelte-h="svelte-1aan7w">what a <span class="font-bold">bummer.</span></p> <p class="mr-3 text-2xl font-thin">error ${escape($page.status)}.</p> ${``}</div></section>`;
});
export {
  Error as default
};

import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, d as compute_rest_props, v as validate_component, f as add_classes, g as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
import { I as Icon } from "../../chunks/Icon.js";
import { w as writable, d as derived } from "../../chunks/index2.js";
import resolveConfig from "tailwindcss/resolveConfig.js";
const app = "";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { type = "website" } = $$props;
  const defaults = {
    title: "Diana M. Steakley-Freeman",
    url: "dianasteakleyfreeman.com",
    description: "Portfolio, blog, and website for Diana M. Steakley-Freeman"
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ks988d_START -->${$$result.title = `<title>${escape($page.data?.meta?.title || `Home`)} | Diana M Steakley-Freeman</title>`, ""}<meta name="description"${add_attribute("content", $page.data?.meta?.description || defaults.description, 0)}><meta property="og:url"${add_attribute("content", $page.url.href || defaults.url, 0)}><meta property="og:type"${add_attribute("content", type, 0)}><meta property="og:title"${add_attribute("content", $page.data?.meta?.title || defaults.title, 0)}><meta property="og:description"${add_attribute("content", $page.data?.meta?.description || defaults.description, 0)}><!-- HEAD_svelte-ks988d_END -->`, ""}`;
});
const NavToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "borders", "animateBorders", "hideLabel", "label", "iconType"]);
  let { class: clazz = "" } = $$props;
  let { borders = true } = $$props;
  let { animateBorders = true } = $$props;
  let { hideLabel = false } = $$props;
  let { label } = $$props;
  let { iconType } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.borders === void 0 && $$bindings.borders && borders !== void 0)
    $$bindings.borders(borders);
  if ($$props.animateBorders === void 0 && $$bindings.animateBorders && animateBorders !== void 0)
    $$bindings.animateBorders(animateBorders);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.iconType === void 0 && $$bindings.iconType && iconType !== void 0)
    $$bindings.iconType(iconType);
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, { borders }, { animateBorders }, { class: clazz || "" }, $$restProps), {}, {
    default: () => {
      return `${label ? `<span${add_classes((hideLabel ? "sr-only" : "").trim())}>${escape(label)}</span>` : ``} ${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          type: iconType,
          large: true,
          class: "ml-2"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const tailwindConfig = {
  content: ["./src/**/*.{html,js,svelte,md}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#222222",
        black: "#090A0B",
        navy: "#3C6997",
        "sky-blue": "#5ADBFF",
        "yellow": "#FFDD4A",
        "orange": "#FE9000"
      },
      fontFamily: {
        code: ["VT323"],
        montserrat: ["Monserrat"],
        dyslexic: ["OpenDyslexic"],
        monospace: ["Inconsolata"],
        base: ["Karla"]
      }
    }
  },
  plugins: []
};
const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens;
function getBreakpointValue(breakpoint) {
  return parseInt(breakpoint.replace("px", ""));
}
getBreakpointValue(breakpoints.md);
const isMobile = writable(false);
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const _menuIsOpen = writable(false);
const menuIsOpen = derived(
  [isMobile, _menuIsOpen],
  ([$isMobile, $_menuIsOpen], set) => {
    set($isMobile ? $_menuIsOpen : true);
  }
);
const MainNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activePath;
  let $page, $$unsubscribe_page;
  let $menuIsOpen, $$unsubscribe_menuIsOpen;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_menuIsOpen = subscribe(menuIsOpen, (value) => $menuIsOpen = value);
  const navItemClasses = `outline-none hover:text-sky-blue focus:text-sky-blue active:text-sky-blue  hover:underline active:underline focus:underline font-bold text-xl flex items-center p-5 w-full `;
  let { items } = $$props;
  function toggleMenu() {
    _menuIsOpen.update((currentValue) => {
      return !currentValue;
    });
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.toggleMenu === void 0 && $$bindings.toggleMenu && toggleMenu !== void 0)
    $$bindings.toggleMenu(toggleMenu);
  activePath = $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_menuIsOpen();
  return `<nav class="" aria-label="Main Navigation"><div class="fixed bg-black z-50 w-screen flex flex-row justify-center md:flex border-dark-gray border-b">    <div class="w-full md:w-fit md:flex md:flew-row"> <div class="w-full md:flex md:w-fit md:flex-row">${validate_component(NavToggle, "NavToggle").$$render(
    $$result,
    {
      class: `${navItemClasses} md:hidden`,
      borders: !$menuIsOpen,
      label: "menu",
      iconType: "hamburger",
      elementProps: {
        "aria-expanded": $menuIsOpen,
        "aria-controls": "mainMenu"
      }
    },
    {},
    {}
  )} <ul id="mainMenu" class="flex list-none flex-col md:flex-row items-center justify-center w-full">${each(items, (item) => {
    return `<li class="${["w-full text-white list-none", !$menuIsOpen ? "hidden" : ""].join(" ").trim()}"${add_attribute("aria-hidden", !$menuIsOpen, 0)}><a${add_attribute("href", item.url, 0)}${add_attribute("class", `${activePath === item.url ? "underline text-yellow" : ""} animate-borders ${navItemClasses}`, 0)}>${escape(item.label)}</a> </li>`;
  })}</ul></div> </div> </div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navMenus = [
    {
      title: "main navigation",
      containerClass: "w-1/2 mb-8",
      items: [
        { href: "/", text: "Home" },
        { href: "/projects", text: "Projects" },
        { href: "/blog", text: "Blog" },
        { href: "/resources", text: "Resources" },
        { href: "/contact", text: "Contact" }
      ]
    },
    {
      title: "Trust",
      containerClass: "w-1/2 mb-8",
      items: [
        { href: "/privacy", text: "Privacy" },
        { href: "/feedback", text: "Feedback" }
      ]
    },
    {
      title: "Links",
      containerClass: "w-1/2 ",
      class: "flex flex-row gap-2",
      items: [
        {
          href: "https://github.com/dianafreeman",
          text: "GitHub"
        },
        {
          href: "https://twitter.com/dianasfreeman",
          text: "Twitter"
        },
        {
          href: "https://www.linkedin.com/in/dianasteakleyfreeman/",
          text: "linkedin"
        }
      ]
    }
  ];
  return `${each(navMenus, (menu) => {
    return `<div${add_attribute("class", menu.containerClass, 0)}><p class="font-black lowercase">${escape(menu.title)}.</p> <ul${add_attribute("class", menu.class, 0)}>${each(menu.items, (item) => {
      return `<li class="lowercase font-extralight text-lightest-gray"><a${add_attribute("href", item.href, 0)} class="hover:underline focus:underline active:underline hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none">${escape(item.text)}</a> </li>`;
    })}</ul> </div>`;
  })} <div class="flex-grow text-left lowercase" data-svelte-h="svelte-15hnbrs"><p class="font-bold">Diana M Steakley-Freeman. © 2024</p> <a href="https://github.com/dianafreeman/dianasteakleyfreeman.com" class="font-thin text-lightest-gray hover:underline focus:underline active:underline hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none">View this site on github.</a></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navItems = [
    { label: "home", url: "/" },
    { label: "projects", url: "/projects" },
    { label: "blog", url: "/blog" },
    { label: "resources", url: "/resources" },
    { label: "about", url: "/about" }
  ];
  afterNavigate(() => {
    _menuIsOpen.set(false);
  });
  return `${validate_component(Seo, "Seo").$$render($$result, {}, {}, {})}  <header>${validate_component(MainNav, "MainNav").$$render($$result, { items: navItems }, {}, {})}</header> <main><div id="spacer" class="h-[80px]"></div> ${slots.default ? slots.default({}) : ``}</main> <footer class="flex flex-row flex-wrap justify-between border-t border-dark-gray p-5 mt-5">${validate_component(Footer, "FooterNav").$$render($$result, {}, {}, {})}  </footer>`;
});
export {
  Layout as default
};

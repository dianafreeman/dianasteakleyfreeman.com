import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconType;
  let { class: clazz } = $$props;
  let { type } = $$props;
  let { large = false } = $$props;
  let { dontHide = false } = $$props;
  const ICON_CLASS_MAP = {
    check: "la-check",
    back: "lar la-hand-point-left",
    close: "la-times",
    collapse: "la-angle-up",
    cookie: "la-cookie",
    copyLink: "la-clipboard",
    expand: "la-angle-down",
    externalLink: "la-external-link-alt",
    filter: "la-filter",
    important: "la-exclamation-circle",
    menu: "la-bars",
    hamburger: "la-bars",
    next: "la-angle-right",
    question: "la-question-circle",
    settings: "la-cog",
    square: "la-stop"
  };
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.dontHide === void 0 && $$bindings.dontHide && dontHide !== void 0)
    $$bindings.dontHide(dontHide);
  iconType = type;
  return `<i${add_attribute("aria-hidden", dontHide ? null : true, 0)} class="${"las " + escape(ICON_CLASS_MAP[iconType], true) + " " + escape(large && "text-2xl", true) + " " + escape(clazz, true)}"></i>`;
});
export {
  Icon as I
};

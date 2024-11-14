import { c as create_ssr_component, d as compute_rest_props, k as createEventDispatcher, l as spread, o as escape_attribute_value, e as escape, p as escape_object, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "href", "iconProps", "borders", "animateBorders"]);
  let { class: clazz = "bg-yellow text-black p-5 my-10 font-bold" } = $$props;
  let { href } = $$props;
  let { iconProps } = $$props;
  let { borders = true } = $$props;
  let { animateBorders = true } = $$props;
  const borderClasses = animateBorders ? "animate-borders" : borders && "borders";
  const classes = `${borderClasses} cursor-pointer`;
  createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.borders === void 0 && $$bindings.borders && borders !== void 0)
    $$bindings.borders(borders);
  if ($$props.animateBorders === void 0 && $$bindings.animateBorders && animateBorders !== void 0)
    $$bindings.animateBorders(animateBorders);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape(classes, true) + " " + escape(clazz, true)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${iconProps ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      type: iconProps.type,
      large: iconProps.large,
      class: iconProps.class
    },
    {},
    {}
  )}` : ``} ${slots.default ? slots.default({}) : ``}</a>`;
});
export {
  ButtonLink as B
};

import { c as create_ssr_component, d as compute_rest_props, k as createEventDispatcher, l as spread, o as escape_attribute_value, e as escape, p as escape_object, b as add_attribute, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "buttonRef", "iconProps", "borders", "animateBorders", "type"]);
  let { class: clazz = "" } = $$props;
  let { buttonRef } = $$props;
  let { iconProps } = $$props;
  let { borders = true } = $$props;
  let { animateBorders = true } = $$props;
  let { type = "button" } = $$props;
  const borderClasses = animateBorders ? "animate-borders" : borders && "borders";
  const classes = `${borderClasses} cursor-pointer`;
  createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.buttonRef === void 0 && $$bindings.buttonRef && buttonRef !== void 0)
    $$bindings.buttonRef(buttonRef);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.borders === void 0 && $$bindings.borders && borders !== void 0)
    $$bindings.borders(borders);
  if ($$props.animateBorders === void 0 && $$bindings.animateBorders && animateBorders !== void 0)
    $$bindings.animateBorders(animateBorders);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<button${spread(
    [
      { type: escape_attribute_value(type) },
      {
        class: escape(classes, true) + " " + escape(clazz, true)
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", buttonRef, 0)}>${iconProps ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      type: iconProps.type,
      large: iconProps.large,
      class: iconProps.class
    },
    {},
    {}
  )}` : ``} ${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};

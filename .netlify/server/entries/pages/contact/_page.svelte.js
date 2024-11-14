import { c as create_ssr_component, k as createEventDispatcher, b as add_attribute, e as escape, g as each, v as validate_component, m as missing_component, a as subscribe } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const CheckboxField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClasses;
  let { id } = $$props;
  let { name } = $$props;
  let { label } = $$props;
  let { value } = $$props;
  let { checked } = $$props;
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  labelClasses = `m-1 flex h-fit w-full items-center p-2 md:w-fit ${"borders"}`;
  return `<label${add_attribute("for", id, 0)}${add_attribute("class", labelClasses, 0)}><i class="${"las text-2xl " + escape(checked ? "la-check" : "la-stop", true) + " mx-2"}" aria-hidden="true"></i> ${escape(label)} <input type="checkbox" class="sr-only"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("checked", checked, 1)}></label>`;
});
const SelectField_svelte_svelte_type_style_lang = "";
const css = {
  code: "select.svelte-9n7185{-webkit-appearance:none;width:100%;height:100%;border-radius:0;position:relative}select.svelte-9n7185:focus,select.svelte-9n7185:active{outline:1px solid white}option.svelte-9n7185{position:relative;width:100%}",
  map: null
};
const SelectField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { id } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { required } = $$props;
  createEventDispatcher();
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  $$result.css.add(css);
  return `<div class="select-wrapper"><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""} class="button border border-gray bg-dark-gray p-3 focus:bg-gray focus:outline focus:outline-white svelte-9n7185">${each(options, (opt) => {
    return `<option ${value === opt.value ? "selected" : ""}${add_attribute("value", opt.value, 0)} class="svelte-9n7185">${escape(opt.label)}</option>`;
  })}</select> </div>`;
});
const TextAreaField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { value } = $$props;
  let { required = false } = $$props;
  let { name = id } = $$props;
  let { error } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<textarea class="${escape(error ? "border-2 border-red-400" : "borders", true) + " text-gray-700 mb-3 min-h-[200px] w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""}>${escape(value || "")}</textarea>`;
});
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { value } = $$props;
  let { required } = $$props;
  let { error } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<input class="${escape(error ? "border-2 border-red-400" : "borders", true) + " text-gray-700 mb-3 w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"}"${add_attribute("id", id, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>`;
});
const { Object: Object_1 } = globals;
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { containerClasses = "" } = $$props;
  let { fieldType } = $$props;
  let { options = null } = $$props;
  let { label } = $$props;
  let { error = null } = $$props;
  let { hideLabel = false } = $$props;
  let { required = false } = $$props;
  let { id } = $$props;
  let { wrapper } = $$props;
  let value;
  const COMPONENT_MAP = {
    select: SelectField,
    textArea: TextAreaField,
    text: TextField,
    checkbox: CheckboxField
  };
  if (!Object.keys(COMPONENT_MAP).includes(fieldType))
    throw new Error(`ERROR: invalid type argument ${fieldType} supplied to FormField id ${id}`);
  const DEFAULT_PROPS = { name: id, value, id };
  const PROPS_MAP = {
    select: { ...DEFAULT_PROPS, options, value, label },
    textArea: { ...DEFAULT_PROPS },
    text: { ...DEFAULT_PROPS, validate: true },
    checkbox: { ...DEFAULT_PROPS, label, checked: false }
  };
  const isCheckbox = fieldType === "checkbox";
  const dispatch = createEventDispatcher();
  function handleChange(v) {
    dispatch("change", {
      value: v,
      label: options ? options.find((o) => o.value === v).label : label,
      name: id,
      id
    });
  }
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.fieldType === void 0 && $$bindings.fieldType && fieldType !== void 0)
    $$bindings.fieldType(fieldType);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        value !== void 0 && handleChange(value);
      }
    }
    $$rendered = `<div${add_attribute("class", containerClasses, 0)}${add_attribute("this", wrapper, 0)}>${!hideLabel && !isCheckbox ? `<label class="${"text-md text-gray-700 mb-2 block font-bold lowercase tracking-wide " + escape(error && "text-red-400", true)}"${add_attribute("for", id, 0)}>${escape(label)}.
      ${error ? `<span class="text-sm font-normal text-red-400">${escape(error)}.</span>` : ``}</label>` : ``} ${validate_component(COMPONENT_MAP[fieldType] || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign({}, PROPS_MAP[fieldType], { required }, { error }, { value }),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $$unsubscribe_formState;
  createEventDispatcher();
  const formState = writable({});
  $$unsubscribe_formState = subscribe(formState, (value) => value);
  const errors = writable({});
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let form;
  $$unsubscribe_errors();
  $$unsubscribe_formState();
  return `<h1 class="heading mx-auto mb-10 mt-5 w-2/3 text-center lowercase" data-svelte-h="svelte-19i875d">let&#39;s connect.</h1> <form method="POST" name="contact"${add_attribute("data-netlify", true, 0)} class="mx-auto w-full max-w-lg"${add_attribute("this", form, 0)}><div class="flex gap-3">${validate_component(FormField, "FormField").$$render(
    $$result,
    {
      containerClasses: "w-1/2",
      fieldType: "text",
      id: "firstName",
      label: "First Name",
      error: $errors["firstName"]
    },
    {},
    {}
  )} ${validate_component(FormField, "FormField").$$render(
    $$result,
    {
      containerClasses: "w-1/2",
      fieldType: "text",
      id: "lastName",
      label: "Last Name",
      error: $errors["lastName"]
    },
    {},
    {}
  )}</div> ${validate_component(FormField, "FormField").$$render(
    $$result,
    {
      fieldType: "text",
      id: "emailAddress",
      type: "email",
      label: "E-mail Address",
      error: $errors["emailAddress"]
    },
    {},
    {}
  )} ${validate_component(FormField, "FormField").$$render(
    $$result,
    {
      fieldType: "textArea",
      id: "message",
      label: "Message",
      error: $errors["message"]
    },
    {},
    {}
  )} <div class="flex w-full justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      animateBorders: true,
      class: "w-fit p-5"
    },
    {},
    {
      default: () => {
        return `Send`;
      }
    }
  )}</div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<div class="relative flex min-h-[75vh] flex-col justify-center bg-black">${validate_component(ContactForm, "ContactForm").$$render($$result, { title: "Let's Connect" }, {}, {})}</div>`;
});
export {
  Page as default
};

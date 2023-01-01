<script>
  import { createEventDispatcher } from "svelte";
  import CheckboxField from "./types/CheckboxField.svelte";
  import SelectField from "./types/SelectField.svelte";
  import TextAreaField from "./types/TextAreaField.svelte";
  import TextField from "./types/TextField.svelte";

  /** @type { string } */
  export let containerClasses = "";

  /** @type { string } */
  export let fieldType;

  /** @type { array } */
  export let options = null;

  /** @type { string } */
  export let label;

  /** @type { string | Object | null } */
  export let error = null;

  /** @type { boolean } */
  export let hideLabel = false;

  /** @type { boolean } */
  export let required = false;

  /** @type { string } string to associate label and input */
  export let id;

  export let wrapper;

  /** @type { string } */
  let value;

  const COMPONENT_MAP = {
    select: SelectField,
    textArea: TextAreaField,
    text: TextField,
    checkbox: CheckboxField
  };

  if (!Object.keys(COMPONENT_MAP).includes(fieldType))
    throw new Error(
      `ERROR: invalid type argument ${fieldType} supplied to FormField id ${id}`
    );
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
  $: {
    value !== undefined && handleChange(value);
  }
</script>

<div class={containerClasses} bind:this={wrapper}>
  {#if !hideLabel && !isCheckbox}
    <label
      class="text-md text-gray-700 mb-2 block font-bold lowercase tracking-wide {error &&
        'text-red-400'}"
      for={id}>
      {label}.
      {#if error}
        <span class="text-sm font-normal text-red-400">{error}.</span>
      {/if}
    </label>
  {/if}
  <svelte:component
    this={COMPONENT_MAP[fieldType]}
    {...PROPS_MAP[fieldType]}
    {required}
    {error}
    bind:value />
</div>

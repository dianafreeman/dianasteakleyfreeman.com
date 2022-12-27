<script>
  import { createEventDispatcher } from "svelte";
  import CheckboxField from "./types/CheckboxField.svelte";
  import SelectField from "./types/SelectField.svelte";
  import TextAreaField from "./types/TextAreaField.svelte";
  import TextField from "./types/TextField.svelte";

  /** @type { string } */
  export let containerClasses;

  /** @type { string } */
  export let type;

  /** @type { array } */
  export let options = null;

  /** @type { string } */
  export let label;

  /** @type { string | Object | null } */
  export let error = null;

  /** @type { boolean } */
  export let hideLabel = false;

  /** @type { string } string to associate label and input */
  export let id;

  /** @type { string } */
  let value;

  let clazz = "";
  export { clazz as class };

  const COMPONENT_MAP = {
    select: SelectField,
    textArea: TextAreaField,
    text: TextField,
    checkbox: CheckboxField
  };

  if (!Object.keys(COMPONENT_MAP).includes(type))
    throw new Error("ERROR: invalid type argument supplied to FormField");
  const DEFAULT_PROPS = { label, name: id, value, id };

  const PROPS_MAP = {
    select: { ...DEFAULT_PROPS, options },
    textArea: DEFAULT_PROPS,
    text: DEFAULT_PROPS,
    checkbox: { ...DEFAULT_PROPS, checked: false }
  };

  const isCheckbox = type === "checkbox";

  const dispatch = createEventDispatcher();
  function handleChange(v) {
    dispatch("change", { value: v, label, name: id, id });
  }

  $: value !== undefined && handleChange(value);
</script>

<div class={containerClasses}>
  {#if !hideLabel && !isCheckbox}
    <label
      class="text-md mb-2 block font-bold lowercase tracking-wide text-gray-700"
      for={id}>
      {label}.
    </label>
  {/if}
  <svelte:component
    this={COMPONENT_MAP[type]}
    {...PROPS_MAP[type]}
    class={clazz}
    bind:value />
  {#if error}
    <p class="text-sm font-bold text-red-400">{error}.</p>
  {/if}
</div>

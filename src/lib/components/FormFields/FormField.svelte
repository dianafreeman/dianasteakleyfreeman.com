<script>
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

  /** @type { string } */
  export let value;

  /** @type { string | Object | null } */
  export let error = null;

  /** @type { boolean } */
  export let hideLabel = false;

  /** @type { string } string to associate label and input */
  export let id;

  let clazz = "";
  export { clazz as class };

  const COMPONENT_MAP = {
    select: SelectField,
    textArea: TextAreaField,
    text: TextField,
    checkbox: CheckboxField
  };

  const DEFAULT_PROPS = { label, name: id, value, id };

  const PROPS_MAP = {
    select: { ...DEFAULT_PROPS, options },
    textArea: DEFAULT_PROPS,
    text: DEFAULT_PROPS,
    checkbox: { ...DEFAULT_PROPS, checked: false }
  };

  const isCheckbox = type === "checkbox";
</script>

<div class={containerClasses}>
  {#if !hideLabel && !isCheckbox}
    <label
      class="text-gray-700 text-md mb-2 block font-bold lowercase tracking-wide"
      for={id}>
      {label}.
    </label>
  {/if}
  <svelte:component
    this={COMPONENT_MAP[type]}
    {...PROPS_MAP[type]}
    class={clazz} />
  {#if error}
    <p class="text-sm font-bold text-red-400">{error}.</p>
  {/if}
</div>

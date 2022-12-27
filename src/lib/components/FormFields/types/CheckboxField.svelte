<script>
  import { createEventDispatcher } from "svelte";

  /** @type { string } */
  export let id;
  /** @type { string } */
  export let name;
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let value;

  let checked = false;
  let isFocused;

  const dispatch = createEventDispatcher();

  function handleFocusAndBlur(ev) {
    isFocused = !isFocused;
    console.log(ev.target.checked);
  }
  function handleChange(ev) {
    dispatch("change", { label, value, checked: ev.target.checked });
  }

  $: labelClasses = `m-1 flex h-fit w-full items-center p-2 md:w-fit ${
    isFocused ? "bg-dark-gray border border-white" : "borders"
  }`;
</script>

<label for={id} class={labelClasses}>
  <i
    class="las text-2xl {checked ? 'la-check' : 'la-stop'}  mx-2"
    aria-hidden="true" />
  {label}
  <input
    type="checkbox"
    class="sr-only"
    {id}
    {name}
    on:change={handleChange}
    on:focus={handleFocusAndBlur}
    on:blur={handleFocusAndBlur}
    bind:checked />
</label>

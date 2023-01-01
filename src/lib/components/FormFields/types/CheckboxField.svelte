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
  /** @type { bool } */
  export let checked;

  let focused = false;

  function handleFocusAndBlur() {
    focused = !focused;
  }

  const dispatch = createEventDispatcher();
  function handleClick() {
    checked = !checked;
    dispatch("click", { value, label, checked });
  }

  $: labelClasses = `m-1 flex h-fit w-full items-center p-2 md:w-fit ${
    focused ? "bg-dark-gray border border-white" : "borders"
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
    on:focus={handleFocusAndBlur}
    on:blur={handleFocusAndBlur}
    on:click={handleClick}
    bind:checked />
</label>

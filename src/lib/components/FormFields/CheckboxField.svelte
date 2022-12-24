<script>
  import { createEventDispatcher } from "svelte";

  /** @type { string } */
  export let name;
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let checked;

  let isFocused;

  const dispatch = createEventDispatcher();

  const setFocused = (bool) => (isFocused = bool);
  function handleChange(ev) {
    dispatch("change", { label, value, checked: ev.target.checked });
  }
</script>

<label
  class="borders m-1 flex h-fit w-full items-center p-2 md:w-fit {isFocused
    ? 'bg-dark-gray border border-white'
    : ''}"
  {name}>
  <i
    class="las text-2xl {checked ? 'la-check' : 'la-stop'}  mx-2"
    aria-hidden="true" />
  {label}
  <input
    type="checkbox"
    class="peer sr-only"
    id={name}
    on:change={handleChange}
    on:focus={() => setFocused(true)}
    on:blur={() => setFocused(false)}
    bind:checked />
</label>

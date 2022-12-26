<script>
  import { createEventDispatcher } from "svelte";

  /**
   *  string to associate label and input
   *  @type { string }
   * */
  export let id;
  /** @type { string } */
  export let label;
  /** @type { bool } */
  export let required = false;
  /** @type { string } */
  export let error;

  let value;
  let isFocused;

  const dispatch = createEventDispatcher();
  function handleChange() {
    dispatch("change", { value, label, name: id });
  }
</script>

<input
  class="{error
    ? 'border border-red-400'
    : 'borders'} text-gray-700 mb-3 w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
  {id}
  {required}
  type="text"
  on:focus={() => (isFocused = true)}
  on:blur={() => (isFocused = false)}
  on:change={handleChange}
  bind:value />

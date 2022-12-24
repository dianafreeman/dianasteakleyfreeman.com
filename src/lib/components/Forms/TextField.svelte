<script>
  import { createEventDispatcher } from "svelte";
  import FormField from "./FormField.svelte";
  
  /**
   *  string to associate label and input 
   *  @type { string }
   * */
   export let id;
  /** @type { string } */ 
  export let label;
  /** @type { string } */ 
  let clazz;
  export { clazz as class };

  let value = "";
  let hasError;
  let isFocused;

  const dispatch = createEventDispatcher();
  function handleChange() {
    dispatch("change", { value, label });
  }
</script>

<FormField {label} class={clazz}>
  <input
    class="borders text-gray-700 mb-3 w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
    {id}
    type="text"
    on:focus={() => (isFocused = true)}
    on:blur={() => (isFocused = false)}
    on:change={handleChange}
    {value} />
  {#if hasError}
    <p class="text-xs italic text-red-500">Please fill out this field.</p>
  {/if}
</FormField>

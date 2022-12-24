<script>
  import { createEventDispatcher } from "svelte";
  import FormField from "./FormField.svelte";

  export let id;
  export let label;
  let clazz;
  export { clazz as class };

  let value = "";
  let isFocused;

  const dispatch = createEventDispatcher();
  function handleChange() {
    dispatch("change", { value, label, name: id });
  }
</script>

<FormField {label} class={clazz} >
  <textarea
    class="borders text-gray-700 mb-3 w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
    {id}
    type="text"
    on:focus={() => (isFocused = true)}
    on:blur={() => (isFocused = false)}
    on:change={handleChange}
    {value} />
</FormField>

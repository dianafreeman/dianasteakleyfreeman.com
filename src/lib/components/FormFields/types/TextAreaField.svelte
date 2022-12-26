<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let label;
  export let required = false;
  export let name = id;

  let value = "";
  let isFocused;

  const dispatch = createEventDispatcher();
  function handleChange() {
    dispatch("change", { value, label, name: id });
  }
</script>

<textarea
  class="borders text-gray-700 mb-3 min-h-[200px] w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
  {id}
  {name}
  on:focus={() => (isFocused = true)}
  on:blur={() => (isFocused = false)}
  on:change={handleChange}
  {required}
  {value} />

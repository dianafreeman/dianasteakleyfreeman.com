<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let label;
  export let name = id

  let value = "";
  let isFocused;

  const dispatch = createEventDispatcher();
  function handleChange() {
    dispatch("change", { value, label, name: id });
  }
</script>

<textarea
  class="borders focus:outline-gray mb-3 w-full bg-black py-3 px-4 leading-tight text-gray-700 focus:outline active:outline"
  {id}
  {name}
  on:focus={() => (isFocused = true)}
  on:blur={() => (isFocused = false)}
  on:change={handleChange}
  {value} />

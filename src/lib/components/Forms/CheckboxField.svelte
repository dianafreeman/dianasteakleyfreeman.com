<script>
  import { createEventDispatcher } from "svelte";
  
  /** @type { string } */
  export let name;
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let checked

  
  let isFocused;

  const dispatch = createEventDispatcher()

  function handleChange(ev){
    dispatch("change", { label, value, checked: ev.target.checked})
  }

</script>

<label

  class="m-1 flex h-fit w-full md:w-fit items-center p-2 borders {isFocused  ? "bg-dark-gray border border-white" : ""}"
  name={name}
  >
  <i
    class="las text-2xl {checked ? 'la-check' : 'la-stop'}  mx-2"
    aria-hidden="true" />
    {label}
    <input type="checkbox" class="peer sr-only" id={name} on:change={handleChange} on:focus={() => (isFocused = true)} on:blur={() => (isFocused = false)} {checked}/>
</label>

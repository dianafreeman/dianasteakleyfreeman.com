<script>
  import { createEventDispatcher } from "svelte";

  /** @type { array } */
  export let options;
  /** @req @type { string } */
  export let id;
  /** @type { string } */
  export let name;
  /** @type { string } */
  export let value;

  export let required;

  const dispatch = createEventDispatcher();
  function onSelectChange(evt) {
    // selectedOption = options[evt.target.selectedIndex]
    value = options[evt.target.selectedIndex].value; //evt.target.value;
    dispatch("change", options[evt.target.selectedIndex]);
  }
</script>

<select
  {id}
  {name}
  {required}
  on:change={onSelectChange}
  bind:value
  class="button border border-gray bg-black p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option selected={value === opt.value} value={opt.value}
      >{opt.label}</option>
  {/each}
</select>

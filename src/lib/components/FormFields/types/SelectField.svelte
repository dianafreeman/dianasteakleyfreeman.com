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

  const dispatch = createEventDispatcher();

  function onSelectChange(evt) {
    value = evt.target.value
    const targetValue = evt.target.value;
    const label = options[evt.target.selectedIndex].label;
    dispatch("change", { value: targetValue, label });
  }

</script>

<select
  {id}
  {name}
  on:change={onSelectChange}
  class="button border border-gray bg-black p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option selected={value === opt.value} value={opt.value}
      >{opt.label}</option>
  {/each}
</select>

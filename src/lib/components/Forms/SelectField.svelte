<script>
  import { createEventDispatcher } from "svelte";

  /** @type { array } */
  export let options;
  /** @type { string } */
  export let name;

  const dispatch = createEventDispatcher();

  function onSelectChange(evt) {
    const value = evt.target.value;
    const label = options[evt.target.selectedIndex].label;
    dispatch("change", { value, label });
  }
</script>

<select
  {name}
  on:change={onSelectChange}
  class="button border border-gray bg-black p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option value={opt.value}>{opt.label}</option>
  {/each}
</select>

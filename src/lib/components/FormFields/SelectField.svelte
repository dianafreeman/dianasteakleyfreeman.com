<script>
  import { createEventDispatcher } from "svelte";
  import FormField from "./FormField.svelte";

  /** @type { array } */
  export let options;
  /** @req @type { string } */
  export let id;
  /** @type { string } */
  export let name;
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let selectedValue;

  const dispatch = createEventDispatcher();

  function onSelectChange(evt) {
    const targetValue = evt.target.value;
    const label = options[evt.target.selectedIndex].label;
    dispatch("change", { value: targetValue, label });
  }
</script>

<FormField {label} {id}>
<select
  {name}
  {id}
  on:change={onSelectChange}
  class="button border border-gray bg-black p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option selected={selectedValue === opt.value} value={opt.value}
      >{opt.label}</option>
  {/each}
</select>
</FormField>
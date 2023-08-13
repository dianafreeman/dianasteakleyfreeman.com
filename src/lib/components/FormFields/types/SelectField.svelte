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
<div class="select-wrapper">
<select
  {id}
  {name}
  {required}
  on:change={onSelectChange}
  bind:value
  class="button border border-gray bg-darkest-gray p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option selected={value === opt.value} value={opt.value}
      >{opt.label}</option>
  {/each}
</select>

</div>
<style lang="scss">
  select { 
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 0;
    position: relative;
   &:focus, &:active{
    outline: 1px solid white;
  }
  }
  option {
   position: relative;
    width: 100%;
  }

  </style>
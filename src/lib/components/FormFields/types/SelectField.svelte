<script>
  /** @type { array } */
  export let options;
  /** @req @type { string } */
  export let id;
  /** @type { string } */
  export let name;
  /** @type { string } */
  export let value;
  export let required;

  function onSelectChange(evt) {
    value = evt.target.value;
  }
</script>

<select
  {id}
  {name}
  {required}
  on:change={onSelectChange}
  class="button border border-gray bg-black p-3 focus:bg-gray focus:outline focus:outline-white">
  {#each options as opt}
    <option selected={value === opt.value} value={opt.value}
      >{opt.label}</option>
  {/each}
</select>

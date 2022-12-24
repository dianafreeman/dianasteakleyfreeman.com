<script>
  
  /**
   *  string to associate label and input 
   *  @type { string }
   * */
  export let id;
  /** @type { string } */
  export let label;
  /** @type { string | Object } */
  export let error;

  let clazz = "";
  export { clazz as class };
</script>

<div class={clazz}>
  <label
    class="text-gray-700 mb-2 block text-md font-bold lowercase tracking-wide"
    for={id}>
    {label}.
  </label>
  <slot />
  {#if error}
    <p class="text-xs italic text-red-500">{error}.</p>
  {/if}
</div>

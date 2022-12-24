<script>
  /** @type { string } string to associate label and input */
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
    class="text-gray-700 text-md mb-2 block font-bold lowercase tracking-wide"
    for={id}>
    {label}.
  </label>
  <slot {error} />
  {#if error}
    <p class="text-sm font-bold text-red-400">{error}.</p>
  {/if}
</div>

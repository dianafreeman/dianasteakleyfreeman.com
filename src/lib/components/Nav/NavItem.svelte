<script>
  let clazz = "";
  export { clazz as class };
  export let color;
  export let text;
  export let target;
</script>

<li class="flex flex-col {clazz}">
  <a href={target} class="flex p-2" style:color>
    {#if text}
      {text}
    {:else}
      <slot />
    {/if}
  </a>
</li>

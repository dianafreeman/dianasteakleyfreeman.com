<script>
  import { fly } from "svelte/transition";

  export let isOpen = false;
  export let y = -400;
  export let style;
  let clazz;
  export { clazz as class };
</script>

{#if isOpen}
  <div transition:fly={{ y }} class={clazz} {style}>
    <slot />
  </div>
{/if}

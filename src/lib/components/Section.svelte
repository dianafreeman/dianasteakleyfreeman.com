<script>
  import LayoutStore from "$stores/LayoutStore";
  import { derived } from "svelte/store";
  import { fly, fade } from "svelte/transition";

  export let id;
  export let style;
  export let cell = { y: 0, x: 0 };
  let clazz;
  export { clazz as class };

  let isActive = derived(LayoutStore, ($LayoutStore) => {
    return $LayoutStore.x === cell.x && $LayoutStore.y === cell.y;
  });
</script>

<section transition:fade={{ duration: 500 }} {id} class={clazz} {style}>
  {#if $isActive}
    <slot />
    {/if}
  </section>

<style>
  .inherit {
    height: inherit;
    width: inherit;
    flex: inherit;
  }
</style>

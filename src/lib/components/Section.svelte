<script>
  let clazz;
  export { clazz as class };
  import LayoutStore from "$stores/LayoutStore";
  import { derived } from "svelte/store";
  import { fly, fade } from "svelte/transition";

  export let cell;

  let isActive = derived(LayoutStore, ($LayoutStore) => {
    return $LayoutStore.x === cell.x && $LayoutStore.y === cell.y;
  });
</script>

<section {...$$props} class={clazz}>
  {#if $isActive}
    <div transition:fade={{duration: 500}}>
      <slot />
    </div>
  {/if}
</section>

<script>
  import LayoutStore from "$stores/LayoutStore";
  import { fly, fade } from "svelte/transition";

  export let id;
  export let style;
  let clazz;
  export { clazz as class };

</script>

<section transition:fade={{ duration: 500 }} {id} class={clazz} {style}>
    <slot />
  </section>

<style>
  .inherit {
    height: inherit;
    width: inherit;
    flex: inherit;
  }
</style>

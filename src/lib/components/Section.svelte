<script>
  export let id;
  export let style;
  let clazz;
  export { clazz as class };
</script>

<section {id} class={clazz} {style}>
  <slot />
</section>

<style>
  .inherit {
    height: inherit;
    width: inherit;
    flex: inherit;
  }
</style>

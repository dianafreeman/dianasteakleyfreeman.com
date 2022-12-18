<script>
  let clazz = "";
  export { clazz as class };
  export let href;
</script>

<a {href} class={clazz}>
  <slot />
</a>

<script>
  let clazz;
  export { clazz as class };
  
</script>

<section {...$$props} class="flex flex-col {clazz}" >
  <slot />
</section>

<script>
  export let index;

  let clazz;
  export { clazz as class };
</script>

<div class="{clazz} absolute" style="left: {index * 100}vw;">
  <div class="w-screen px-6">
    <slot />
  </div>
</div>

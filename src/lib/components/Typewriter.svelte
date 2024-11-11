<script>
  import Typewriter from "svelte-typewriter";
  export let onComplete = () => null; //console.log("done");
  export let inView;
</script>

<div class="min-h-[200px]">
  {#if inView}
    <Typewriter interval={90} on:done={onComplete}>
      <slot />
    </Typewriter>
  {/if}
</div>

<style lang="scss">
  :root {
    --cursor-color: #5adbff;
    --cursor-width: 1rem;
  }
</style>

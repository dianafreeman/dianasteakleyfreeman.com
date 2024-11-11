<script>
  import Typewriter from "svelte-typewriter";
  export let onComplete = () => console.log("done");
</script>

<Typewriter interval={90} on:done={onComplete}>
  <slot />
</Typewriter>

<style lang="scss">
  :root {
    --cursor-color: #5ADBFF;
    --cursor-width: 1rem;
  }
</style>

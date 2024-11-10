<script>
  import Typewriter from "svelte-typewriter";
  export let onComplete = () => console.log("done");
</script>

<Typewriter mode="cascade" interval={90} on:done={onComplete}>
  <slot />
</Typewriter>

<style lang="scss">
  :root {
    --cursor-color: white;
  }
</style>

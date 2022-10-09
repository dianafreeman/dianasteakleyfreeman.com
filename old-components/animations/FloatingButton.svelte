<script>
  import { fade } from "svelte/transition";
  import IntroStore from "$stores/IntroStore";

  let clazz;
  export { clazz as class };
  export let onClick;
  export let enabled;

  // aria-disabled was !$IntroStore.isShowing
</script>

<div transition:fade class={clazz}>
  <button class="h-18 w-18 float-up-and-down" aria-disabled={!enabled} on:click={onClick}
    ><slot /></button
  >
</div>

<style>
  .float-up-and-down {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
</style>

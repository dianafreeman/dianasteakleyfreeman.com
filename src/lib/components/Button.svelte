<script>
  import { writable } from "svelte/store";
  import { createEventDispatcher } from "svelte";
  import createButtonClasses from "$lib/createButtonClasses";

  let clazz;
  export { clazz as class };

  export let buttonProps;

  let hover = writable(false);
  let wrapper;

  const toggleHover = () => {
    hover.update((curr) => !curr);
  };
  const hoverOn = () => hover.set(true);
  const hoverOff = () => hover.set(false);

  const classes = createButtonClasses();
</script>

<button
  bind:this={wrapper}
  class="{classes} {clazz}"
  on:click
  on:mouseenter={toggleHover}
  on:mouseleave={toggleHover}
  on:focus={hoverOn}
  on:blur={hoverOff}
  {...buttonProps}
>
  <slot />
</button>

<style>
</style>

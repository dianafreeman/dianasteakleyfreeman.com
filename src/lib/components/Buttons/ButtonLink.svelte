<script>
  import { createEventDispatcher } from "svelte";

  import Icon from "../Icon.svelte";

  let clazz = "bg-yellow text-black p-5 m-5 my-10 font-bold"
  export { clazz as class };

  export let href;
  export let iconProps;
  export let borders = true;
  export let animateBorders = true;

  const borderClasses = animateBorders
    ? "animate-borders"
    : borders && "borders";

  const classes = `block ${borderClasses} cursor-pointer`;
  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { value: e.target.value, label: e.target.name });
  }
</script>

<a
  {href}
  class="{classes} {clazz}"
  on:click={handleClick}
  {...$$restProps}>
  {#if iconProps}
    <Icon
      type={iconProps.type}
      large={iconProps.large}
      class={iconProps.class} />
  {/if}
  <slot />
</a>

<script>
  import { createEventDispatcher } from "svelte";

  let clazz = "";
  let wrapper;
  export { clazz as class };
  export let elementProps = {};

  /** @type { boolean } */
  export let borders = true;
  /** @type { boolean } */
  export let animateBorders = true;
  /** @type { string } */
  export let iconClasses = null;  
  /** @type { "button" | "submit" } */
  export let type = "button";
  /** @type { 'button' | 'a' | 'div' } */
  export let elementType = "button";

  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { value: e.target.value, label: e.target.name });
  }
  function handleMouseEnter(e) {
    dispatch("mouseenter", { value: e.target.value, label: e.target.name });
  }
  function handleMouseLeave(e) {
    dispatch("mouseleave", { value: e.target.value, label: e.target.name });
  }
  function handleFocus(e) {
    dispatch("focus", { value: e.target.value, label: e.target.name });
  }
  function handleBlur(e) {
    dispatch("blur", { value: e.target.value, label: e.target.name });
  }

  const borderClasses = animateBorders
    ? "animate-borders"
    : borders && "borders";

  const classesIfNotDefined = "flex justify-center items-center p-5";
  const classes = `${borderClasses} button`;
</script>

<svelte:element
  this={elementType}
  bind:this={wrapper}
  {type}
  class="{classes} {clazz || classesIfNotDefined}"
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
  {...elementProps}>
  {#if iconClasses}
    <i aria-hidden="true" class="mx-2 {iconClasses}" />
  {/if}
  <slot />
</svelte:element>

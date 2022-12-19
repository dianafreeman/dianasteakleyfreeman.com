<script>
  import { createEventDispatcher } from "svelte";

  
  let clazz = "";
  let wrapper;
  export { clazz as class };
  export let elementProps = {};
  
  /** @type { Boolean } */
  export let animateBorders = true;

  /** @type { String } */
  export let iconClass = null;

  /** @type { 'button' | 'a' } String */
  export let type = "button";

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
    ? "animate-button-borders"
    : "border border-gray hover:border-white active:border-white focus:border-white";

  const defaultClasses = "flex justify-center items-center"
  const classes = `${borderClasses} bg-darkest-gray hover:bg-gray active:bg-gray relative cursor-pointer w-full text-white`;
</script>

<svelte:element
  this={type}
  bind:this={wrapper}
  class="{classes} {clazz || defaultClasses }"
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
  {...elementProps}
>
  {#if iconClass}
    <i aria-hidden="true" class={iconClass} />
  {/if}
  <slot />
</svelte:element>

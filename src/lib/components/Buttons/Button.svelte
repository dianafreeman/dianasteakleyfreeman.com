<script>
  import { writable } from "svelte/store";
  import { createEventDispatcher } from "svelte";

  let clazz = "";
  let wrapper;
  export { clazz as class };
  export let animateBorders = true;
  export let buttonProps;
  let activated = writable(false);

  const dispatch = createEventDispatcher();
  const toggleActivated = () => {
    activated.update((curr) => !curr);
  };

  function handleClick(e) {
    toggleActivated();
    dispatch("click", { event: e });
  }
  function handleMouseEnter(e) {
    activated.set(true);
    dispatch("mouseenter", { event: e });
  }
  function handleMouseLeave(e) {
    activated.set(false);
    dispatch("mouseleave", { event: e });
  }
  function handleFocus(e) {
    activated.set(true);
    dispatch("focus", { event: e });
  }
  function handleBlur(e) {
    activated.set(false);
    dispatch("blur", { event: e });
  }

  const classes = `${animateBorders ? "animate-button-borders" :"hover:border-white"} border border-gray hover:bg-dark-gray focus:bg-dark-gray relative cursor-pointer w-full text-white z-[3]`// ${buttonHoverClasses} ${beforeClasses} ${afterClasses}`;
</script>

<button
  bind:this={wrapper}
  class="{classes} {clazz}"
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
  {...buttonProps}
>
  <slot />
</button>
  
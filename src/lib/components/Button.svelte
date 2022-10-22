<script>
  import { writable } from "svelte/store";

  let clazz;
  export { clazz as class };
  export let href = "/";
  export let type = "a";
  export let onClick;
  export let ariaSettings;
  export let label;

  // const boxSize = spring(0)
  let hover = writable(false);
  let wrapper;

  const toggleHover = () => {
    hover.update((curr) => !curr);
  };
  const hoverOn = () => hover.set(true);
  const hoverOff = () => hover.set(false);

  const linkProps = {
    href
  };

  const buttonProps = {
    "aria-expanded": ariaSettings?.expanded || null,
    "aria-label": label,
    "aria-controls": ariaSettings?.controls || null,
    "aria-live": "polite",
    type: type
  };
  const activeBeforeClasses = `active:before:w-full active:before:h-full active:before:border-[#ecf0f1] active:before:opacity-1 active:before:border-t active:before:border-r active:before:border-solid`;
  const focusBeforeClasses = `focus:before:w-full focus:before:h-full focus:before:border-[#ecf0f1] focus:before:opacity-1 focus:before:border-t focus:before:border-r focus:before:border-solid`;
  const hoverBeforeClasses = `hover:before:w-full hover:before:h-full hover:before:border-[#ecf0f1] hover:before:opacity-1 hover:before:border-t hover:before:border-r hover:before:border-solid ${activeBeforeClasses} ${focusBeforeClasses}`;
  const activeAfterClasses = `active:after:w-full active:after:h-full active:after:border-[#ecf0f1] active:after:opacity-1 active:after:border-b active:after:border-l active:after:border-solid`;
  const focusAfterClasses = `focus:after:w-full focus:after:h-full focus:after:border-[#ecf0f1] focus:after:opacity-1 focus:after:border-b focus:after:border-l focus:after:border-solid`;
  const hoverAfterClasses = `hover:after:w-full hover:after:h-full hover:after:border-[#ecf0f1] hover:after:opacity-1 hover:after:border-b hover:after:border-l hover:after:border-solid ${activeAfterClasses} ${focusAfterClasses}`;

  const beforeClasses = `before:block before:content-["_"] before:border-none before:absolute before:w-0 before:h-0 before:top-0 before:left-0 ${hoverBeforeClasses}`;
  const afterClasses = `after:block after:content-["_"] after:border-none after:absolute after:w-0 after:h-0 after:bottom-0 after:right-0 ${hoverAfterClasses}`;

  const buttonActiveClasses = `active:bg-neutral-800`
  const buttonFocusClasses = `focus:bg-neutral-800 focus:outline-none`
  const buttonHoverClasses = `hover:bg-neutral-800 ${buttonActiveClasses} ${buttonFocusClasses}`
  const classes = `button inline-block p-5 relative cursor-pointer mb-4 w-full text-white text-center px-1 py-6 z-[3] ${buttonHoverClasses} ${beforeClasses} ${afterClasses} `;
</script>

<svelte:element
  this={type}
  bind:this={wrapper}
  class="{classes} {clazz}"
  on:click={onClick}
  on:mouseenter={toggleHover}
  on:mouseleave={toggleHover}
  on:focus={hoverOn}
  on:blur={hoverOff}
  {...type === "a" ? linkProps : buttonProps}
>
  <slot />
  <span class="shape" />
</svelte:element>

<style>
  .button:before,
  .button:after {
    transition: opacity 200ms ease-in-out;
  }

  .button:hover::before, .button:active::before, .button:focus::before {
    transition: width 150ms cubic-bezier(0.07, 0.62, 0.61, 1),
      height 75ms 150ms cubic-bezier(0.07, 0.62, 0.61, 1);
  }

  .button:hover::after, .button:active::after, .button:focus::after {
    transition: width 150ms 225ms cubic-bezier(0.07, 0.62, 0.61, 1),
      height 75ms 450ms cubic-bezier(0.07, 0.62, 0.61, 1), border-left 0ms 225ms linear;
  }
</style>

<script>
  import Button from "../Buttons/Button.svelte";
  import Dialog from "./Dialog.svelte";

  /** @type { string }*/
  let clazz;
  export { clazz as class };
  /** @type { string }*/
  export let title;
  /** @type { string }*/
  export let description;
  /** @type { string }*/
  export let buttonText;
  /** @type { string }*/
  export let buttonClasses;
  /** @type { string }*/
  export let buttonIconClasses;
  /** @type { boolean }*/
  export let useCustomToggle;

  let isOpen = false;

  function toggleOpen() {
    console.log("toggling");
    isOpen = !isOpen;
  }

  const describedBy = description ? { "aria-describedby": "modal_desc" } : {};
  const ariaProps = {
    "aria-labelledby": "modal_label",
    "aria-modal": "true",
    ...describedBy
  };
</script>

{#if useCustomToggle}
  <button on:click={toggleOpen}>
    <slot name="toggle" />
  </button>
{:else}
  <Button
    on:click={toggleOpen}
    iconClasses={buttonIconClasses}
    class="w-fit p-5 {buttonClasses}">{buttonText}</Button>
{/if}
<Dialog
  {ariaProps}
  {isOpen}
  {title}
  class="{isOpen ? '' : 'hidden'} {clazz}"
  on:escPressed={() => (isOpen = false)}
  on:closeClicked={() => toggleOpen()}>
  <slot />
  {#if description}
    <div id="modal_desc">{description}</div>
  {/if}
</Dialog>

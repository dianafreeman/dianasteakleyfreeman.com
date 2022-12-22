<script>
  import { trapFocus } from "$lib/actions";
  import Button from "./Buttons/Button.svelte";

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

  let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  }

  const describedBy = description ? { "aria-describedby": "modal_desc" } : {};
  const ariaProps = {
    "aria-labelledby": "modal_label",
    "aria-modal": "true",
    ...describedBy
  };
</script>

<Button on:click={toggleOpen} class="w-fit p-5 {buttonClasses}"
  >{buttonText}</Button>
{#if isOpen}
  <div
    use:trapFocus={{ onEscPressed: toggleOpen }}
    id="modal"
    role="dialog"
    class="border border-gray {clazz}"
    class:hidden={!isOpen}
    {...ariaProps}>
    <div class="flex w-full justify-end">
      <button on:click={toggleOpen}>close</button>
    </div>
    <h2 id="modal_label" class="dialog_label sr-only">{title}</h2>

    {#if description}
      <div id="modal_desc">{description}</div>
    {/if}
    <slot />
  </div>
{/if}

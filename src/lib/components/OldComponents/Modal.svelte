<script>
  import { focusTrap } from "$lib/actions/focusTrap";
  import { settingsMenuIsOpen } from "$stores/LayoutStore";
  import Button from "../Buttons/Button.svelte";
  import { afterUpdate, createEventDispatcher, onMount } from "svelte";

  export let isOpen = false;
  export let id;
  export let title = "";
  export let description = "";
  export let onCloseClick;
  export let className = "";

  const dispatch = createEventDispatcher();

  const describedBy = description ? { "aria-describedby": "modal-desc" } : {};
  const ariaProps = {
    "aria-labelledby": "modal-title",
    "aria-modal": "true",
    ...describedBy
  };

  function handleClose() {
    isOpen = false;
    if (onCloseClick) onCloseClick();
    dispatch("closeClicked");
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      handleClose();
    }
  }

settingsMenuIsOpen.subscribe( bool => {
  console.log("running")
  if (bool == true) {
    const closeButton = document.querySelector(`#${id}-close`)
    console.log(closeButton)
    closeButton.focus()
  }
})
</script>

<div
  {id}
  role="dialog"
  class="bg-semi-transparent fixed top-0 left-0 z-[99] h-screen w-screen overflow-y-scroll p-16 shadow-lg {className}"
  aria-hidden={!isOpen}
  class:hidden={!isOpen}
  {...ariaProps}
  on:keydown={handleEscape}>
  <div class="m-auto w-full bg-black pb-2 rounded-md">
    <div class="flex w-full justify-between rounded-t-md bg-gray">
      {#if title}
        <h2 id="modal-title" class="m-5 text-xl font-bold lowercase">
          {title}
        </h2>
      {/if}
      <Button
        id="{id}-close"
        iconProps={{ type: "close" }}
        label="close"
        class="inline w-fit p-3 text-right"
        on:click={handleClose}>
        Close
      </Button>
    </div>
    <div class="p-4"
    use:focusTrap={isOpen}

    >
      <slot />
      {#if description}
        <div id="modal-desc" class="mt-2 text-sm text-gray-300">
          {description}
        </div>
      {/if}
    </div>
  </div>
</div>

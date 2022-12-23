<script>
  import { trapFocus } from "$lib/actions";
  import { createEventDispatcher, onMount } from "svelte";

  let clazz;
  export { clazz as class };
  let closeButton;

  export let isOpen;
  export let title;
  export let ariaProps;

  const dispatch = createEventDispatcher();

  function onCloseButtonClick() {
    dispatch("closeClicked", { isOpen });
  }
  function onEscPressed(e) {
    dispatch("escPressed", { ...e });
  }

  onMount(() => {
    closeButton.focus();
  });
</script>

<div
  use:trapFocus={{ onEscPressed }}
  id="modal"
  role="dialog"
  class="bg-semi-transparent fixed top-0 left-0 z-[99] h-screen w-screen overflow-y-scroll p-16 shadow-lg {clazz} "
  class:hidden={!isOpen}
  {...ariaProps}>
  <div class="m-auto w-full bg-black pb-2">
    <div class="flex w-full justify-between rounded-t-md bg-gray">
      {#if title}
        <h2 id="modal_label" class="m-5 text-xl font-bold lowercase">
          {title}.
        </h2>
      {/if}
      <button
        bind:this={closeButton}
        class="py-2 px-4"
        on:click={onCloseButtonClick}>X</button>
    </div>
    <slot />
  </div>
</div>

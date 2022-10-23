<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  export let label;
  export let isActive;

  const dispatch = createEventDispatcher();

  const isHovered = writable(false);
  const ICON_MAP = {
    hoveredActive: "las la-minus-square text-2xl",
    hoveredInactive: "las la-plus-square text-2xl",
    active: "lar la-check-square text-2xl",
    default: "las la-stop text-2xl"
  };

  function setIcon(hovered) {
    if (isActive) {
      if (hovered) return ICON_MAP.hoveredActive; //"las la-minus-square text-2xl";
      return ICON_MAP.active;
    } else {
      if (hovered) return ICON_MAP.hoveredInactive;
      return ICON_MAP.default;
    }
  }

  function handleClick() {
    dispatch("click", { term: label });
  }

  $: icon = setIcon($isHovered);
</script>

<button
  on:click={handleClick}
  on:mouseenter={() => isHovered.set(true)}
  on:mouseleave={() => isHovered.set(false)}
  on:focus={() => isHovered.set(true)}
  on:blur={() => isHovered.set(false)}
  class="p-3 text-white hover:bg-neutral-800 w-full border-b border-neutral-800"
>
  <div class="flex flex-row justify-between items-center">
    <i class={icon} aria-hidden="true" />
    {#if $isHovered && isActive}
      <i
        class="text-neutral-700 flex-1 lar la-check-square text-2xl inline-flex"
        aria-label="currently active"
      />
    {/if}
    <span class="mx-3">{label}</span>
  </div>
</button>

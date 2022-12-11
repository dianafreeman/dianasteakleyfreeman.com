<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  /** @type { string } */
  export let label;
  /** @type { boolean } */
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
  class="hover:bg-medium-gray w-full border-b border-neutral-800 p-3 text-white"
>
  <div class="flex flex-row items-center justify-between">
    <i class={icon} aria-hidden="true" />
    {#if $isHovered && isActive}
      <i
        class="lar la-check-square inline-flex flex-1 text-2xl text-neutral-700"
        aria-label="currently active"
      />
    {/if}
    <span class="mx-3">{label}</span>
  </div>
</button>

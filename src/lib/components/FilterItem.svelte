<script>
  import { writable } from "svelte/store";

  export let label;

  const isHovered = writable(false);
  const isPressed = writable(false);

  function setIcon(hovered, pressed) {
    if (pressed) {
      if (hovered) return "las la-minus-square text-2xl";
      return "lar la-check-square text-2xl";
    } else {
      if (hovered) return "las la-plus-square text-2xl";
      return "las la-stop text-2xl";
    }
  }

  $: icon = setIcon($isHovered, $isPressed);
</script>

<button
  on:click={() => isPressed.update((curr) => !curr)}
  on:mouseenter={() => isHovered.set(true)}
  on:mouseleave={() => isHovered.set(false)}
  on:focus={() => isHovered.set(true)}
  on:blur={() => isHovered.set(false)}
  class="p-3 text-white hover:bg-neutral-800 w-full border-b border-neutral-800"
>
  <div class="flex flex-row justify-between items-center">
      <i class="{icon}" aria-hidden="true" />
      {#if $isHovered && $isPressed}
      <i class="text-neutral-700 flex-1 lar la-check-square text-2xl inline-flex" aria-label="currently active" />
      {/if}
    <span class="mx-3">{label}</span>
  </div>
</button>

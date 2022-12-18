<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Button from "./Button.svelte";

  /** @type { string } */
  export let label;
  /** @type { boolean } */
  export let isActive;

  const dispatch = createEventDispatcher();

  const isHovered = writable(false);
  const ICON_MAP = {
    active: "las la-check",
    inactive: "las la-circle"
  };

  function handleClick() {
    dispatch("click", { term: label });
  }

  $: icon = isActive ? ICON_MAP.active : ICON_MAP.inactive;
</script>

<Button
  on:click={handleClick}
  on:mouseenter={() => isHovered.set(true)}
  on:mouseleave={() => isHovered.set(false)}
  on:focus={() => isHovered.set(true)}
  on:blur={() => isHovered.set(false)}
  class="m-2 border-b border-neutral-800 p-3 text-white hover:bg-dark-gray whitespace-pre w-full md:w-fit"
  >
  <div class="flex flex-row items-center justify-between">
    <i class="text-2xl {icon}" aria-hidden="true" />
    <span class="mx-3">{label}</span>
  </div>
</Button>

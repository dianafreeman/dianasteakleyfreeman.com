<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  /** @type { string } */
  export let label;
  /** @type { boolean } */
  export let isActive;

  const dispatch = createEventDispatcher();

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
  animateBorders={false}
  class="m-2 border-b border-neutral-800 p-3 text-white hover:bg-dark-gray whitespace-pre w-full md:w-fit"
  >
  <div class="flex flex-row items-center justify-between">
    <i class="text-2xl {icon}" aria-hidden="true" />
    <span class="mx-3">{label}</span>
  </div>
</Button>

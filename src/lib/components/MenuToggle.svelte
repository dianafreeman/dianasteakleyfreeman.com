<script>
  import Button from "./Button.svelte";

  export let expanded = false
  export let hideLabel = false;
  
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let id;
  /** @type { "hamburger" | "settings "} */
  export let menuType;

  const ICON_CLASS_MAP = {
    hamburger: "las la-bars",
    settings: "las la-ellipsis-v"
  };

  const iconClass = ICON_CLASS_MAP[menuType];
</script>


<Button
  class="p-4 flex w-fit justify-center items-center"
  buttonProps={{ "aria-expanded": expanded, "aria-controls": id }}
  on:click
>
  <span class:sr-only={hideLabel}>{label}</span>
  <i class="text-3xl {iconClass}" aria-hidden="true" />
</Button>


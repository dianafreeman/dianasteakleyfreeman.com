<script>
  import Button from "./Button.svelte";

  export let expanded  
  export let items;
  export let label;
  export let hideLabel = false;
  export let id;
  export let menuType;

  const MENU_TYPE_MAP = {
    hamburger: "hamburger",
    settings: "settings"
  };

  const ICON_CLASS_MAP = {
    hamburger: "las la-bars",
    settings: "las la-ellipsis-v"
  };

  const iconClass = ICON_CLASS_MAP[menuType];
</script>

<!-- <div class="relative w-full"> -->
<Button
  class="p-4 flex w-fit justify-center items-center"
  buttonProps={{ "aria-expanded": expanded, "aria-controls": id }}
  on:click
>
  <span class:sr-only={hideLabel}>{label}</span>
  <i class="text-3xl {iconClass}" aria-hidden="true" />
</Button>

<!-- </div> -->
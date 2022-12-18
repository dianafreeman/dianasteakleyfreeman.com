<script>
  import Button from "./Button.svelte";

  export let expanded = false;
  export let hideLabel = false;
  let clazz = "";
  export { clazz as class };

  /** @type { string } */
  export let label;
  /** @type { string } */
  export let id;
  /** @type { "hamburger" | "settings "} */
  export let menuType;
  /** @type { "hamburger" | "times" | "settings"} */
  export let iconType = "";

  const ICON_CLASS_MAP = {
    hamburger: "las la-bars",
    times: "las la-times",
    settings: "las la-ellipsis-v",
    close: "las la-angle-up"
  };

  $: iconClass = iconType ? ICON_CLASS_MAP[iconType] : ICON_CLASS_MAP[menuType];
</script>

<Button
  class="flex w-fit items-center justify-center p-4 {clazz}"
  elementProps={{ "aria-expanded": expanded, "aria-controls": id }}
  on:click
>
  <span class:sr-only={hideLabel}>{label}</span>
  <i class="text-3xl {iconClass}" aria-hidden="true" />
</Button>

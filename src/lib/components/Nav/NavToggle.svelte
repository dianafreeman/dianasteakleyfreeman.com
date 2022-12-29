<script>
  import Button from "../Buttons/Button.svelte";
  import Icon from "$lib/components/Icon.svelte";

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
  /** @type { "menu" | "close" | "settings"} */
  export let iconType = "";
</script>

<Button
  class="m-2 flex h-fit w-fit items-center justify-center py-4 px-5 {clazz}"
  elementProps={{ "aria-expanded": expanded, "aria-controls": id }}
  on:click>
  <span class:sr-only={hideLabel}>{label}</span>
  <Icon type={menuType || iconType} large />
</Button>

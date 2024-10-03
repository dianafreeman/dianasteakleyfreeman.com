<script>
  import Button from "../Buttons/Button.svelte";
  import Icon from "$lib/components/Icon.svelte";

  let clazz = "";
  export let expanded = false;
  export let borders = true;
  export let animateBorders = true;
  export let hideLabel = false;
  export { clazz as class };

  
  export let label; /** @type { string } */
  export let id; /** @type { string } */
    
  export let iconType; /** @type { "hamburger" | "close" | "settings"} */
</script>

<Button
  {borders}
  {animateBorders}
  class={clazz || "m-2 flex h-fit w-fit items-center justify-center py-4 px-5 "}
  elementProps={{ "aria-expanded": expanded, "aria-controls": id }}
  on:click>
  {#if label}
    <span class:sr-only={hideLabel}>{label}</span>
  {/if}
  <Icon type={iconType} large />
</Button>

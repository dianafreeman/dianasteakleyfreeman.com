<script>
  import Button from "../Buttons/Button.svelte";
  import Icon from "$lib/components/Icon.svelte";

  let clazz = "";
  export let borders = true;
  export let animateBorders = true;
  export let hideLabel = false;
  export { clazz as class };

  
  export let label; /** @type { string } */
    
  export let iconType; /** @type { "hamburger" | "close" | "settings"} */
</script>

<Button
  {borders}
  {animateBorders}
  class={clazz || ""}
  {...$$restProps}
  on:click>
  {#if label}
    <span class:sr-only={hideLabel}>{label}</span>
  {/if}
  <Icon type={iconType} large class="ml-2"/>
</Button>

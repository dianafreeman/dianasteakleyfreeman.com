<script>
  import Button from "./Button.svelte";

  export let label;
  export let onClick;
  export let buttonProps;
</script>

<Button type="button" {onClick} {label} class="w-fit h-fit my-auto p-3" {buttonProps}>
  <slot />
</Button>

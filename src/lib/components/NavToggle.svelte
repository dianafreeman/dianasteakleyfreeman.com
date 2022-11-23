<script>
  import Button from "./Button.svelte";

  export let label;
  export let onClick;
  export let buttonProps;
</script>

<Button type="button" {onClick} {label} class="my-auto h-fit w-fit p-3" {buttonProps}>
  <slot />
</Button>

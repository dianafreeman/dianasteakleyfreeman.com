<script>
    import Button from "./Button.svelte";
    
    export let label;
    export let onClick;
    export let buttonProps

</script>

<Button
  type="button"
  onClick={onClick}
  label={label}
  class="w-fit h-fit my-auto p-3"
  props={buttonProps}
>
<slot />
</Button>

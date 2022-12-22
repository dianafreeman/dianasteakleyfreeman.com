<script>
  import { createEventDispatcher } from "svelte"
  import ToggleButton from "../Buttons/ToggleButton.svelte";

  export let value;
  export let label;
  export let name;
  export let isActive;
  export let isPending;

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("click", { value });
  }

  $: icon = isPending ? "las la-plus" : isActive ? "las la-check" : "";
</script>

<ToggleButton
  iconClass={icon}
  class={isActive
    ? 'bg-gray'
    : ''}
  {isPending}
  {isActive}
  on:click={handleClick}
  {name}
  {value}
  >{label}</ToggleButton>


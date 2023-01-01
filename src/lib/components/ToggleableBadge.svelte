<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "$lib/components/Icon.svelte";
  export let label;
  export let value;
  export let name;

  const dispatch = createEventDispatcher();

  function handleBadgeButtonClick() {
    dispatch("badgeButtonClick", { value, label });
  }
</script>

<span
  class="mx-1 inline-flex items-center rounded-full bg-white py-0.5 pl-2 pr-0.5 text-sm font-medium text-dark-gray">
  {label}
  <button
    type="button"
    {value}
    {name}
    on:click={handleBadgeButtonClick}
    class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-dark-gray hover:bg-dark-gray hover:text-white focus:bg-dark-gray focus:text-white focus:outline-none">
    <span class="sr-only">Remove {label} option</span>
    <Icon type="close" />
  </button>
</span>

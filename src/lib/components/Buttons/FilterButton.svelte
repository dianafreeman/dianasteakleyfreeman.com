<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  /** @type { string } */
  export let label;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let isActive;
  /** @type { boolean } */
  export let isPending;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click", { label, value });
  }

  $: icon = isPending ? "las la-plus" : isActive ? "las la-check" : "";
</script>

<Button
  on:click={handleClick}
  class="my-2 flex items-center justify-end p-3 text-lg {isActive
    ? 'bg-gray'
    : ''}"
  iconClass="mx-5 {icon}"
  elementProps={{
    "aria-pressed": isPending,
    "aria-label": `${label} ${isActive ? "(applied)" : ""}`,
    value,
    name: "categoryFilter"
  }}>
  {label.toLowerCase()}
</Button>

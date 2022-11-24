<script>
  import Button from "./Button.svelte";

  /** @type { string } */
  export let title;
  /** @type { "p"  | "h1" | "h2" | "h3" | "h4"} */
  export let titleElement = "p";

  let isOpen = false;
</script>

<div class="flex w-auto flex-col">
  <Button on:click={() => (isOpen = !isOpen)} class=" my-2 flex items-center justify-between py-3">
    <svelte:element this={titleElement} class="mx-2 text-2xl font-thin ">
      {title}
    </svelte:element>
    <i
      aria-hidden="true"
      class="las mx-2 text-3xl text-light-gray la-angle-{isOpen ? 'up' : 'down'}"
    />
  </Button>
  {#if isOpen}
    <!-- <div class="bg-darkest-gray text-sm"> -->
    <div class="text-sm">
      <slot />
    </div>
  {/if}
</div>

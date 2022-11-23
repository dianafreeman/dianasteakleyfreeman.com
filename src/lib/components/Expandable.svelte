<script>
    import Button from "./Button.svelte";


  /** @type { string } */
  export let title;
  /** @type { "p"  | "h1" | "h2" | "h3" | "h4"} */
  export let titleElement = "p";

  let isOpen = false;
</script>

<div class="flex flex-col w-auto">
  <Button on:click={() => (isOpen = !isOpen)} class=" my-2 py-3 flex justify-between items-center">
    <svelte:element this={titleElement} class="text-2xl font-thin mx-2 ">
      {title}
    </svelte:element>
    <i aria-hidden="true" class="mx-2 text-light-gray text-3xl las la-angle-{isOpen ? 'up' : 'down'}" />
  </Button>
  {#if isOpen}
    <!-- <div class="bg-darkest-gray text-sm"> -->
    <div class="text-sm">
      <slot />
    </div>
  {/if}
</div>

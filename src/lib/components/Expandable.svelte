<script>
  // import Button from "./Buttons/Button.svelte";

  /** @type { string } */
  export let title;
  /** @type { "p"  | "h1" | "h2" | "h3" | "h4"} */
  export let titleElement = "p";
  /** @type { boolean } */
  export let isOpen = false;

  $: iconClass = isOpen ? "la-angle-up" :"la-angle-down"
</script>

<dl class="mt-6 space-y-6 divide-y divide-gray-200">
  <div class="pt-6">
    <dt class="text-lg">
      <button
        type="button"
        class="flex w-full items-start justify-between text-left text-gray-400"
        aria-controls="faq-0"
        aria-expanded={isOpen}
        on:click={() => (isOpen = !isOpen)}
      >
        <svelte:element this={titleElement} class="font-medium text-gray-900"
          >{title}</svelte:element
        >
        <span class="ml-6 flex h-7 items-center">
          <i class="las {iconClass}"></i>
        </span>
      </button>
    </dt>
    {#if isOpen}
      <dd class="mt-2 pr-12" id="faq-0">
        <p class="text-base text-gray-500">
          I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </dd>
    {/if}
  </div>

  <!-- More questions... -->
</dl>
<!-- <div class="flex w-auto flex-col">
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
    <div class="text-sm">
      <slot />
    </div>
  {/if}
</div> -->

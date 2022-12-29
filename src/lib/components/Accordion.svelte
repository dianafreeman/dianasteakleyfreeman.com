<script>
  import Button from "./Buttons/Button.svelte";
  import Icon from "./Icon.svelte";

  /** @type { string } */
  export let title;
  /** @type { "p"  | "h1" | "h2" | "h3" | "h4"} */
  export let titleElement = "p";
  /** @type { boolean } */
  export let isOpen = false;
</script>

<dl class="divide-gray-200 mt-6 space-y-6 divide-y">
  <div class="pt-6">
    <dt class="text-lg">
      <Button
        type="button"
        animateBorders={false}
        class="text-gray-400 flex w-full items-start justify-between border-b-0 p-5 text-left {isOpen
          ? 'bg-darkest-gray'
          : ''}"
        aria-controls="faq-0"
        aria-expanded={isOpen}
        on:click={() => (isOpen = !isOpen)}>
        <svelte:element this={titleElement} class="text-gray-900 font-medium"
          >{title}</svelte:element>
        <span class="ml-6 flex h-7 items-center">
          <Icon type={isOpen ? "collapse" : "expand"} />
        </span>
      </Button>
    </dt>
    {#if isOpen}
      <dd class="mb-2 border border-t-0 border-gray p-5" id="faq-0">
        <p class="text-gray-500 text-base">
          I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
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

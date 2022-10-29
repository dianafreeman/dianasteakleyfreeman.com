<script>
  import Slash from "./Slash.svelte";

  let clazz;
  export { clazz as class };

  export let category;
  export let subcategory;
  export let active;

</script>

<nav class="flex items-center space-x-4 py-4 {clazz}" aria-label="Breadcrumb">
  <ol class="list-none {clazz} flex mx-1">
    <li>
      <a href="/" class="text-gray-400 hover:text-white">
        <!-- Heroicon n400: mini/home -->
        <svg
          class="h-5 w-5 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Home</span>
      </a>
    </li>
    {#if category && category !== active}
      <li>
        <div class="flex items-center">
          <Slash />
          <a
            href="/{category}"
            class="ml-4 text-base font-thin text-gray-300 underline underline-offset-4 hover:text-white"
            >{category}</a
          >
        </div>
      </li>
    {/if}
    {#if subcategory}
      <li>
        <div class="flex items-center">
          <Slash />
          <a
            href="/{subcategory.name}"
            class="ml-4 text-base font-thin text-gray-300 underline underline-offset-4 hover:text-white"
            >{subcategory.name}</a
          >
        </div>
      </li>
    {/if}
    {#if active}
      <li aria-current="page">
        <div class="flex items-center">
          <Slash />
          <p class="ml-4 text-base text-white" >{active}</p>
        </div>
      </li>
    {/if}
  </ol>
</nav>

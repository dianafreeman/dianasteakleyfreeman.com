<script>
  import ToggleItem from "./ToggleItem.svelte";

  const navLinkClasses =
    "text-neutral-200 focus:bg-neutral-800 focus:outline-white hover:bg-neutral-800 px-4 block py-5 text-base font-medium text-right";

  export let items;

  export let menuType;

  const MENU_TYPE_MAP = {
    hamburger: "hamburger",
    settings: "settings"
  };

  const ICON_CLASS_MAP = {
    hamburger: "las la-bars",
    settings: "la la-cog"
  };

  export let expanded;
  export let id;
</script>

<ul class="bg-neutral-900 right-0 absolute w-full {expanded ? " border-white border": ""}" aria-hidden={!expanded} {id}>
  {#if expanded}
    {#each items as item}
      <li role="menuitem" class="w-inherit">
        {#if menuType === MENU_TYPE_MAP["settings"]}
          <ToggleItem on:click={() => item.func()} value={item.value}>
            {item.displayText}
          </ToggleItem>
        {:else}
          <a href={item.relativePath} class={navLinkClasses}>{item.navigationText}</a>
        {/if}
      </li>
    {/each}
  {/if}
</ul>

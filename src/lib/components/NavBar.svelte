<script>
  import { writable } from "svelte/store";
  import LayoutStore from "$stores/LayoutStore";
  import { onMount } from "svelte";
  import ToggleSwitch from "./Toggles/ToggleSwitch.svelte";
  import Button from "./Button.svelte";
  import { page } from "$app/stores";
  import createTrapFocus from "$lib/trapFocus";
  import NavLink from "./NavLink.svelte";
  import NavToggle from "./NavToggle.svelte";
  export let items;

  let navWrapper, scrollY;

  const navLinkClasses =
    "text-neutral-200 focus:bg-neutral-800 focus:outline-white hover:bg-neutral-800 px-4 block py-5 text-base font-medium text-center";
  const settingItemClasses =
    "text-neutral-200 hover:bg-neutral-800 px-4 flex justify-between items-center py-5 text-base font-medium";

  const navWrapperClassesClosed = "h-fit";
  const navWrapperClassesOpen = "h-screen overflow-y-scroll";

  const menuOpen = writable(false);
  const toggleMenu = () => menuOpen.update((bool) => !bool);
  const { toggleDyslexia } = LayoutStore;

  $: $page.url.pathname && menuOpen.set(false);
  
  $: {
    const trapFocus = createTrapFocus($menuOpen);
    if (navWrapper){
      navWrapper.addEventListener("keydown", e => trapFocus(e, navWrapper));
    }
  };

</script>

<svelte:window bind:scrollY />

<div
  bind:this={navWrapper}
  style="top: {scrollY}px;"
  class="{$menuOpen
    ? 'bg-neutral-900'
    : 'semi-transparent'} relative left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 pb-4 {$menuOpen
    ? navWrapperClassesOpen
    : navWrapperClassesClosed}"
>
  <nav>
    <div class="flex justify-between w-full ">
      <NavLink
        href="/"
        props={{'aria-label':"Diana"}}
        class="mb-0 m-2 pt-2 pb-0 text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
      >
        <span aria-hidden="true">D</span><span aria-hidden="true" class="text-gray-400">iana</span>.
      </NavLink>

      <NavToggle onClick={toggleMenu} buttonProps={{'aria-expanded': $menuOpen}}>
          {#if $menuOpen}
            <i class="text-3xl las la-times" aria-hidden="true" />
          {:else}
            <i class="text-3xl las la-bars" aria-hidden="true" />
          {/if}
      </NavToggle>
    </div>
    <slot name="breadcrumbs" />

    <div
      id="main-menu"
      class:hidden={!$menuOpen}
      class:flex={$menuOpen}
      class="flex-col justify-between"
      aria-label="Main Menu"
      role="menu"
    >
      <div>
        <hr class="font-bold text-sm border-neutral-600 uppercase my-5" />
        <ul class="relative flex flex-col w-full justify-center">
          {#each items as navItem}
            <li role="menuitem">
              <NavLink props={{ "aria-expanded": $menuOpen}} href={navItem.relativePath} class={navLinkClasses}>{navItem.name}</NavLink>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <hr class="font-bold text-sm border-neutral-600 uppercase my-5" />
        <ul aria-label="Settings" class="relative flex flex-col w-full justify-center">
          <li class={settingItemClasses} role="menuitem">
            dyslexia mode
            <ToggleSwitch enabled={$LayoutStore.dyslexia} on:click={() => toggleDyslexia()} />
          </li>
          <li
            class="text-neutral-300 hover:text-white text-right block px-3 py-5 text-base font-medium"
            role="menuitem"
          >
            Clear Settings
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<!-- </div> -->
<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>

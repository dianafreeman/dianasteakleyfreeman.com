<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";

  import SettingsStore from "$stores/SettingsStore";

  import NavBrand from "$lib/components/NavBrand.svelte";
  import MenuToggle from "$lib/components/MenuToggle.svelte";
  import Button from "$lib/components/Button.svelte";
  import ToggleItem from "$lib/components/ToggleItem.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import createTrapFocus from "$lib/trapFocus";
  import createButtonClasses from "$lib/createButtonClasses";
  import { RESPONSIVE_CONTAINER_CLASSES } from "$lib/constants";

  /** @type {import('./$types').LayoutData} */
  export let data;
  let scrollY;
  let innerWidth;
  let trapFocusWapper;
  let main;
  let footer;
  let dyslexia;
  let mode;
  let headerHeight;

  let mainMenuOpen = writable(false);
  let settingsMenuOpen = writable(false);

  const navWrapperClassesClosed = "h-0";
  const navWrapperClassesOpen = "top-0 h-screen";
  const buttonClasses = createButtonClasses();
  const navLinkClasses = `${buttonClasses} inherit px-4 py-5 text-left md:text-right`;

  $: {
    if (browser && $SettingsStore) {
      dyslexia = $SettingsStore.dyslexia;
      mode = $SettingsStore.mode;
    }
  }

  // Close navigation menu when the page changes
  page.subscribe((p) => {
    if (p.url.pathname) {
      // mainMenuOpen.set(false);
      settingsMenuOpen.set(false);
    }
  });

  $: settingsItems = [
    {
      func: SettingsStore.toggleDyslexia,
      value: $SettingsStore.dyslexia === true,
      navigationText: "dyslexia mode"
    }
  ];
  function closeMenuOnEscape(e) {
    if (e.key === "Escape") {
      mainMenuOpen.set(false);
      settingsMenuOpen.set(false);
    }
  }
  // Restore any user settings
  onMount(() => {
    SettingsStore.restoreSettings();
  });

  $: {
    const trapFocus = createTrapFocus(mainMenuOpen);
    if (trapFocusWapper) {
      trapFocusWapper.addEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.addEventListener("keydown", (e) => trapFocus(e, trapFocusWapper));
    }
  }
  onDestroy(() => {
    if (trapFocusWapper) {
      trapFocusWapper.removeEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.removeEventListener("keydown", (e) => trapFocus(e, trapFocusWapper), true);
    }
  });
</script>

<svelte:window bind:scrollY bind:innerWidth />

<Seo
  title={data.seoMeta?.title}
  description={data.seoMeta?.description || data.seoMeta?.excerpt || null}
/>
<header
  bind:clientHeight={headerHeight}
  class="fixed w-full top-0 pb-4 z-30 bg-darkest-gray"
  class:dyslexia
>
  <div
    class="relative w-inherit left-0 right-0 w-full h-full {RESPONSIVE_CONTAINER_CLASSES} {$mainMenuOpen
      ? navWrapperClassesOpen
      : navWrapperClassesClosed}"
  >
    <div class="m-auto h-fit flex flex-row flex-wrap justify-between {$mainMenuOpen ? '' : ''}">
      <NavBrand class="" />
      <div class="flex-grow justify-start md:hidden">
        <MenuToggle
          on:click={() => {
            settingsMenuOpen.set(false);
            mainMenuOpen.update((v) => !v);
          }}
          label="menu"
          menuType="hamburger"
          iconType={$mainMenuOpen ? "times" : "hamburger"}
          id="mainMenu"
          hideLabel
          expanded={$mainMenuOpen}
        />
      </div>
      <ul
        aria-expanded={$mainMenuOpen}
        class="flex flex-col md:flex-row flex-grow list-none w-full md:w-fit md:justify-end justify-center items-center order-3 md:order-2"
      >
        {#each data.navItems as item}
          <li
            role="menuitem"
            class="w-full md:w-fit m-2 px-2"
            aria-hidden={$mainMenuOpen}
            class:hidden={!$mainMenuOpen}
          >
            <a href={item.relativePath} class={navLinkClasses}>{item.navigationText}</a>
          </li>
        {/each}
      </ul>

      <MenuToggle
        on:click={() => {
          settingsMenuOpen.update((v) => !v);
        }}
        label="settings"
        menuType="settings"
        iconType={$settingsMenuOpen ? "close" : "settings"}
        hideLabel
        class="order-2"
        expanded={$settingsMenuOpen}
      />
    </div>
    {#if $settingsMenuOpen}
      <ul bind:this={trapFocusWapper} aria-hidden={!settingsMenuOpen}>
        {#each settingsItems as item}
          <ToggleItem on:click={() => item.func()} value={item.value}>
            {item.navigationText}
          </ToggleItem>
        {/each}
      </ul>
    {/if}
    <Breadcrumbs slot="breadcrumbs" class="w-full m-auto z-40" items={data.breadcrumbs} />
  </div>
</header>
<div style="height: {headerHeight}px" />

<body class="bg-black min-h-screen flex-col flex justify-between">
  <!-- class="relative m-auto flex-grow flex-col flex justify-between " -->
  <main class:dyslexia bind:this={main} transition:fade>
    <slot />
  </main>
  <footer bind:this={footer} class=" bg-darkest-gray p-5 w-full" class:dyslexia>
    <div class="flex flex-row flex-wrap justify-between {RESPONSIVE_CONTAINER_CLASSES}">
      <div class="w-1/2 mb-8 ">
        <p class="font-bold lowercase">Navigation.</p>
        <ul>
          <li class="lowercase"><a href="/">Home</a></li>
          <li class="lowercase"><a href="/gallery">Gallery</a></li>
          <li class="lowercase"><a href="/blog">Blog</a></li>
          <li class="lowercase"><a href="/resources">Resources</a></li>
        </ul>
      </div>

      <div class="w-1/2 mb-8">
        <p class="font-bold lowercase">Terms.</p>
        <ul>
          <li class="lowercase">Privacy Policy</li>
          <li class="lowercase">Report A Problem</li>
        </ul>
      </div>
      <div class="mb-8">
        <p class="font-bold lowercase">Links.</p>
        <ul class="flex w-full">
          <li class="mx-1">Github</li>
          <li class="mx-1">TikTok</li>
          <li class="mx-1">Twitter</li>
          <li class="mx-1">Medium</li>
        </ul>
      </div>
      <p class="text-center flex-grow">Diana M Steakley-Freeman &copy; 2023</p>
    </div>
  </footer>
</body>

<style>
  .inherit {
    display: inherit;
  }
</style>

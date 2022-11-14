<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import NavBrand from "$lib/components/NavBrand.svelte";
  import MenuToggle from "$lib/components/MenuToggle.svelte";
  import MenuContent from "$lib/components/MenuContent.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { onDestroy, onMount } from "svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { writable } from "svelte/store";
  import { browser } from "$app/environment";
  import createTrapFocus from "$lib/trapFocus";

  /** @type {import('./$types').LayoutData} */
  export let data;
  let scrollY, trapFocusWapper, main;

  let mainMenuOpen = writable(false);
  let settingsMenuOpen = writable(false);

  let dyslexia, mode;
  $: {
    if (browser && $LayoutStore) {
      dyslexia = $LayoutStore.dyslexia;
      mode = $LayoutStore.mode;
    }
  }

  page.subscribe((p) => {
    if (p.url.pathname) {
      mainMenuOpen.set(false);
      settingsMenuOpen.set(false);
    }
  });
  // if (page?.url?.pathname) {

  onMount(() => {
    LayoutStore.restoreSettings();
  });

  const navWrapperClassesClosed = "h-0";
  const navWrapperClassesOpen = "top-0 h-screen";

  let headerHeight;

  $: settingsItems = [
    {
      func: LayoutStore.toggleDyslexia,
      value: $LayoutStore.dyslexia === true,
      navigationText: "dyslexia mode"
    }
  ];
  function closeMenuOnEscape(e) {
    if (e.key === "Escape") {
      mainMenuOpen.set(false);
      settingsMenuOpen.set(false);
    }
  }

  onMount(() => {
    const trapFocus = createTrapFocus(mainMenuOpen);
    if (trapFocusWapper) {
      trapFocusWapper.addEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.addEventListener("keydown", (e) => trapFocus(e, trapFocusWapper));
    }
  });
  onDestroy(() => {
    if (trapFocusWapper) {
      trapFocusWapper.removeEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.removeEventListener("keydown", (e) => trapFocus(e, trapFocusWapper), true);
    }
  });
</script>

<svelte:window bind:scrollY />

<Seo
  title={data.seoMeta?.title}
  description={data.seoMeta?.description || data.seoMeta?.excerpt || null}
/>
<div id="superparent" class="bg-black min-h-screen flex-col flex justify-between">
  <header
    bind:clientHeight={headerHeight}
    class="fixed w-full top-0 pb-4 z-10 bg-dark-gray"
    class:dyslexia
  >
    <div
      bind:this={trapFocusWapper}
      class="relative w-inherit left-0 right-0 w-full h-full max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto {$mainMenuOpen
        ? navWrapperClassesOpen
        : navWrapperClassesClosed}"
    >
      <div class="m-auto h-fit flex flex-row justify-between {$mainMenuOpen ? '' : ''}">
        <!-- Top Bar -- Nav Brand and Menu Toggle -->
        <NavBrand />

        <div class=" flex flex-row-reverse">
          <MenuToggle
            on:click={() => {
              settingsMenuOpen.set(false);
              mainMenuOpen.update((v) => !v);
            }}
            label="menu"
            menuType="hamburger"
            id="mainMenu"
            hideLabel
            expanded={$mainMenuOpen}
          />
          <MenuToggle
            on:click={() => {
              mainMenuOpen.set(false);
              settingsMenuOpen.update((v) => !v);
            }}
            label="settings"
            menuType="settings"
            hideLabel
            expanded={$settingsMenuOpen}
          />
        </div>
      </div>
      <MenuContent
        items={data.navItems}
        id="mainMenu"
        menuType="hamburger"
        expanded={$mainMenuOpen}
      />
      <MenuContent
        items={settingsItems}
        id="settingsMenu"
        menuType="settings"
        expanded={$settingsMenuOpen}
      />
      <Breadcrumbs slot="breadcrumbs" class="w-full m-auto" items={data.breadcrumbs} />
    </div>
  </header>
  {#if $page.params.category || $page.params.subcategory}
  <div id="spacer" style="height: {headerHeight}px" />
  {/if}
  <main
    class="relative m-auto flex-grow flex-col flex justify-between align-middle "
    class:dyslexia
    bind:this={main}
    transition:fade
  >
    <slot />
  </main>

  <footer class="bg-dark-gray p-5 w-full" class:dyslexia>
    <div
      class="flex flex-row flex-wrap mx-auto justify-between max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl "
    >
      <div class="w-1/2 mb-8 ">
        <p class="font-bold lowercase">Navigation.</p>
        <ul>
          <li class="lowercase">Home</li>
          <li class="lowercase">Gallery</li>
          <li class="lowercase">Blog</li>
          <li class="lowercase">Resources</li>
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
      <p class="text-center flex-grow">Diana M Steakley-Freeman (c) 2023</p>
    </div>
  </footer>
</div>

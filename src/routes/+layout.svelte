<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import NavBrand from "$lib/components/NavBrand.svelte";
  import MenuToggle from "$lib/components/MenuToggle.svelte";
  import Button from "$lib/components/Button.svelte";
  import ToggleItem from "$lib/components/ToggleItem.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { onDestroy, onMount } from "svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { writable } from "svelte/store";
  import { browser } from "$app/environment";
  import createTrapFocus from "$lib/trapFocus";
  import createButtonClasses from "$lib/createButtonClasses";

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
    if (browser && $LayoutStore) {
      dyslexia = $LayoutStore.dyslexia;
      mode = $LayoutStore.mode;
    }
  }

  // Close navigation menu when the page changes
  page.subscribe((p) => {
    if (p.url.pathname) {
      mainMenuOpen.set(false);
      settingsMenuOpen.set(false);
    }
  });

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
  // Restore any user settings
  onMount(() => {
    LayoutStore.restoreSettings();
  });
  // enable scroll snapping
  onMount(() => {
    document.querySelector("body, html").classList.add("scroll-snap-mandatory");
  });

  function onFooterReached() {
    // disable scroll snapping once the footer is reached
    // .scroll-snap-mandatory is configured in src/app.css
    if (footer) {
      const elementAboveFooter = footer.previousElementSibling;
      const lastItemAboveFooter = elementAboveFooter.lastElementChild;
      if (scrollY > lastItemAboveFooter.offsetTop) {
        document.querySelector("body, html").classList.remove("scroll-snap-mandatory");
      } else {
        if (!document.querySelector("body, html").classList.contains("scroll-snap-mandatory"))
          document.querySelector("body, html").classList.add("scroll-snap-mandatory");
      }
    }
  }
  onMount(() => {
    const trapFocus = createTrapFocus(mainMenuOpen);
    document.addEventListener("scroll", onFooterReached);
    if (trapFocusWapper) {
      trapFocusWapper.addEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.addEventListener("keydown", (e) => trapFocus(e, trapFocusWapper));
    }
    return () => document.removeEventListener("scroll", onFooterReached);
  });
  onDestroy(() => {
    if (trapFocusWapper) {
      trapFocusWapper.removeEventListener("keydown", closeMenuOnEscape);
      trapFocusWapper.removeEventListener("keydown", (e) => trapFocus(e, trapFocusWapper), true);
    }
  });

  $: {
    if (innerWidth > 640) {
      mainMenuOpen.set(true);
    }
  }
</script>

<svelte:window bind:scrollY bind:innerWidth />

<Seo
  title={data.seoMeta?.title}
  description={data.seoMeta?.description || data.seoMeta?.excerpt || null}
/>
<header
  bind:clientHeight={headerHeight}
  class="fixed w-full top-0 pb-4 z-30 bg-dark-gray"
  class:dyslexia
>
  <div
    class="relative w-inherit left-0 right-0 w-full h-full max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto {$mainMenuOpen
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
      <ul aria-hidden={!settingsMenuOpen}>
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
<body class="bg-black min-h-screen flex-col flex justify-between">
  {#if $page.params.category || $page.params.subcategory}
    <div id="spacer" style="height: {headerHeight}px" />
  {/if}
  <main
    class="relative m-auto flex-grow flex-col flex justify-between "
    class:dyslexia
    bind:this={main}
    transition:fade
  >
    <slot />
  </main>
  <footer bind:this={footer} class=" bg-dark-gray p-5 w-full" class:dyslexia>
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
</body>

<style>
  .inherit {
    display: inherit;
  }
</style>

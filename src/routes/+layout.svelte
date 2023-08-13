<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import SettingsStore from "$stores/SettingsStore";
  import Seo from "$lib/components/Seo.svelte";

  import {
    mainMenuIsOpen,
    settingsMenuIsOpen,
    isMobileScreen,
    topNavHeight
  } from "$stores/LayoutStore";
  import TopNav from "$lib/components/Nav/NavBar.svelte";
  import FooterNav from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let main;
  let footer;
  let dyslexia;
  let mode;
  let headerHeight;
  let scrollY;
  let innerWidth;

  $: {
    if (browser) {
      dyslexia = $SettingsStore.dyslexia;
      mode = $SettingsStore.mode;
    }
  }

  // Close navigation menu when the page changes
  page.subscribe((p) => {
    if (p.url.pathname) {
      if ($isMobileScreen) {
        mainMenuIsOpen.set(false);
      }
      settingsMenuIsOpen.set(false);
    }
  });

  $: {
    if (innerWidth >= 768) {
      mainMenuIsOpen.set(true);
      isMobileScreen.set(false);
    } else {
      isMobileScreen.set(true);
    }
  }
  // Restore any user settings
  onMount(() => {
    SettingsStore.restoreSettings();
  });

  $: headerHeight && topNavHeight.set(headerHeight);


</script>

<svelte:window bind:scrollY bind:innerWidth />

<Seo />
<GoogleAnalytics />
<header
  bind:clientHeight={headerHeight}
  class="bg-semi-transparent fixed top-0 z-30 w-full pb-4"
  class:dyslexia>
  <div>
    <a
      class="focus:bg-semi-transparent sr-only focus:not-sr-only focus:absolute focus:top-5 focus:left-5 focus:z-[99] focus:p-5"
      href="#content-start">Skip to content</a>
  </div>
  <TopNav navItems={data.navItems} />
</header>
<div id="spacer" style="height: {$topNavHeight}px;" />
{#key $page.url.pathname}
  <main class:dyslexia bind:this={main} in:fade class="flex flex-grow flex-col">
    <slot />
  </main>
{/key}
<footer bind:this={footer} class="w-full bg-darkest-gray p-5" class:dyslexia>
  <FooterNav />
</footer>

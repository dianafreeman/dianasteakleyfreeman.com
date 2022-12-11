<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import { onMount } from "svelte";
  import SettingsStore from "$stores/SettingsStore";
  import Seo from "$lib/components/Seo.svelte";

  import {
    mainMenuIsOpen,
    settingsMenuIsOpen,
    isMobileScreen,
    topNavHeight
  } from "$stores/LayoutStore";
  import TopNav from "$lib/components/Header.svelte";
  import FooterNav from "$lib/components/Footer.svelte";

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

<Seo
  title={data.seoMeta?.title}
  description={data.seoMeta?.description || data.seoMeta?.excerpt || null}
/>
<header
  bind:clientHeight={headerHeight}
  class="fixed top-0 z-30 w-full bg-darkest-gray pb-4"
  class:dyslexia
>
  <TopNav navItems={data.navItems} />
  <Breadcrumbs slot="breadcrumbs" class="z-40 m-auto w-full" items={data.breadcrumbs} />
</header>
<div id="spacer" style="height: {$topNavHeight}px;" />
{#key $page.url.pathname}
  <main class:dyslexia bind:this={main} in:fade>
    <slot />
  </main>
{/key}
<footer bind:this={footer} class="w-full bg-darkest-gray p-5" class:dyslexia>
  <FooterNav />
</footer>

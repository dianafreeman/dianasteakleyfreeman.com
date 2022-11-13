<script>
  import "../app.css";
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
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
  import { spring } from "svelte/motion";

  /** @type {import('./$types').LayoutData} */
  export let data;
  let scrollY, trapFocusWapper;

  let mainMenuOpen = writable(false);
  let settingsMenuOpen = writable(false);

  let dyslexia, mode;
  $: {
    if (browser && $LayoutStore) {
      console.log();
      dyslexia = $LayoutStore.dyslexia;
      mode = $LayoutStore.mode;
    }
  }

  onMount(() => {
    LayoutStore.restoreSettings();
  });

  const navWrapperClassesClosed = "h-0";
  const navWrapperClassesOpen = "top-0 h-screen";

  let height, width;

  let ySpring = spring(0);

  function onDownClick() {
    ySpring.update((v) => v + height);
  }

  ySpring.subscribe((y) => {
    if (browser) {
      window.scrollTo(0, y);
    }
  });

  $: settingsItems = [
    {
      func: LayoutStore.toggleDyslexia,
      value: $LayoutStore.dyslexia === true,
      displayText: "dyslexia mode"
    }
  ];
  onMount(() => {
    const trapFocus = createTrapFocus(mainMenuOpen);
    function closeMenuOnEscape(e){
      if(e.key === "Escape"){
        mainMenuOpen.set(false)
settingsMenuOpen.set(false)
      }
    }
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

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<Seo
  title={data.seoData?.title}
  description={data.seoData?.description || data.seoData?.excerpt || null}
/>
<header
  class="relative w-auto pb-4 inset-0 z-50 max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-neutral-900"
  class:dyslexia
>
  <div
    bind:this={trapFocusWapper}
    style="transform: translateY({scrollY}px);"
    class=" w-inherit left-0 right-0 w-full mx-auto bg-neutral-900 h-full {$mainMenuOpen
      ? navWrapperClassesOpen
      : navWrapperClassesClosed}"
  >
    <div
      class="m-auto h-fit bg-neutral-900 flex flex-row justify-between {$mainMenuOpen ? '' : ''}"
    >
      <!-- Top Bar -- Nav Brand and Menu Toggle -->
      <NavBrand />

      <div class="relative flex flex-row">
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
    <Breadcrumbs slot="breadcrumbs" class="w-full m-auto -z-10" items={data.breadcrumbs} />
  </div>
</header>
<main class="relative m-auto max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl" class:dyslexia>
  <div
    class="fixed bottom-10 inline-flex justify-end w-full z-50 max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
  >
    <Button class="p-5 w-fit" on:click={() => onDownClick()}>
      <i class="text-4xl las la-long-arrow-alt-down" />
    </Button>
  </div>
  <slot />
</main>

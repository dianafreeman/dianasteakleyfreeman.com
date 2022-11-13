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

  let height, width;

  let ySpring = spring(0);

  function createScrollTargets() {
    const scrollTargets = Array.from(main.querySelectorAll("[data-scrolltarget]"));
    console.log(scrollTargets);
    const positions = [0, ...scrollTargets.map((e) => e.offsetTop + e.clientHeight)];

    // get the position that is closest to the current value of scrollY
    const current = positions.reduce((prev, curr) =>
      Math.abs(curr - (scrollY + height)) < Math.abs(prev - (scrollY + height)) ? curr : prev
    );

    const first = positions[0];
    const last = positions[positions.length - 1];

    const previousPositions = positions.filter((p) => p <= scrollY);
    const previous = previousPositions[previousPositions.length - 1];

    const nextPositions = positions.filter((p) => p > scrollY);
    const next = nextPositions[0];

    return {
      current,
      first,
      last,
      next,
      previous
    };
  }

  function onArrowClick(type) {
    // TODO: make this stateful
    const { first, last, current, next } = createScrollTargets();

    console.log(first);
    if (type === "down") {
      if (!next || current === last) return ySpring.set(first);
      return ySpring.set(next);
    }
  }

  function onDownClick() {
    onArrowClick("down");
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

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<Seo
  title={data.seoData?.title}
  description={data.seoData?.description || data.seoData?.excerpt || null}
/>
<div bind:this={main} class="flex-col flex justify-between min-h-screen">
  <header
    class="relative pb-4 z-10 bg-dark-gray"
    style="transform: translateY({scrollY}px);"
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
  <main
    class="relative mx-auto h-full max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
    class:dyslexia
  >
    <div
      class="fixed bottom-10 inline-flex justify-end w-full z-50 max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
    >
      <Button
        class="p-5 w-fit bg-semi-transparent mx-2 outline-neutral-600 outline outline-1"
        on:click={onDownClick}
      >
        <i class="text-4xl las la-long-arrow-alt-down" />
      </Button>
    </div>
    <div>
      <slot />
    </div>
  </main>

  <footer class="bg-dark-gray py-5" class:dyslexia>
    <div data-scrolltarget class="flex flex-row justify-around">
      <div>
        <p class="font-bold uppercase">Main Menu</p>
        <ul>
          <li>Home</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <p class="font-bold uppercase">For Users</p>
        <ul>
          <li>Privacy Statement</li>
          <li>Cookie</li>
          <li>Report A Problem</li>
        </ul>
      </div>
      <div>
        <p class="font-bold uppercase">Socials</p>
        <ul>
          <li>Github</li>
          <li>TikTok</li>
          <li>Twitter</li>
          <li>Medium</li>
        </ul>
      </div>
      <div>
        <p>Diana M Steakley-Freeman</p>
        <p>(c) 2023</p>
      </div>
    </div>
  </footer>
</div>

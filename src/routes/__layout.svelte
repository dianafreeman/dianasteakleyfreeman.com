<script context="module">
  export async function load({ url, params }) {
    return {
      props: {
        url
      }
    };
  }
</script>

<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import "normalize.css";
  import "../app.css";
  import IntroComponent from "$lib/components/Intro.svelte";
  import Intro from "$stores/IntroStore";
  import SideNav from "$lib/components/Nav/SideNav.svelte";
  import { onMount } from "svelte";
  import Navigation from "$stores/NavigationStore";
  import { spring } from "svelte/motion";

  export let url;

  let windowHeight;

  function chooseContentColor(introIsShowing, navIsOpen) {
    if (navIsOpen) {
      if (introIsShowing) return "white";
      return "black";
    } else {
      if (introIsShowing) return "black";
      return "white";
    }
  }

  // Y position of the Intro panel
  let top = spring(0);

  function slideOut() {
    top.update((v) => (v = windowHeight - 10));
  }
  function slideIn() {
    top.update((v) => (v = 0));
  }

  function toggleIntro() {
    if ($Intro.isShowing) {
      Intro.hideIntro();
      slideOut();
    } else {
      Intro.showIntro();
      slideIn();
    }
  }
  $: navBarContentColor = chooseContentColor($Intro.isShowing, $Navigation.isOpen);
  $: sideNavContentColor = chooseContentColor($Intro.isShowing, $Navigation.isOpen);
  $: sideNavBgColor = $Intro.isShowing ? "black" : "white";

  onMount(() => {
    if (url.pathname == "/") {
      Intro.set({
        isShowing: true,
        isComplete: false
      });
    }
    Intro.setWindowHeight(windowHeight);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} />
<header class="w-full flex fixed flex-row z-50">
  {#if $Intro.isShowing}<IntroComponent {top} {toggleIntro} {windowHeight} />{/if}
  <NavBar contentColor={navBarContentColor}>
    <button class="absolute w-full top-0 left-0 text-center bg-black z-50" on:click={toggleIntro}>
      {$Intro.isShowing ? "Hide" : "Show"} Intro
    </button>
  </NavBar>

  <SideNav color={sideNavContentColor} background={sideNavBgColor} />
</header>
<main class="relative bg-black ">
  <div id="spacer" class="h-36" />
  <slot />
  <footer class="h-16 flex flex-row justify-center m-auto">
    <p class="p-4">Copyright 2022 | Diana M Steakley-Freeman</p>
  </footer>
</main>

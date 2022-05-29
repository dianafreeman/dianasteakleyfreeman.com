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
  <IntroComponent {toggleIntro} {windowHeight} />
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

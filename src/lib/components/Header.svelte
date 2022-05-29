<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import IntroComponent from "$lib/components/Intro.svelte";
  import Intro from "$stores/IntroStore";
  import SideNav from "$lib/components/Nav/SideNav.svelte";
  import Navigation from "$stores/NavigationStore";
import { onMount } from "svelte";

  export let windowHeight;

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

  let NAV_HEIGHT = 136; // TODO add this to a layout store.

</script>

<header class="w-full flex absolute flex-row z-50" >
  <IntroComponent {toggleIntro} {windowHeight} />
  <NavBar contentColor={navBarContentColor}>
    <button class="absolute w-full top-0 left-0 text-center bg-black z-50" on:click={toggleIntro}>
      {$Intro.isShowing ? "Hide" : "Show"} Intro
    </button>
  </NavBar>
  <SideNav color={sideNavContentColor} background={sideNavBgColor} />
</header>
<div id="spacer" class="bg-black" style="height: {NAV_HEIGHT}px;" />
<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import Intro from "$stores/IntroStore";
  // import SideNav from "$lib/components/Nav/SideNav.svelte";
  import Navigation from "$stores/NavigationStore";

  function chooseContentColor(introIsShowing, navIsOpen) {
    if (navIsOpen) {
      if (introIsShowing) return "white";
      return "black";
    } else {
      if (introIsShowing) return "black";
      return "white";
    }
  }

  let isShowing = false // $Intro.isShowing
  $: navBarContentColor = chooseContentColor(isShowing, $Navigation.isOpen);
  // $: sideNavContentColor = chooseContentColor(isShowing, $Navigation.isOpen);
  // $: sideNavBgColor = isShowing ? "black" : "white";
  let yPos;
</script>

<svelte:window bind:scrollY={yPos} />

<header

  class="w-screen flex absolute flex-row z-50"
  style:transform="translateY({yPos}px)"
>
  <NavBar />
  <!-- <SideNav color={sideNavContentColor} background={sideNavBgColor} /> -->
</header>

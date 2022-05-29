<script>
  import { fade } from "svelte/transition";

  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import IntroComponent from "$lib/components/Intro.svelte";
  import Intro from "$stores/IntroStore";
  import SideNav from "$lib/components/Nav/SideNav.svelte";
  import Navigation from "$stores/NavigationStore";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import IntroStore from "$stores/IntroStore";
  import TrailStore from "$stores/TrailStore";
  import FloatingButton from "$lib/animations/FloatingButton.svelte";
  import DoubleChevronRight from "$lib/icons/doubleChevronRight.svelte";
  import FastForward from "$lib/icons/fastForward.svelte";
  import Play from "$lib/icons/play.svelte";
  import Pause from "$lib/icons/pause.svelte";

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
    } else {
      Intro.showIntro();
    }
  }
  $: navBarContentColor = chooseContentColor($Intro.isShowing, $Navigation.isOpen);
  $: sideNavContentColor = chooseContentColor($Intro.isShowing, $Navigation.isOpen);
  $: sideNavBgColor = $Intro.isShowing ? "black" : "white";

  function flip3d(_node, options) {
    return {
      ...options,
      css(t) {
        return `transform: perspective(100px) rotateY(${t * 180}deg)`;
      }
    };
  }
  let yPos;
  let playing = true;
</script>

<svelte:window bind:scrollY={yPos} />

<header class="w-screen flex absolute flex-row z-50" style:transform="translateY({yPos}px)">
  {#if $Intro.isShowing}
    <IntroComponent {toggleIntro} {windowHeight}>
      <div slot="intro-controls" class="flex justify-between">
        <div class="flex text-black" style:color="#989898">
          <!-- IntroSkip Button -->
          <div transition:fade class="flex justify-center">
            <button
              class="mx-2 "
              on:click={() => {
                playing = !playing;
                TrailStore.pauseOrResume();
              }}
            >
              {#if playing}
                PAUSE
              {:else}
                PLAY
              {/if}
            </button>
          </div>
          <div transition:fade class="flex justify-center">
            <button
              class="mx-2 "
              on:click={() => {
                TrailStore.skip();
                IntroStore.setIsComplete(true);
              }}
            >
              SKIP
              <!-- <FastForward /> -->
            </button>
          </div>
        </div>
        {#if $IntroStore.isComplete}
          <!-- NavToggle -->
          <div transition:fade>
            <FloatingButton enabled={$IntroStore.isShowing} onClick={toggleIntro}>
              <ArrowDown />
            </FloatingButton>
          </div>
        {/if}
      </div>
    </IntroComponent>
  {:else}
    <button class="absolute w-screen top-0 left-0 text-center bg-black z-50" on:click={toggleIntro}>
      {$Intro.isShowing ? "Hide" : "Show"} Intro
    </button>
    <NavBar contentColor={navBarContentColor} />
    <SideNav color={sideNavContentColor} background={sideNavBgColor} />
  {/if}
</header>

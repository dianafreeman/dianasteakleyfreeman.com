<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";

  import { fly, fade } from "svelte/transition";
  import Navigation from "$stores/NavigationStore";
  import FlatButtonGroup from "$lib/components/ButtonGroup/FlatButtonGroup.svelte";
  import IntroStore from "$stores/IntroStore";

  let yPos;
</script>

<svelte:window bind:scrollY={yPos} />

<header class="w-screen flex absolute flex-row z-50" style:transform="translateY({yPos}px)">
  {#if $IntroStore}
    <nav transition:fade={{ delay: 500 }} class="w-full absolute py-10 px-6 ">
      <NavBar />
    </nav>
  {/if}

  <!-- <SideNav color={sideNavContentColor} background={sideNavBgColor} /> -->
</header>
{#if $IntroStore}
  <div transition:fade={{ delay: 500 }} class="fixed bottom-0 w-full" style:z-index={99999}>
    <FlatButtonGroup />
  </div>
{/if}

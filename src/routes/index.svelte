<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import ContentStore from "$stores/ContentStore";

  import Section from "$lib/components/Section.svelte";
  import IntroStore from "$stores/IntroStore";
  import LayoutStore from "$stores/LayoutStore";

  function toggleIntro() {
    // Duplicated Code Alert!
    if ($IntroStore.isShowing) {
      IntroStore.hideIntro();
    } else {
      IntroStore.showIntro();
    }
  }
  let scrollY;

  // let grid;
  // // const contentGrid = derived(ContentStore, $ContentStore => $ContentStore)

  // ContentStore.subscribe(val => {
  //   grid = val;
  //   // console.log('grid[1]', v[1]))
  // })
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />

<!-- <section id="intro">

  <button
    class:invisible={$IntroStore.isShowing}
    class="absolute w-screen top-0 left-0 text-center bg-black z-50"
    on:click={toggleIntro}
  >
    {$IntroStore.isShowing ? "Hide" : "Show"} Intro
  </button>
</section> -->

{#each $ContentStore as row}
  <div class="flex flex-row" style="width: calc({row.length} * 100vw)">
    {#each row as section, sectionIndex}
      <Section
        class="flex flex-col justify-around overflow-scroll relative p-5"
        style="width: 100vw; height:100vh"
      >
        <svelte:component this={section.component} {section} />
      </Section>
    {/each}
  </div>
{/each}
<!-- <Section id="landing" class="flex flex-col overflow-scroll" style="height: 100vh;">
  <div class="relative p-6 h-full justify-evenly flex flex-col">
    <h1 class="text-5xl lg:text-6xl xl:text-8xl font-bold ">Hi. I'm Diana</h1>
    <ul class="font-manrope py-3">
      <li>
        <button on:click={() => setCell({ x: 0, y: 1 })} class={landingButtonClass}>Coder.</button>
      </li>
      <li>
        <button on:click={() => setCell({ x: 1, y: 1 })} class={landingButtonClass}>Creator.</button
        >
      </li>
      <li>
        <button on:click={() => setCell({ x: 2, y: 1 })} class={landingButtonClass}
          >Communicator.</button
        >
      </li>
    </ul>
  </div>
</Section>
<div class="flex flex-row" style="width: calc({$sections.length} * 100vw)">
  {#each $sections as section, idx}
    <Section
      class="flex flex-col justify-around overflow-scroll relative"
      style="width: 100vw; height:100vh"
    >
      <SectionHero data={{ ...section, cell: { x: idx, y: 1 } }} index={idx} />
    </Section>
  {/each}
</div>
-->

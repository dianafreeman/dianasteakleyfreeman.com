<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import SectionStore from "$stores/SlidesStore";
  import Section from "$lib/components/Section.svelte";
  import IntroStore from "$stores/IntroStore";
  import LayoutStore from "$stores/LayoutStore";
  import Intro from "$lib/components/Intro.svelte";
  import SectionHero from "$lib/components/SectionHero.svelte";

  const items = [
    { title: "title 1", category: "code", slug: "/projects/title-1" },
    { title: "title 2", category: "graphics", slug: "/projects/title-2" },
    { title: "title 3", category: "code", slug: "/projects/title-2" },
    { title: "title 4", category: "writing", slug: "/blog/title-4" },
    { title: "title 5", category: "writing", slug: "/blog/title-5" },
    { title: "title 6", category: "graphics", slug: "/projects/title-6" }
  ];

  function toggleIntro() {
    // Duplicated Code Alert!
    if ($IntroStore.isShowing) {
      IntroStore.hideIntro();
    } else {
      IntroStore.showIntro();
    }
  }
  let scrollY;
  const { setCell, sections } = LayoutStore;

  let landingButtonClass =
    "text-3xl lg:text-4xl xl:text-5xl mr-2 w-full text-right p-1 hover:bg-white hover:text-black focus:bg-white focus:text-black";

  
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />

<section id="intro">
  {#if $IntroStore.isShowing}
    <Intro />
  {/if}
  <button
    class:invisible={$IntroStore.isShowing}
    class="absolute w-screen top-0 left-0 text-center bg-black z-50"
    on:click={toggleIntro}
  >
    {$IntroStore.isShowing ? "Hide" : "Show"} Intro
  </button>
</section>
<Section class="flex flex-col overflow-scroll" style="height: 100vh;">
  <!-- 
    LANDING
    This section is not a scrollable -->
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
<div class="flex flex-row" style="width: calc({$sections.length} * 100vw)">
  {#each $sections as section, idx}
    <Section
      class="flex flex-col justify-center overflow-hidden relative"
      style="width: 100vw; height:100vh"
    >
      <div class="p-6">
        <h2 class="text-4xl font-bold text-center">{@html section.title}</h2>
      </div>
      <div id="scroll-container-{idx}" class="overflow-y-scroll p-6" style:height="50vh">
        {#each items as item}
          <a
            transition:fade
            href={item.slug}
            class="my-12 flex align-bottom"
            style:min-height="20vh"
          >
            <div class="flex flex-col self-middle justify-end py-4 text-right w-full">
              <h4 class=" text-3xl lg:text-4xl xl:text-5xlfont-medium">{item.title}</h4>
              <p class="font-manrope font-thin">very short description</p>
            </div>
          </a>
        {/each}
      </div>
    </Section>
  {/each}
</div>

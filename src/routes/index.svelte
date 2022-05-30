<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import Slideshow from "$lib/components/Slideshow/Slideshow.svelte";
  import SectionStore from "$stores/SlidesStore";
  import Slide from "$lib/components/Slideshow/Slide.svelte";
  import Section from "$lib/components/Section.svelte";
  import IntroStore from "$stores/IntroStore";
  import SlideControls from "$lib/components/Slideshow/SlideControls.svelte";
  import Intro from "$lib/components/Intro.svelte";

  // export let index;

  // $: displayNumber = ;

  const items = [
    { title: "title 1", category: "code", slug: "/projects/title-1" },
    { title: "title 2", category: "graphics", slug: "/projects/title-2" },
    { title: "title 3", category: "code", slug: "/projects/title-2" },
    { title: "title 4", category: "writing", slug: "/blog/title-4" },
    { title: "title 5", category: "writing", slug: "/blog/title-5" },
    { title: "title 6", category: "graphics", slug: "/projects/title-6" }
  ];

  let contentAnchor;
  let titleAnchor;

  let yPosition;

  $: {
    if (contentAnchor) console.log("contentAnchor", contentAnchor);
    if (titleAnchor) console.log("titleAnchor", titleAnchor);
  }

  function handleClick(idx) {
    yPosition = titleAnchor.offsetTop;
    SectionStore.setActiveIndex(idx);
  }
  let slideNavHeight;
  let scrollY;

  let showSlideControls = !$IntroStore.isShowing;
  // get topOffset of target Section
  // if scrollY > target { show slide navigation}
  $: {
    console.log(scrollY);
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />

<section>
  <Intro />
</section>
<section class="justify-between">
  <div class="relative p-6 my-auto">
    <h1 class="text-4xl lg:text-5xl xl:text-7xl font-bold ">Hi. I'm Diana</h1>
    <h2 class="font-manrope text-3xl lg:text-4xl xl:text-5xl py-3 flex">
      <button class="inline">Coder.</button>
      <button class="inline">Creator.</button>
      <button class="inline">Communicator.</button>
    </h2>
  </div>
</section>
<div id="title-anchor" bind:this={titleAnchor}>
  {#each $SectionStore.slides as slide, idx}
    <Section class="flex flex-col justify-around" style="min-height:100vh">
      <div class="relative">
        <h1 class="font-bold text-6xl xl:text-7xl ">
          {slide.title}
        </h1>

        <h2
          class="text-transparent-60 font-manrope font-black text-3xl lg:text-4xl xl:text-5xl py-3"
        >
          {`0${idx + 1}.`}
        </h2>
        <p class="font-manrope text-xl">{slide.description}</p>
      </div>
    
      <div class="relative">
        <h2 class="text-4xl font-bold text-center">Projects</h2>
      </div>
      {#if idx === $SectionStore.activeIndex}
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
      {/if}
    </Section>
  {/each}
</div>

<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import Slideshow from "$lib/components/Slideshow/Slideshow.svelte";
  import SlidesStore from "$stores/SlidesStore";
  import Slide from "$lib/components/Slideshow/Slide.svelte";
  import Section from "$lib/components/Section.svelte";

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

  function handleClick() {
    yPosition = titleAnchor.offsetTop;
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY={yPosition} />

<!-- <Section class="justify-around">
  <div class="flex flex-col p-6">
    <h1 class="text-4xl lg:text-5xl xl:text-7xl font-bold">Hi. I'm Diana</h1>
  </div>
  <div class="flex flex-col p-6">
    <ul>
      <li class=""><button on:click={handleClick}>coder</button></li>
      <li class=""><button on:click={handleClick}>creator</button></li>
      <li class=""><button on:click={handleClick}>communicator</button></li>
    </ul>
  </div>
</Section>
<div id="title-anchor" bind:this={titleAnchor} /> -->

<Slideshow sectionsPerSlide={2} nubmerOfSlides={$SlidesStore.slides.length}>
  {#each $SlidesStore.slides as slide, idx}
    <Slide {slide} index={idx}>
      <Section id="title-section-{idx}" class="flex flex-col justify-around" >
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
      </Section>

      <Section id="content-section-{idx}" class="relative py-10 flex flex-col justify-end">
        <div class="relative">
          <h2 class="text-4xl font-bold text-center">Projects</h2>
        </div>
        {#if idx === $SlidesStore.activeIndex}
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
    </Slide>
  {/each}
</Slideshow>

<!-- <Slideshow type="CONTENT" slides={$SlidesStore.contentSlides} /> -->

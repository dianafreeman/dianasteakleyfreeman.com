<script context="module">
  export const prerender = true;
  export let pageBody;
</script>

<script>
  import ContentStore from "$stores/ContentStore";
  import Section from "$lib/components/Section.svelte";
  import IntroComponent from "$lib/content/Intro.svelte";
  import ListContent from "$lib/content/SectionContent.svelte";
  import HeroContent from "$lib/content/SectionHero.svelte";

  let scrollY;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="">
  <div class="flex flex-col justify-evenly relative p-5 h-auto">
    <IntroComponent />
  </div>
  <div
    class="flex flex-col justify-evenly relative p-5 h-auto bg-neutral-900"
    
  >
    <HeroContent
      section={{
        title: "Coder",
        description: "(v.) To dance between the lines of art, science, and opinion.",
        verb: "Browse",
        categoryName: "Projects"
      }}
    />
  </div>
  <div
    class="flex flex-col justify-evenly relative p-5 h-auto"
  >
    <HeroContent
      section={{
        title: "Coder",
        description: "(v.) To dance between the lines of art, science, and opinion.",
        verb: "Browse",
        categoryName: "Projects"
      }}
    />
  </div>
</div>

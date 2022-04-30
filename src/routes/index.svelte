<script context="module">
  export const prerender = true;
</script>

<script>
  import Landing from "$lib/components/Landing.svelte";
  import SlidesStore from "$stores/SlidesStore";

  let slides, activeIndex, activeColor;

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIndex = data.activeIndex;
    activeColor = slides[activeIndex].color;
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<Landing
  title={slides[activeIndex].title}
  index={activeIndex}
  description={slides[activeIndex].description}
/>

<div class="w-screen" style="color: {activeColor}">
  <div class="min-h-screen bg-white p-10">
    <div class="flex flex-col p-10">
      <h2 class="font-bold text-center">{slides[activeIndex].categoryName}</h2>
    </div>
    <div class="flex flex-col p-10">
      <p class="text-xl font-manrope">
        Exercitation aliquip magna aute ut et consectetur aliqua minim Lorem duis enim. Id culpa
        fugiat qui nostrud duis ex adipisicing voluptate irure velit. Reprehenderit nostrud officia
        esse aliqua.
      </p>
    </div>
    <ul class="list-none w-full">
      <li class="flex w-1/3">
        <p class="text-4xl m-1 pr-2">01</p>
        <div class="border-l-8 pl-5" style="border-color: {activeColor};">
          <p class="p-1 text-bold text-2xl">Title</p>
          <img
            class="my-3"
            width="300"
            height="200"
            alt="project capture"
            src="https://picsum.photos/300/200"
          />
          <p class="font-manrope">
            Nulla cillum eu irure elit cupidatat incididunt proident qui. Non tempor cupidatat sint
            consectetur pariatur et deserunt. Incididunt occaecat incididunt voluptate aliqua labore
            reprehenderit culpa nostrud irure commodo magna. Dolor eiusmod aute pariatur mollit
            deserunt irure in laboris aliqua ut. Laboris dolor proident ut id
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

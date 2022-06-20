<script>
  export let section;
  export let index;
</script>

<div class="p-6">
  <h1 class="font-bold text-6xl xl:text-7xl">
    {@html section.title}
  </h1>

  <h2 class="text-transparent-60 font-manrope font-black text-3xl lg:text-4xl xl:text-5xl py-3">
    {`0${index + 1}.`}
  </h2>
  <p class="font-manrope text-xl">{section.description}</p>
</div>

<!-- 
  <script>
  import SolidCircleLeft from "$lib/icons/solidCircleLeft.svelte";
  import SolidCircleRight from "$lib/icons/solidCircleRight.svelte";
  import { fade } from 'svelte/transition';

  export let data;
  export let index;
</script>

<div  class="p-6">
  <h2 class="text-4xl font-bold text-center">{@html data.categoryName}</h2>
</div>
<div id="scroll-container-{index}" class="overflow-y-scroll p-6" style:height="50vh">
  {#each data.categoryItems as item}
    <a transition:fade href={item.slug} class="my-12 flex align-bottom" style:min-height="20vh">
      <div class="flex flex-col self-middle justify-end py-4 text-right w-full">
        <h4 class=" text-3xl lg:text-4xl xl:text-5xlfont-medium">{item.title}</h4>
        <p class="font-manrope font-thin">very short description</p>
      </div>
    </a>
  {/each}
</div>

 -->
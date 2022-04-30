<script>
  import SlidesStore from "$stores/SlidesStore";
  export let items;

  let slides;
  let activeIdx = 0;
  let activeColor = "cyan";

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
    activeColor = slides[activeIdx].color;
  });
</script>

<div
  class="absolute w-full h-screen lg:w-1/2 p-5 right-0 top-0"
  style="background-color: rgba(255,255,255,0.9); z-index: 100;"
>
  <div id="spacer" class="h-12" />
  <div class="flex flex-col">
    {#each items as item, i}
      <li
        class:border-l-4={activeIdx === i}
        class="list-none my-2 flex-row"
        style="border-color:{activeColor}"
      >
        <a href="/" class="font-bold text-2xl pl-2">{item.title}</a>
      </li>
    {/each}
  </div>
</div>

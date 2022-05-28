<script>
  import SlidesStore from "$stores/SlidesStore";
</script>

<div class="inline-flex align-middle">
  <button class="p-3" on:click={SlidesStore.previous}>PREV</button>
  <div class="mx-2 inline-flex my-auto">
    {#each $SlidesStore.landingSlides as slide, i}
      <button class="m-1 rounded-full border hover:bg-white focus:bg-white w-3 h-3" />
    {/each}
  </div>
  <button class="p-3" on:click={SlidesStore.next}>NEXT</button>
</div>

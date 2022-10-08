<script>
  export let title;
  export let description;
</script>

<!-- <div class="relative bg-contain bg-center m-5 flex overlay" style:background={"url(\"https://picsum.photos/800/300\""}> -->
  <div class="mx-3 flex flex-col justify-center relative">
    <button class="text-3xl font-medium p-5 my-2 border-white border rounded-full ">{title}</button>
    <!-- <h4 class="text-3xl font-medium">{title}</h4> -->
    {#if description}
    <p class="font-thin">{description}</p>
    {/if}
  </div>
<!-- </div> -->

<style>
  .overlay::before {
    content: "";
    background-color: rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
<script>
</script>

<div class="bg-neutral-300 shadow h-full w-full rounded-md p-2 ">
  <div id="buttons" class="flex flex-row w-full justify-start ">
    <div class="bg-red-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-yellow-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-green-500 rounded-full h-3 w-3 mr-2" />
  </div>

  <div class="flex mt-2">
    <div id="left-toolbar" class="flex flex-col h-full w-5">
      {#each Array(23) as _thing}
        <div class="bg-neutral-200 rounded-full h-1 w-3 my-1" />
      {/each}
    </div>
    <div class="p-2 text-xl bg-white text-black rounded-sm flex-1">
      <slot />
    </div>
    
  </div>
</div>

<script>
    import Typewriter from "svelte-typewriter";
</script>

<div class="bg-neutral-800 shadow h-full w-full rounded-md p-2">
  <div id="buttons" class="flex flex-row w-full justify-start">
    <div class="bg-red-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-yellow-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-green-500 rounded-full h-3 w-3 mr-2" />
  </div>
  <div class="py-2 text-xl">
    <div style="min-height: 300px;" class="flex flex-col justify-start font-sharetechmono">
        <p class="text-5xl xl:text-6xl my-6">Coder</p>
        <Typewriter interval={80}>
          > The technologies that survive the next two decades will do so because they prioritize human
          values over abstracted metrics.
        </Typewriter>
      </div>
    <!-- <slot /> -->
  </div>
</div>

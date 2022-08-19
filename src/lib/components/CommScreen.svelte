<script>
  import ArrowSmRight from "$lib/icons/arrowSmRight.svelte";
  import ArrowSmLeft from "$lib/icons/arrowSmLeft.svelte";
  import Refresh from "$lib/icons/refresh.svelte";
import Typewriter from "svelte-typewriter";
</script>

<div class="bg-gray-300 shadow h-full w-full rounded-md p-2 ">
  <div id="buttons" class="flex flex-row w-full justify-start ">
    <div class="bg-red-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-yellow-500 rounded-full h-3 w-3 mr-2" />
    <div class="bg-green-500 rounded-full h-3 w-3 mr-2" />
  </div>

  <div class="flex flex-col my-2">
    <div id="tab-wrapper" class="relative flex flex-row w-full text-neutral-400 mb-2">
      <ArrowSmLeft />
      <ArrowSmRight />
      <Refresh />
      <div id="url-bar" class="flex flex-1 bg-white text-xs rounded-full p-1 mx-2">
        <span class="px-2" style="font-size: 0.7em;" aria-hidden="true">
          https://www.diana.com</span
        >
      </div>
    </div>
    <div class="p-2 text-xl bg-white text-black rounded-sm w-full">
      <div style="min-height: 300px;" class="flex flex-col justify-around">
        <p class="text-5xl xl:text-6xl font-newsreader">Communicator</p>
        <Typewriter interval={100} cursor={false}>
        The conversation about user privacy is not the same as the conversation about informed user consent.
        This will be the fundamental reckoning of our time.
      </Typewriter>
      </div>
      <!-- <slot /> -->
    </div>
  </div>
</div>

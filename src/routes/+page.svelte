<script>

  import Typewriter from "$lib/components/Typewriter.svelte";
  import { createImageSource } from "$lib/lazyImageSource";
  import { page } from "$app/stores";
  import ComputerScreen from "$lib/components/ComputerScreen.svelte";

  const src = "/images/diana-and-rafiki.jpg";
  // const mainImage = createImageSource(src, $page);
</script>

<div class="m-auto flex-col relative justify-center w-4/5 md:w-3/4">
  <ComputerScreen>
    <Typewriter>
      <div class="align-center relative my-12 h-full p-5 lg:p-10 lg:p-5">
        <h1 class="heading mb-4 font-mono font-bold pt-7" data-static>
          Hi. I'm Diana.
          <span
            class="heading p-0"
            role="img"
            aria-label="waving hand"
            data-static>
            👋🏾
          </span>
        </h1>
        <p class="subheading font-mono font-thin pb-7">
          <a class="text-blue-500 underline font-bold" href="/coder">coder</a><span>.</span>
          <a class="text-blue-500 underline font-bold" href="/creator">creator</a><span>.</span>
          <a class="text-blue-500 underline font-bold" href="/communicataor">communicator</a><span>.</span>
          
        </p>
      </div>
    </Typewriter>
  </ComputerScreen>
</div>

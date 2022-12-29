<script>
  import LandingSection from "$lib/components/LandingSection.svelte";
  import Button from "$lib/components/Buttons/Button.svelte";
  import IntroAnimation from "$lib/components/IntroAnimation.svelte";
  import LazyImage from "$lib/components/Image/LazyImage.svelte";
</script>

<LandingSection fadeInWhenVisible={false} class="relative justify-center ">
  <IntroAnimation />
</LandingSection>

<LandingSection class="mx-auto mb-20 min-h-screen justify-around">
  <div class="align-center relative my-12 h-full p-2 lg:p-5">
    <h1 class="heading mb-4 text-center font-bold" id="content-start">
      Diana M. Steakley-Freeman
    </h1>
    <p class="subheading text-center font-thin">
      coder. creator. communicator.
    </p>
  </div>
  <div class="gap-4 px-16 md:flex">
    <LazyImage
      class="mx-auto max-w-xs rounded-full border-2 border-white"
      src="/images/diana-and-rafiki.jpg" />

    <div class="flex w-full flex-col justify-between p-5 md:w-1/2">
      <p class="m-auto my-3">
        Full Stack Software Engineer. 10+ years of website and application
        development in academic, medical, nonprofit, and start-up environments.
      </p>
      <p class="m-auto my-3">
        Digital Policy Buff, User Rights Enthusiast, Former Scientist, Forever
        Experimenting. Enthusiastic nerd.
      </p>
      <Button class="my-auto w-fit bg-darkest-gray p-5"
        >More about Diana</Button>
    </div>
  </div>
</LandingSection>

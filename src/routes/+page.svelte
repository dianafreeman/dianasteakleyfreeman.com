<script>
  import Typewriter from "$lib/components/Typewriter.svelte";
  import Creator from "$lib/components/Graphics/Creator.svelte";
  import Section from "$lib/components/Section.svelte";
  import ButtonLink from "$lib/components/Buttons/ButtonLink.svelte";
  const src = "/images/diana-and-rafiki.jpg";

  let coderInView = false;
  let creatorInView = false;
  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth"
    });
  }
</script>

<div class="m-auto flex-col relative">
  <div class="">
    <Section
      class="py-10 h-[80vh] items-center justify-center flex flex-col px-5 md:px-0">
      <h1
        class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow mb-4 text-center font-black pt-7">
        Diana M. Steakley-Freeman
      </h1>
      <p class="my-8 text-xl md:text-2xl lg:text-3xl font-extralight">
        <a
          href="#coder"
          class="mx-1 hover:text-sky-blue active:text-yellow focus:text-sky-blue outline-none"
          on:click={handleAnchorClick}
          >Coder. 
        </a>
        <a
          href="#creator"
          class="mx-1 hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none"
          on:click={handleAnchorClick}>Creator. </a>
        <a
          href="#communicator"
          class="mx-1 hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none"
          on:click={handleAnchorClick}
          >Communicator. 
        </a>
      </p>
    </Section>
    <Section
      id="coder"
      class="py-10 flex px-5 md:px-0"
      onInView={() => (coderInView = true)}
      onOutOfView={() => (coderInView = false)}>
      <div
        class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-start md:px-10">
        <Typewriter inView={coderInView}>
          <h2
            aria-label="Coder"
            class="mx-auto text-9xl text-sky-blue font-code mb-4 text-center font-bold pt-7">
            Coder_
          </h2>
        </Typewriter>
        <!-- <p class="">
          Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
          laborum.
        </p> -->
        <!-- <ButtonLink href="/projects?category=code" borders animateBorders class="bg-yellow text-black p-5 my-10 font-bold" iconProps={{ type: "next"}}> View Code Projects </ButtonLink> -->
        <ButtonLink
          target="_blank"
          href="https://github.com/dianafreeman"
          borders
          animateBorders
          class="bg-yellow text-black p-5 my-10 font-bold"
          iconProps={{ type: "next" }}>
          View Code Projects
        </ButtonLink>
      </div>
      <div class="md:w-1/3 flex justify-center items-center"></div>
    </Section>
  </div>
  <div class="">
    <Section
      id="creator"
      onInView={() => (creatorInView = true)}
      onOutOfView={() => (creatorInView = false)}
      class="py-10 flex px-5 md:px-0 flex-row-reverse">
      <div
        class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-end md:px-10">
        <h2 class="sr-only">Creator</h2>
        <Creator isDrawing={creatorInView} class="stroke-sky-blue md:w-3/4" />
        <!-- <p class="ml-auto text-right">
          Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
          laborum.
        </p> -->
        <ButtonLink
          href="/projects/art-and-design"
          borders
          animateBorders
          class="bg-yellow text-black p-5 my-10 font-bold"
          iconProps={{ type: "next" }}>
          View Creative Projects
        </ButtonLink>
      </div>
      <div class="md:w-1/3"></div>
    </Section>
  </div>
  <div class="">
    <Section id="communicator" class="py-10 flex px-5 md:px-0">
      <div
        class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-start md:px-10">
        <h2
          class="text-left text-6xl lg:text-8xl font-black text-sky-blue tracking-tighter">
          Communicator
        </h2>
        <!-- <div class="w-full"> -->
        <!-- <p class="md:text-left my-6">
          Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
          laborum.
        </p> -->
        <ButtonLink
          href="/projects/science"
          iconProps={{ type: "next" }}>
          View Publications
        </ButtonLink>
      </div>
      <!-- </div> -->
      <div class="md:w-1/3"></div>
    </Section>

    <!-- <Section>
      <p class="text-8xl">About</p>
    </Section> -->
  </div>
</div>

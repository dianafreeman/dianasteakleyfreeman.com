<script>
  import Typewriter from "$lib/components/Typewriter.svelte";
  import Creator from "$lib/components/Graphics/Creator.svelte";
  import Section from "$lib/components/Section.svelte";
  import ButtonLink from "$lib/components/Buttons/ButtonLink.svelte";
  const src = "/images/diana-and-rafiki.jpg";
</script>

<div class="m-auto flex-col relative">
  <div class="">
    <Section class="py-10 flex px-5 md:px-0">
      <div
        class="md:w-2/3 min-h-[80vh] flex flex-col justify-center items-start md:px-10">
        <Typewriter>
          <p
           aria-label="Coder"
            class="mx-auto text-9xl text-sky-blue font-code mb-4 text-center font-bold pt-7">
            Coder_
          </p>
        </Typewriter>
          <p class="">
            Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
            laborum.
          </p>
          <!-- <ButtonLink href="/projects?category=code" borders animateBorders class="bg-yellow text-black p-5 my-10 font-bold" iconProps={{ type: "next"}}> View Code Projects </ButtonLink> -->
          <ButtonLink target="_blank" href="https://github.com/dianafreeman" borders animateBorders class="bg-yellow text-black p-5 my-10 font-bold" iconProps={{ type: "next"}}> View Code Projects </ButtonLink>
      </div>
      <div class="md:w-1/3 flex justify-center items-center"></div>
    </Section>
  </div>
  <div class="">
    <Section class="py-10 flex px-5 md:px-0 flex-row-reverse">
      <div
        class="md:w-2/3 min-h-[80vh] flex flex-col justify-center items-end md:px-10">
        <Creator class="stroke-sky-blue md:w-3/4" />
          <p class="ml-auto text-right">
            Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
            laborum.
          </p>
          <ButtonLink href="/projects?category=art-and-design" borders animateBorders class="bg-yellow text-black p-5 my-10 font-bold" iconProps={{ type: "next"}}> View Creative Projects </ButtonLink>

      </div>
      <div class="md:w-1/3">

      </div>
    </Section>
  </div>
  <div class="">
    <Section class="py-10 flex px-5 md:px-0">
      <div
        class="md:w-2/3 min-h-[80vh] flex flex-col justify-center items-start md:px-10">
        <p class="text-left text-6xl lg:text-8xl font-black text-sky-blue tracking-tighter">
          Communicator
        </p>
        <!-- <div class="w-full"> -->
          <p class="md:text-left my-6">
            Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
            laborum.
          </p>
          <ButtonLink href="/projects?category=science" class="animate-borders bg-yellow text-black p-5 my-10 font-bold" iconProps={{ type: "next"}}> View Publications </ButtonLink>
        </div>
      <!-- </div> -->
      <div class="md:w-1/3">

      </div>
    </Section>

    <!-- <Section>
      <p class="text-8xl">About</p>
    </Section> -->
  </div>
</div>

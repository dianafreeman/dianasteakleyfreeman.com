<script>
	import Typewriter from '$lib/components/Typewriter.svelte';
	import Creator from '$lib/components/Graphics/Creator.svelte';
	import Section from '$lib/components/Section.svelte';
	import ButtonLink from '$lib/components/Buttons/ButtonLink.svelte';
	import Intro from '$lib/components/Intro.svelte';

	let coderInView = false;
	let creatorInView = false;

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>


<Section class="h-[80vh] flex flex-col justify-center">
  
  <div class="flex flex-col mx-auto min-w-[75vw]">
  <Intro class="text-xl md:text-3xl lg:text-4xl w-full" />
	<h1 class="text-left font-bold tracking-tight text-yellow text-xl md:text-3xl lg:text-4xl">
		Hi. I'm Diana.
	</h1>
</div>
	<!-- <p class="text-xl font-extralight md:text-2xl lg:text-3xl">
				<a
					href="#coder"
					class="mx-1 outline-none hover:text-sky-blue focus:text-sky-blue active:text-yellow"
					on:click={handleAnchorClick}
					>Coder.
				</a>
				<a
					href="#creator"
					class="mx-1 outline-none hover:text-sky-blue focus:text-sky-blue active:text-sky-blue"
					on:click={handleAnchorClick}>Creator.</a
				>
				<a
					href="#communicator"
					class="mx-1 outline-none hover:text-sky-blue focus:text-sky-blue active:text-sky-blue"
					on:click={handleAnchorClick}
					>Communicator.
				</a>
			</p> -->
	<!-- </div> -->
</Section>
<Section
	id="coder"
	class="flex px-5 py-10 md:px-0"
	onInView={() => (coderInView = true)}
	onOutOfView={() => (coderInView = false)}
>
	<div class="flex min-h-[70vh] flex-col items-start justify-center md:w-2/3 md:px-10">
		<Typewriter inView={coderInView}>
			<h2
				aria-label="Coder"
				class="mx-auto mb-4 pt-7 text-center font-code text-9xl font-bold text-sky-blue"
			>
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
			class="my-10 bg-yellow p-5 font-bold text-black"
			iconProps={{ type: 'next' }}
		>
			View Code Projects
		</ButtonLink>
	</div>
	<div class="flex items-center justify-center md:w-1/3"></div>
</Section>

<Section
	id="creator"
	onInView={() => (creatorInView = true)}
	onOutOfView={() => (creatorInView = false)}
	class="flex flex-row-reverse px-5 py-10 md:px-0"
>
	<div class="flex min-h-[70vh] flex-col items-end justify-center md:w-2/3 md:px-10">
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
			class="my-10 bg-yellow p-5 font-bold text-black"
			iconProps={{ type: 'next' }}
		>
			View Creative Projects
		</ButtonLink>
	</div>
	<div class="md:w-1/3"></div>
</Section>

<Section id="communicator" class="flex px-5 py-10 md:px-0">
	<div class="flex min-h-[70vh] flex-col items-start justify-center md:w-2/3 md:px-10">
		<h2 class="text-left text-6xl font-black tracking-tighter text-sky-blue lg:text-8xl">
			Communicator
		</h2>
		<!-- <div class="w-full"> -->
		<!-- <p class="md:text-left my-6">
          Culpa qui laboris nisi ut aute amet proident amet reprehenderit enim
          laborum.
        </p> -->
		<ButtonLink href="/projects/science" iconProps={{ type: 'next' }}>View Publications</ButtonLink>
	</div>
	<!-- </div> -->
	<div class="md:w-1/3"></div>
</Section>

<script>
	import Typewriter from '$lib/components/Typewriter.svelte';
	import Creator from '$lib/components/Graphics/Creator.svelte';
	import Section from '$lib/components/Section.svelte';
	import ButtonLink from '$lib/components/Buttons/ButtonLink.svelte';
	import Intro from '$lib/components/LandingPage/Intro.svelte';
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import LandingSection from '$lib/components/LandingPage/LandingSection.svelte';

	let coderInView = false;
	let creatorInView = false;
	let introComplete = false;

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

	function onIntroEnd() {
		let timeout = setTimeout(() => {
			introComplete = true;
		}, 400);
	}
</script>

<Section class="flex h-screen">
	<div class="relative m-auto flex flex-col items-center">
		<Intro
			on:animationEnd={onIntroEnd}
			on:skip={() => (introComplete = true)}
			class="w-full text-3xl md:mt-0 md:text-4xl lg:text-5xl"
		/>

		<div class="md:m-h-[5em] my-10 min-h-[3.25em] w-full text-right md:text-left">
			{#if introComplete}
				<h1
					transition:fade
					style="letter-spacing: -2px"
					class="tracking-tightest w-full text-4xl font-black text-yellow md:text-5xl lg:text-6xl"
				>
					Hi. I'm Diana.
				</h1>
			{/if}
		</div>
	</div>
</Section>
<LandingSection
	id="coder"
	buttonLabel="View Code Projects"
	buttonTarget="https://github.com/dianafreeman"
	on:sectionEnteredView={() => (coderInView = true)}
	on:sectionExitedView={() => (coderInView = false)}
>
	<div slot="content" class="mx-auto md:w-2/3 md:px-10">
		<Typewriter inView={coderInView}>
			<h2
				aria-label="Coder"
				class="mx-auto mb-4 pt-7 text-center font-code text-9xl font-bold text-sky-blue"
			>
				Coder_
			</h2>
		</Typewriter>
	</div>
	<div slot="description">
		<p>
		The playful, the practical, and everything in between. There's always a story in the syntax.
		</p>
	</div>
</LandingSection>
<LandingSection
	id="creator"
	buttonLabel="View Creative Projects"
	buttonTarget="/projects/art-and-design"
	on:sectionEnteredView={() => (creatorInView = true)}
	on:sectionExitedView={() => (creatorInView = false)}
>
	<div slot="content" class="mx-auto mb-10 w-3/4 md:w-2/3 md:px-10">
		<h2 class="sr-only">Creator</h2>
		<Creator isDrawing={creatorInView} class="mx-auto stroke-sky-blue md:w-3/4 md:max-w-[30vw]" />
	</div>
	<div slot="description">
		<p>
			Some pieces are deliberate, others purely impulsive & expressive. Step into the
			gallery of art, music, and poetry.
		</p>
	</div>
</LandingSection>

<LandingSection
	id="communicator"
	buttonLabel="View Publications & Posters"
	buttonTarget="/projects/science"
>
	<div slot="content">
		<h2 class="text-center text-6xl mb-10 font-black tracking-tighter text-sky-blue lg:text-8xl">
			Communicator
		</h2>
	</div>
	<div slot="description">
		View my conference presentations, read my peer-reviewed articles and chapters, or browse my <s>elaborate procrastination tactics</s> blog posts.
	</div>
</LandingSection>

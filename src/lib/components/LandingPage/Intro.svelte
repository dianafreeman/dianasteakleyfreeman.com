<script>
	import { writable } from 'svelte/store';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { createEventDispatcher, onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { isMobile } from '$stores/isMobile';
	let clazz;
	export { clazz as class };

	const dispatch = createEventDispatcher()

	const words = ['respectful', 'consensual', 'ethical', 'accessible', 'human'];

	let startingIndex = 0;
	let currentIndex = 1;
	let interval = 1000;
	let skippable = true
	let intervalId;

	
	const activeWords = writable([words[0]]);
  
	activeWords.subscribe((activeWords)=>{
		if (activeWords.length === words.length){
			skippable = false
		}
	})

	function skip(){
		activeWords.set(words)
		clearInterval(intervalId)
		dispatch("skip", {})

	}
	onMount(() => {
		intervalId = setInterval(() => {
			activeWords.update((arr) => {
				// Add the next word if there are more to add
				if (currentIndex < words.length) {
					arr.push(words[currentIndex]);
					currentIndex++;
					return [...arr];
				} else {
					// Clear the interval when all words are added
					dispatch("animationEnd", {})
					clearInterval(intervalId);
					return arr;
				}
			});
		}, interval);

		// Cleanup interval when component is destroyed
		return () => clearInterval(intervalId);
	});
</script>

<div class="md:flex min-h-[250px] w-full md:items-end md:min-h-[480px] justify-center {clazz}">
	<p class="text-left font-thin">The future of engineering is</p>
	<ul class="md:mr-4 list-none md:min-w-[260px]">
		{#each $activeWords as word, idx (idx)}
			<li
				class="flex items-baseline pt-2"
				animate:flip
				transition:fade={{ duration: idx === words.length - 1 ? interval * 2 : interval }}
			>
				<span class="md:ml-2 text-sky-blue {idx === words.length - 1 ? 'font-black' : 'font-thin'}">
					{word}.
				</span>
			</li>
		{/each}
	</ul>
</div>
<button on:click={skip} disabled={!skippable} class="disabled:text-dark-gray disabled:cursor-disabled self-end text-sm font-thin text-gray-500 underline hover:text-white active:text-white focus:text-white">skip intro</button>

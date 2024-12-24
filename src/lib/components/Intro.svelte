<script>
	import { writable } from 'svelte/store';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';

  let clazz;
  export { clazz as class };
	
	const words = ['respectful', 'consensual', 'ethical', 'accessible', 'human'];

  
  let startingIndex = 0
  let currentIndex = 1;
	let interval = 1000;
	
  const activeWords = writable([words[0]]);

	onMount(() => {

		const intervalId = setInterval(() => {
			activeWords.update((arr) => {
				// Add the next word if there are more to add
				if (currentIndex < words.length) {
					arr.push(words[currentIndex]);
					currentIndex++;
					return [...arr];
				} else {
					// Clear the interval when all words are added
					clearInterval(intervalId);
					return arr;
				}
			});
		}, interval);

		// Cleanup interval when component is destroyed
		return () => clearInterval(intervalId);
	});

</script>

<div class="h-[280px] flex items-end w-full {clazz}">
  <span class="font-thin" >The future of software is</span>
  <ul class="list-none">
		{#each $activeWords as word, idx (idx)}
			<li
				class="flex items-baseline pt-2"
        animate:flip
				transition:fade={{ duration: idx === words.length - 1 ? interval * 2 : interval }}
			>
				<span class="ml-2 text-sky-blue {idx === words.length - 1 ? 'font-black' : 'font-thin'}">
					{word}.
				</span>
			</li>
		{/each}
	</ul>
</div>

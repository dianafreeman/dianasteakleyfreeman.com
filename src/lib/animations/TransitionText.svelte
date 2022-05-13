<script>
  import { afterUpdate, onMount, tick } from "svelte";
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  import { writable } from "svelte/store";

  export let words;
  export let onComplete;

  const wordInput = words;
  const wordStore = writable([]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function play(){
    for (let w in wordInput) {
      await delay(wordInput[w].delay);
      wordStore.update((current) => [...current, wordInput[w]]);
    }
  }


  onMount(play)
  $: {
    if (wordInput.length === $wordStore.length){
      if (onComplete) onComplete()
    }
  }
  
</script>
<span class="sr-only">the future of engineering is human. Hi, I'm Diana.</span>

{#each $wordStore as w}
  {#if w.break}
    <br />
  {:else}
    <span class="font-poppins {w.class}" in:fade aria-hidden="true">{w.text} </span>
  {/if}
{/each}
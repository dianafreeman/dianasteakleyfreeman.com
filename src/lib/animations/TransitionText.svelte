<script>
  import { afterUpdate, onMount } from "svelte";
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  import { writable } from "svelte/store";

  export let skip = false;
  export let words;

  const wordInput = words;
  const wordStore = writable([]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onMount(async () => {

    for (let w in wordInput) {
      if (!skip) await delay(wordInput[w].delay);
      wordStore.update((current) => [...current, wordInput[w]]);
    }
  });
</script>

{#each $wordStore as w}
  {#if w.break}
    <br />
  {:else if skip}
    <span class="font-poppins {w.class} mr-5">{w.text}</span>
  {:else}
    <span class="font-poppins {w.class} mr-5" in:fade>{w.text}</span>
  {/if}
{/each}
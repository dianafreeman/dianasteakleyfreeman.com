<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";

  export let input;
  export let onComplete;

  let paused = false;
  let finished = false;
  let trackedIndex = 0;
  const items = writable([]);


  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function next() {
    items.update((current) => {
      trackedIndex++;
      return [...current, input[current.length]];
    });
  }

  async function play() {
    while ($items.length < input.length) {
      if (!input[trackedIndex]) return;
      if (paused || finished) break;
      await delay(input[trackedIndex].delay);
      next();
    }
    if ($items.length === input.length) {
      if (onComplete) onComplete();
      finished = true;
    }
  }

  function pause() {
    if (finished) return;
    trackedIndex = trackedIndex - 1;
    items.set(input.slice(0, trackedIndex));

    paused = true;
  }

  function resume() {
    if (!paused) return;
    paused = false;
    play();
  }

  function skip() {
    finished = true;
    items.set(input);
  }

  function pauseOrResume(){
    if (paused) return resume()
    return pause();
  }


  onMount(play);
</script>

{#each $items as item}
  {#if item}
    {#if !item.text}
      <svelte:element this={item.element}/>
    {:else}
      <svelte:element this={item.element} transition:fade>{`${item.text} `}</svelte:element>
    {/if}
  {/if}
{/each}
<br />

<button on:click={skip}>skip</button>
<button disabled={finished} on:click={pauseOrResume}>{paused ? "resume" : "pause"}</button>

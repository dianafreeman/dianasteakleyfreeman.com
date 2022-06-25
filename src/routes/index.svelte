<script context="module">
  export const prerender = true;
</script>

<script>
  import { derived } from "svelte/store";

  import ContentStore from "$stores/ContentStore";
  import Section from "$lib/components/Section.svelte";
  import IntroStore from "$stores/IntroStore";
  import LayoutStore from "$stores/LayoutStore";


  let scrollY;

  let isActive = derived(LayoutStore, ($LayoutStore) => {
    return (cell) => $LayoutStore.x === cell.x && $LayoutStore.y === cell.y;
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />


{#each $ContentStore as row, rowIndex}
  <div class="flex flex-row h-auto" style="width: calc({row.length} * 100vw);">
    {#each row as section, sectionIndex}
      <!-- {#if $LayoutStore.x === sectionIndex && $LayoutStore.y === rowIndex} -->
      <Section
      cell={{x: sectionIndex, y: rowIndex}}
        class="flex flex-col justify-evenly relative p-5 h-auto"
        style="width: 100vw; min-height:{$LayoutStore.y === $LayoutStore.length - 1 ? (100 * 2) : 100}vh"
      >
      <!--^ manually sets the height at 2x for an extra scrol -->
        <svelte:component this={section.component} {section} cell={{x: sectionIndex, y: rowIndex}} index={sectionIndex} />
      </Section>
      <!-- {/if} -->
    {/each}
  </div>
{/each}

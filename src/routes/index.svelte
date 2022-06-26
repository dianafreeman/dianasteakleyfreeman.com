<script context="module">
  export const prerender = true;
  export let contentGrid;
</script>

<script>
  import ContentStore from "$stores/ContentStore";
  import Section from "$lib/components/Section.svelte";

  let scrollY;
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
        cell={{ x: sectionIndex, y: rowIndex }}
        class="flex flex-col justify-evenly relative p-5 h-auto"
        style="width: 100vw; min-height: 100vh"
      >
        <svelte:component
          this={section.component}
          {section}
          cell={{ x: sectionIndex, y: rowIndex }}
          index={sectionIndex}
        />
      </Section>
      <!-- {/if} -->
    {/each}
  </div>
{/each}

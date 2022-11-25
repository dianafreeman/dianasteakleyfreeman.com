<script>
  import { fade } from "svelte/transition";

  export let items;
</script>

{#each items as item}
  {#if item && item.element === "br"}
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <svelte:element this={item.element} tabindex={-1} class={item.class} />
  {:else if item}
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <svelte:element this={item.element} tabindex={-1} class={item.class} in:fade
      >{`${item.text} `}</svelte:element
    >
  {/if}
{/each}
<br />

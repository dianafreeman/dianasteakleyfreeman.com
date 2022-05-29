<script>
  import { fade } from "svelte/transition";

  export let items;
</script>

{#each items as item}
  {#if item && item.element === "br"}
    <!-- prettier-ignore -->
    <svelte:element this={item.element} class={item.class}/>
  {:else if item}
    <!-- prettier-ignore -->
    <svelte:element this={item.element} class={item.class} transition:fade>{`${item.text} `}</svelte:element>
  {/if}
{/each}
<br />

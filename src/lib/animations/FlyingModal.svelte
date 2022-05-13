<script>
import { fly } from "svelte/transition";


    export let isOpen = false
    export let style = false
    let clazz
    export { clazz as class}


</script>

{#if isOpen}
<div transition:fly={{y: -400}} class={clazz} {style}>
<slot/>
</div>
{/if}
<script>
  import Lines from "old-components/animations/Lines.svelte";

  export let isOpen;
  export let color;
  export let onClick;
</script>

<button class="flex flex-col align-middle m-auto font-poppins w-10" on:click={onClick}>
  <Lines initialState={isOpen} {color} />
</button>

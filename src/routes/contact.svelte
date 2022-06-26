<script context="module">
  export const prerender = true;

  import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="flex flex-row" style="width: 100vw">
  <Section
    class="flex flex-col justify-around overflow-scroll relative p-5"
    style="width: 100vw; height:100vh"
  >
    <div class="content">
      <h1>Contact</h1>
    </div>
  </Section>
</div>

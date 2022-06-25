<script context="module">
import Section from "$lib/components/Section.svelte";


  export async function load({ params, fetch, session, stuff }) {
    return {
      props: {
        title: params.category
      }
    };
  }

</script>
<script>
  export let title;
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
      <h1>{title}</h1>
    </div>
  </Section>
</div>

<script>
  import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
  <!-- <title>{title}</title> -->
</svelte:head>

<div class="flex flex-row" style="width: 100vw">
  <!-- <Section
    class="flex flex-col justify-around overflow-scroll relative p-5"
    style="width: 100vw; height:100vh" -->
  <!-- > -->
  <div class="flex flex-col justify-center ">
    <slot />
  </div>
  <!-- </Section> -->
</div>

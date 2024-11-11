<script>
  import ButtonLink from "$lib/components/Buttons/ButtonLink.svelte";

  export let data;
  console.log(data.metadata.category);
</script>

<div class="text-white px-6 py-10 lg:px-8">
  <div class="mx-auto max-w-3xl text-base/7">
    <h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow my-10  text-center font-black pt-7">
      {data.metadata.title}</h1>
    <ButtonLink borders={false} iconProps={{ type: "back", large: false}} class="my-5 bg-black text-white border border-dark-gray hover:text-sky-blue active:text-sky-blue focus:text-sky-blue p-5 my-10 font-bold" href="/{data.metadata.category.slug}">Back to {data.metadata.category.title}</ButtonLink>
    <div class="markdown mt-10">{@html data.entry}</div>
    <div class="my-5 text-right">
      {#if data.metadata.link}
        <ButtonLink
          target="_blank"
          href={data.metadata.link}
          iconProps={{ type: "externalLink" , large: true}}>
          Open in new window
        </ButtonLink>
      {/if}
    </div>
  </div>
</div>

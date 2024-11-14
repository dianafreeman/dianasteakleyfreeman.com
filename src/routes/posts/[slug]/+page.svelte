<script>
  import ButtonLink from "$lib/components/Buttons/ButtonLink.svelte";

  export let data;
</script>

<div class="text-white px-6 py-10 lg:px-8">
  <div class="mx-auto max-w-3xl text-base/7">
    <h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow my-10  text-center font-black pt-7">
      {data.title}</h1>
    <ButtonLink borders={false} iconProps={{ type: "back", large: false}} class="my-5 bg-black text-white border border-dark-gray hover:text-sky-blue active:text-sky-blue focus:text-sky-blue p-5 my-10 font-bold" href="/{data.category.slug}">Back to {data.category.title}</ButtonLink>
    <div class="markdown mt-10">{@html data.content}</div>
    <div class="my-5 text-right">
      {#if data.link}
        <ButtonLink
          target="_blank"
          href={data.link}
          iconProps={{ type: "externalLink" , large: true}}>
          Open in new window
        </ButtonLink>
      {/if}
    </div>
  </div>
</div>

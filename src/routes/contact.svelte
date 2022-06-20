<script context="module">
  import { browser, dev } from "$app/env";
  import Section from "$lib/components/Section.svelte";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
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

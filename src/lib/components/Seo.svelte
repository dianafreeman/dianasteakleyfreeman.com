<script>
  import { page } from "$app/stores";

  export let title;
  export let description;

  // see @url https://ogp.me/?fbclid=IwAR0wruFpNXtH3iq47dkKyj5MtIL0d1FDdP7seAiLi-xqYGwhpR5Lxt9CpOU#types
  /**  @type { "website" | "article" | "profile" | "video" } */
  export let type = "website";

  export let imageSrc = "/static/screenshot.png";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageSrc} />
</svelte:head>

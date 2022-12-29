<script>
  import { page } from "$app/stores";

  // see @url https://ogp.me/?fbclid=IwAR0wruFpNXtH3iq47dkKyj5MtIL0d1FDdP7seAiLi-xqYGwhpR5Lxt9CpOU#types
  /**  @type { "website" | "article" | "profile" | "video" } */
  export let type = "website";

  export let imageSrc = "/static/screenshot.png";
</script>

<svelte:head>
  <title>{$page.data.seoMeta.title}</title>
  <meta name="description" content={$page.data.seoMeta.description} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={$page.data.seoMeta.title} />
  <meta property="og:description" content={$page.data.seoMeta.description} />
  <meta property="og:image" content={imageSrc} />
</svelte:head>

<script>
  import { page } from "$app/stores";

  // see @url https://ogp.me/?fbclid=IwAR0wruFpNXtH3iq47dkKyj5MtIL0d1FDdP7seAiLi-xqYGwhpR5Lxt9CpOU#types
  /**  @type { "website" | "article" | "profile" | "video" } */
  export let type = "website";

  // export let imageSrc = "/static/screenshot.png";

  const defaults = {
    title: "Diana M. Steakley-Freeman",
    url: "dianasteakleyfreeman.com",
    description: "Portfolio, blog, and website for Diana M. Steakley-Freeman"
  };
</script>

<svelte:head>
  <title>{$page.data?.meta?.title || `Home`} | Diana M Steakley-Freeman</title>
  <meta name="description" content={$page.data?.meta?.description || defaults.description} />
  <meta property="og:url" content={$page.url.href || defaults.url} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={$page.data?.meta?.title || defaults.title} />
  <meta property="og:description" content={$page.data?.meta?.description || defaults.description} />
  <!-- <meta property="og:image" content={imageSrc} /> -->
</svelte:head>

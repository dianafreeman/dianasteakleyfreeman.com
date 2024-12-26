<script>
  import { page } from "$app/stores";

  // see @url https://ogp.me/?fbclid=IwAR0wruFpNXtH3iq47dkKyj5MtIL0d1FDdP7seAiLi-xqYGwhpR5Lxt9CpOU#types
  // /**  @type { "website" | "article" | "profile" | "video" } */
  export let type = "website";

  const defaultValues = {
    title: "Diana M. Steakley-Freeman",
    url: "dianasteakleyfreeman.com",
    description: "Portfolio, blog, and website for Diana M. Steakley-Freeman"
  };
</script>

<svelte:head>
   <title>{$page.data.metadata?.title || `Home`} | Diana M Steakley-Freeman</title>
  <meta name="description" content={$page.data.metadata?.description || defaultValues.description} />
  <meta property="og:url" content={$page.url.href || defaultValues.url} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={$page.data.metadata?.title || defaultValues.title} />
  <meta property="og:description" content={$page.data.metadata?.description || defaultValues.description} />
</svelte:head>

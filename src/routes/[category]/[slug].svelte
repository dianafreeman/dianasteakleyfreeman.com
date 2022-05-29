<script>
  import SvelteMarkdown from "svelte-markdown";
  import Paragraph from "$lib/components/MarkdownParagraph.svelte";
  export let markdown;
  export let frontmatter;
</script>

<h1 class="p-6 text-4xl font-bold font-poppins">{frontmatter.title}</h1>

<div id="markdown" class="p-6">
  <SvelteMarkdown source={markdown} renderers={{ paragraph: Paragraph }} />
</div>

<script context="module">
  import { getEntry } from "$content/helpers";

  export async function load({ params }) {
    const { category, post } = params;

    const data = await getEntry(category, post);
    if (data.length) {
      const [, entry] = data;
      const image = `/images/${entry.metadata.image}`;
      return {
        props: {
          entry,
          category,
          post,
          image
        }
      };
    } else {
      return {
        status: 404
      };
    }
  }
</script>

<script>
  import Post from "$lib/components/Post.svelte";

  export let entry;
  export let post;
  export let category;
  export let image;
</script>

<Post {entry} {category} slug={post} {image} />

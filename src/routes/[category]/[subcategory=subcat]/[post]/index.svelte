<script context="module">
  import { getEntry } from "$content/helpers";

  export async function load({ params }) {
    const { category, subcategory, post } = params;

    const data = await getEntry({ category, subcategory }, post);

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

  export let image;
</script>

<script>
  import Post from "$lib/components/Post.svelte";

  export let category;
  export let post;
  export let image;
  export let entry;
</script>

<Post {entry} {category} {post} {image} />

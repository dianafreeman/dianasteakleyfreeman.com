<script context="module">
  export async function load({ params, fetch, session, stuff }) {
    return {
      props: {
        title: params.category
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title}</h1>

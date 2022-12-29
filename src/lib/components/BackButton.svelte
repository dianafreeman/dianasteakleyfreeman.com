<script>
  import { page } from "$app/stores";
  import Button from "./Buttons/Button.svelte";

  console.log($page.url)

</script>

<Button iconType="back">Back to home</Button>
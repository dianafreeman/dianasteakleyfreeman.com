<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Button from "../lib/components/Buttons/Button.svelte";
</script>

<Meta title="Button" component={Button} />

<Story name="Primary">
  <Button class="p-5">Hello World</Button>
</Story>

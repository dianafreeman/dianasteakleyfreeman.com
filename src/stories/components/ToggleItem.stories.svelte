<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import ToggleItem from "$lib/components/Buttons/ToggleItem.svelte";
</script>

<Meta component={ToggleItem} />

<Story name="Primary">
  <ToggleItem class="p-5">Hello World</ToggleItem>
</Story>

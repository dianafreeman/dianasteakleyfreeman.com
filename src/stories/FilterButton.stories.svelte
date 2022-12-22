<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import ToggleButton from "../lib/components/Buttons/ToggleButton.svelte";
</script>

<Meta title="ToggleButton" component={ToggleButton} />

<Story name="Inactive">
  <ToggleButton class="p-5" isActive={false} label="A Filter" />
</Story>

<Story name="Active">
  <ToggleButton class="p-5" isActive label="A Filter" />
</Story>

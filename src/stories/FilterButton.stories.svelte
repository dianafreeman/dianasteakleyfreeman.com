<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import FilterButton from "../lib/components/Buttons/FilterButton.svelte";
</script>

<Meta title="FilterButton" component={FilterButton} />

<Story name="Inactive">
  <FilterButton class="p-5" isActive={false} label="A Filter" />
</Story>

<Story name="Active">
  <FilterButton class="p-5" isActive label="A Filter" />
</Story>

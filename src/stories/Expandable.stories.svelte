<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Expandable from "../lib/components/Expandable.svelte";
</script>

<Meta title="Expandable" component={Expandable} />

<Story name="collapsed">
  <Expandable class="p-5" title="This is an accordion" isOpen={false}
    >Hello from an accordion
  </Expandable>
</Story>

<Story name="expanded">
  <Expandable class="p-5" title="This is an accordion" titleElement={"h3"} isOpen
    >Hello from an accordion
  </Expandable>
</Story>

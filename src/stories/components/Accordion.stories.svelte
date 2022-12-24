<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Accordion from "$lib/components/Accordion.svelte";
</script>

<Meta title="Accordion" component={Accordion} />

<Story name="collapsed">
  <Accordion class="p-5" title="This is an accordion" isOpen={false}
    >Hello from an accordion
  </Accordion>
</Story>

<Story name="expanded">
  <Accordion class="p-5" title="This is an accordion" titleElement={"h3"} isOpen
    >Hello from an accordion
  </Accordion>
</Story>

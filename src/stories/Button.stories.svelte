<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "$lib/components/Button.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/blog-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Button" component={Button} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/blog-stories/introduction#using-args -->
<Template let:args>
  <Button {...args}>Text</Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/blog-stories/args -->
<Story name="Oulined" />
<Story name="Underlined" args={{ underline: true }} />

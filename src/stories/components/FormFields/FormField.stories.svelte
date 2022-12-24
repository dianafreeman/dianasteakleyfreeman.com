<script>
  import FormField from "$lib/components/FormFields/FormField.svelte";
  import TextField from "$lib/components/FormFields/TextField.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Forms/Form Fields" component={FormField} />
<Template let:args>
  <TextField {...args} />
</Template>

<Story name="Text Field" args={{ label: "Enter your text" }} />
<Story
  name="Text Field/ with an error"
  args={{ label: "Enter your text", error: "invalid text, my guy" }} />

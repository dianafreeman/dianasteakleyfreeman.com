<script>
  import FormField from "$lib/components/Forms/FormField.svelte";
  import TextField from "$lib/components/Forms/TextField.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  // import testData from "./testData/entries.json";

  const options = new Array(10);
</script>

<Meta title="Forms/Form Field" component={FormField} />

<Story name="Text Field" args={{ data: {} }}>
  <TextField {options} />
</Story>
<!-- <Story name="TextArea Field" args={{ data: {} }} />
<Story name="TextArea Field" args={{ data: {} }} /> -->

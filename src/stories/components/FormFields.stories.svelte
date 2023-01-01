<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FormField from "$lib/components/FormFields/FormField.svelte";
  import CheckboxField from "$lib/components/FormFields/types/CheckboxField.svelte";
  import TextAreaField from "$lib/components/FormFields/types/TextAreaField.svelte";
  import SelectField from "$lib/components/FormFields/types/SelectField.svelte";
  import TextField from "$lib/components/FormFields/types/TextField.svelte";
  import { createFormOptions } from "$tests/stub/fake";

  const testStrings = ["Thing One", "Thing Two", "Thing Three", "Thing Four"];
  const optionsStub = createFormOptions(testStrings);

  // TODO: additional testing
  // import { expect } from "@storybook/jest";
  // import { userEvent, waitFor, within } from "@storybook/testing-library";
</script>

<Template let:args>
  <FormField {...args} />
</Template>

<Meta
  title="Forms/FormField"
  component={FormField}
  subcomponents={{ CheckboxField, TextAreaField, TextField, SelectField }}
  parameters={{ actions: { handles: ["change"] } }} />

<Story
  name="Select Field/no values"
  args={{
    type: "select",
    label: "Select An Option",
    id: "select-an-option",
    options: optionsStub
  }} />

<Story
  name="Text Field/no values"
  args={{
    type: "text",
    label: "type something",
    id: "type-something",
    options: optionsStub
  }} />

<Story
  name="TextArea Field/no values"
  args={{
    type: "textArea",
    label: "type something longer",
    id: "type-something",
    options: optionsStub
  }} />
<Story
  name="Checkbox Field/unchecked"
  args={{
    type: "checkbox",
    id: "type-something",
    label: "did you want to check this box? Tempting, I know. ",
    hideLabel: true
  }} />

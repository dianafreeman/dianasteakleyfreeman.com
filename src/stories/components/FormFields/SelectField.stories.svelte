<script>
  import { expect } from "@storybook/jest";
  import { userEvent, waitFor, within } from "@storybook/testing-library";
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import SelectField from "$lib/components/FormFields/SelectField.svelte";
  import { createFormOptions } from "$tests/stub/fake";

  const labelText = "Select An Option";
  const idText = "select-an-option"
  const testStrings = ["Thing One", "Thing Two", "Thing Three", "Thing Four"];
  
  const optionsStub = createFormOptions(testStrings);
  async function play({ canvasElement }) {
    const select = await within(canvasElement).getByLabelText("select an option.", {
      normalizer: (s) => s.toLowerCase()
    });
    await userEvent.selectOptions(select, testStrings[2]);
  }
</script>

<Meta title="Forms/Form Fields/Select" component={SelectField} />

<Story name="Main" {play}>
  <SelectField label={labelText} id={idText} options={optionsStub} />
</Story>

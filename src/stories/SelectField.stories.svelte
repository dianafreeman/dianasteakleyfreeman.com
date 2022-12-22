<script>
    import { Meta, Story } from "@storybook/addon-svelte-csf";
  
    import SelectField from "../lib/components/Forms/SelectField.svelte";

    const optionsStub = [{label: "thing 1", value: "thing-1"},{label: "thing 2", value: "thing-2"}]
  </script>
  
  <Meta title="SelectField" component={SelectField} />
  
  <Story name="Main">
    <SelectField options={optionsStub}/>
  </Story>

  
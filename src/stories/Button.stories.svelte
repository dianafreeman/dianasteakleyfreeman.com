<script>
  import MarginDecorator from "$storybook/decorators/MarginDecorator.svelte";
import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Button from "../lib/components/Buttons/Button.svelte";
</script>

<Meta title="Button" component={Button} />

<Story name="with animated borders">
  <MarginDecorator>
    <Button class="p-5">Hello World</Button>
  </MarginDecorator>
</Story>

<Story name="without animated borders">
  <MarginDecorator>
    <Button ty animateBorders={false} class="p-5">Hello World</Button>
  </MarginDecorator>
</Story>

<Story name="with Icon">
  <MarginDecorator>
    <Button iconClass="las la-external-link-alt text-2xl mx-2" class="p-5">Hello World</Button>
  </MarginDecorator>
</Story>

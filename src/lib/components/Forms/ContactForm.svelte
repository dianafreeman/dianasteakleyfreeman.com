<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Button from "../Buttons/Button.svelte";
  import FormField from "../FormFields/FormField.svelte";
  import TextAreaField from "../FormFields/types/TextAreaField.svelte";
  import TextField from "../FormFields/types/TextField.svelte";

  const dispatch = createEventDispatcher();

  // TODO: invalid states like `const invalidClasses = ""`;

  const formState = writable({});

  function handleSubmit() {
    dispatch("submit", $formState);
  }

  function handleChange(ev) {
    const { value, name } = ev.detail;
    formState.update((current) => ({ ...current, [name]: value }));
  }
</script>

<h1 class="heading mx-auto mb-10 mt-5 w-2/3 text-center lowercase">
  let's connect.
</h1>

<form class="mx-auto w-full max-w-lg" netlify>
  <div class="flex gap-3">
    <FormField
      containerClasses="w-1/2"
      type="text"
      id="firstName"
      label="First Name"
      on:change={handleChange}
      class="relative w-full md:mb-0 md:w-1/2" />

    <FormField
      containerClasses="w-1/2"
      type="text"
      id="lastName"
      label="Last Name"
      on:change={handleChange}
      class="relative w-full md:mb-0 md:w-1/2" />
  </div>

  <FormField
    type="text"
    id="emailAddress"
    class="w-full"
    label="E-mail Address"
    required />
  <FormField type="textArea" id="message" label="Message" footerText="" />

  <div class="flex w-full justify-end">
    <Button
      type="submit"
      animateBorders
      class="w-fit p-5"
      on:click={handleSubmit}>Send</Button>
  </div>
</form>

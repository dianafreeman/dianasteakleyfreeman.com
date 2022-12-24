<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Button from "../components/Buttons/Button.svelte";
  import TextAreaField from "../components/FormFields/TextAreaField.svelte";
  import TextField from "../components/FormFields/TextField.svelte";

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
    <TextField
      id="firstName"
      label="First Name"
      on:change={handleChange}
      class="relative w-full md:mb-0 md:w-1/2" />
    <TextField
      id="lastName"
      label="Last Name"
      on:change={handleChange}
      class="relative w-full md:mb-0 md:w-1/2" />
  </div>

  <TextField id="emailAddress" class="w-full" label="E-mail Address" required />
  <TextAreaField id="message" label="Message" footerText="" />

  <div class="flex w-full justify-end">
    <Button
      type="submit"
      animateBorders
      class="w-fit p-5"
      on:click={handleSubmit}>Send</Button>
  </div>
</form>

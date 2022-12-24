<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Buttons/Button.svelte";
  import TextAreaField from "./TextAreaField.svelte";
  import TextField from "./TextField.svelte";

  const dispatch = createEventDispatcher();
  const invalidClasses = "";

  function handleSubmit() {
    dispatch(submit);
  }
</script>

<form class="mx-auto w-full max-w-lg" netlify >
  <div class="flex gap-3">
    <TextField label="First Name" class="relative w-full md:mb-0 md:w-1/2" />
    <TextField label="Last Name" class="relative w-full md:mb-0 md:w-1/2" />
  </div>

  <TextField class="w-full" id="email" label="E-mail Address" />
  <TextAreaField label="Message" footerText="" />

  <div class="flex w-full justify-end">
    <Button type="submit" animateBorders class="w-fit p-5">Send</Button>
  </div>
</form>

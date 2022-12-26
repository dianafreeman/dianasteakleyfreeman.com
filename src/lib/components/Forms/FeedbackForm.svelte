<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Button from "$lib/components/Buttons/Button.svelte";
  import TextAreaField from "$lib/components/FormFields/types/TextAreaField.svelte";
  import FormField from "$lib/components/FormFields/FormField.svelte";

  const dispatch = createEventDispatcher();

  let emailError = null;
  // TODO: invalid states like `const invalidClasses = ""`;

  const formState = writable({});

  function handleSubmit(e) {
    e.preventDefault();
    if (!$formState["emailAddress"].value) {
      emailError = "Email Address is required";
    } else {
      dispatch("submit", $formState);
    }
  }

  function handleChange(ev) {
    const { value, name } = ev.detail;
    formState.update((current) => ({ ...current, [name]: value }));
  }
</script>

<form class="mx-auto w-full max-w-lg" netlify>
  <div>
    <h1 class="heading mx-auto mb-10 mt-5 text-center text-3xl lowercase">
      Got feedback? <span class="font-thin">I'm listening. </span>
    </h1>
  </div>
  <div class="flex gap-3">
    <FormField
      type="text"
      id="firstName"
      label="First Name"
      on:change={handleChange}
      containerClasses="relative w-full md:mb-0" />
    <FormField
      type="text"
      id="lastName"
      label="Last Name"
      on:change={handleChange}
      containerClasses="relative w-full md:mb-0" />
  </div>

  <FormField
    type="text"
    id="emailAddress"
    class="w-full"
    label="E-mail Address (required)"
    on:change={(c) => console.log(c)}
    error={emailError}
    required />
  <FormField
    type="select"
    id="feedbackArea"
    label="type of feedback (optional)"
    options={[
      { value: "", label: "choose a type" },
      { value: "somethings-not-working", label: "Something's not working" },
      { value: "suggestion-or-idea", label: "Suggestion or idea" },
      { value: "accessibility-issue", label: "Accessibility Issue" }
    ]} />
  <FormField type="textArea" id="message" label="Message" footerText="" />

  <div class="flex w-full justify-end">
    <Button
      type="submit"
      animateBorders
      class="w-fit p-5"
      on:click={handleSubmit}>Send</Button>
  </div>
</form>

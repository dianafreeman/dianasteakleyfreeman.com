<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import Button from "../Buttons/Button.svelte";
  import FormField from "../FormFields/FormField.svelte";

  const dispatch = createEventDispatcher();

  const formState = writable({});
  const errors = writable({});
  let form;

  function focusFirstErroredField() {
    const errs = $errors;
    if (Object.keys(errs).length) {
      const firstErroredId = Object.keys(errs)[0];
      const el = form.querySelector(`[id="${firstErroredId}"]`);
      el.focus();
    }
  }

  function isValidEmailAddress(str) {
    // TODO: separate validation from error messaging
    const exists = str && str.length > 0;
    if (!exists) return "e-mail address is a required field";
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
    if (!valid) return "That doesn't look like an email address.";
  }

  function isValidMessage(str) {
    // TODO: separate validation from error messaging
    const valid = str?.length > 0;
    if (!valid) return "Did you wanna say something? Anything?";
  }

  const VALIDATION_RULES = {
    firstName: () => null,
    lastName: () => null,
    emailAddress: isValidEmailAddress,
    message: isValidMessage
  };

  function validate(data, rules) {
    const validations = Object.entries(rules)
      .map(([key, validatorFn]) => {
        const result = validatorFn(data[key]);
        return [key, result];
      })
      .filter(([, result]) => result);

    const errorObject = Object.fromEntries(validations);
    return errorObject;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errorsData = validate($formState, VALIDATION_RULES);
    if (errorsData) {
      errors.set(errorsData);
      focusFirstErroredField();
    } else {
      dispatch("submit", $formState);
    }
  }

  function clearErrorsForField(fieldName) {
    errors.update((current) => {
      const entries = Object.entries(current).filter(
        ([key]) => key !== fieldName
      );
      return Object.fromEntries(entries);
    });
  }

  function handleChange(ev) {
    const { value, name } = ev.detail;
    if (Object.keys($errors).includes(name)) {
      clearErrorsForField(name);
    }
    formState.update((current) => ({ ...current, [name]: value }));
  }
</script>

<form
  bind:this={form}
  on:submit={handleSubmit}
  class="mx-auto w-full max-w-lg"
  netlify>
  <h1 class="heading mx-auto mb-10 mt-5 text-center text-4xl lowercase">
    Got feedback? <span class="font-thin">I'm listening. </span>
  </h1>

  <div class="flex gap-3">
    <FormField
      containerClasses="w-1/2"
      fieldType="text"
      id="firstName"
      label="First Name"
      on:change={handleChange}
      error={$errors["firstName"]} />

    <FormField
      containerClasses="w-1/2"
      fieldType="text"
      id="lastName"
      label="Last Name"
      on:change={handleChange}
      error={$errors["lastName"]} />
  </div>

  <FormField
    fieldType="text"
    id="emailAddress"
    type="email"
    label="E-mail Address"
    error={$errors["emailAddress"]}
    on:change={handleChange} />

  <FormField
    fieldType="select"
    id="feedbackArea"
    label="type of feedback"
    on:change={handleChange}
    options={[
      { value: "", label: "choose a type" },
      { value: "somethings-not-working", label: "Something's not working" },
      { value: "suggestion-or-idea", label: "Suggestion or idea" },
      { value: "accessibility-issue", label: "Accessibility Issue" }
    ]} />
  <FormField
    fieldType="textArea"
    id="message"
    label="Message"
    on:change={handleChange}
    error={$errors["message"]} />

  <div class="flex w-full justify-end">
    <Button type="submit" animateBorders class="w-fit p-5">Send</Button>
  </div>
</form>

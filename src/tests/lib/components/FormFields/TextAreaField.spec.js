import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/svelte";

import FormField from "$lib/components/FormFields/FormField.svelte";
const user = userEvent.setup();

const FORM_FIELD_TYPE = "textArea";
const TEST_PROPS = { label: "form label", id: "form-label" };

describe("Form Field", () => {
  describe("as TextAreaField", () => {
    it("renders as an textbox", () => {
      const { getByRole } = render(FormField, {
        type: FORM_FIELD_TYPE,
        ...TEST_PROPS
      });
      const input = getByRole("textbox");
      expect(input).toBeInTheDocument();
    });

    // Note: This is as an async test as we are using `fireEvent`
    it("fires a change event when something has been typed", async () => {
      const { component, getByRole } = render(FormField, {
        type: FORM_FIELD_TYPE,
        ...TEST_PROPS
      });
      const input = getByRole("textbox");

      const mockComponentEvent = vi.fn();

      component.$on("change", function (event) {
        mockComponentEvent(event.detail);
      });

      await user.type(
        input,
        "a longer value, maybe even a paragraph, that I've typed"
      );

      expect(mockComponentEvent).toHaveBeenCalled();
      expect(mockComponentEvent).toHaveBeenLastCalledWith({
        ...TEST_PROPS,
        value: "a longer value, maybe even a paragraph, that I've typed",
        name: TEST_PROPS.id
      });
    });
  });
});

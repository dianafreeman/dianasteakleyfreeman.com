import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/svelte";

import FormField from "$lib/components/FormFields/FormField.svelte";
const user = userEvent.setup();

const FORM_FIELD_TYPE = "text";
const PROPS = { label: "form label", id: "form-label" };

describe("Form Field", () => {
  describe("as TextField", () => {
    it('renders as an input[type="text"]', () => {
      const { getByLabelText } = render(FormField, {
        type: FORM_FIELD_TYPE,
        ...PROPS
      });
      const input = getByLabelText("form label.");
      expect(input).toHaveAttribute("type", FORM_FIELD_TYPE);
    });

    // Note: This is as an async test as we are using `fireEvent`
    it("fires a change event when something has been typed", async () => {
      const { component, getByLabelText } = render(FormField, {
        type: FORM_FIELD_TYPE,
        ...PROPS
      });

      const input = getByLabelText("form label.");
      const mockComponentEvent = vi.fn();

      component.$on("change", function (event) {
        mockComponentEvent(event.detail);
      });

      await user.type(input, "a value that I've typed");

      expect(mockComponentEvent).toHaveBeenCalled();
      expect(mockComponentEvent).toHaveBeenLastCalledWith({
        ...PROPS,
        value: "a value that I've typed",
        name: PROPS.id
      });
    });
  });
});

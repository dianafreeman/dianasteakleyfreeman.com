import { g as getEntryBy } from "../../../../../../chunks/entries.js";
import { c as createResponse } from "../../../../../../chunks/response.js";
async function GET({ params }) {
  try {
    const result = getEntryBy("slug", params.slug);
    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
export {
  GET
};

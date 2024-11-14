import { a as getMetaDetailsFor, c as createResponse } from "../../../../../../chunks/response.js";
import { a as getEntriesBy } from "../../../../../../chunks/entries.js";
async function GET({ params }) {
  const { entity, value } = params;
  try {
    const metadata = getMetaDetailsFor(entity, value);
    const entries = getEntriesBy(entity, value);
    if (!metadata) {
      return createResponse({ error: `${entity} not found` }, 404);
    }
    return new createResponse({
      entries,
      metadata
    });
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
export {
  GET
};

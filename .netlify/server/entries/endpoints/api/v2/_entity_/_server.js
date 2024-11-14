import { a as getMetaDetailsFor, c as createResponse } from "../../../../../chunks/response.js";
async function GET({ params }) {
  try {
    const result = getMetaDetailsFor(params.entity);
    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
export {
  GET
};

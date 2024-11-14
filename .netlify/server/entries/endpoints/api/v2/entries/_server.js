import { g as getAllEntryMeta, c as createResponse } from "../../../../../chunks/response.js";
async function GET() {
  try {
    const result = getAllEntryMeta();
    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
export {
  GET
};

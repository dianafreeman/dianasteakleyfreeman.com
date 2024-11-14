import { e as error } from "../../../../chunks/index.js";
async function load({ fetch, params }) {
  let targetUrl = `/api/v2/subcategory/${params.subcategory}`;
  const res = await fetch(targetUrl);
  const resp = await res.json();
  if (res.status !== 200) {
    throw error(res.status, { message: resp.error });
  }
  const { entries, metadata } = resp;
  if (entries.length == 0) {
    throw error(404, "No entries found");
  }
  return { entries, metadata };
}
export {
  load
};

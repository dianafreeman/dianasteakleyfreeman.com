import { error } from "@sveltejs/kit";

export async function load({ fetch, params, url }) {
  const searchParams = Object.fromEntries(url.searchParams);
  let targetUrl = `/api/v1/content/category/${params.category}`;

  if (Object.values(searchParams).length) {
    const [[key, value]] = Object.entries(searchParams);
    targetUrl = `${targetUrl}?${key}=${value}`;
  }
  const res = await fetch(targetUrl);
  const resp = await res.json();
  if (res.status !== 200) {
    throw error(res.status, { message: resp.error });
  }
  const { entries, metadata } = resp;

  if (entries.length == 0) {
    throw error(404, "No entries found");
  }
  return { entries, meta: metadata };
}

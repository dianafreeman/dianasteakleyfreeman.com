import { error } from "@sveltejs/kit";

export async function load({ fetch, params, url }) {
  const searchParams = Object.fromEntries(url.searchParams);

  if (Object.values(searchParams).length) {
    const [[key, value]] = Object.entries(searchParams);
    const res = await fetch(`/api/v1/content/${key}/${value}`);
    const entries = await res.json();
    if (entries.length === 0 || res.status == 400) {
     throw error(404, "No entries found");
    }
    return { entries, title: value };
  } else {
    const res = await fetch(`/api/v1/content/contentTypes/${params.contentType}`);
    const { entries, meta } = await res.json();
    if (entries.length == 0) {
      throw error(404, "No entries found");
    }
    return { entries: entries, meta, title: params.contentType };
  }
}

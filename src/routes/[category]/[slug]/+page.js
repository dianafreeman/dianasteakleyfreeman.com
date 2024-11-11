import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  const res = await fetch(`/api/v1/content/entries/${params.slug}`);
  if (res.status == 404) {
    throw error(404, {
      message: "Not found"
    });
  } else {
    const { html, metadata } = await res.json();
    return { entry: html, metadata, title: metadata.title };
  }
}

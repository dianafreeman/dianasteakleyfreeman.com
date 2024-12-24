import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  let targetUrl = `/api/v2/entries/${params.slug}`;

  const res = await fetch(targetUrl);
  const resp = await res.json();
  if (res.status !== 200) {
    throw error(res.status, { message: resp.error });
  }

  return resp;
}
export const entries = () => {
	return [
		{ slug: 'digital-self-care' },
		{ slug: 'eliza-therapeutic-ai' },
		{ slug: 'user-misdirection' },
		{ slug: 'make-them-hear-you' }
	];
};

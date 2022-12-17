import { error } from "@sveltejs/kit";

export async function load() {
  const [, module] = Object.entries(import.meta.glob("./index.md")).flat();
  const entry = await module();
  if (entry) {
    return {
      entry,
      title: "Privacy Policy"
    };
  } else {
    throw error(500, "Privacy Policy Page Endpoint Failed");
  }
}

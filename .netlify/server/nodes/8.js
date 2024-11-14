import * as universal from '../entries/pages/posts/_slug_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/8.28e20673.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js","_app/immutable/chunks/ButtonLink.15ac9491.js","_app/immutable/chunks/Icon.0f339706.js"];
export const stylesheets = [];
export const fonts = [];

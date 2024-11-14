

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ed5bad4a.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/ButtonLink.15ac9491.js","_app/immutable/chunks/Icon.0f339706.js"];
export const stylesheets = ["_app/immutable/assets/2.1a60b2de.css"];
export const fonts = [];



export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.16ccb3fd.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js","_app/immutable/chunks/index.8fdb53eb.js","_app/immutable/chunks/Button.c25c3950.js","_app/immutable/chunks/Icon.0f339706.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/6.58796ce4.css"];
export const fonts = [];

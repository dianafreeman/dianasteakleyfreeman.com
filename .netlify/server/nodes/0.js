import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.326713c7.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js","_app/immutable/chunks/stores.7384378f.js","_app/immutable/chunks/singletons.3fa1cbea.js","_app/immutable/chunks/index.8fdb53eb.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Icon.0f339706.js","_app/immutable/chunks/Button.c25c3950.js","_app/immutable/chunks/navigation.e2a30a1d.js"];
export const stylesheets = ["_app/immutable/assets/0.0a952e36.css"];
export const fonts = [];

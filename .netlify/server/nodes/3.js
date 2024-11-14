import * as universal from '../entries/pages/_category_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_category_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[category]/+page.js";
export const imports = ["_app/immutable/nodes/3.0a406272.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js","_app/immutable/chunks/singletons.3fa1cbea.js","_app/immutable/chunks/index.8fdb53eb.js","_app/immutable/chunks/Masonry.d0ca3723.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/navigation.e2a30a1d.js"];
export const stylesheets = [];
export const fonts = [];

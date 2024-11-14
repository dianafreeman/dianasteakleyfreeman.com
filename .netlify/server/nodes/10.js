

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.6a837137.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js"];
export const stylesheets = [];
export const fonts = [];

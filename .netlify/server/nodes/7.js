

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/feedback/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.89b5efef.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js"];
export const stylesheets = [];
export const fonts = [];

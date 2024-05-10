

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/layanan/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B8JuKEjI.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/index.BIoX6FCq.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D-_6jWpl.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/index.BIoX6FCq.js"];
export const stylesheets = ["_app/immutable/assets/0.C4jwlPtl.css","_app/immutable/assets/Svroller.DtgmbWC9.css"];
export const fonts = [];

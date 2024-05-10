

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CNsG_IsI.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/ScrollTrigger.BzCxM6Yu.js","_app/immutable/chunks/index.BIoX6FCq.js","_app/immutable/chunks/index.D9t5hcHj.js"];
export const stylesheets = ["_app/immutable/assets/Svroller.DtgmbWC9.css"];
export const fonts = [];

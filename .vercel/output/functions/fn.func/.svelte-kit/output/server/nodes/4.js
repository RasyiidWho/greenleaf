

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Dnc9WMN1.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/ScrollTrigger.BzCxM6Yu.js","_app/immutable/chunks/index.BIoX6FCq.js"];
export const stylesheets = ["_app/immutable/assets/4.fO3v4TT0.css"];
export const fonts = [];

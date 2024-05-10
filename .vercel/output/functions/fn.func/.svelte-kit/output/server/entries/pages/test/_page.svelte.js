import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".grid-container.svelte-1dpjnk2{width:100%;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:flex;justify-content:center;padding-top:20px}.grid-item.svelte-1dpjnk2{width:300px;height:200px;margin-right:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gridItems;
  $$result.css.add(css);
  return `<div class="grid-container svelte-1dpjnk2">${each(Array.from({ length: 10 }), (_, i) => {
    return `<div class="grid-item bg-gray-300 svelte-1dpjnk2"${add_attribute("this", gridItems, 0)}>${escape(i + 1)} </div>`;
  })}</div>`;
});
export {
  Page as default
};

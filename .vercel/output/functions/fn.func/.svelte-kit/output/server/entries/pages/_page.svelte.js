import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from "../../chunks/ssr.js";
import "dequal";
import { d as derived, r as readable } from "../../chunks/index.js";
import "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import "split-type";
/* empty css                                                  */
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gridContainer;
  let section2;
  let gridItem = [];
  gsap.registerPlugin(ScrollTrigger);
  return `<div class="font-jost"> <div class="header fixed z-50 invert" data-svelte-h="svelte-1v3yazm"><div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10"><div class="pt-10"><img width="48px" src="logo.svg" alt="golo"></div> <div class="pt-12"><img width="36px" class="float-right" src="burger.svg" alt="golo"></div></div></div> <div class="header2 fixed z-30 opacity-0" style="filter: invert(88%) sepia(34%) saturate(793%) hue-rotate(31deg) brightness(77%) contrast(84%);" data-svelte-h="svelte-162q052"><div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10"><div class="pt-10"><img width="48px" src="logo.svg" alt="golo"></div> <div class="pt-12"><img width="36px" class="float-right" src="burger.svg" alt="golo"></div></div></div> <div class="spacer section-1 flex h-max" data-svelte-h="svelte-1vnvg5e"><div class="z-20 flex h-full w-full"><div class="mask showreel flex h-full w-full items-center justify-center object-cover text-center mask-size-44 mask-repeat-no-repeat mask-position-center mask-image-[url('/ox.svg')]"> <video class="h-full w-full object-cover" id="showreel" loop autoplay muted><source src="intro.mp4" type="video/mp4"></video> <p class="intro-title absolute z-10 pb-2 text-center text-7xl font-bold tracking-tight text-white">sampah</p>    </div> <div class="sampah absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 pt-64 text-center"><p class="intro-desc text-4xl font-light tracking-tight text-black sm:text-xl md:text-2xl lg:text-xl xl:text-7xl">akan menjadi <span style="color: #71A324;">asset</span> jika diolah dengan benar.</p></div></div> <div class="absolute"><div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold"><div class="who-marquee-reverse who inline-block text-black"><img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"></div></div> <div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold"><div class="who-marquee who inline-block text-black"><img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"></div></div> <div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold"><div class="who-marquee-reverse who inline-block text-black"><img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"></div></div> <div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold"><div class="who-marquee who inline-block text-black"><img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"> <img class="inline w-96" src="/pattern.svg" alt="golo"></div></div></div> <div class="absolute z-50 flex h-full w-full items-center justify-center text-center"><div class="showreel-overlay intro absolute z-50 flex flex-col pt-0 opacity-0"><p class="introx font-jost text-7xl font-normal leading-none text-white">Pilah Berkah merupakan</p> <p class="introx font-jost text-[350px] font-extrabold leading-none text-white">SARANA</p> <p class="introx font-jost mx-80 text-5xl font-light text-white">Untuk mengubah segala jenis sampah Anda menjadi sebuah asset.</p></div> <div class="showreel-overlay client z-50 flex flex-col pt-0 opacity-0"><p class="clientx font-jost text-7xl font-normal leading-none text-white">Lebih dari</p> <p class="clientx font-jost text-[350px] font-extrabold leading-none text-white">5000+</p> <p class="clientx font-jost mx-80 text-5xl font-light text-white">Client mempercayakan sampah mereka kepada kami</p> <div class="clientx flex whitespace-nowrap pt-10 font-extrabold"><div class="who-marquee who inline-block text-black"><img class="inline w-64 p-5" src="/client/visa.png" alt="golo"> <img class="inline w-64 p-5" src="/client/samsung.png" alt="golo"> <img class="inline w-64 p-5" src="/client/zoom.png" alt="golo"> <img class="inline w-64 p-5" src="/client/venmo.png" alt="golo"> <img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo"> <img class="inline w-64 p-5" src="/client/visa.png" alt="golo"> <img class="inline w-64 p-5" src="/client/samsung.png" alt="golo"> <img class="inline w-64 p-5" src="/client/zoom.png" alt="golo"> <img class="inline w-64 p-5" src="/client/venmo.png" alt="golo"> <img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo"> <img class="inline w-64 p-5" src="/client/visa.png" alt="golo"> <img class="inline w-64 p-5" src="/client/samsung.png" alt="golo"> <img class="inline w-64 p-5" src="/client/zoom.png" alt="golo"> <img class="inline w-64 p-5" src="/client/venmo.png" alt="golo"> <img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo"></div></div></div> <img width="64px" class="slider absolute bottom-0 z-50 pb-3 opacity-0" src="bur.svg" alt="golo"></div> <div class="stats absolute flex h-full flex-col text-center opacity-0"><img class="absolute right-0 -z-50 inline w-[64rem] opacity-50" src="/glow1.svg" alt="golo"> <img class="absolute -z-50 inline w-[64rem]" src="/glow2.svg?v2" alt="golo"> <p class="stats-text font-jost px-32 pt-36 text-[100px] font-normal leading-none text-black">Statistik pencapaian yang terus bertambah setiap harinya</p> <div class="stats-grid grid-rows-22 m-48 grid grid-cols-2 place-items-center items-center justify-center rounded-3xl bg-[#eff3dd86] text-center"><div class="py-28"><img class="inline w-12" src="/1.svg" alt="golo"> <p class="font-jost pt-10 text-[50px] font-normal">5000<span class="text-[#539451]">+</span></p> <p class="font-jost mx-32 text-[50px] font-light">Total Client Fasyankes</p></div> <div><img class="inline w-12" src="/2.svg" alt="golo"> <p class="font-jost pt-10 text-[50px] font-normal">230<span class="text-[#539451]">+</span></p> <p class="font-jost mx-32 text-[50px] font-light">Total Client Non-Fasyankes</p></div> <div class="py-28"><img class="inline w-12" src="/3.svg" alt="golo"> <p class="font-jost pt-10 text-[50px] font-normal">534<span class="text-[#539451]">+</span></p> <p class="font-jost mx-32 text-[50px] font-light">Ton Sampah Setiap Hari</p></div> <div><img class="inline w-12" src="/4.svg" alt="golo"> <p class="font-jost pt-10 text-[50px] font-normal">34<span class="text-[#539451]">+</span></p> <p class="font-jost mx-32 text-[50px] font-light">Melayani Rumah Setiap Hari</p></div></div>  </div> </div> <div class="spacer section-2"${add_attribute("this", section2, 0)}> <div class=""><div class="bg-[#F4F9EF]"><p class="font-jost px-32 pt-20 text-[120px] font-normal leading-none text-black" data-svelte-h="svelte-mgit5s">Layanan yang Pilah Berkah tawarkan untuk Anda.</p> <div class="grid-container w-full h-full overflow-hidden whitespace-nowrap py-20"${add_attribute("this", gridContainer, 0)}>${each(Array.from({ length: 5 }), (_, i) => {
    return `<div class="grid-item inline-block"${add_attribute("this", gridItem, 0)}><img class="w-56 absolute right-36" src="/pelatihan.svg" alt="golo"> <div class="p-10 m-4 w-[500px] h-[500px] bg-white rounded-3xl">${escape(i + 1)}</div> </div>`;
  })}</div></div></div>   </div> </div>`;
});
export {
  Page as default
};

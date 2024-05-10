import { i as identity, c as create_ssr_component, a as createEventDispatcher, o as onDestroy, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                  */
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const css = {
  code: ".v-scrollbar.svelte-8osist{position:absolute;top:0;right:0;z-index:1000;width:var(--svrollbar-track-width, 10px)}.v-scrollbar.fixed.svelte-8osist{position:fixed}.v-track.svelte-8osist{position:absolute;top:0;right:0;border-radius:var(--svrollbar-track-radius, initial);width:var(--svrollbar-track-width, 10px);opacity:var(--svrollbar-track-opacity, 1);background:var(--svrollbar-track-background, initial);box-shadow:var(--svrollbar-track-shadow, initial)}.v-thumb.svelte-8osist{position:relative;margin:0 auto;border-radius:var(--svrollbar-thumb-radius, 0.25rem);width:var(--svrollbar-thumb-width, 6px);opacity:var(--svrollbar-thumb-opacity, 0.5);background:var(--svrollbar-thumb-background, gray);box-shadow:var(--svrollbar-thumb-shadow, initial)}",
  map: null
};
const Svrollbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teardownViewport;
  let teardownContents;
  let teardownTrack;
  let teardownThumb;
  let marginTop;
  let marginBottom;
  let marginRight;
  let marginLeft;
  let wholeHeight;
  let scrollTop;
  let trackHeight;
  let thumbHeight;
  let thumbTop;
  let scrollable;
  let visible;
  let { viewport } = $$props;
  let { contents } = $$props;
  let { hideAfter = 1e3 } = $$props;
  let { alwaysVisible = false } = $$props;
  let { initiallyVisible = false } = $$props;
  let { margin = {} } = $$props;
  let { vTrackIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vTrackOut = (node) => fade(node, { duration: 300 }) } = $$props;
  let { vThumbIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vThumbOut = (node) => fade(node, { duration: 300 }) } = $$props;
  const dispatch = createEventDispatcher();
  let vTrack;
  let vThumb;
  let startTop = 0;
  let startY = 0;
  let timer = 0;
  let windowScrollEnabled = false;
  let interacted = false;
  function setupViewport(viewport2) {
    if (!viewport2)
      return;
    teardownViewport?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    windowScrollEnabled = document.scrollingElement === viewport2;
    const element = windowScrollEnabled ? document : viewport2;
    element.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport2?.scrollHeight ?? 0;
        trackHeight = viewport2?.clientHeight - (marginTop + marginBottom);
      }
    });
    observer.observe(viewport2);
    return () => {
      element.removeEventListener("scroll", onScroll);
      observer.unobserve(contents);
      observer.disconnect();
    };
  }
  function setupTrack(track) {
    if (!track)
      return;
    teardownTrack?.();
    vTrack.addEventListener("mouseenter", onTrackEnter);
    vTrack.addEventListener("mouseleave", onTrackLeave);
    return () => {
      vTrack.removeEventListener("mouseenter", onTrackEnter);
      vTrack.removeEventListener("mouseleave", onTrackLeave);
    };
  }
  function setupThumb(thumb) {
    if (!thumb)
      return;
    teardownThumb?.();
    vThumb.addEventListener("mousedown", onThumbDown, { passive: true });
    vThumb.addEventListener("touchstart", onThumbDown, { passive: true });
    return () => {
      vThumb.removeEventListener("mousedown", onThumbDown);
      vThumb.removeEventListener("touchstart", onThumbDown);
    };
  }
  function setupContents(contents2) {
    if (!contents2)
      return;
    teardownContents?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport?.scrollHeight ?? 0;
      }
    });
    observer.observe(contents2);
    return () => {
      observer.unobserve(contents2);
      observer.disconnect();
    };
  }
  function setupTimer() {
    timer = window.setTimeout(
      () => {
        visible = scrollable && (alwaysVisible || initiallyVisible && !interacted) || false;
        dispatch("hide");
      },
      hideAfter
    );
  }
  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = 0;
    }
  }
  function onScroll() {
    if (!scrollable)
      return;
    clearTimer();
    setupTimer();
    visible = alwaysVisible || initiallyVisible && !interacted || true;
    scrollTop = viewport?.scrollTop ?? 0;
    interacted = true;
    dispatch("show");
  }
  function onTrackEnter() {
    clearTimer();
  }
  function onTrackLeave() {
    clearTimer();
    setupTimer();
  }
  function onThumbDown(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = viewport.scrollTop;
    startY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    document.addEventListener("mousemove", onThumbMove);
    document.addEventListener("touchmove", onThumbMove);
    document.addEventListener("mouseup", onThumbUp);
    document.addEventListener("touchend", onThumbUp);
  }
  function onThumbMove(event) {
    event.stopPropagation();
    event.preventDefault();
    const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    const ratio = wholeHeight / trackHeight;
    viewport.scrollTop = startTop + ratio * (clientY - startY);
  }
  function onThumbUp(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = 0;
    startY = 0;
    document.removeEventListener("mousemove", onThumbMove);
    document.removeEventListener("touchmove", onThumbMove);
    document.removeEventListener("mouseup", onThumbUp);
    document.removeEventListener("touchend", onThumbUp);
  }
  onDestroy(() => {
    teardownViewport?.();
    teardownContents?.();
    teardownTrack?.();
    teardownThumb?.();
  });
  if ($$props.viewport === void 0 && $$bindings.viewport && viewport !== void 0)
    $$bindings.viewport(viewport);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.hideAfter === void 0 && $$bindings.hideAfter && hideAfter !== void 0)
    $$bindings.hideAfter(hideAfter);
  if ($$props.alwaysVisible === void 0 && $$bindings.alwaysVisible && alwaysVisible !== void 0)
    $$bindings.alwaysVisible(alwaysVisible);
  if ($$props.initiallyVisible === void 0 && $$bindings.initiallyVisible && initiallyVisible !== void 0)
    $$bindings.initiallyVisible(initiallyVisible);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.vTrackIn === void 0 && $$bindings.vTrackIn && vTrackIn !== void 0)
    $$bindings.vTrackIn(vTrackIn);
  if ($$props.vTrackOut === void 0 && $$bindings.vTrackOut && vTrackOut !== void 0)
    $$bindings.vTrackOut(vTrackOut);
  if ($$props.vThumbIn === void 0 && $$bindings.vThumbIn && vThumbIn !== void 0)
    $$bindings.vThumbIn(vThumbIn);
  if ($$props.vThumbOut === void 0 && $$bindings.vThumbOut && vThumbOut !== void 0)
    $$bindings.vThumbOut(vThumbOut);
  $$result.css.add(css);
  teardownViewport = setupViewport(viewport);
  teardownContents = setupContents(contents);
  teardownTrack = setupTrack(vTrack);
  teardownThumb = setupThumb(vThumb);
  marginTop = margin.top ?? 0;
  marginBottom = margin.bottom ?? 0;
  marginRight = margin.right ?? 0;
  marginLeft = margin.left ?? 0;
  wholeHeight = viewport?.scrollHeight ?? 0;
  scrollTop = viewport?.scrollTop ?? 0;
  trackHeight = viewport?.clientHeight ?? 0 - (marginTop + marginBottom);
  thumbHeight = wholeHeight > 0 ? trackHeight / wholeHeight * trackHeight : 0;
  thumbTop = wholeHeight > 0 ? scrollTop / wholeHeight * trackHeight : 0;
  scrollable = wholeHeight > trackHeight;
  visible = scrollable && (alwaysVisible || initiallyVisible);
  return `${visible ? `<div class="${["v-scrollbar svelte-8osist", windowScrollEnabled ? "fixed" : ""].join(" ").trim()}" style="${"height: " + escape(trackHeight, true) + "px; margin: " + escape(marginTop, true) + "px " + escape(marginRight, true) + "px " + escape(marginBottom, true) + "px " + escape(marginLeft, true) + "px"}"><div class="v-track svelte-8osist" style="${"height: " + escape(trackHeight, true) + "px"}"${add_attribute("this", vTrack, 0)}></div> <div class="v-thumb svelte-8osist" style="${"height: " + escape(thumbHeight, true) + "px; top: " + escape(thumbTop, true) + "px"}"${add_attribute("this", vThumb, 0)}></div></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Svrollbar, "Svrollbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

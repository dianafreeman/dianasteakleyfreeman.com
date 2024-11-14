import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, j as null_to_empty, b as add_attribute } from "../../chunks/ssr.js";
import { B as ButtonLink } from "../../chunks/ButtonLink.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Typewriter_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: "@keyframes svelte-fi9az1-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-fi9az1 *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-fi9az1 .finished-typing::after{content:none}.cursor.svelte-fi9az1 .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-fi9az1-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$2);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-fi9az1">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-fi9az1" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-fi9az1", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const Typewriter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--cursor-color:#5adbff;--cursor-width:1rem}",
  map: null
};
const Typewriter_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onComplete = () => null } = $$props;
  let { inView } = $$props;
  if ($$props.onComplete === void 0 && $$bindings.onComplete && onComplete !== void 0)
    $$bindings.onComplete(onComplete);
  if ($$props.inView === void 0 && $$bindings.inView && inView !== void 0)
    $$bindings.inView(inView);
  $$result.css.add(css$1);
  return `<div class="min-h-[200px]">${inView ? `${validate_component(Typewriter, "Typewriter").$$render($$result, { interval: 90 }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``} </div>`;
});
const Creator_svelte_svelte_type_style_lang = "";
const css = {
  code: "#script.svelte-ztdwhe path.svelte-ztdwhe{stroke-dasharray:1000;stroke-dashoffset:1000}",
  map: null
};
const Creator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz } = $$props;
  let { strokeWidth = "8px" } = $$props;
  let style = `fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: ${strokeWidth};`;
  let ref1, ref2, ref3;
  let { isDrawing = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.isDrawing === void 0 && $$bindings.isDrawing && isDrawing !== void 0)
    $$bindings.isDrawing(isDrawing);
  $$result.css.add(css);
  return `<svg id="script" class="${escape(null_to_empty(clazz), true) + " svelte-ztdwhe"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 150"><path id="Cr" d="m61.5,65.86s9.19-32.58-7.1-35.09-36.76,38.84-36.76,38.84c0,0-29.36,69.84,5.99,63.95,25.34-4.22,51.65-57.27,51.65-57.27l-12.53,46.11s4.96-32.32,30.88-49.03"${add_attribute("style", style, 0)} class="svelte-ztdwhe"${add_attribute("this", ref1, 0)}></path><path id="eator" d="m97.96,92.23s18.92-.95,19.56-14.63-17.12,6.52-21.62,19.24c-3.66,10.33-5.93,40.66,18.76,16.38,9.54-9.38,21.3-35.45,38.16-36.73,0,0-25.56,5.28-27.5,32.91-1.59,22.58,29.89-35.45,29.89-35.45,0,0-16.22,37.69-6.52,46.42,4.77,4.29,25.82-25.42,28.78-34.66s14.79-46.11,14.79-46.11c0,0-25.41,64.31-19.86,79.12s31.45-34.5,39.78-42.09l8.33-7.59s-22.9,17.77-21.05,45.06,31-24.28,21.05-36.08-23.17,7.66,9.01,2.99c7.86-1.14,13.18-5.3,13.18-5.3l-11,45.58s-4.46,3.46,11-28.7c6.71-13.95,18.27-17.35,18.27-17.35"${add_attribute("style", style, 0)} class="svelte-ztdwhe"${add_attribute("this", ref2, 0)}></path><path id="T" d="m154.3,57.17s17.67-.79,28.27-2.75,25.13-1.96,31.41,0"${add_attribute("style", style, 0)} class="svelte-ztdwhe"${add_attribute("this", ref3, 0)}></path></svg>`;
});
Promise.resolve();
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz } = $$props;
  let { id } = $$props;
  let { onInView } = $$props;
  let { onOutOfView } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.onInView === void 0 && $$bindings.onInView && onInView !== void 0)
    $$bindings.onInView(onInView);
  if ($$props.onOutOfView === void 0 && $$bindings.onOutOfView && onOutOfView !== void 0)
    $$bindings.onOutOfView(onOutOfView);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", clazz, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let coderInView = false;
  let creatorInView = false;
  return `<div class="m-auto flex-col relative"><div class="">${validate_component(Section, "Section").$$render(
    $$result,
    {
      class: "py-10 h-[80vh] items-center justify-center flex flex-col px-5 md:px-0"
    },
    {},
    {
      default: () => {
        return `<h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow mb-4 text-center font-black pt-7" data-svelte-h="svelte-xgv4sl">Diana M. Steakley-Freeman</h1> <p class="my-8 text-xl md:text-2xl lg:text-3xl font-extralight"><a href="#coder" class="mx-1 hover:text-sky-blue active:text-yellow focus:text-sky-blue outline-none" data-svelte-h="svelte-6wb3z9">Coder.</a> <a href="#creator" class="mx-1 hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none" data-svelte-h="svelte-wc02jt">Creator.</a> <a href="#communicator" class="mx-1 hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none" data-svelte-h="svelte-1s51ek7">Communicator.</a></p>`;
      }
    }
  )} ${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "coder",
      class: "py-10 flex px-5 md:px-0",
      onInView: () => coderInView = true,
      onOutOfView: () => coderInView = false
    },
    {},
    {
      default: () => {
        return `<div class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-start md:px-10">${validate_component(Typewriter_1, "Typewriter").$$render($$result, { inView: coderInView }, {}, {
          default: () => {
            return `<h2 aria-label="Coder" class="mx-auto text-9xl text-sky-blue font-code mb-4 text-center font-bold pt-7" data-svelte-h="svelte-wb6wwo">Coder_</h2>`;
          }
        })}   ${validate_component(ButtonLink, "ButtonLink").$$render(
          $$result,
          {
            target: "_blank",
            href: "https://github.com/dianafreeman",
            borders: true,
            animateBorders: true,
            class: "bg-yellow text-black p-5 my-10 font-bold",
            iconProps: { type: "next" }
          },
          {},
          {
            default: () => {
              return `View Code Projects`;
            }
          }
        )}</div> <div class="md:w-1/3 flex justify-center items-center"></div>`;
      }
    }
  )}</div> <div class="">${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "creator",
      onInView: () => creatorInView = true,
      onOutOfView: () => creatorInView = false,
      class: "py-10 flex px-5 md:px-0 flex-row-reverse"
    },
    {},
    {
      default: () => {
        return `<div class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-end md:px-10"><h2 class="sr-only" data-svelte-h="svelte-1k1ka7b">Creator</h2> ${validate_component(Creator, "Creator").$$render(
          $$result,
          {
            isDrawing: creatorInView,
            class: "stroke-sky-blue md:w-3/4"
          },
          {},
          {}
        )}  ${validate_component(ButtonLink, "ButtonLink").$$render(
          $$result,
          {
            href: "/projects/art-and-design",
            borders: true,
            animateBorders: true,
            class: "bg-yellow text-black p-5 my-10 font-bold",
            iconProps: { type: "next" }
          },
          {},
          {
            default: () => {
              return `View Creative Projects`;
            }
          }
        )}</div> <div class="md:w-1/3"></div>`;
      }
    }
  )}</div> <div class="">${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "communicator",
      class: "py-10 flex px-5 md:px-0"
    },
    {},
    {
      default: () => {
        return `<div class="md:w-2/3 min-h-[70vh] flex flex-col justify-center items-start md:px-10"><h2 class="text-left text-6xl lg:text-8xl font-black text-sky-blue tracking-tighter" data-svelte-h="svelte-1dg9y2a">Communicator</h2>   ${validate_component(ButtonLink, "ButtonLink").$$render(
          $$result,
          {
            href: "/projects/science",
            iconProps: { type: "next" }
          },
          {},
          {
            default: () => {
              return `View Publications`;
            }
          }
        )}</div>  <div class="md:w-1/3"></div>`;
      }
    }
  )} </div></div>`;
});
export {
  Page as default
};

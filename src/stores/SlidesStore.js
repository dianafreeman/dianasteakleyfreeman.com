import { writable } from "svelte/store";
import { LANDING_SLIDES, CONTENT_SLIDES } from "./content";
const DEFAULT_INDEX = 0;

function createSlidesStore() {
  let activeIndex = DEFAULT_INDEX;
  let landingSlides = LANDING_SLIDES.map((item, i) => ({ index: i, ...item }));
  let contentSlides = CONTENT_SLIDES.map((item, i) => ({ index: i, ...item }));

  let MIN_INDEX = 0;
  let MAX_INDEX = landingSlides.length - 1;

  const { subscribe, set, update } = writable({
    landingSlides,
    contentSlides,
    activeIndex
  });

  function next() {
    update(({ activeIndex, ...rest }) => {
      if (activeIndex === MAX_INDEX) return { activeIndex: MIN_INDEX, ...rest };
      return { activeIndex: activeIndex + 1, ...rest };
    });
  }
  function previous() {
    update(({ activeIndex, ...rest }) => {
      if (activeIndex === MIN_INDEX) return { activeIndex: MAX_INDEX, ...rest };
      return { activeIndex: activeIndex - 1, ...rest };
    });
  }

  function setActiveIndex(idx) {
    update(({ activeIndex, ...rest }) => {
      return { activeIndex: idx, ...rest };
    });
  }

  return {
    subscribe,
    previous,
    next,
    setActiveIndex,
    reset: () => set({ landingSlides, activeIndex: DEFAULT_INDEX })
  };
}

const SlidesStore = createSlidesStore();
export default SlidesStore;

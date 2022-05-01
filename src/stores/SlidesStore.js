
import { writable } from "svelte/store";
const DEFAULT_INDEX = 0

function createSlidesStore() {
  let activeIndex = DEFAULT_INDEX
  let slides = [
    {
      title: "Coder",
      color: "#0C023C",
      description: "(v.) To dance between the lines of art, science, and opinion.",
      categoryName: "Projects",
    },
    {
      title: "Creator",
      color: "#3C021F",
      description: "Something creative",
      categoryName: "Gallery"
    },
    {
      //  &shy; is the manual hyphen indicator
      title: "Communicator",
      color: "#005F42",
      description: "Lorem upsum even better",
      categoryName: "Posts"
    }
  ].map((item, i) => ({ index: i, ...item }))

  let MIN_INDEX = 0;
  let MAX_INDEX = slides.length - 1


  const { subscribe, set, update } = writable({
    slides,
    activeIndex,
  });


  function next() {
    update(({ activeIndex, ...rest }) => {
      if (activeIndex === MAX_INDEX) return { activeIndex: MIN_INDEX, ...rest }
      return { activeIndex: activeIndex + 1, ...rest }
    })
  }
  function previous() {
    update(({ activeIndex, ...rest }) => {
      if (activeIndex === MIN_INDEX) return { activeIndex: MAX_INDEX, ...rest }
      return { activeIndex: activeIndex - 1, ...rest }
    })
  }

  function setActiveIndex(idx) {
    update(({ activeIndex, ...rest }) => {
      return { activeIndex: idx, ...rest }
    })
  }

  return {
    subscribe,
    previous,
    next,
    setActiveIndex,
    reset: () => set({ slides, activeIndex: DEFAULT_INDEX })

  }
}

const SlidesStore = createSlidesStore()
export default SlidesStore;
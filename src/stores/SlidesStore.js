
import { writable } from "svelte/store";
const DEFAULT_INDEX = 0
function createSlidesStore() {
  let activeIndex = DEFAULT_INDEX
  let slides = [
    {
      title: "Coder",
      color: "#0C023C",
      description: "(v.) To dances between the lines of art, science, and opinion."
    },
    {
      title: "Creator",
      color: "#3C021F",
      description: "Something creative"
    },
    {
      title: "Communicator",
      color: "#005F42",
      description: "Lorem upsum even better"
    }
  ]

  const { subscribe, set, update } = writable({
    slides,
    activeIndex,
  });

  function next() {
    update(({ activeIndex, ...rest }) => {
      let max = slides.length - 1
      if (activeIndex === max ) return {  activeIndex: max, ...rest}

      return { activeIndex: activeIndex + 1, ...rest}
    })
  }
  function previous() {
    update(({ activeIndex, ...rest }) => {
      let min = 0;
      if (activeIndex === min) return {  activeIndex: min, ...rest}
     return {  activeIndex: activeIndex - 1, ...rest}
    })
  }

  return {
    subscribe,
    previous,
    next,
    reset: () => set({ slides, activeIndex: DEFAULT_INDEX })

  }
}

const SlidesStore = createSlidesStore()
export default SlidesStore;
import { writable } from "svelte/store";
import data from "./data.json";

export function createTrailStore() {
  // TODO: redo this
  let paused = false;
  let finished = false;
  let trackedIndex = 0;
  const items = writable([]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function next() {
    items.update((current) => {
      trackedIndex++;
      return [...current, data[current.length]];
    });
  }

  async function play(onCompleteCb) {
    while (trackedIndex < data.length) {
      if (!data[trackedIndex]) return;
      if (paused || finished) break;
      await delay(data[trackedIndex].delay);
      next();
    }
    if (trackedIndex === data.length) {
      if (onCompleteCb) onCompleteCb();
      finished = true;
    }
  }

  function pause() {
    // if (finished) return;
    paused = true;
    trackedIndex = trackedIndex - 1;
    items.set(data.slice(0, trackedIndex));
  }

  function resume() {
    if (!paused) return;
    paused = false;
    play();
  }

  function skip() {
    finished = true;
    items.set(data);
  }

  function pauseOrResume() {
    if (paused) return resume();
    return pause();
  }

  return {
    subscribe: items.subscribe,
    next,
    play,
    pause,
    resume,
    skip,
    paused,
    finished,
    pauseOrResume
  };
}

const TrailStore = createTrailStore();

export default TrailStore;

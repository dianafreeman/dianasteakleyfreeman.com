import { writable } from "svelte/store";

function createIntroStore() {
  let { set, update, subscribe } = writable(false);

  return {
    subscribe,
    setIsComplete: set
  };
}

const IntroStore = writable(false);
export default IntroStore;

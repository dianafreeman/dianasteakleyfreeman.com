import { writable } from "svelte/store";

function createIntroStore() {
  let { set, update, subscribe } = writable({
    isShowing: false,
    isComplete: true
  });

  let windowHeight = writable(0);

  function setWindowHeight(height) {
    windowHeight.set(height);
  }

  function hideIntro(callbackFn) {
    
    update((store) => ({ ...store, isShowing: false }));
    if (callbackFn) callbackFn();
  }

  function showIntro(callbackFn) {
    
    update((store) => ({ ...store, isShowing: true }));
    if (callbackFn) callbackFn();
  }

  function setIsComplete(bool) {
    update((store) => ({ ...store, isComplete: bool }));
  }

  return {
    subscribe,
    set,
    setWindowHeight,
    setIsComplete,
    hideIntro,
    showIntro
  };
}

const IntroStore = createIntroStore();
export default IntroStore;

import { writable } from "svelte/store";

function createIntroStore() {
  let { set, update, subscribe } = writable({
    isShowing: true,
    isComplete: false
  });

  let windowHeight = writable(0)
  
  function setWindowHeight(height){
    windowHeight.set(height)
  }

  function hideIntro(callbackFn) {
    console.log('hiding')
    update((store) => ({ ...store, isShowing: false }))
    if (callbackFn) callbackFn()
  }
  
  function showIntro(callbackFn) {
    console.log('showing')
    update((store) => ({ ...store, isShowing: true }))
    if (callbackFn) callbackFn()
  }

  function setIsComplete(bool) {
    update((store) => ({ ...store, isComplete: bool }));
  }

  return {
    subscribe,
    setWindowHeight,
    setIsComplete,
    hideIntro,
    showIntro,
  };
}

const IntroStore = createIntroStore();
export default IntroStore;

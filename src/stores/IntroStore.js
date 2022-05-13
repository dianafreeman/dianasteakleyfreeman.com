import { writable } from "svelte/store";


function createIntroStore() {
    let { set, update, subscribe } = writable({
        isShowing: true,
        isComplete: false,
    });

    let skip = false;

    function toggleIsShowing(callbackFn) {
        update(store => ({ ...store, isShowing: !store.isShowing }))
        if (callbackFn) callbackFn()
    }

    function setIsComplete(bool){
        update(store => ({ ...store, isComplete: bool }))
    }
    // function skip(bool){
    //     update(store => ({ ...store, isComplete: bool }))
    // }

    return {
        subscribe,
        setIsComplete,
        toggleIsShowing,
    }
}



const IntroStore = createIntroStore()
export default IntroStore
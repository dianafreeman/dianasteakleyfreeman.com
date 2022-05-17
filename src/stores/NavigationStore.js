import { writable } from "svelte/store";

function createNavigationStore() {
  const { set, update, subscribe } = writable({
    isOpen: false,
    items: ["About", "Gallery", "Contact"]
  });

  function toggleNav() {
    update((stuff) => ({ ...stuff, isOpen: !stuff.isOpen }));
  }

  return {
    subscribe,
    toggleNav
  };
}

const NavigationStore = createNavigationStore();
export default NavigationStore;

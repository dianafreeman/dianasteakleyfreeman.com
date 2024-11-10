import { writable, derived } from "svelte/store";
import { isMobile } from "./isMobile";

export const topNavHeight = writable(0);
export const scrollY = writable(0);
export const mainMenuIsOpen = writable(false);
export const settingsMenuIsOpen = writable(false);
export const pageHeadings = writable([]);
export const isMobileScreen = writable(false);


export const _menuIsOpen = writable(false); // Internal store to manage the open state

export const menuIsOpen = derived(
  [isMobile, _menuIsOpen],
  ([$isMobile, $_menuIsOpen], set) => {
    // If it's mobile view, respect the internal state, otherwise always keep the menu open
    set($isMobile ? $_menuIsOpen : true);
  }
);


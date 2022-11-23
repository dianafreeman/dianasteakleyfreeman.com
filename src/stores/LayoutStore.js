import { readable, writable } from "svelte/store";

export const navHeight = writable(0);
export const scrollY = writable(0);
export const mainMenuIsOpen = writable(false);
export const settingsMenuIsOpen = writable(false);
export const pageHeadings = writable([]);
export const classes = readable({
  RESPONSIVE_CONTAINER: "",
  MAIN_HEADING: "",
  SUB_HEADING: ""
});

export const isMobileScreen = writable(false);

import { writable } from "svelte/store";

export const topNavHeight = writable(0);
export const scrollY = writable(0);
export const mainMenuIsOpen = writable(false);
export const settingsMenuIsOpen = writable(false);
export const pageHeadings = writable([]);


export const isMobileScreen = writable(false);

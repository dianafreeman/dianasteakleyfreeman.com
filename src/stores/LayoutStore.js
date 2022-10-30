import { writable, derived } from "svelte/store";
import { page } from "$app/stores";

const createMapFromArray = (item) => ({ [item]: item });

const MODES = ["dark", "light"].map(createMapFromArray);

function createLayoutStore() {
  const settings = writable({
    mode: MODES.dark,
    dyslexia: false,
  });

  const setMode = (modeEnum) => settings.update((curr) => ({ ...curr, mode: modeEnum }));
  const toggleDyslexia = (bool) =>
    settings.update((curr) => ({ ...curr, dyslexia: !curr.dyslexia }));

  const toggleMode = () =>
    settings.update((curr) => {
      if (curr.mode === MODES.dark) return setMode(MODES.light);
      return setMode(MODES.dark);
    });

  const combined = derived([settings, page], ($settings, $page) => {
    return {
      ...$settings,
      page: $page
    };
  });

  return {
    subscribe: settings.subscribe,
    combined: combined,
    toggleMode,
    toggleDyslexia
  };
}

const layoutStore = createLayoutStore();
export default layoutStore;

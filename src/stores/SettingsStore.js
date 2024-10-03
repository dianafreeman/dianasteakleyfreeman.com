import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const MODES = {
  DARK: "dark",
  LIGHT: "light"
};

const LOCAL_STORAGE_KEY = "dianasteakleyfreeman.com-settings";

const DEFAULT_SETTINGS = {
  mode: MODES.DARK,
  dyslexia: false
};

export function createSettingsStore() {
  const settings = writable(DEFAULT_SETTINGS);

  const toggleDyslexia = () =>
    settings.update((curr) => ({ ...curr, dyslexia: !curr.dyslexia }));

  const toggleMode = () => {
    settings.update((curr) => {
      if (curr.mode === MODES.DARK) {
        return { ...curr, mode: MODES.LIGHT };
      } else if (curr.mode === MODES.LIGHT) {
        return { ...curr, mode: MODES.DARK };
      }
    });
  };
  function restoreSettings() {
    let savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedSettings) return settings.set(DEFAULT_SETTINGS);
    settings.set(JSON.parse(savedSettings));
  }

  function saveSettings(obj) {
    if (!obj) return;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
  }

  function clearSettings() {
    settings.set(DEFAULT_SETTINGS);
    if (browser) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }

  settings.subscribe((s) => {
    if (browser) {
      saveSettings(s);
    }
  });

  return {
    subscribe: settings.subscribe,
    restoreSettings,
    saveSettings,
    clearSettings,
    toggleMode,
    toggleDyslexia
  };
}

const settingsStore = createSettingsStore();
export default settingsStore;

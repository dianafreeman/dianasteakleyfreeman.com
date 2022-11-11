import { onMount } from "svelte";
import { browser, dev, prerendering } from "$app/environment";
import { writable } from "svelte/store";


const MODES = {
  DARK: 'dark',
  LIGHT: 'light'
}

const LOCAL_STORAGE_KEY = 'dianasteakleyfreeman.com-settings'

const DEFAULT_SETTINGS = {
  mode: MODES.DARK,
  dyslexia: false,
}

export function createLayoutStore() {
  const settings = writable();

  const setMode = (modeEnum) => settings.update((curr) => ({ ...curr, mode: modeEnum }));
  const toggleDyslexia = () =>
    settings.update((curr) => ({ ...curr, dyslexia: !curr.dyslexia }));

  const toggleMode = () =>
    settings.update((curr) => {
      if (curr.mode === MODES.dark) return setMode(MODES.LIGHT);
      return setMode(MODES.DARK);
    });


    function restoreSettings() {
      let savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (!savedSettings) return settings.set(DEFAULT_SETTINGS)
      settings.set(JSON.parse(savedSettings))
    }
    
    
    function saveSettings(obj) {
      if (!obj) return
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj))
      console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    
    function clearSettings() {
      if (browser) localStorage.removeItem(LOCAL_STORAGE_KEY)
    }


  settings.subscribe(s => {
    if (browser) {
      saveSettings(s)
    }
  })

  return {
    subscribe: settings.subscribe,
    restoreSettings,
    saveSettings,
    clearSettings,
    toggleMode,
    toggleDyslexia
  };
}

const layoutStore = createLayoutStore();
export default layoutStore;

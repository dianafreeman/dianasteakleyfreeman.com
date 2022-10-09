import { writable, derived } from "svelte/store";
import { page } from "$app/stores";

const createMapFromArray = item => ({ [item]: item })

const MODES = ['dark', 'light'].map(createMapFromArray)

function createLayoutStore() {
    const validCategories = ['writing','code', 'gallery', 'resources']
    const settings = writable({
        mode: MODES.dark,
        dyslexia: false,
        navHeight: false,
        scrollY: 0,
    });
    // let pageData;
    // page.subscribe( val => pageData = val)

    const setScrollY = (y) => settings.update(curr => ({ ...curr, scrollY: y }))
    const setNavHeight = (val) => settings.update(curr => ({ ...curr, navHeight: val }))
    const toggleMode = () => settings.update(curr => {
        if (curr.mode === MODES.dark) return { ...curr, mode: MODES.light }
        return { ...curr, mode: MODES.dark }
    })

    const combined = derived([settings, page], ($settings, $page) => {
        console.log(page.url)
        return { 
            ...$settings, 
            page: page
        }
    })
    // page.subscribe( val => pageData.set(val))

    // console.log('combined', combined)
    return {
        subscribe: settings.subscribe,
        combined: combined,
        validCategories,
        setScrollY,
        setNavHeight,
        toggleMode,
    };
}

const LayoutStore = createLayoutStore();
export default LayoutStore;

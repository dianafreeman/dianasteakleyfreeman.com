import { writable, derived } from "svelte/store";
import { page } from "$app/stores";
import { getCategories } from "$content/helpers";

const createMapFromArray = item => ({ [item]: item })

const MODES = ['dark', 'light'].map(createMapFromArray)

function createLayoutStore() {
    const categories = getCategories()
    const validCategories = categories.map(v => v.name)
    const validSubCategories = categories.filter(c => c.subcategories).map(c => c.subcategories.map(s => s.name)).flat()//.filter(c => c.subcategories > 0)//.map(v => v.subcategories.map(s => s.name))
    
    const settings = writable({
        mode: MODES.dark,
        dyslexia: false,
        navHeight: 0,
        scrollY: 0,
    });


    const setScrollY = (y) => settings.update(curr => ({ ...curr, scrollY: y }))
    const setNavHeight = (val) => settings.update(curr => ({ ...curr, navHeight: val }))
    const setMode = (modeEnum) => settings.update(curr => ({ ...curr, mode: modeEnum }))

    const toggleMode = () => settings.update(curr => {
        if (curr.mode === MODES.dark) return setMode(MODES.light)
        return setMode(MODES.dark)
    })

    const combined = derived([settings, page], ($settings, $page) => {

        return {
            ...$settings,
            page: $page
        }
    })

    return {
        subscribe: settings.subscribe,
        combined: combined,
        validCategories,
        validSubCategories,
        setScrollY,
        setNavHeight,
        toggleMode,
    };
}

const LayoutStore = createLayoutStore();
export default LayoutStore;

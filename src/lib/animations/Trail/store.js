import { derived, writable } from "svelte/store";

// function createItems() {
//     const { set, update, subscribe } = writable([])

//     return {
//         subscribe,
//         update
//     }
// }

// const items = createItems()
function createTrail() {

    let paused = false;
    let finished = false;
    let trackedIndex = 0;
    const items = writable([]);


    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function next() {
        items.update((current) => {
            trackedIndex++;
            return [...current, input[current.length]];
        });
    }


    async function play() {
        while ($items.length < input.length) {
            if (!input[trackedIndex]) return;
            if (paused || finished) break;
            await delay(input[trackedIndex].delay);
            next();
        }
        if ($items.length === input.length) {
            if (onComplete) onComplete();
            finished = true;
        }
    }

    function pause() {
        if (finished) return;
        trackedIndex = trackedIndex - 1;
        items.set(input.slice(0, trackedIndex));

        paused = true;
    }

    function resume() {
        if (!paused) return;
        paused = false;
        play();
    }

    function skip() {
        finished = true;
        items.set(input);
    }

    function pauseOrResume() {
        if (paused) return resume()
        return pause();
    }

    return {
        subscribe: items.subscribe,
        next,
        play,
        skip,
        paused,
        finished,
        pauseOrResume,
    }

}

const TrailStore = derived(items, $items =>  createTrail($items))

export default TrailStore
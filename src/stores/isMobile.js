import { writable } from 'svelte/store';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import { onMount } from 'svelte';
// Resolve the full configuration, merging the default Tailwind config with your custom config
const fullConfig = resolveConfig(tailwindConfig);

// Extract the breakpoints from the resolved config
const breakpoints = fullConfig.theme.screens;

// Function to convert breakpoint strings (like '640px') to numbers
function getBreakpointValue(breakpoint) {
  return parseInt(breakpoint.replace('px', ''));
}

// Get the value for the 'sm' breakpoint (or any other breakpoints you need)
const mdBreakpoint = getBreakpointValue(breakpoints.md);

// Create a writable store to track if the viewport is mobile
export const isMobile = writable(false);

function checkIfMobile() {
  if (typeof window !== 'undefined') {
    isMobile.set(window.innerWidth < mdBreakpoint); // Example breakpoint for mobile view (640px)
  }
}

// Initialize the store in `onMount`
export function initializeMobileCheck() {
  onMount(() => {
    // Initial check
    checkIfMobile();

    // Add resize listener to update the store on window resize
    const resizeListener = () => checkIfMobile();
    window.addEventListener('resize', resizeListener);

    // Cleanup listener when the component is destroyed
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });
}
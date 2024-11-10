import { onMount } from 'svelte';

export function focusTrap(node, isOpen) {
  let focusableElements = [];
  let firstFocusableElement, lastFocusableElement;

  function updateFocusableElements() {
    focusableElements = Array.from(
      node.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

    console.log({focusableElements})
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];
  }

  function trapFocus(event) {
    if (focusableElements.length === 0) return;

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  }

  function activateFocusTrap() {
    updateFocusableElements();
    document.addEventListener('keydown', trapFocus);
  }

  function deactivateFocusTrap() {
    document.removeEventListener('keydown', trapFocus);
  }

  function handleFocusTrap(isOpen) {
    if (isOpen) {
      console.log("activating focus trap")
      activateFocusTrap();
    } else {
      console.log("DEactivating focus trap")
      deactivateFocusTrap();
    }
  }

  onMount(() => {
    handleFocusTrap(isOpen);

    return () => {
      deactivateFocusTrap();
    };
  });

  return {
    update(newIsOpen) {
      handleFocusTrap(newIsOpen);
    }
  };
}
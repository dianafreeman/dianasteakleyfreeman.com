const FOCUSABLE_ELEMENTS =
  'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/*
 * @param focusableElements = an array of selectors
 * returns a function that can be bound to an event
 */
function createTrapFocus(menuOpenStore) {
  return function (e, element) {
    let conditionBool;

    menuOpenStore.subscribe((v) => {
      conditionBool = v;
    });
    let focusableContent = element.querySelectorAll(FOCUSABLE_ELEMENTS);
    // get first element to be focused inside trap
    let firstFocusableElement = focusableContent[0];

    // get last element to be focused inside trap
    let lastFocusableElement = focusableContent[focusableContent.length - 1];
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    let isEscPressed = e.key === "Escape" || e.keyCode === 27;

    if (isEscPressed) {
      return menuOpenStore.set(false);
    }
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        // lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (conditionBool && document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  };
}

export default createTrapFocus;

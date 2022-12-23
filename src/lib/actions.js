const FOCUSABLE_ELEMENTS =
  'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * @url https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
 * @param {*} node 
 * @param {*} events { onEscPressed }
 * @returns 
 */
export function trapFocus(node, events = {}) {
  let focusableContent = node.querySelectorAll(FOCUSABLE_ELEMENTS);

  // get first element to be focused inside trap
  let firstFocusableElement = focusableContent[0];

  // get last element to be focused inside trap
  let lastFocusableElement = focusableContent[focusableContent.length - 1];

  function onKeyDown(e) {
    // set key conditions
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    let isEscPressed = e.key === "Escape" || e.keyCode === 27;

    if (isEscPressed) {
      if (events.onEscPressed) return events.onEscPressed()
      return;
    }
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  }

  node.addEventListener("keydown", onKeyDown, true);

	return {
    update(newEvents){
      events = newEvents
    },
		destroy() {
			node.removeEventListener("keydown", onKeyDown, true);
		},
	};
}


export function lazyImage(
	node,
	{ root = null, rootMargin = '0px 0px 0px 0px', threshold = 0.0} = {},
) {
	node.classList.add("blur")
	if (window && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						node.classList.add("blur-out")
						node.classList.remove("blur")
						const image = entry.target;

						if (image.dataset.src) {
							image.src = image.dataset.src;
						}

						if (image.dataset.srcset) {
							image.srcset = image.dataset.srcset;
						}

						observer.unobserve(image);
					}
				});
			},
			{
				root,
				rootMargin,
				threshold,
			},
		);
		observer.observe(node);

		return {
			destroy() {
				if (observer) {
					observer.unobserve(node);
				}
			},
		};
	}
}
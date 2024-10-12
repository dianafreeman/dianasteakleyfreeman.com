
export function lazyImage(
  node,
  { root = null, rootMargin = "0px 0px 0px 0px", threshold = 0.0 } = {}
) {
  node.classList.add("blur");
  if (window && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("blur-out");
            node.classList.remove("blur");
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
        threshold
      }
    );
    observer.observe(node);

    return {
      destroy() {
        if (observer) {
          observer.unobserve(node);
        }
      }
    };
  }
}
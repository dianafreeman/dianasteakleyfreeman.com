let options = { root: null, rootMargin: '0px', threshold: 0.0 };

export const lazyImage = (image, {size}) => {
	console.log(size)
	const loaded = () => {
		image.classList.add('visible');
		const newSize = image.src.replace("THUMB", size)
		console.log({ newSize })
		// image.src = image.src.replace("THUMB", size)
	};

	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			console.log('an image has loaded'); 
			image.classList.add("blur-out grayscale");
			image.classList.remove("blur");
			image.src = image.src.replace("THUMB", size); // replace placeholder src with the image src on observe
			if (image.complete) {
				// check if instantly loaded
				loaded();
			} else {
				image.addEventListener('load', loaded); // if the image isn't loaded yet, add an event listener
			}
		}
	}, options);
	observer.observe(image); // intersection observer

	return {
		destroy() {
			image.removeEventListener('load', loaded); // clean up the event listener
		}
	};
};


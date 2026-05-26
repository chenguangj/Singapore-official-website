export function getImageUrl(name) {
	return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}

export function getVideoUrl(name) {
	return new URL(`/src/mp4/${name}.mp4`, import.meta.url).href;
}

export function getElementToTopDistance(element) {
	const rect = element.getBoundingClientRect();
	return rect.top + (window.scrollY || document.documentElement.scrollTop);
}
export function isInViewport(element) {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const clientHeight = window.innerHeight || document.documentElement.clientHeight;
	const viewportBottomToTop = scrollTop + clientHeight;
	const distance = getElementToTopDistance(element);
	return viewportBottomToTop - 100 >= distance;
}
export function handleScroll() {
	const items = document.querySelectorAll('.fade-in-item');
	items.forEach((item) => {
		if (isInViewport(item) && !item.classList.contains('visible')) {
			item.classList.add('visible');
		}
	});
}

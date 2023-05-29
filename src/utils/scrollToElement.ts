export const scrolltoElement = (elementId: string) => {
	const element = document.getElementById(elementId);
	const header = document.getElementById('header');
	let elementPosition;

	if (element && element.offsetTop && header) {
		elementPosition = element.offsetTop - header.offsetHeight;
	}
	window.scrollTo({ top: elementPosition, behavior: 'smooth' });
};

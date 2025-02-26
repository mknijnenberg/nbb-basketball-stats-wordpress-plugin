import Slide from "./slide";
import SlideImage from "./slide/image";
import SlideContent from "./slide/content";
import ActionButton from "./action/button";
import ActionMobile from "./action/mobile";

const slidesGenerator = (selector) => {
	const slides = [];
	const actionButtons = [];

	const [...images] = selector.querySelectorAll('[data-hero="image"]');
	const [...content] = selector.querySelectorAll('[data-hero="content"]');
	const [...buttons] = selector.querySelectorAll('[data-hero="button"]');
	const [...mobileButtons] = selector.querySelectorAll('[data-hero="mobile"]');

	images.forEach((image) => {
		const id = parseInt(image.dataset.id);

		const imageClass = new SlideImage(id, image);
		const contentLayer = content.find(
			(content) => parseInt(content.dataset.id) === id,
		);
		const contentClass = new SlideContent(id, contentLayer);
		slides.push(new Slide(id, imageClass, contentClass));

		const actionButton = buttons.find(
			(button) => parseInt(button.dataset.id) === id,
		);
		actionButtons.push(new ActionButton(id, actionButton));

		const mobileButton = mobileButtons.find(
			(button) => parseInt(button.dataset.id) === id,
		);
		actionButtons.push(new ActionMobile(id, mobileButton));
	});

	return {
		slides,
		actionButtons,
	};
};

export default slidesGenerator;

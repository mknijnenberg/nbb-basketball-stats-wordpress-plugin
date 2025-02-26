import Slide from "./slide";

class Slider {
	constructor(slides, delay) {
		this.slides = slides;
		this.delay = delay;

		this.animationPossible = this.slides.length > 1;

		if (!this.slides.length) {
			console.error("No slides found");
		}

		this.mediator = null;
		this._timeoutHandler = null;
		this.currentSlideId = null;
	}

	assignMediator(mediator) {
		this.mediator = mediator;
	}

	getSlideById(id) {
		return this.slides.find((slide) => slide.id === id);
	}

	hasNextSlide() {
		const currentIndex = this.slides.indexOf(this.currentSlide);

		return currentIndex < this.slides.length - 1;
	}

	getFirstSlideId() {
		return this.slides[0].id;
	}

	getNextSlideId() {
		const currentIndex = this.slides.indexOf(this.currentSlide);

		return this.slides[currentIndex + 1].id;
	}

	nextSlide(id) {
		this.slides.forEach((slide) => {
			if (slide instanceof Slide) {
				slide.hide();
			}
		});

		if (!id) {
			id = this.hasNextSlide() ? this.getNextSlideId() : this.getFirstSlideId();
		}

		this.currentSlide = this.getSlideById(id);
		this.currentSlide.show();

		this.mediator.updateSlide(id);
	}

	stopSlideAnimation() {
		window.clearInterval(this._timeoutHandler);
		this._timeoutHandler = null;
	}

	startSlideAnimation() {
		if (!this.animationPossible) {
			return;
		}

		this._timeoutHandler = window.setInterval(() => {
			console.log("_timeoutHandler");
			this.nextSlide();
		}, this.delay);
	}
}

export default Slider;

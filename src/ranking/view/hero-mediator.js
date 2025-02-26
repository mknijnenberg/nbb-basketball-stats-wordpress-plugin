class HeroMediator {
	constructor(slider, actionButtons, styles) {
		this.slider = slider;
		this.actionButtons = actionButtons;

		this.assignContext();
	}

	assignContext() {
		this.actionButtons.forEach((actionButton) => {
			actionButton.assignMediator(this);
		});

		this.slider.assignMediator(this);
	}

	nextSlide(id) {
		console.log("id: ", id);
	}

	startSlides() {
		this.slider.nextSlide(this.slider.getFirstSlideId());
	}

	updateSlide(id) {
		console.log("updateSlide: ", id);
		this.slider.stopSlideAnimation();
		this.actionButtons.forEach((actionButton) => {
			actionButton.update(id);
		});
		this.slider.startSlideAnimation();
	}

	trigger(id) {
		this.slider.nextSlide(id);
	}
}

export default HeroMediator;

// freeze animation on mouseover.

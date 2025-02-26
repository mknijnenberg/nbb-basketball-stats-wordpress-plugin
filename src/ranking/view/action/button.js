class ActionMobile {
	constructor(id, button) {
		this.id = id;
		this.button = button;

		this.mediator = null;

		this.animations = [
			"hero__slides-animation",
			"hero__slides-animation--loader",
		];

		this.activeClass = "hero__slides-button--active";

		this.setEventListener();
	}

	assignMediator(mediator) {
		this.mediator = mediator;
	}

	hideLoader() {
		this.button.classList.remove(this.activeClass);

		const loader = this.button.querySelector(".hero__slides-loader");

		if (!loader) {
			return;
		}

		loader.classList.remove(...this.animations);
	}

	showLoader() {
		this.button.classList.add(this.activeClass);

		const loader = this.button.querySelector(".hero__slides-loader");

		loader.classList.add(...this.animations);
	}

	update(id) {
		this.id === id ? this.showLoader() : this.hideLoader();
	}

	setEventListener() {
		this.button.addEventListener(
			"click",
			(event) => {
				event.preventDefault();

				this.send(parseInt(event.currentTarget.dataset.id));
			},
			true,
		);
	}

	send(id) {
		this.mediator.trigger(id);
	}
}

export default ActionMobile;

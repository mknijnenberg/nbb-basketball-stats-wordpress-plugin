class ActionMobile {
	constructor(id, button) {
		this.id = id;
		this.button = button;

		this.mediator = null;

		this.activeClass = "hero__mobile-text--active";

		this.setEventListener();
	}

	assignMediator(mediator) {
		this.mediator = mediator;
	}

	hide() {
		this.button.classList.remove(this.activeClass);
	}

	show() {
		this.button.classList.add(this.activeClass);
	}

	update(id) {
		this.id === id ? this.show() : this.hide();
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
		this.mediator.send(this, id);
	}
}

export default ActionMobile;

export class RecordAnimation {
	constructor(wrapper, selector) {
		this.wrapper = wrapper;
		this.records = this.wrapper.querySelectorAll(`.${selector}`);
		this.init();
	}

	init() {
		this.animateRecords();
	}

	animateRecords() {
		this.records.forEach((record) => {
			record.addEventListener('mouseenter', () => {
				this.removeActiveClasses();
				this.setActiveClass(record);
			});

			record.addEventListener('mouseleave', () => {
				this.removeActiveClasses();
			});
		});
	}

	removeActiveClasses() {
		this.records.forEach((record) => {
			record.classList.remove('hero__record--active');
		});
	}

	setActiveClass(record) {
		record.classList.add('hero__record--active');
	}
}

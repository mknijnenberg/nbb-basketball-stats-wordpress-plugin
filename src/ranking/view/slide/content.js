class SlideContent {
	constructor(id, content) {
		this.id = id;
		this.content = content;
	}

	show() {
		this.content.classList.add("hero__content-layer--active");
		this.content.style.opacity = 1;
	}

	hide() {
		this.content.classList.remove("hero__content-layer--active");
		this.content.style.opacity = 0;
	}
}

export default SlideContent;

class SlideImage {
	constructor(id, image) {
		this.id = id;
		this.image = image;
	}

	show() {
		this.image.classList.add("hero__image-animation");
		this.image.style.opacity = 1;
	}

	hide() {
		this.image.classList.remove("hero__image-animation");
		this.image.style.opacity = 0;
	}
}

export default SlideImage;

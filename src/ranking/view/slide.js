class Slide {
	constructor(id, image, contentLayer) {
		this.id = id;
		this.image = image;
		this.contentLayer = contentLayer;
	}

	show() {
		this.image.show();
		this.contentLayer.show();
	}

	hide() {
		this.image.hide();
		this.contentLayer.hide();
	}
}

export default Slide;

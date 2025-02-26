class Styles {
	constructor(selector) {
		this.selector = selector;
	}

	hasBackgroundClass() {
		return this.selector.classList.contains("has-background");
	}

	replaceBackgroundWithSelectedFromBlock() {
		const styles = getComputedStyle(this.selector, null);
		const backgroundStyle = styles.getPropertyValue("background-color");

		selector.style.setProperty(
			"--wp-block-hero-sticky-highlights-background",
			backgroundStyle,
		);
	}

	hasTextColorClass() {
		return this.selector.classList.contains("has-text-color");
	}

	replaceTextColorWithSelectedFromBlock() {
		const styles = getComputedStyle(this.selector, null);
		const colorStyle = styles.getPropertyValue("color");

		selector.style.setProperty(
			"--wp-block-hero-sticky-highlights-text",
			colorStyle,
		);
	}

	update() {
		if (this.hasBackgroundClass()) {
			this.replaceBackgroundWithSelectedFromBlock();
		}

		if (this.hasTextColorClass()) {
			this.replaceTextColorWithSelectedFromBlock();
		}
	}
}

export default Styles;

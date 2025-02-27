/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import HeroMediator from "./view/hero-mediator";
import Slider from "./view/slider";
import slidesGenerator from "./view/slides-generator";

const heroBlocks = document.querySelectorAll(
	".wp-block-nbb-basketball-stats-hero-sticky-highlights",
);

heroBlocks.forEach((heroBlock) => {
	const delay = Number(heroBlock.dataset.heroDelay);

	const { slides, actionButtons } = slidesGenerator(heroBlock);

	const slider = new Slider(slides, delay);

	const hero = new HeroMediator(slider, actionButtons);

	hero.startSlides();
});

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ranking/view/action/button.js":
/*!*******************************************!*\
  !*** ./src/ranking/view/action/button.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ActionMobile {
  constructor(id, button) {
    this.id = id;
    this.button = button;
    this.mediator = null;
    this.animations = ["hero__slides-animation", "hero__slides-animation--loader"];
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
    this.button.addEventListener("click", event => {
      event.preventDefault();
      this.send(parseInt(event.currentTarget.dataset.id));
    }, true);
  }
  send(id) {
    this.mediator.trigger(id);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMobile);

/***/ }),

/***/ "./src/ranking/view/action/mobile.js":
/*!*******************************************!*\
  !*** ./src/ranking/view/action/mobile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    this.button.addEventListener("click", event => {
      event.preventDefault();
      this.send(parseInt(event.currentTarget.dataset.id));
    }, true);
  }
  send(id) {
    this.mediator.send(this, id);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMobile);

/***/ }),

/***/ "./src/ranking/view/hero-mediator.js":
/*!*******************************************!*\
  !*** ./src/ranking/view/hero-mediator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HeroMediator {
  constructor(slider, actionButtons, styles) {
    this.slider = slider;
    this.actionButtons = actionButtons;
    this.assignContext();
  }
  assignContext() {
    this.actionButtons.forEach(actionButton => {
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
    this.actionButtons.forEach(actionButton => {
      actionButton.update(id);
    });
    this.slider.startSlideAnimation();
  }
  trigger(id) {
    this.slider.nextSlide(id);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroMediator);

// freeze animation on mouseover.

/***/ }),

/***/ "./src/ranking/view/slide.js":
/*!***********************************!*\
  !*** ./src/ranking/view/slide.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide);

/***/ }),

/***/ "./src/ranking/view/slide/content.js":
/*!*******************************************!*\
  !*** ./src/ranking/view/slide/content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideContent);

/***/ }),

/***/ "./src/ranking/view/slide/image.js":
/*!*****************************************!*\
  !*** ./src/ranking/view/slide/image.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideImage);

/***/ }),

/***/ "./src/ranking/view/slider.js":
/*!************************************!*\
  !*** ./src/ranking/view/slider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/ranking/view/slide.js");

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
    return this.slides.find(slide => slide.id === id);
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
    this.slides.forEach(slide => {
      if (slide instanceof _slide__WEBPACK_IMPORTED_MODULE_0__["default"]) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/ranking/view/slides-generator.js":
/*!**********************************************!*\
  !*** ./src/ranking/view/slides-generator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/ranking/view/slide.js");
/* harmony import */ var _slide_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide/image */ "./src/ranking/view/slide/image.js");
/* harmony import */ var _slide_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide/content */ "./src/ranking/view/slide/content.js");
/* harmony import */ var _action_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/button */ "./src/ranking/view/action/button.js");
/* harmony import */ var _action_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/mobile */ "./src/ranking/view/action/mobile.js");





const slidesGenerator = selector => {
  const slides = [];
  const actionButtons = [];
  const [...images] = selector.querySelectorAll('[data-hero="image"]');
  const [...content] = selector.querySelectorAll('[data-hero="content"]');
  const [...buttons] = selector.querySelectorAll('[data-hero="button"]');
  const [...mobileButtons] = selector.querySelectorAll('[data-hero="mobile"]');
  images.forEach(image => {
    const id = parseInt(image.dataset.id);
    const imageClass = new _slide_image__WEBPACK_IMPORTED_MODULE_1__["default"](id, image);
    const contentLayer = content.find(content => parseInt(content.dataset.id) === id);
    const contentClass = new _slide_content__WEBPACK_IMPORTED_MODULE_2__["default"](id, contentLayer);
    slides.push(new _slide__WEBPACK_IMPORTED_MODULE_0__["default"](id, imageClass, contentClass));
    const actionButton = buttons.find(button => parseInt(button.dataset.id) === id);
    actionButtons.push(new _action_button__WEBPACK_IMPORTED_MODULE_3__["default"](id, actionButton));
    const mobileButton = mobileButtons.find(button => parseInt(button.dataset.id) === id);
    actionButtons.push(new _action_mobile__WEBPACK_IMPORTED_MODULE_4__["default"](id, mobileButton));
  });
  return {
    slides,
    actionButtons
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidesGenerator);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/ranking/view.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_hero_mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/hero-mediator */ "./src/ranking/view/hero-mediator.js");
/* harmony import */ var _view_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/slider */ "./src/ranking/view/slider.js");
/* harmony import */ var _view_slides_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/slides-generator */ "./src/ranking/view/slides-generator.js");
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




const heroBlocks = document.querySelectorAll(".wp-block-akrides-blocks-hero-sticky-highlights");
heroBlocks.forEach(heroBlock => {
  const delay = Number(heroBlock.dataset.heroDelay);
  const {
    slides,
    actionButtons
  } = (0,_view_slides_generator__WEBPACK_IMPORTED_MODULE_2__["default"])(heroBlock);
  const slider = new _view_slider__WEBPACK_IMPORTED_MODULE_1__["default"](slides, delay);
  const hero = new _view_hero_mediator__WEBPACK_IMPORTED_MODULE_0__["default"](slider, actionButtons);
  hero.startSlides();
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map
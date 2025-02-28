/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ranking/edit.js":
/*!*****************************!*\
  !*** ./src/ranking/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/ranking/editor.scss");
/* harmony import */ var _services_getClub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/getClub */ "./src/services/getClub.js");
/* harmony import */ var _services_getTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/getTeam */ "./src/services/getTeam.js");
/* harmony import */ var _services_getStandings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/getStandings */ "./src/services/getStandings.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */



/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const [clubs, setClubs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [standings, setStandings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const getClubs = async () => {
    const response = await (0,_services_getClub__WEBPACK_IMPORTED_MODULE_5__.getClub)();
    const clubs = response.clubs.map(club => {
      return {
        label: club.naam,
        value: club.id
      };
    });
    const defaultValue = {
      label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Club', 'nbb-basketball-stats')}`,
      value: 0
    };
    setClubs([defaultValue, ...clubs]);
  };
  const setTeamsByClubId = async clubId => {
    if (!clubId) return;
    const response = await (0,_services_getTeam__WEBPACK_IMPORTED_MODULE_6__.getTeam)(clubId);
    setTeams(response);
  };
  const getStandings = async competitionId => {
    const response = await (0,_services_getStandings__WEBPACK_IMPORTED_MODULE_7__.getStandingsByCompId)(competitionId);
    setStandings(response);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getClubs();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.selectedClubId) return;
    setStandings([]);
    setTeams([]);
    setTeamsByClubId(attributes.selectedClubId);
  }, [attributes.selectedClubId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.selectedTeamId) return;
    const team = teams.find(team => team.id === attributes.selectedTeamId);
    if (team) {
      getStandings(team.comp_id);
    }
  }, [attributes.selectedTeamId, teams]);
  const StandingsTable = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ranking__table-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "ranking__table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
      className: "ranking__table-header-group"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Positie"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Team"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Gespeeld"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Punten"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Percentage"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Saldo"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Eigen Score"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Tegen Score"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "ranking__table-header"
    }, "Datum"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, standings.map(team => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: team.positie,
      className: "border-b text-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.positie), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.team), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.gespeeld), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.punten), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.percentage), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.saldo), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.eigenscore), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.tegenscore), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "ranking__table-column"
    }, team.datum))))));
  };
  const renderTeamsSelectControl = () => {
    const selectControlTeams = teams.map(team => {
      return {
        disabled: false,
        label: team.naam,
        value: team.id
      };
    });
    const defaultValue = {
      disabled: false,
      label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Team', 'nbb-basketball-stats')}`,
      value: undefined
    };
    return [defaultValue, ...selectControlTeams];
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Standen Configuratie", "nbb-basketball-stats"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the club which needs to displayed", "nbb-basketball-stats"),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Club", "nbb-basketball-stats"),
    value: attributes.selectedClubId,
    options: clubs.map(({
      disabled,
      label,
      value
    }) => ({
      label: label,
      value: value,
      disabled: disabled
    })),
    onChange: value => {
      setAttributes({
        selectedClubId: parseInt(value)
      });
    },
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select the team based on the club which needs to displayed", "nbb-basketball-stats"),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team", "nbb-basketball-stats"),
    value: attributes.selectedTeamId,
    options: attributes.selectedClubId > 0 ? renderTeamsSelectControl() : [{
      label: 'Select a Club first!',
      value: undefined
    }],
    onChange: value => setAttributes({
      selectedTeamId: parseInt(value)
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ranking__container"
  }, standings.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StandingsTable, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No data available", "nbb-basketball-stats"))));
}

/***/ }),

/***/ "./src/ranking/index.js":
/*!******************************!*\
  !*** ./src/ranking/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/ranking/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/ranking/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/ranking/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/services/getClub.js":
/*!*********************************!*\
  !*** ./src/services/getClub.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClub: () => (/* binding */ getClub)
/* harmony export */ });
/* harmony import */ var _example_json_club_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../example-json/club.json */ "./example-json/club.json");


/**
 * Get club data
 * @return {Promise} Club data
 */
function getClub() {
  return Promise.resolve(_example_json_club_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ }),

/***/ "./src/services/getStandings.js":
/*!**************************************!*\
  !*** ./src/services/getStandings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStandingsByCompId: () => (/* binding */ getStandingsByCompId)
/* harmony export */ });
/* harmony import */ var _example_json_stand_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../example-json/stand.json */ "./example-json/stand.json");


/**
 * Get club data
 * @return {Promise} Club data
 */
function getStandingsByCompId(compId) {
  if (parseInt(_example_json_stand_json__WEBPACK_IMPORTED_MODULE_0__.id) !== compId) {
    return Promise.resolve([]);
  }
  return Promise.resolve(_example_json_stand_json__WEBPACK_IMPORTED_MODULE_0__.stand);
}

/***/ }),

/***/ "./src/services/getTeam.js":
/*!*********************************!*\
  !*** ./src/services/getTeam.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeam: () => (/* binding */ getTeam)
/* harmony export */ });
/* harmony import */ var _example_json_team_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../example-json/team.json */ "./example-json/team.json");


/**
 * Get club data
 * @return {Promise} Club data
 */
function getTeam(clubId) {
  const teams = _example_json_team_json__WEBPACK_IMPORTED_MODULE_0__.teams.filter(team => team.club_id === parseInt(clubId));
  return Promise.resolve(teams);
}

/***/ }),

/***/ "./src/ranking/editor.scss":
/*!*********************************!*\
  !*** ./src/ranking/editor.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ranking/style.scss":
/*!********************************!*\
  !*** ./src/ranking/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./example-json/club.json":
/*!********************************!*\
  !*** ./example-json/club.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"clubs":[{"adres":"","alt":"","id":1067,"logo":"http://db.basketball.nl/img_db/clubs/1067.png","naam":"ABC Amigos","nr":"","org_id":2,"plaats":"Abcoude","postcode":"","shirt":"onbekend","sportlink":"D4P4C5D","vestpl":"","web":""},{"adres":"Prins Willem van Oranjestraat 51","alt":"ABC-basketball","id":209,"logo":"http://db.basketball.nl/img_db/clubs/209.png","naam":"ABC Basketball","nr":"1101","org_id":4,"plaats":"Sleeuwijk","postcode":"4254 DB","shirt":"Wit","sportlink":"D1C9H8Y","vestpl":"Wijk en Aalburg","web":"http://www.abcbasketball.nl/"},{"adres":"Tweevoren 7","alt":"Achilles \'71","id":210,"logo":"http://db.basketball.nl/img_db/clubs/210.png","naam":"Achilles \'71","nr":"1102","org_id":4,"plaats":"Nuenen","postcode":"5672 SB","shirt":"Zwart","sportlink":"D1C9H9Z","vestpl":"Nuenen","web":"http://achilles71.nl"},{"adres":"Postbus 111","alt":"Agathos","id":212,"logo":"http://db.basketball.nl/img_db/clubs/212.png","naam":"Agathos","nr":"1104","org_id":4,"plaats":"Geertruidenberg","postcode":"4930 AC","shirt":"Bordeauxrood","sportlink":"D1C9J1X","vestpl":"Geertruidenberg","web":"http://www.bcagathos.nl"},{"adres":"De Esdoorn 42","alt":"Akros","id":213,"logo":"http://db.basketball.nl/img_db/clubs/213.png","naam":"Akros","nr":"1105","org_id":4,"plaats":"Boxmeer","postcode":"5831 RC","shirt":"Wit","sportlink":"D1C9J2Y","vestpl":"Boxmeer","web":"http://www.akrosboxmeer.nl"},{"adres":"Biesboschstraat 136","alt":"Alkm.Guardians","id":367,"logo":"http://db.basketball.nl/img_db/clubs/367.png","naam":"Alkm.Guardians","nr":"4106","org_id":6,"plaats":"Alkmaar","postcode":"1823 WH","shirt":"Zwart","sportlink":"D1C8V2V","vestpl":"Alkmaar","web":"http://www.alkmaarguardians.nl"},{"adres":"Postbus 1219","alt":"Almere","id":34,"logo":"http://db.basketball.nl/img_db/clubs/34.png","naam":"Almere Pioneers","nr":"2101","org_id":2,"plaats":"Almere","postcode":"1300 BE","shirt":"Bordeaux","sportlink":"D1C9C3E","vestpl":"Almere","web":"http://www.almerepioneers.nl"},{"adres":"Weegschaalstraat 32","alt":"Almonte","id":491,"logo":"http://db.basketball.nl/img_db/clubs/491.png","naam":"Almonte","nr":"1209","org_id":4,"plaats":"Eindhoven","postcode":"5632 CX","shirt":"Rood","sportlink":"D1C9W47","vestpl":"Eindhoven","web":"http://www.almonte.nl"},{"adres":"Daalweg 50","alt":"Amical","id":125,"logo":"http://db.basketball.nl/img_db/clubs/125.png","naam":"Amical","nr":"3101","org_id":3,"plaats":"Enschede","postcode":"7541 AN","shirt":"Zwart/wit","sportlink":"D1C9W69","vestpl":"ENSCHEDE","web":"http://www.amical.nl"},{"adres":"Larixlaan 40","alt":"AMVJ-Amsterdam","id":370,"logo":"http://db.basketball.nl/img_db/clubs/370.png","naam":"AMVJ-Amsterdam","nr":"4110","org_id":6,"plaats":"Zwanenburg","postcode":"1161 SZ","shirt":"Bordeauxrood","sportlink":"D1C8V4X","vestpl":"Amsterdam","web":"http://www.amvj-basketball.nl"},{"adres":"Postbus 385","alt":"Aquila","id":315,"logo":"http://db.basketball.nl/img_db/clubs/315.png","naam":"Aquila","nr":"5100","org_id":5,"plaats":"Veendam","postcode":"9640 AJ","shirt":"Blauw","sportlink":"D1C9Y5E","vestpl":"Veendam","web":"http://www.bvaquila.nl"},{"adres":"Sleutelbloem 70","alt":"Archipel","id":35,"logo":"http://db.basketball.nl/img_db/clubs/35.png","naam":"Archipel","nr":"2103","org_id":2,"plaats":"Culemborg","postcode":"4102 VC","shirt":"Geel","sportlink":"D1C9C5G","vestpl":"Culemborg","web":"http://www.archipelbasketbal.nl"},{"adres":"Bisschop Ludgerstraat 40","alt":"Ardito","id":216,"logo":"http://db.basketball.nl/img_db/clubs/216.png","naam":"Ardito","nr":"1108","org_id":4,"plaats":"Zaltbommel","postcode":"5302 XM","shirt":"Wit","sportlink":"D1C9M0H","vestpl":"Zaltbommel","web":"http://bbcardito.nl"},{"adres":"Pallas Atheneplein 2","alt":"Arn. Eagles","id":127,"logo":"http://db.basketball.nl/img_db/clubs/127.png","naam":"Arnhem Eagles","nr":"3103","org_id":3,"plaats":"Arnhem","postcode":"6846 XA","shirt":"Blauw","sportlink":"D1C9W7A","vestpl":"Arnhem","web":"http://www.arnhemeagles.nl"},{"adres":"De van der Schuerenstr 7","alt":"Arta","id":129,"logo":"http://db.basketball.nl/img_db/clubs/129.png","naam":"Arta","nr":"3105","org_id":3,"plaats":"Steenwijk","postcode":"8331 BD","shirt":"Geel","sportlink":"D1C9W9C","vestpl":"Steenwijk","web":"http://www.bcarta.nl"},{"adres":"Wolgastraat 10","alt":"Assist","id":317,"logo":"http://db.basketball.nl/img_db/clubs/317.png","naam":"Assist","nr":"5102","org_id":5,"plaats":"Assen","postcode":"9406 RX","shirt":"Zwart","sportlink":"D1C9Y6F","vestpl":"Assen","web":"http://assist-assen.nl/"},{"adres":"Moerven 144","alt":"Houtman-Attacus","id":217,"logo":"http://db.basketball.nl/img_db/clubs/217.png","naam":"Attacus","nr":"1109","org_id":4,"plaats":"Veghel","postcode":"5464 PD","shirt":"Blauw","sportlink":"D1C9M18","vestpl":"Veghel","web":"http://www.attacus.nl"},{"adres":"Het Bakhuis 2","alt":"B.A.S.","id":132,"logo":"http://db.basketball.nl/img_db/clubs/132.png","naam":"B.A.S.","nr":"3109","org_id":3,"plaats":"Biddinghuizen","postcode":"8256 EA","shirt":"Rood","sportlink":"D1C9X28","vestpl":"Biddinghuizen","web":"http://www.basbasketball.nl"},{"adres":"Ganzepad 20","alt":"B.C. Virtus","id":304,"logo":"http://db.basketball.nl/img_db/clubs/304.png","naam":"B.C. Virtus","nr":"1196","org_id":4,"plaats":"Werkendam","postcode":"4251 VB","shirt":"Rood","sportlink":"D1C9V44","vestpl":"Werkendam","web":"http://www.bcvirtus.nl"},{"adres":"Postbus 1076","alt":"B.O.B.","id":49,"logo":"http://db.basketball.nl/img_db/clubs/49.png","naam":"B.O.B.","nr":"2113","org_id":2,"plaats":"Oud-beijerland","postcode":"3260 AB","shirt":"Blauw","sportlink":"D1C9D2G","vestpl":"Oud-Beijerland","web":"http://www.bob-basketball.nl"},{"adres":"Ceres 37","alt":"Lekdetec.nl","id":134,"logo":"http://db.basketball.nl/img_db/clubs/134.png","naam":"B.V. Batouwe","nr":"3111","org_id":3,"plaats":"Bemmel","postcode":"6681 PR","shirt":"Wit/rood","sportlink":"D1C9N9J","vestpl":"Bemmel","web":"https://batouwebasketball.nl/"},{"adres":"Koningin Wilhelminalaan 11","alt":"B.V. Isala","id":158,"logo":"http://db.basketball.nl/img_db/clubs/158.png","naam":"B.V. Isala","nr":"3140","org_id":3,"plaats":"Deventer","postcode":"7415 KP","shirt":"Blauw","sportlink":"D1C9Q5O","vestpl":"Deventer","web":"http://www.bvisala.nl"},{"adres":"Chopinlaan 51","alt":"B.Z. 72","id":10,"logo":"http://db.basketball.nl/img_db/clubs/10.png","naam":"B.Z. \'72","nr":"2120","org_id":2,"plaats":"Zeist","postcode":"3706 BJ","shirt":"Oranje","sportlink":"D1C9D9N","vestpl":"Zeist","web":"http://www.bz72.nl"},{"adres":"Doelen 7","alt":"Barons","id":252,"logo":"http://db.basketball.nl/img_db/clubs/252.png","naam":"Barons","nr":"1144","org_id":4,"plaats":"Breda","postcode":"4813 GP","shirt":"Rood","sportlink":"D1C9J86","vestpl":"Breda","web":"http://www.baronsbreda.nl"},{"adres":"Brederostraat 16","alt":"","id":908,"logo":"http://db.basketball.nl/img_db/clubs/908.png","naam":"Basketbal Academie Limburg","nr":"1217","org_id":4,"plaats":"Weert","postcode":"6006 MT","shirt":"onbekend","sportlink":"D1D0G34","vestpl":"Weert","web":"www.basketballacademielimburg.nl"},{"adres":"Staalmeesterspad 28","alt":"W.V.G.V.","id":447,"logo":"http://db.basketball.nl/img_db/clubs/447.png","naam":"Basketbal Club Weesp","nr":"4187","org_id":6,"plaats":"Weesp","postcode":"1383 CE","shirt":"Donker Blauw","sportlink":"D1D0G89","vestpl":"Weesp","web":"http://www.weespbasketbal.nl"},{"adres":"Molenstraat 6","alt":"","id":906,"logo":"http://db.basketball.nl/img_db/clubs/906.png","naam":"Basketball All Stars Epe","nr":"3194","org_id":3,"plaats":"Oene","postcode":"8167 LD","shirt":"geel/zwart","sportlink":"D1D0G12","vestpl":"EPE","web":"http://www.bas-e.nl"},{"adres":"\'t Stegeslag 61","alt":"Basketiers \'71","id":133,"logo":"http://db.basketball.nl/img_db/clubs/133.png","naam":"Basketiers \'71","nr":"3110","org_id":3,"plaats":"Zevenaar","postcode":"6903 XT","shirt":"Blauw","sportlink":"D1C9N8I","vestpl":"Zevenaar","web":"http://www.basketiers.nl"},{"adres":"Architect Aartsplein 16 a","alt":"BBF MIGLIORE","id":219,"logo":"http://db.basketball.nl/img_db/clubs/219.png","naam":"BBF MIGLIORE","nr":"1111","org_id":4,"plaats":"Rijen","postcode":"5121 XZ","shirt":"Geel","sportlink":"D1C9M3A","vestpl":"Rijen","web":"http://www.bbf-migliore.nl"},{"adres":"Dijksgracht 9 A","alt":"","id":531,"logo":"http://db.basketball.nl/img_db/clubs/531.png","naam":"BC APOLLO Amsterdam","nr":"4204","org_id":6,"plaats":"Amsterdam","postcode":"1019 BT","shirt":"Wit","sportlink":"D1D0C2P","vestpl":"Amsterdam","web":"http://www.bcapollo.nl/"},{"adres":"Gagelplein 7","alt":"Bladel","id":221,"logo":"http://db.basketball.nl/img_db/clubs/221.png","naam":"BC Bladel","nr":"1113","org_id":4,"plaats":"Bladel","postcode":"5531 CN","shirt":"Blauw","sportlink":"D1C9M5C","vestpl":"Bladel","web":"http://www.bcbladel.nl"},{"adres":"Rooseveltstraat 4","alt":"BC Bumpers","id":228,"logo":"http://db.basketball.nl/img_db/clubs/228.png","naam":"BC Bumpers","nr":"1120","org_id":4,"plaats":"Schimmert","postcode":"6333 EC","shirt":"Zwart","sportlink":"D1C9N0K","vestpl":"Sittard","web":"http://www.bcbumpers.nl"},{"adres":"Merlenbergseweg 25","alt":"B.C.Deurne Pioniers","id":233,"logo":"http://db.basketball.nl/img_db/clubs/233.png","naam":"BC Deurne Pioniers","nr":"1125","org_id":4,"plaats":"Deurne","postcode":"5754 AW","shirt":"Zwart","sportlink":"D1C9N4E","vestpl":"Deurne","web":"http://www.deurnepioniers.nl"},{"adres":"Cotentinlaan 31","alt":"BC EINDHOVEN","id":239,"logo":"http://db.basketball.nl/img_db/clubs/239.png","naam":"BC EINDHOVEN","nr":"1131","org_id":4,"plaats":"Eindhoven","postcode":"5627 NV","shirt":"Zwart","sportlink":"D1C9N7H","vestpl":"EINDHOVEN","web":"http://www.bc-eindhoven.nl/"},{"adres":"Wagenaarstraat 6 hs","alt":"","id":917,"logo":"http://db.basketball.nl/img_db/clubs/917.png","naam":"BC Flying Oost","nr":"4209","org_id":6,"plaats":"Amsterdam","postcode":"1093 CP","shirt":"Rood","sportlink":"D1D0G78","vestpl":"Amsterdam","web":"http://flyingoost.wix.com/flyingoost"},{"adres":"Renooiplein 8","alt":"","id":933,"logo":"http://db.basketball.nl/img_db/clubs/933.png","naam":"BC Gaasperdam Warriors","nr":"4210","org_id":6,"plaats":"Amsterdam","postcode":"1107 EA","shirt":"Geel","sportlink":"D1D0G9A","vestpl":"Amsterdam Zuidoost","web":"http://www.amsterdamwarriors.nl"},{"adres":"De Burght 239","alt":"BC Heeze","id":253,"logo":"http://db.basketball.nl/img_db/clubs/253.png","naam":"BC Heeze","nr":"1145","org_id":4,"plaats":"Geldrop","postcode":"5664 PZ","shirt":"Groen","sportlink":"D1C9J97","vestpl":"Heeze","web":"http://www.bcheeze.nl/"},{"adres":"Margrietstraat 25","alt":"BC Kimbria","id":265,"logo":"http://db.basketball.nl/img_db/clubs/265.png","naam":"BC Kimbria","nr":"1157","org_id":4,"plaats":"Cadier en keer","postcode":"6267 BR","shirt":"Wit","sportlink":"D1C9K9A","vestpl":"Maastricht","web":"http://www.kimbria.nl"},{"adres":"Villa Waterviolier 23","alt":"","id":910,"logo":"http://db.basketball.nl/img_db/clubs/910.png","naam":"BC Langstraat Shooters","nr":"1218","org_id":4,"plaats":"Waalwijk","postcode":"5146 AL","shirt":"Donker Blauw","sportlink":"D1D0G56","vestpl":"Waalwijk","web":"http://www.langstraatshooters.nl"},{"adres":"Gruithof 2","alt":"3-ES","id":268,"logo":"http://db.basketball.nl/img_db/clubs/268.png","naam":"BC LIESHOUT","nr":"1160","org_id":4,"plaats":"Lieshout","postcode":"5737 JV","shirt":"Oranje","sportlink":"D1C9L0E","vestpl":"Lieshout","web":"https://bclieshout.nl/"},{"adres":"","alt":"","id":1072,"logo":"","naam":"BC Ninane","nr":"","org_id":7,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Science Park 306","alt":"BC Schrobbelaar","id":431,"logo":"http://db.basketball.nl/img_db/clubs/431.png","naam":"BC Schrobbelaar","nr":"4171","org_id":6,"plaats":"Amsterdam","postcode":"1098 XH","shirt":"geel/zwart","sportlink":"D1C8T1O","vestpl":"Amsterdam","web":"http://www.bcschrobbelaar.nl"},{"adres":"Heemraadstraat 25","alt":"Shooters","id":19,"logo":"http://db.basketball.nl/img_db/clubs/19.png","naam":"BC Shooters","nr":"2187","org_id":2,"plaats":"Bunschoten-spakenburg","postcode":"3752 EM","shirt":"Blauw","sportlink":"D1C9B0I","vestpl":"Bunschoten","web":"http://www.bcshooters.nl"},{"adres":"Willem II-laan 3","alt":"","id":900,"logo":"http://db.basketball.nl/img_db/clubs/900.png","naam":"BC Titans","nr":"1216","org_id":4,"plaats":"Landgraaf","postcode":"6371 JA","shirt":"Groen","sportlink":"D1D0C5S","vestpl":"Kerkrade","web":"http://www.bctitans.nl"},{"adres":"Poelgeest 3","alt":"","id":909,"logo":"http://db.basketball.nl/img_db/clubs/909.png","naam":"BC Triple Threat","nr":"4208","org_id":6,"plaats":"Haarlem","postcode":"2036 HL","shirt":"Zwart","sportlink":"D1D0G45","vestpl":"Haarlem","web":"https://vereniging.triplethreat.nl"},{"adres":"Zwarte Woud 201","alt":"Cangeroes","id":5,"logo":"http://db.basketball.nl/img_db/clubs/5.png","naam":"BC Utrecht Cangeroes","nr":"2122","org_id":2,"plaats":"Utrecht","postcode":"3524 SG","shirt":"Zwart","sportlink":"D1C9F1L","vestpl":"Utrecht","web":"https://www.utrechtcangeroes.nl/"},{"adres":"Menno van Coehoorngracht 29","alt":"BC Vlissingen","id":306,"logo":"http://db.basketball.nl/img_db/clubs/306.png","naam":"BC Vlissingen","nr":"1198","org_id":4,"plaats":"Vlissingen","postcode":"4383 BS","shirt":"Wit","sportlink":"D1C9V66","vestpl":"Vlissingen","web":"http://www.bcvlissingen.nl"},{"adres":"Willem de Zwijgerlaan 10","alt":"BCE\'78","id":147,"logo":"http://db.basketball.nl/img_db/clubs/147.png","naam":"BCE\'78","nr":"3127","org_id":3,"plaats":"Ede gld","postcode":"6713 NT","shirt":"Blauw","sportlink":"D1C9P9P","vestpl":"Ede","web":"https://www.bce78.nl"},{"adres":"Oeverwal 5","alt":"Be Quick \'28","id":138,"logo":"http://db.basketball.nl/img_db/clubs/138.png","naam":"Be Quick \'28","nr":"3115","org_id":3,"plaats":"Kampen","postcode":"8266 JK","shirt":"Rood","sportlink":"D1C9P3J","vestpl":"Zwolle","web":"https://www.bequick.net"},{"adres":"J P Coenstraat 9","alt":"BeCeGe \'74","id":137,"logo":"http://db.basketball.nl/img_db/clubs/137.png","naam":"BeCeGe \'74","nr":"3114","org_id":3,"plaats":"Zevenaar","postcode":"6904 BA","shirt":"Geel","sportlink":"D1C9P2I","vestpl":"Doetinchem","web":"http://www.becege.nl"},{"adres":"Westerdijkshorn 25","alt":"Bedum Blues","id":319,"logo":"http://db.basketball.nl/img_db/clubs/319.png","naam":"Bedum Blues","nr":"5104","org_id":5,"plaats":"Bedum","postcode":"9781 TG","shirt":"Blauw","sportlink":"D1C9Y7G","vestpl":"Bedum","web":"http://www.bedumblues.nl"},{"adres":"","alt":"","id":1059,"logo":"","naam":"Belfius Mons-Hainaut","nr":"","org_id":7,"plaats":"Mons","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Karel Doormanlaan 42","alt":"Biks Shots","id":256,"logo":"http://db.basketball.nl/img_db/clubs/256.png","naam":"Biks Shots","nr":"1148","org_id":4,"plaats":"Oirschot","postcode":"5688 BR","shirt":"Zwart","sportlink":"D1C9K12","vestpl":"Hilvarenbeek","web":"http://www.biksshots.nl"},{"adres":"Vaanakker 7","alt":"","id":898,"logo":"http://db.basketball.nl/img_db/clubs/898.png","naam":"Black Shots","nr":"1215","org_id":4,"plaats":"Mierlo","postcode":"5731 JP","shirt":"Zwart","sportlink":"D1D0C4R","vestpl":"Helmond","web":"http://www.blackshots.nl"},{"adres":"Teldersweg 133","alt":"Black Stars","id":141,"logo":"http://db.basketball.nl/img_db/clubs/141.png","naam":"Black Stars","nr":"3118","org_id":3,"plaats":"Rhenen","postcode":"3911 PW","shirt":"Zwart","sportlink":"D1C9P4K","vestpl":"Rhenen","web":"http://www.blackstars.nl"},{"adres":"Gregoriusdonk 8","alt":"Blauw Wit","id":222,"logo":"http://db.basketball.nl/img_db/clubs/222.png","naam":"Blauw-Wit","nr":"1114","org_id":4,"plaats":"Roosendaal","postcode":"4707 VA","shirt":"Wit","sportlink":"D1C9M6D","vestpl":"Roosendaal","web":"http://www.blauw-wit.com"},{"adres":"Hoendersteeg 7","alt":"Blue Arrows","id":11,"logo":"http://db.basketball.nl/img_db/clubs/11.png","naam":"Blue Arrows","nr":"2109","org_id":2,"plaats":"Driebergen-rijsenburg","postcode":"3972 NA","shirt":"Blauw","sportlink":"D1C9D0O","vestpl":"Driebergen","web":"http://bluearrows.nl"},{"adres":"Ponddreef 13","alt":"Blue Drakes","id":37,"logo":"http://db.basketball.nl/img_db/clubs/37.png","naam":"Blue Drakes","nr":"2110","org_id":2,"plaats":"Woerden","postcode":"3446 XA","shirt":"Blauw","sportlink":"D1C9D1F","vestpl":"Woerden","web":"http://www.bluedrakes.nl"},{"adres":"Rietzangerweg 78","alt":"Blue Stars","id":379,"logo":"http://db.basketball.nl/img_db/clubs/379.png","naam":"Blue Stars","nr":"4119","org_id":6,"plaats":"Diemen","postcode":"1111 VN","shirt":"Wit","sportlink":"D1C8V94","vestpl":"Diemen","web":"http://bluestarsbasketbal.nl/"},{"adres":"Moerbeistraat 28","alt":"Waddinxveen Fl.","id":45,"logo":"http://db.basketball.nl/img_db/clubs/45.png","naam":"Bouncers Basketball","nr":"2204","org_id":2,"plaats":"Gouda","postcode":"2803 TC","shirt":"Wit","sportlink":"D1C9H02","vestpl":"Gouda","web":"http://www.bouncersbasketball.nl"},{"adres":"Vesting 17","alt":"Bourgondie","id":20,"logo":"","naam":"Bourgondie","nr":"2114","org_id":2,"plaats":"Wijk bij duurstede","postcode":"3961 LN","shirt":"Wit","sportlink":"D1C9D3H","vestpl":"Wijk bij Duurstede","web":"http://www.bvbourgondie.com/"},{"adres":"Koningsweg 85","alt":"Break Out \'88","id":449,"logo":"http://db.basketball.nl/img_db/clubs/449.png","naam":"Break Out \'88","nr":"4189","org_id":6,"plaats":"Hippolytushoef","postcode":"1777 JR","shirt":"Paars","sportlink":"D1C8T7U","vestpl":"Wieringen","web":"http://www.breakout88.com"},{"adres":"de Tjalk 16","alt":"Break Stars","id":38,"logo":"http://db.basketball.nl/img_db/clubs/38.png","naam":"Break Stars","nr":"2115","org_id":2,"plaats":"Baarn","postcode":"3742 GG","shirt":"Groen","sportlink":"D1C9D4I","vestpl":"Baarn","web":"http://www.breakstars.nl/"},{"adres":"","alt":"","id":1070,"logo":"http://db.basketball.nl/img_db/clubs/1070.png","naam":"BRESS","nr":"","org_id":4,"plaats":"Breda","postcode":"","shirt":"onbekend","sportlink":"D4W1H9W","vestpl":"Breda","web":""},{"adres":"","alt":"","id":1066,"logo":"","naam":"Brussels Basketball","nr":"","org_id":7,"plaats":"Brussel","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Louise Hardenbergsingel 3","alt":"BS Leiden","id":54,"logo":"http://db.basketball.nl/img_db/clubs/54.png","naam":"BS Leiden","nr":"2163","org_id":2,"plaats":"Leiden","postcode":"2331 BM","shirt":"Wit/Blauw","sportlink":"D1C8Y26","vestpl":"Leiden","web":"http://www.bsleiden.nl"},{"adres":"","alt":"","id":1071,"logo":"","naam":"BTER Financieel Typhoons\'23","nr":"","org_id":5,"plaats":"Hoogezand","postcode":"","shirt":"onbekend","sportlink":"D4V4T87","vestpl":"Hoogezand","web":"https://typhoons.nl/"},{"adres":"Stommeerweg 49","alt":"BV Aalsmeer","id":362,"logo":"http://db.basketball.nl/img_db/clubs/362.png","naam":"BV Aalsmeer","nr":"4101","org_id":6,"plaats":"Aalsmeer","postcode":"1431 ET","shirt":"Blauw","sportlink":"D1C8T9W","vestpl":"Aalsmeer","web":"http://www.bvaalsmeer.nl"},{"adres":"Kalkovenweg 174","alt":"BV Alphia","id":40,"logo":"http://db.basketball.nl/img_db/clubs/40.png","naam":"BV Alphia","nr":"2119","org_id":2,"plaats":"Alphen aan den rijn","postcode":"2401 LK","shirt":"Zwart/geel","sportlink":"D1C9D8M","vestpl":"Alphen a/d Rijn","web":"http://bvalphia.nl"},{"adres":"Chassestraat 90 1e","alt":"BV Amsterdam","id":369,"logo":"http://db.basketball.nl/img_db/clubs/369.png","naam":"BV Amsterdam","nr":"4109","org_id":6,"plaats":"Amsterdam","postcode":"1057 JK","shirt":"Licht Blauw","sportlink":"D1C8V3W","vestpl":"Amsterdam","web":"http://www.bvamsterdam.nl"},{"adres":"Woudweg 59","alt":"Rebound","id":461,"logo":"http://db.basketball.nl/img_db/clubs/461.png","naam":"BV Arrows","nr":"5137","org_id":5,"plaats":"Dokkum","postcode":"9101V","shirt":"Wit","sportlink":"D1C9Z2E","vestpl":"Dokkum","web":"http://www.bvarrows.nl"},{"adres":"","alt":"","id":1048,"logo":"http://db.basketball.nl/img_db/clubs/1048.png","naam":"BV Carnisse Sharks","nr":"","org_id":2,"plaats":"Barendrecht","postcode":"","shirt":"onbekend","sportlink":"D4H8L32","vestpl":"Barendrecht","web":"https://www.carnissesharks.nl/"},{"adres":"","alt":"","id":1155,"logo":"","naam":"BV Dribbling","nr":"","org_id":5,"plaats":"Leeuwarden","postcode":"","shirt":"onbekend","sportlink":"D5C5G3G","vestpl":"Leeuwarden","web":""},{"adres":"Rijksstraatweg 3","alt":"BV Dunk","id":321,"logo":"http://db.basketball.nl/img_db/clubs/321.png","naam":"BV Dunk","nr":"5106","org_id":5,"plaats":"Zuidhorn","postcode":"9801 AM","shirt":"Zwart/wit","sportlink":"D1C9Y8H","vestpl":"ZUIDHORN","web":"http://www.bvdunk.nl/"},{"adres":"Gebr. Conijnstraat 22","alt":"BV Early Bird","id":393,"logo":"http://db.basketball.nl/img_db/clubs/393.png","naam":"BV Early Bird","nr":"4133","org_id":6,"plaats":"Purmerend","postcode":"1444 HN","shirt":"Oranje","sportlink":"D1C8W64","vestpl":"Purmerend","web":"http://www.earlybird.nl"},{"adres":"Pannewal 31","alt":"BV Enkhuizen","id":395,"logo":"http://db.basketball.nl/img_db/clubs/395.png","naam":"BV Enkhuizen","nr":"4135","org_id":6,"plaats":"Enkhuizen","postcode":"1602 KR","shirt":"Rood","sportlink":"D1C8W75","vestpl":"Enkhuizen","web":"http://basketbal-enkhuizen.nl/"},{"adres":"Oranjesingel 12","alt":"BV Groningen","id":347,"logo":"http://db.basketball.nl/img_db/clubs/347.png","naam":"BV Groningen","nr":"5132","org_id":5,"plaats":"Groningen","postcode":"9717 CC","shirt":"Rood","sportlink":"D1D0F53","vestpl":"Groningen","web":"http://www.bvgroningen.net"},{"adres":"Torenburg 10","alt":"Hoofddorp","id":409,"logo":"http://db.basketball.nl/img_db/clubs/409.png","naam":"BV Hoofddorp","nr":"4149","org_id":6,"plaats":"Hoofddorp","postcode":"2135 BK","shirt":"Wit","sportlink":"D1C8R5M","vestpl":"Hoofddorp","web":"http://www.bvhoofddorp.nl"},{"adres":"Fromaborg 6","alt":"BV Jahn II","id":335,"logo":"http://db.basketball.nl/img_db/clubs/335.png","naam":"BV Jahn II","nr":"5120","org_id":5,"plaats":"Stadskanaal","postcode":"9502 VJ","shirt":"Blauw","sportlink":"D1D0D7X","vestpl":"Stadskanaal","web":"http://www.bvjahn2.nl/"},{"adres":"Atalantahof 66","alt":"BV Juventus","id":77,"logo":"http://db.basketball.nl/img_db/clubs/77.png","naam":"BV Juventus","nr":"2159","org_id":2,"plaats":"Schiedam","postcode":"3124 BC","shirt":"Blauw","sportlink":"D1C8X89","vestpl":"Schiedam","web":"https://www.sbv-juventus.nl"},{"adres":"Rotterdamseweg 32","alt":"BV Krimpen","id":113,"logo":"http://db.basketball.nl/img_db/clubs/113.png","naam":"BV Krimpen","nr":"2117","org_id":2,"plaats":"Krimpen aan den ijssel","postcode":"2921 AP","shirt":"Paars","sportlink":"D1C9D6K","vestpl":"Krimpen a/d IJssel","web":"http://www.bvkrimpen.nl"},{"adres":"Tiendweg 114","alt":"Leerdam","id":26,"logo":"http://db.basketball.nl/img_db/clubs/26.png","naam":"BV Leerdam","nr":"2162","org_id":2,"plaats":"Leerdam","postcode":"4142 EM","shirt":"Rood-geel","sportlink":"D1C8Y15","vestpl":"Leerdam","web":"http://www.bvleerdam.nl"},{"adres":"It Sinderlan 31","alt":"De Groene Ster","id":331,"logo":"http://db.basketball.nl/img_db/clubs/331.png","naam":"BV Leeuwarden","nr":"5116","org_id":5,"plaats":"Leeuwarden","postcode":"8927 AK","shirt":"Zwart","sportlink":"D1D0D3T","vestpl":"LEEUWARDEN","web":"http://www.bvleeuwarden.nl"},{"adres":"Mercurius 17","alt":"Leiderdorp","id":52,"logo":"http://db.basketball.nl/img_db/clubs/52.png","naam":"BV Leiderdorp","nr":"2118","org_id":2,"plaats":"Leiderdorp","postcode":"2353 WP","shirt":"Rood","sportlink":"D1C9D7L","vestpl":"Leiderdorp","web":"https://www.bv-leiderdorp.nl"},{"adres":"Sportlaan 21","alt":"BV Lisse","id":419,"logo":"http://db.basketball.nl/img_db/clubs/419.png","naam":"BV Lisse","nr":"4159","org_id":6,"plaats":"Lisse","postcode":"2161 VA","shirt":"Oranje","sportlink":"D1C8S2M","vestpl":"Lisse","web":"http://www.bvlisse.nl"},{"adres":"Oudewerfslaan 58","alt":"BV Millwings","id":342,"logo":"http://db.basketball.nl/img_db/clubs/342.png","naam":"BV Millwings","nr":"5127","org_id":5,"plaats":"Winschoten","postcode":"9675 EV","shirt":"Blauw","sportlink":"D1D0F1X","vestpl":"Winschoten","web":"http://www.millwings.nl"},{"adres":"Van Galenstraat 3","alt":"Den Helder","id":424,"logo":"http://db.basketball.nl/img_db/clubs/424.png","naam":"BV Noordkop","nr":"4164","org_id":6,"plaats":"Den helder","postcode":"1782 ET","shirt":"Zwart","sportlink":"D1C8S6Q","vestpl":"Den Helder","web":"http://www.bvnoordkop-denhelder.nl/"},{"adres":"Zuiderveldstraat 44","alt":"BV Oaters Joure","id":358,"logo":"http://db.basketball.nl/img_db/clubs/358.png","naam":"BV Oaters Joure","nr":"5144","org_id":5,"plaats":"Joure","postcode":"8501 KD","shirt":"Groen","sportlink":"D1C9Z7J","vestpl":"JOURE","web":"http://www.oaters.nl"},{"adres":"Prinses Beatrixlaan 13","alt":"Oegstgeest","id":69,"logo":"http://db.basketball.nl/img_db/clubs/69.png","naam":"BV Oegstgeest","nr":"2173","org_id":2,"plaats":"Oegstgeest","postcode":"2341 TV","shirt":"Blauw","sportlink":"D1C8Y8C","vestpl":"Oegstgeest","web":"http://www.bvoegstgeest.nl/"},{"adres":"Punter 5","alt":"Orcas","id":170,"logo":"http://db.basketball.nl/img_db/clubs/170.png","naam":"BV Orca\'s","nr":"3155","org_id":3,"plaats":"Urk","postcode":"8322 EC","shirt":"Zwart","sportlink":"D1C9R3P","vestpl":"Urk","web":"http://www.orcas.nl"},{"adres":"Tijnjeweg 42","alt":"BV Penta","id":348,"logo":"http://db.basketball.nl/img_db/clubs/348.png","naam":"BV Penta","nr":"5133","org_id":5,"plaats":"Gersloot","postcode":"8457 EL","shirt":"Zwart","sportlink":"D1D0F64","vestpl":"Drachten","web":"http://www.bvpenta.nl"},{"adres":"Jan Tinbergenstraat 4","alt":"BV Rooi","id":247,"logo":"http://db.basketball.nl/img_db/clubs/247.png","naam":"BV Rooi","nr":"1139","org_id":4,"plaats":"Sint-oedenrode","postcode":"5491 DC","shirt":"Blauw/wit/geel","sportlink":"D1C9J53","vestpl":"Sint Oedenrode","web":"http://www.bvrooi.info/"},{"adres":"Eeuwsels 4","alt":"BV Rush","id":284,"logo":"http://db.basketball.nl/img_db/clubs/284.png","naam":"BV Rush","nr":"1176","org_id":4,"plaats":"Volkel","postcode":"5408 AJ","shirt":"Rood","sportlink":"D1C9S9Y","vestpl":"Uden","web":"http://www.rushuden.nl"},{"adres":"Mgr.Godschalkstraat 6","alt":"Alamerce BVS","id":286,"logo":"http://db.basketball.nl/img_db/clubs/286.png","naam":"BV Schijndel","nr":"1178","org_id":4,"plaats":"Den dungen","postcode":"5275 BP","shirt":"Blauw","sportlink":"D1C9T1T","vestpl":"Schijndel","web":"http://www.bvschijndel.nl"},{"adres":"Burchtstraat 39 A","alt":"Souburg","id":290,"logo":"http://db.basketball.nl/img_db/clubs/290.png","naam":"BV Souburg","nr":"1182","org_id":4,"plaats":"Oost-souburg","postcode":"4388 JK","shirt":"Oranje","sportlink":"D1C9T4W","vestpl":"Oost-Souburg","web":"http://www.bvsouburg.nl/"},{"adres":"Freule van Dorthsingel 19","alt":"BV Squirrels","id":105,"logo":"http://db.basketball.nl/img_db/clubs/105.png","naam":"BV Squirrels","nr":"2193","org_id":2,"plaats":"Pijnacker","postcode":"2642 AX","shirt":"Blauw","sportlink":"D1C9B4C","vestpl":"Berkel Rodenrijs","web":"http://www.squirrels.nl"},{"adres":"Dr Albert Schweitzerlaan 1","alt":"BV Second Dribble","id":183,"logo":"http://db.basketball.nl/img_db/clubs/183.png","naam":"BV Vikings","nr":"3169","org_id":3,"plaats":"Hardenberg","postcode":"7772 EC","shirt":"Wit/Blauw","sportlink":"D1C9S3S","vestpl":"Hardenberg","web":"https://www.vikingshardenberg.nl/"},{"adres":"Fluitekruidstraat 43","alt":"BV Volharding","id":307,"logo":"http://db.basketball.nl/img_db/clubs/307.png","naam":"BV Volharding","nr":"1199","org_id":4,"plaats":"Goes","postcode":"4461 MG","shirt":"Blauw","sportlink":"D1C9V77","vestpl":"Goes","web":"http://www.bvvolharding.nl"},{"adres":"Akker 30","alt":"Voorne","id":48,"logo":"http://db.basketball.nl/img_db/clubs/48.png","naam":"BV Voorne","nr":"2202","org_id":2,"plaats":"Brielle","postcode":"3232 RA","shirt":"Blauw","sportlink":"D1C9G9W","vestpl":"Brielle","web":"https://www.bvvoorne.nl"},{"adres":"Campuslaan 14","alt":"BV Wyba","id":197,"logo":"http://db.basketball.nl/img_db/clubs/197.png","naam":"BV Wyba","nr":"3186","org_id":3,"plaats":"Wijchen","postcode":"6602 HX","shirt":"Rood","sportlink":"D1C9Y0J","vestpl":"Wijchen","web":"http://www.wyba.nl"},{"adres":"","alt":"","id":1047,"logo":"http://db.basketball.nl/img_db/clubs/1047.png","naam":"BV Zoetermeer Hammerheads","nr":"","org_id":2,"plaats":"Zoetermeer","postcode":"","shirt":"onbekend","sportlink":"D4H7V9X","vestpl":"","web":""},{"adres":"Lijstersingel 20","alt":"Cady \'73","id":67,"logo":"http://db.basketball.nl/img_db/clubs/67.png","naam":"Cady \'73","nr":"2121","org_id":2,"plaats":"Capelle aan den ijssel","postcode":"2902 JD","shirt":"Groen","sportlink":"D1C9F0U","vestpl":"Capelle/IJssel","web":"https://cady73.nl"},{"adres":"Vedel 24","alt":"Binnenland","id":53,"logo":"http://db.basketball.nl/img_db/clubs/53.png","naam":"CBV Binnenland","nr":"2108","org_id":2,"plaats":"Rotterdam","postcode":"3068 HV","shirt":"Blauw","sportlink":"D1C9C9K","vestpl":"Barendrecht","web":"http://www.cbvbinnenland.nl"},{"adres":"Bloemstraat 32 b","alt":"Groningen","id":356,"logo":"http://db.basketball.nl/img_db/clubs/356.png","naam":"Celeritas-Donar","nr":"5142","org_id":5,"plaats":"Groningen","postcode":"9712 LE","shirt":"Geel","sportlink":"D1C9Z6I","vestpl":"Groningen","web":"http://www.celeritasdonar.nl/"},{"adres":"Michelangelohage 8","alt":"Ceres","id":142,"logo":"http://db.basketball.nl/img_db/clubs/142.png","naam":"Ceres","nr":"3119","org_id":3,"plaats":"Emmeloord","postcode":"8302 ZR","shirt":"Blauw/oranje","sportlink":"D3S2D5G","vestpl":"Emmeloord","web":"http://www.bvceres.nl/"},{"adres":"Koperslager 24","alt":"Challenge","id":143,"logo":"http://db.basketball.nl/img_db/clubs/143.png","naam":"Challenge","nr":"3120","org_id":3,"plaats":"Beuningen gld","postcode":"6641 GS","shirt":"Oranje","sportlink":"D1C9P5L","vestpl":"Beuningen","web":"http://www.challengebeuningen.nl"},{"adres":"De Vliegerlaan 2","alt":"CobraNova","id":44,"logo":"http://db.basketball.nl/img_db/clubs/44.png","naam":"CobraNova","nr":"2201","org_id":2,"plaats":"Voorburg","postcode":"2273 BV","shirt":"Zwart","sportlink":"D1C9G8V","vestpl":"Voorburg","web":"http://cobranova.nl/"},{"adres":"Chopinlaan 2 F6","alt":"Crackerjacks","id":18,"logo":"http://db.basketball.nl/img_db/clubs/18.png","naam":"Crackerjacks","nr":"2123","org_id":2,"plaats":"Naarden","postcode":"1411 HN","shirt":"Rood","sportlink":"D1C9F2M","vestpl":"Amersfoort","web":"http://www.crackerjacks.nl"},{"adres":"Postbus 217","alt":"D.B.V. Arriba","id":128,"logo":"http://db.basketball.nl/img_db/clubs/128.png","naam":"D.B.V. Arriba","nr":"3104","org_id":3,"plaats":"Enschede","postcode":"7500 AE","shirt":"Blauw","sportlink":"D1C9W8B","vestpl":"Enschede UT","web":"http://dbvarriba.nl/"},{"adres":"Postbus 1097","alt":"D.B.V. Rowic","id":39,"logo":"http://db.basketball.nl/img_db/clubs/39.png","naam":"D.B.V. Rowic","nr":"2183","org_id":2,"plaats":"Dordrecht","postcode":"3300 BB","shirt":"Rood","sportlink":"D1C8Z7E","vestpl":"Dordrecht","web":"https://www.rowic.nl"},{"adres":"Van Oldenbarneveldtstr 54 A","alt":"D.E.D.","id":384,"logo":"http://db.basketball.nl/img_db/clubs/384.png","naam":"D.E.D.","nr":"4124","org_id":6,"plaats":"Amsterdam","postcode":"1052 KC","shirt":"Wit","sportlink":"D1C8W1X","vestpl":"Amsterdam","web":"http://www.bvded.nl"},{"adres":"Churchilllaan 72","alt":"DAS","id":47,"logo":"http://db.basketball.nl/img_db/clubs/47.png","naam":"DAS","nr":"2125","org_id":2,"plaats":"Delft","postcode":"2625 GW","shirt":"Blauw","sportlink":"D1C9F3N","vestpl":"Delft","web":"http://www.das-delft.nl"},{"adres":"Arena 303","alt":"de Dunckers","id":13,"logo":"http://db.basketball.nl/img_db/clubs/13.png","naam":"De Dunckers","nr":"2130","org_id":2,"plaats":"Hilversum","postcode":"1213 NW","shirt":"Geel","sportlink":"D1C9F7R","vestpl":"Hilversum","web":"http://www.dedunckers.nl"},{"adres":"Populierenlaan 1 220","alt":"Groene Uilen","id":330,"logo":"http://db.basketball.nl/img_db/clubs/330.png","naam":"De Groene Uilen","nr":"5115","org_id":5,"plaats":"Groningen","postcode":"9741 HA","shirt":"Groen","sportlink":"D1D0D2S","vestpl":"Groningen","web":"http://www.groeneuilen.nl"},{"adres":"Vissersdijk 19","alt":"De Hoppers","id":410,"logo":"http://db.basketball.nl/img_db/clubs/410.png","naam":"De Hoppers","nr":"4150","org_id":6,"plaats":"Enkhuizen","postcode":"1601 LM","shirt":"Blauw","sportlink":"D1C8R6N","vestpl":"Hoorn","web":"http://www.hoppersbasketball.com"},{"adres":"Tuinfluiterlaan 156","alt":"De Snipers","id":130,"logo":"http://db.basketball.nl/img_db/clubs/130.png","naam":"De Snipers","nr":"3106","org_id":3,"plaats":"Zeewolde","postcode":"3893 JZ","shirt":"Zwart","sportlink":"D1C9X0G","vestpl":"Zeewolde","web":"http://www.desnipers.nl"},{"adres":"De Esdoorn 28","alt":"Dedein","id":144,"logo":"http://db.basketball.nl/img_db/clubs/144.png","naam":"Dedein","nr":"3123","org_id":3,"plaats":"Didam","postcode":"6941 ZK","shirt":"Zwart","sportlink":"D1C9P6M","vestpl":"Didam","web":"http://www.dedein.nl"},{"adres":"Mgr.Godschalkstraat 7","alt":"Den Dungk","id":232,"logo":"http://db.basketball.nl/img_db/clubs/232.png","naam":"Den Dungk","nr":"1124","org_id":4,"plaats":"Den dungen","postcode":"5275 BP","shirt":"Zwart","sportlink":"D1C9N3D","vestpl":"Den Dungen","web":"http://www.dendungk.nl"},{"adres":"Beloegastraat 42","alt":"Derba","id":385,"logo":"http://db.basketball.nl/img_db/clubs/385.png","naam":"Derba","nr":"4125","org_id":6,"plaats":"Amsterdam","postcode":"1035 JD","shirt":"Blauw","sportlink":"D1C8W2Y","vestpl":"De Rijp","web":"http://www.derba.nl"},{"adres":"Husselmansgoed 11","alt":"Devedo","id":145,"logo":"http://db.basketball.nl/img_db/clubs/145.png","naam":"Devedo","nr":"3124","org_id":3,"plaats":"Nijkerk gld","postcode":"3863 BV","shirt":"Geel","sportlink":"D1C9P7N","vestpl":"Ermelo","web":"http://www.devedo.nl"},{"adres":"Bootjessteeg 80","alt":"BC Verkerk","id":111,"logo":"http://db.basketball.nl/img_db/clubs/111.png","naam":"Devel Heroes","nr":"2126","org_id":2,"plaats":"Zwijndrecht","postcode":"3331 HC","shirt":"Wit","sportlink":"D1C9F4O","vestpl":"Zwijndrecht","web":"http://www.develheroes.nl"},{"adres":"Madridweg 153","alt":"Divine","id":99,"logo":"http://db.basketball.nl/img_db/clubs/99.png","naam":"Divine","nr":"2127","org_id":2,"plaats":"Vlaardingen","postcode":"3137 AK","shirt":"Paars","sportlink":"D1C9F5P","vestpl":"Rotterdam","web":"https://divinebasketball.nl/"},{"adres":"Postbus 2551","alt":"BV Zernike","id":359,"logo":"http://db.basketball.nl/img_db/clubs/359.png","naam":"Donar Groningen","nr":"5145","org_id":5,"plaats":"Groningen","postcode":"9704 CN","shirt":"Wit","sportlink":"D1C9Z8K","vestpl":"Groningen","web":""},{"adres":"Joubertstraat 4","alt":"Den Helder","id":426,"logo":"http://db.basketball.nl/img_db/clubs/426.png","naam":"Dozy BV Den Helder","nr":"4166","org_id":6,"plaats":"Den helder","postcode":"1782 SG","shirt":"Blauw","sportlink":"D1C8S8S","vestpl":"Den Helder","web":"http://denhelderbasketball.nl"},{"adres":"Woudseweg 29","alt":"SPM Shoeters","id":518,"logo":"http://db.basketball.nl/img_db/clubs/518.png","naam":"Dukes Unlimited","nr":"1212","org_id":4,"plaats":"Den dungen","postcode":"5275 JH","shirt":"Zwart","sportlink":"D1D0B2M","vestpl":"\'s-Hertogenbosch","web":"http://www.badb.nl/welkom/  http://www.newheroesbasketball.com/"},{"adres":"Gasthuisstraat 32","alt":"Dunatos","id":234,"logo":"http://db.basketball.nl/img_db/clubs/234.png","naam":"Dunatos","nr":"1126","org_id":4,"plaats":"Meerssen","postcode":"6231 JW","shirt":"Groen","sportlink":"D1C9N5F","vestpl":"Meerssen","web":"http://www.bcdunatos.club"},{"adres":"Waterlelie 7","alt":"Dunkinn","id":85,"logo":"http://db.basketball.nl/img_db/clubs/85.png","naam":"Dunkinn","nr":"2129","org_id":2,"plaats":"Roelofarendsveen","postcode":"2371 HL","shirt":"Blauw","sportlink":"D1C9F6Q","vestpl":"Roelofarendsveen","web":"http://www.dunkinn.nl"},{"adres":"De Wimpel 9","alt":"Dyna \'75","id":327,"logo":"http://db.basketball.nl/img_db/clubs/327.png","naam":"Dyna \'75","nr":"5112","org_id":5,"plaats":"Heerenveen","postcode":"8447 ED","shirt":"Rood","sportlink":"D1D0C9W","vestpl":"Heerenveen","web":"www.dyna75.nl"},{"adres":"Paladijnstraat 23","alt":"E.B.C.G.","id":237,"logo":"http://db.basketball.nl/img_db/clubs/237.png","naam":"E.B.C.G.","nr":"1129","org_id":4,"plaats":"Geldrop","postcode":"5663 EM","shirt":"Geel","sportlink":"D1C9N6G","vestpl":"Geldrop","web":"http://www.ebcg.nl"},{"adres":"Bernhardlaan 3","alt":"E.L.B.C.","id":240,"logo":"http://db.basketball.nl/img_db/clubs/240.png","naam":"E.L.B.C.","nr":"1132","org_id":4,"plaats":"Etten-leur","postcode":"4872 BL","shirt":"Groen","sportlink":"D1C9J3Z","vestpl":"Etten Leur","web":"http://www.elbc.nl"},{"adres":" ","alt":"Eastwood Tigers","id":236,"logo":"http://db.basketball.nl/img_db/clubs/236.png","naam":"Eastwood Tigers","nr":"1128","org_id":4,"plaats":"Oosterhout","postcode":"","shirt":"Groen","sportlink":null,"vestpl":"Oosterhout","web":""},{"adres":"Lange Voren 5","alt":"Fast 4ward","id":492,"logo":"","naam":"Eastwood Tigers","nr":"1210","org_id":4,"plaats":"Oosterhout nb","postcode":"4904 PH","shirt":"Groen","sportlink":"D1C9W58","vestpl":"Oosterhout","web":"http://www.bc-eastwoodtigers.nl/"},{"adres":"Braspenninglaan 64","alt":"Den Bosch","id":271,"logo":"http://db.basketball.nl/img_db/clubs/271.png","naam":"EBBC","nr":"1163","org_id":4,"plaats":"\'s-hertogenbosch","postcode":"5237 NP","shirt":"Wit","sportlink":"D1C9L37","vestpl":"\'s-HERTOGENBOSCH","web":"http://www.ebbc.nl"},{"adres":"Burgemeester Oudlaan 50 S","alt":"Baros","id":55,"logo":"http://db.basketball.nl/img_db/clubs/55.png","naam":"EBV Baros","nr":"2107","org_id":2,"plaats":"Rotterdam","postcode":"3062 PA","shirt":"Groen","sportlink":"D1C9C8J","vestpl":"Rotterdam","web":"http://www.ebvbaros.nl"},{"adres":"Bruntingerbrink 159","alt":"EBV Mustangs","id":345,"logo":"http://db.basketball.nl/img_db/clubs/345.png","naam":"EBV Mustangs","nr":"5130","org_id":5,"plaats":"Emmen","postcode":"7812 VJ","shirt":"Blauw","sportlink":"D1D0F3Z","vestpl":"Emmen","web":"http://www.ebvmustangs.nl"},{"adres":"Ruizendaallaan 79","alt":"Eem \'78","id":7,"logo":"http://db.basketball.nl/img_db/clubs/7.png","naam":"Eem \'78","nr":"2132","org_id":2,"plaats":"Eemnes","postcode":"3755 SB","shirt":"Blauw","sportlink":"D1C9F9T","vestpl":"Eemnes","web":"https://www.eem78.nl/"},{"adres":"Tsjaerddyk 46","alt":"ESBC Menhir","id":341,"logo":"http://db.basketball.nl/img_db/clubs/341.png","naam":"ESBC Menhir","nr":"5126","org_id":5,"plaats":"Folsgare","postcode":"8773 KN","shirt":"Rood","sportlink":"D1D0F08","vestpl":"Sneek","web":"http://www.esbcmenhir.nl/"},{"adres":"Mgr. Goossenssingel 10","alt":"EVBV Octopus","id":273,"logo":"http://db.basketball.nl/img_db/clubs/273.png","naam":"EVBV Octopus","nr":"1165","org_id":4,"plaats":"Vught","postcode":"5262 SM","shirt":"Geel","sportlink":"D1C9L59","vestpl":"Vught","web":"http://www.evbv-octopus.nl"},{"adres":"Korreweg 164","alt":"BV Exercitia \'73 Eelde","id":328,"logo":"http://db.basketball.nl/img_db/clubs/328.png","naam":"Exercitia \'73","nr":"5113","org_id":5,"plaats":"Groningen","postcode":"9715 AK","shirt":"Geel","sportlink":"D1D0D02","vestpl":"Groningen","web":"http://www.exercitia.nl/"},{"adres":"Kasteel Horionstraat 9","alt":"Fanatics \'71","id":243,"logo":"http://db.basketball.nl/img_db/clubs/243.png","naam":"Fanatics \'71","nr":"1135","org_id":4,"plaats":"Roermond","postcode":"6043 XX","shirt":"Blauw","sportlink":"D1C9J42","vestpl":"Roermond","web":"http://fanatics71.nl"},{"adres":"","alt":"","id":1053,"logo":"","naam":"Filou Oostende","nr":"","org_id":7,"plaats":"Oostende","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Westersingel 21","alt":"Five Pack","id":322,"logo":"http://db.basketball.nl/img_db/clubs/322.png","naam":"Five Pack","nr":"5107","org_id":5,"plaats":"Drachten","postcode":"9201 GD","shirt":"Blauw","sportlink":"D1C9Y9I","vestpl":"Ureterp","web":"http://www.5pack.nl"},{"adres":"Oostersingel 4","alt":"Flashing Heiloo","id":405,"logo":"http://db.basketball.nl/img_db/clubs/405.png","naam":"Flashing Heiloo","nr":"4145","org_id":6,"plaats":"Heiloo","postcode":"1851 ZV","shirt":"Blauw","sportlink":"D1C8R3K","vestpl":"Heiloo","web":"http://www.flashing-heiloo.nl"},{"adres":"Perengaarde 48","alt":"F.F.F.","id":103,"logo":"http://db.basketball.nl/img_db/clubs/103.png","naam":"Flax Field Fighters","nr":"2133","org_id":2,"plaats":"Hendrik-ido-ambacht","postcode":"3344 PR","shirt":"Zwart/geel","sportlink":"D1C9G0X","vestpl":"Hendrik-Ido-Ambacht","web":"http://www.flaxfieldfighters.nl"},{"adres":"Pauwenburg 129","alt":"B.C.L.","id":136,"logo":"http://db.basketball.nl/img_db/clubs/136.png","naam":"Flevo Musketiers","nr":"3113","org_id":3,"plaats":"Lelystad","postcode":"8226 TV","shirt":"Oranje","sportlink":"D1C9P1H","vestpl":"Lelystad","web":"http://www.flevomusketiers.nl"},{"adres":"Wadenoijenlaan 369","alt":"Flip Stars","id":149,"logo":"http://db.basketball.nl/img_db/clubs/149.png","naam":"Flip Stars","nr":"3129","org_id":3,"plaats":"Tiel","postcode":"4006 AH","shirt":"Groen","sportlink":"D1C9Q0T","vestpl":"Tiel","web":"http://www.flipstars.nl"},{"adres":"Bolmeer 60","alt":"Flying Red","id":355,"logo":"http://db.basketball.nl/img_db/clubs/355.png","naam":"Flying Red","nr":"5141","org_id":5,"plaats":"Zevenhuizen (gr)","postcode":"9354 VL","shirt":"Rood","sportlink":"D1C9Z5H","vestpl":"Roden","web":"https://www.flyingred.nl"},{"adres":"Spoorlaan 35","alt":"Forwodians","id":96,"logo":"http://db.basketball.nl/img_db/clubs/96.png","naam":"Forwodians","nr":"2136","org_id":2,"plaats":"Voorhout","postcode":"2215 KN","shirt":"Oranje","sportlink":"D1C9G3Q","vestpl":"Voorhout","web":"http://www.forwodians.nl/"},{"adres":"Lange Wijden 33","alt":"G.S. Stars","id":153,"logo":"http://db.basketball.nl/img_db/clubs/153.png","naam":"G.S. Stars","nr":"3134","org_id":3,"plaats":"Elburg","postcode":"8081 VS","shirt":"Groen","sportlink":"D1C9Q2L","vestpl":"Elburg","web":"http://www.gsstars.nl"},{"adres":"Postbus 246","alt":"Grasshoppers","id":68,"logo":"http://db.basketball.nl/img_db/clubs/68.png","naam":"GBI van Dijk Grasshoppers","nr":"2141","org_id":2,"plaats":"Katwijk zh","postcode":"2220 AE","shirt":"Geel","sportlink":"D1C9G6T","vestpl":"Katwijk","web":"https://www.grasshoppers.nl"},{"adres":"Moutstraat 2","alt":"Gennep Cougars","id":248,"logo":"http://db.basketball.nl/img_db/clubs/248.png","naam":"Gennep Cougars","nr":"1140","org_id":4,"plaats":"Gennep","postcode":"6591 HG","shirt":"Blauw","sportlink":"D1C9J64","vestpl":"Gennep","web":"http://www.gennepcougars.nl"},{"adres":"Lage Veld 75 A","alt":"Give and Go","id":150,"logo":"http://db.basketball.nl/img_db/clubs/150.png","naam":"Give and Go","nr":"3131","org_id":3,"plaats":"Aalten","postcode":"7122 ZE","shirt":"Blauw","sportlink":"D1C9Q1K","vestpl":"Aalten","web":"http://www.giveandgo.nl"},{"adres":"Mozartstraat 5","alt":"Goba","id":43,"logo":"http://db.basketball.nl/img_db/clubs/43.png","naam":"Goba","nr":"2138","org_id":2,"plaats":"Gorinchem","postcode":"4207 DS","shirt":"Blauw","sportlink":"D1C9G4R","vestpl":"Gorinchem","web":"http://www.goba.nu"},{"adres":"Postbus 424","alt":"Green Eagles","id":51,"logo":"http://db.basketball.nl/img_db/clubs/51.png","naam":"Green Eagles","nr":"2142","org_id":2,"plaats":"Maassluis","postcode":"3140 AK","shirt":"Groen","sportlink":"D1C8W86","vestpl":"Maassluis","web":"http://www.greeneagles.nl"},{"adres":"Maximaplein 7","alt":"Green Giants","id":21,"logo":"http://db.basketball.nl/img_db/clubs/21.png","naam":"Green Giants","nr":"2143","org_id":2,"plaats":"Leusden","postcode":"3832 JS","shirt":"Groen","sportlink":"D1C8W97","vestpl":"Leusden","web":"http://www.greengiants.nl"},{"adres":"Noordmeep 10","alt":"Green Lions","id":329,"logo":"http://db.basketball.nl/img_db/clubs/329.png","naam":"Green Lions","nr":"5114","org_id":5,"plaats":"Harlingen","postcode":"8862 DH","shirt":"Groen","sportlink":"D1D0D1R","vestpl":"Harlingen","web":"http://www.greenlions.nl"},{"adres":"Blauwborgje 16","alt":"GSBV Moestasj","id":343,"logo":"http://db.basketball.nl/img_db/clubs/343.png","naam":"GSBV Moestasj","nr":"5128","org_id":5,"plaats":"Groningen","postcode":"9747 AC","shirt":"Zwart","sportlink":"D1D0F2Y","vestpl":"Groningen","web":"http://www.moestasj.nl/"},{"adres":"Hoofdweg 230","alt":"H.S.V.Basketball","id":334,"logo":"http://db.basketball.nl/img_db/clubs/334.png","naam":"H.S.V. Basketball","nr":"5119","org_id":5,"plaats":"Paterswolde","postcode":"9765 CL","shirt":"Blauw","sportlink":"D1D0D6W","vestpl":"Haren","web":"http://www.hsvb.nl"},{"adres":"Laan van Neder Helbergen 29","alt":"Hanze Stars","id":155,"logo":"http://db.basketball.nl/img_db/clubs/155.png","naam":"Hanze Stars","nr":"3136","org_id":3,"plaats":"Zutphen","postcode":"7206 DK","shirt":"Geel","sportlink":"D1C9Q4N","vestpl":"Zutphen","web":"http://www.hanzestars.nl"},{"adres":"Leliestraat 12","alt":"Harlemlakers","id":403,"logo":"http://db.basketball.nl/img_db/clubs/403.png","naam":"Harlemlakers","nr":"4143","org_id":6,"plaats":"Badhoevedorp","postcode":"1171 MK","shirt":"Groen","sportlink":"D1C8R1I","vestpl":"Badhoevedorp","web":"http://www.harlemlakers.nl"},{"adres":"Spirealaan 36","alt":"HBC","id":404,"logo":"http://db.basketball.nl/img_db/clubs/404.png","naam":"HBC","nr":"4144","org_id":6,"plaats":"Heerhugowaard","postcode":"1702 JH","shirt":"Groen","sportlink":"D1C8R2J","vestpl":"Heerhugowaard","web":"http://www.hbc-basketbal.nl"},{"adres":"Zuidwoldigerweg 16","alt":"HBV-Falcons","id":333,"logo":"http://db.basketball.nl/img_db/clubs/333.png","naam":"HBV Falcons","nr":"5118","org_id":5,"plaats":"Hoogeveen","postcode":"7908 AD","shirt":"Wit/Rood/Zwart","sportlink":"D1D0D5V","vestpl":"Hoogeveen","web":"http://www.basketballhoogeveen.nl"},{"adres":"Reidlanswei 30","alt":"BV Hardegarijp","id":332,"logo":"http://db.basketball.nl/img_db/clubs/332.png","naam":"HBV Hornets","nr":"5117","org_id":5,"plaats":"Hurdegaryp","postcode":"9254 JH","shirt":"Rood","sportlink":"D1D0D4U","vestpl":"Hardegarijp","web":"http://hbvhornets.nl/"},{"adres":"Francois Maelsonstraat 27","alt":"Jumpers","id":63,"logo":"http://db.basketball.nl/img_db/clubs/63.png","naam":"HBV The Jumpers","nr":"2149","org_id":2,"plaats":"\'s-gravenhage","postcode":"2582 KB","shirt":"Donker Blauw","sportlink":"D1C8X23","vestpl":"Den Haag","web":"http://www.hbvthejumpers.nl"},{"adres":"Megenstraat 1","alt":"Initial High Five","id":255,"logo":"http://db.basketball.nl/img_db/clubs/255.png","naam":"High Five","nr":"1147","org_id":4,"plaats":"Tilburg","postcode":"5045 KE","shirt":"Geel","sportlink":"D1C9K0B","vestpl":"Tilburg","web":"http://www.highfivetilburg.nl"},{"adres":"Juliana van Stolberglaan 94","alt":"Hillegom\'85","id":407,"logo":"http://db.basketball.nl/img_db/clubs/407.png","naam":"Hillegom\'85","nr":"4147","org_id":6,"plaats":"Hillegom","postcode":"2181 SZ","shirt":"Blauw/wit","sportlink":"D1C8R4L","vestpl":"Hillegom","web":"https://www.bvhillegom85.nl/"},{"adres":"Essenlaan 151","alt":"","id":907,"logo":"http://db.basketball.nl/img_db/clubs/907.png","naam":"Hot Pepper Heat","nr":"4207","org_id":6,"plaats":"Zwanenburg","postcode":"1161 ED","shirt":"Geel/blauw","sportlink":"D1D0G23","vestpl":"Zwanenburg","web":"http://www.svchristofoor.nl"},{"adres":"","alt":"","id":1085,"logo":"","naam":"House of Talents Kortrijk Spurs","nr":"","org_id":7,"plaats":"Kortrijk","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1062,"logo":"","naam":"Hubo Limburg United","nr":"","org_id":7,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Postbus 331","alt":"Hurricanes","id":66,"logo":"http://db.basketball.nl/img_db/clubs/66.png","naam":"Hurricanes","nr":"2152","org_id":2,"plaats":"Spijkenisse","postcode":"3200 AH","shirt":"Rood","sportlink":"D1C8X34","vestpl":"Spijkenisse","web":"http://www.thehurricanes.nl"},{"adres":"Prunusplantsoen 36","alt":"I.S.R.","id":467,"logo":"http://db.basketball.nl/img_db/clubs/467.png","naam":"I.S.R.","nr":"2154","org_id":2,"plaats":"Ridderkerk","postcode":"2982 NA","shirt":"Wit","sportlink":"D1C8X45","vestpl":"Ridderkerk","web":"http://www.i-s-r.nl/"},{"adres":"Aalbes 5","alt":"I.S.V. Hengelo","id":159,"logo":"http://db.basketball.nl/img_db/clubs/159.png","naam":"I.S.V. Hengelo","nr":"3142","org_id":3,"plaats":"Hengelo ov","postcode":"7559 RR","shirt":"Blauw","sportlink":"D1C9Q6P","vestpl":"Hengelo","web":"http://www.isvhengelo.nl/"},{"adres":"Doorzwin 1133","alt":"JBC/Noorderhaven","id":412,"logo":"http://db.basketball.nl/img_db/clubs/412.png","naam":"JBC/Noorderhaven","nr":"4152","org_id":6,"plaats":"Julianadorp","postcode":"1788 KB","shirt":"Zwart","sportlink":"D1C8R7O","vestpl":"Julianadorp","web":"http://www.jbcnoorderhaven.nl"},{"adres":"Postbus 79","alt":"Perik","id":160,"logo":"http://db.basketball.nl/img_db/clubs/160.png","naam":"Jolly Jumpers","nr":"3143","org_id":3,"plaats":"Tubbergen","postcode":"7650 AB","shirt":"Rood/wit","sportlink":"D1C9Q7Q","vestpl":"Tubbergen","web":"http://www.jollyjumpersbasketbal.nl"},{"adres":"Winselingseweg 4 K","alt":"Joy-M","id":161,"logo":"http://db.basketball.nl/img_db/clubs/161.png","naam":"Joy-M","nr":"3144","org_id":3,"plaats":"Nijmegen","postcode":"6541 AK","shirt":"Zwart","sportlink":"D1C9Q8R","vestpl":"Malden","web":"http://www.joy-m.nl"},{"adres":"Tamboer 1","alt":"JRC","id":259,"logo":"http://db.basketball.nl/img_db/clubs/259.png","naam":"JRC","nr":"1151","org_id":4,"plaats":"Boxtel","postcode":"5283 WK","shirt":"Oranje","sportlink":"D1C9K45","vestpl":"Boxtel","web":"http://www.jrc-boxtel.nl"},{"adres":"Wielewaal 52","alt":"Jump IJsselstein","id":32,"logo":"http://db.basketball.nl/img_db/clubs/32.png","naam":"Jump IJsselstein","nr":"2156","org_id":2,"plaats":"Nieuwegein","postcode":"3435 AR","shirt":"paars/geel","sportlink":"D1C8X67","vestpl":"IJsselstein","web":"http://www.jumpijsselstein.nl/"},{"adres":"Lindenstraat 20","alt":"Jumpers \'76","id":262,"logo":"http://db.basketball.nl/img_db/clubs/262.png","naam":"Jumpers \'76","nr":"1154","org_id":4,"plaats":"Venray","postcode":"5802 CN","shirt":"Geel","sportlink":"D1C9K78","vestpl":"Venray","web":"http://www.jumpers76.nl"},{"adres":"Zuurseweg 28","alt":"Jumping Five","id":336,"logo":"http://db.basketball.nl/img_db/clubs/336.png","naam":"Jumping Five","nr":"5121","org_id":5,"plaats":"Peize","postcode":"9321 HJ","shirt":"Groen","sportlink":"D1D0D8Y","vestpl":"Peize","web":"http://www.jumpingfive.nl/"},{"adres":"Keulerstraat 43","alt":"Jumping Giants","id":261,"logo":"http://db.basketball.nl/img_db/clubs/261.png","naam":"Jumping Giants","nr":"1153","org_id":4,"plaats":"Weert","postcode":"6006 NE","shirt":"Blauw/gele bies","sportlink":"D1C9K67","vestpl":"Nederweert","web":"http://www.jumpinggiants.nl"},{"adres":"Coen Cuserhof 39","alt":"K.T.C.","id":414,"logo":"http://db.basketball.nl/img_db/clubs/414.png","naam":"K.T.C.","nr":"4154","org_id":6,"plaats":"Haarlem","postcode":"2012 GZ","shirt":"Blauw","sportlink":"D1C8R8P","vestpl":"Haarlem","web":"http://www.ktcbasketball.nl"},{"adres":"","alt":"","id":1057,"logo":"","naam":"Kangoeroes Basket Mechelen","nr":"","org_id":7,"plaats":"Mechelen","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Kuipersweg 3","alt":"Kikkers","id":164,"logo":"http://db.basketball.nl/img_db/clubs/164.png","naam":"Kikkers","nr":"3147","org_id":3,"plaats":"Ambt delden","postcode":"7495 TV","shirt":"Oranje","sportlink":"D1C9R0W","vestpl":"Borne","web":"http://www.dekikkers.nl"},{"adres":"Watersnip 11","alt":"Klipperstars","id":101,"logo":"http://db.basketball.nl/img_db/clubs/101.png","naam":"Klipperstars","nr":"2161","org_id":2,"plaats":"Nieuw-lekkerland","postcode":"2957 NK","shirt":"Grijs","sportlink":"D1C8Y0E","vestpl":"Nieuw-Lekkerland","web":"http://www.klipperstars.nl"},{"adres":"Weezenhof  A","alt":"","id":529,"logo":"","naam":"Koprol","nr":"3191","org_id":3,"plaats":"Nijmegen","postcode":"6536 DP","shirt":"onbekend","sportlink":"D1D0B9T","vestpl":"Nijmegen","web":""},{"adres":"Kruiskamplaan 126","alt":"L.C. Players","id":416,"logo":"http://db.basketball.nl/img_db/clubs/416.png","naam":"L.C. Players","nr":"4156","org_id":6,"plaats":"Uitgeest","postcode":"1911 LN","shirt":"Groen","sportlink":"D1C8S0U","vestpl":"Uitgeest","web":"http://www.lakecityplayers.nl"},{"adres":"Marktplein 11","alt":"ProBuild","id":415,"logo":"http://db.basketball.nl/img_db/clubs/415.png","naam":"Landslake Lions","nr":"4155","org_id":6,"plaats":"Landsmeer","postcode":"1121 GL","shirt":"Rood","sportlink":"D1C8R9Q","vestpl":"Landsmeer","web":"http://www.landslakelions.nl"},{"adres":"Hogeland 10","alt":"Zwolle","id":154,"logo":"http://db.basketball.nl/img_db/clubs/154.png","naam":"Landstede Hammers","nr":"3135","org_id":3,"plaats":"Zwolle","postcode":"8024 AZ","shirt":"Geel","sportlink":"D1C9Q3M","vestpl":"Zwolle","web":"http://www.landstedehammers.nl"},{"adres":"","alt":"","id":1154,"logo":"","naam":"Lasers Basketball Club","nr":"","org_id":4,"plaats":"Veldhoven","postcode":"","shirt":"onbekend","sportlink":"D5B9V8B","vestpl":"Veldhoven","web":""},{"adres":"Orkestlaan 12","alt":"D.O.S. Kampen","id":146,"logo":"http://db.basketball.nl/img_db/clubs/146.png","naam":"Lay Back Kampen","nr":"3125","org_id":3,"plaats":"Kampen","postcode":"8265 RE","shirt":"Groen","sportlink":"D1C9P8O","vestpl":"Kampen","web":"http://www.laybackkampen.nl"},{"adres":"Postbus 1136","alt":"Z.A.C.","id":198,"logo":"http://db.basketball.nl/img_db/clubs/198.png","naam":"LB-ZAC","nr":"3187","org_id":3,"plaats":"Zwolle","postcode":"8001 BC","shirt":"Wit/Blauw","sportlink":"D1C9Y1A","vestpl":"Zwolle","web":"http://zac-basketbal.nl"},{"adres":"Brantingstraat 12","alt":"Lokomotief","id":83,"logo":"http://db.basketball.nl/img_db/clubs/83.png","naam":"Lokomotief","nr":"2164","org_id":2,"plaats":"Rijswijk zh","postcode":"2286 GH","shirt":"Wit","sportlink":"D1C8Y37","vestpl":"Rijswijk","web":"http://www.lokomotief-rijswijk.nl"},{"adres":"Einsteinweg 6","alt":"L.U.S.V.","id":61,"logo":"http://db.basketball.nl/img_db/clubs/61.png","naam":"LUSV Basketbal","nr":"2166","org_id":2,"plaats":"Leiden","postcode":"2333 CC","shirt":"Wit","sportlink":"D1C8Y48","vestpl":"Leiden","web":"http://www.lusvbasketball.nl/"},{"adres":"Biessumerwaard 57","alt":"M.A.C.","id":340,"logo":"http://db.basketball.nl/img_db/clubs/340.png","naam":"M.A.C.","nr":"5125","org_id":5,"plaats":"Delfzijl","postcode":"9931 EC","shirt":"Oranje","sportlink":"D1D0D9Z","vestpl":"Delfzijl","web":"http://macbasketbal.nl/"},{"adres":"Postbus  616","alt":"","id":528,"logo":"http://db.basketball.nl/img_db/clubs/528.png","naam":"Maastricht Knights","nr":"1214","org_id":4,"plaats":"Maastricht","postcode":"6200 MD","shirt":"Donker Blauw","sportlink":"D1D0B8S","vestpl":"Maastricht","web":"http://www.maastrichtknights.nl/"},{"adres":"Annette Poelmanstraat 42","alt":"Mapleleaves","id":421,"logo":"http://db.basketball.nl/img_db/clubs/421.png","naam":"Mapleleaves","nr":"4161","org_id":6,"plaats":"Heemskerk","postcode":"1963 ES","shirt":"Blauw","sportlink":"D1C8S3N","vestpl":"Heemskerk","web":"http://www.mapleleaves.nl/"},{"adres":"Anton Mauvelaan 24","alt":"Marathon","id":269,"logo":"http://db.basketball.nl/img_db/clubs/269.png","naam":"Marathon","nr":"1161","org_id":4,"plaats":"Vlissingen","postcode":"4382 XE","shirt":"Rood","sportlink":"D1C9L15","vestpl":"Vlissingen","web":"http://www.marathonbasketbal.nl"},{"adres":"Van der Ghiessenstraat 8","alt":"MBCA","id":460,"logo":"http://db.basketball.nl/img_db/clubs/460.png","naam":"MBCA A\'veen","nr":"4123","org_id":6,"plaats":"Amstelveen","postcode":"1181 RT","shirt":"Zwart","sportlink":"D1C9C0L","vestpl":"Amstelveen","web":"https://mbca.nl/index.php/nl/"},{"adres":"Eerste Weegje 3","alt":"Mevo \'80","id":270,"logo":"http://db.basketball.nl/img_db/clubs/270.png","naam":"Mevo \'80","nr":"1162","org_id":4,"plaats":"Zierikzee","postcode":"4301 SL","shirt":"Wit","sportlink":"D1C9L26","vestpl":"Zierikzee","web":"www.mevo80.nl"},{"adres":"Splitshoorn 33","alt":"Monks","id":422,"logo":"http://db.basketball.nl/img_db/clubs/422.png","naam":"Monks","nr":"4162","org_id":6,"plaats":"Monnickendam","postcode":"1141 ZZ","shirt":"Oranje","sportlink":"D1C8S4O","vestpl":"Monnickendam","web":"http://www.themonks.nl"},{"adres":"Duinkant 12","alt":"MSV basketbal","id":65,"logo":"http://db.basketball.nl/img_db/clubs/65.png","naam":"MSV Basketbal","nr":"2169","org_id":2,"plaats":"Noordwijk zh","postcode":"2203 NK","shirt":"Blauw","sportlink":"D1C8Y6A","vestpl":"Noordwijk","web":"https://www.msvnoordwijk.nl/"},{"adres":"","alt":"","id":1147,"logo":"","naam":"Nationaal Team Azerbeidzjan","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1077,"logo":"","naam":"Nationaal Team Belgie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1103,"logo":"","naam":"Nationaal Team Bulgarije","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1112,"logo":"","naam":"Nationaal Team Cyprus","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1106,"logo":"","naam":"Nationaal Team Denemarken","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1091,"logo":"","naam":"Nationaal Team Duitsland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1108,"logo":"","naam":"Nationaal Team Estland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1089,"logo":"","naam":"Nationaal Team Finland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1152,"logo":"","naam":"Nationaal Team Groot-Brittanie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1119,"logo":"","naam":"Nationaal Team Ierland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1086,"logo":"","naam":"Nationaal Team IJsland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1150,"logo":"","naam":"Nationaal Team Kosovo","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1084,"logo":"","naam":"Nationaal Team Kroatie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1095,"logo":"","naam":"Nationaal Team Litouwen","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1116,"logo":"","naam":"Nationaal Team Luxemburg","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1105,"logo":"","naam":"Nationaal Team Macedonie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1093,"logo":"","naam":"Nationaal Team Montenegro","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1074,"logo":"","naam":"Nationaal Team Nederland","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1157,"logo":"","naam":"Nationaal Team Nederlandse Antillen","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1117,"logo":"","naam":"Nationaal Team Noorwegen","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1079,"logo":"","naam":"Nationaal Team Oekraine","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1101,"logo":"","naam":"Nationaal Team Oostenrijk","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1102,"logo":"","naam":"Nationaal Team Portugal","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1099,"logo":"","naam":"Nationaal Team Roemenie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1090,"logo":"","naam":"Nationaal Team Servie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1113,"logo":"","naam":"Nationaal Team Slowakije","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1156,"logo":"","naam":"Nationaal Team Suriname","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1092,"logo":"","naam":"Nationaal Team Tsjechie","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"","alt":"","id":1081,"logo":"","naam":"Nationaal Team Zweden","nr":"","org_id":8,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Hagedisweide 30","alt":"New Stars","id":4,"logo":"http://db.basketball.nl/img_db/clubs/4.png","naam":"New Stars","nr":"2172","org_id":2,"plaats":"Nieuwegein","postcode":"3437 VS","shirt":"Oranje","sportlink":"D1C8Y7B","vestpl":"Nieuwegein","web":"https://www.bcnewstars.nl"},{"adres":"","alt":"","id":1041,"logo":"http://db.basketball.nl/img_db/clubs/1041.png","naam":"NIEUW Generation Basketball","nr":"","org_id":2,"plaats":"S GRAVENHAGE","postcode":"","shirt":"onbekend","sportlink":"D4F3N88","vestpl":"Den Haag","web":""},{"adres":"","alt":"","id":1046,"logo":"http://db.basketball.nl/img_db/clubs/1046.png","naam":"Nimma Gemina","nr":"","org_id":3,"plaats":"Nijmegen","postcode":"","shirt":"onbekend","sportlink":"D4H4L3G","vestpl":"","web":"https://nimma-gemina.nl/"},{"adres":"Beloegastraat 53","alt":"D.W.V.","id":392,"logo":"http://db.basketball.nl/img_db/clubs/392.png","naam":"Northside Ballers Amsterdam","nr":"4132","org_id":6,"plaats":"Amsterdam","postcode":"1035 JC","shirt":"Blauw","sportlink":"D1C8W53","vestpl":"Amsterdam","web":"http://www.northsideballers.nl"},{"adres":"Teddingtonweg 20","alt":"Novo Stars","id":425,"logo":"http://db.basketball.nl/img_db/clubs/425.png","naam":"Novo Stars","nr":"4165","org_id":6,"plaats":"Nieuwkoop","postcode":"2421 LL","shirt":"Rood","sportlink":"D1C8S7R","vestpl":"Nieuwkoop","web":"https://novostars.sportlink-clubsites.nl/"},{"adres":"Van Lingelaan 73","alt":"O.S.M.","id":29,"logo":"http://db.basketball.nl/img_db/clubs/29.png","naam":"O.S.M. \'75","nr":"2175","org_id":2,"plaats":"Maarssen","postcode":"3602 PB","shirt":"Geel","sportlink":"D1C8Z0H","vestpl":"Maarssen","web":"http://www.osm75.nl/"},{"adres":"Mekelenkamplaan 2","alt":"OBC","id":272,"logo":"http://db.basketball.nl/img_db/clubs/272.png","naam":"OBC","nr":"1164","org_id":4,"plaats":"Oss","postcode":"5345 GL","shirt":"Rood","sportlink":"D1C9L48","vestpl":"Oss","web":"http://www.obcoss.nl"},{"adres":"Hoefblad 109","alt":"Oirschot","id":274,"logo":"http://db.basketball.nl/img_db/clubs/274.png","naam":"Oirschot","nr":"1166","org_id":4,"plaats":"Best","postcode":"5684 JW","shirt":"Zwart","sportlink":"D1C9L6A","vestpl":"oirschot","web":"http://www.basketbalcluboirschot.nl"},{"adres":"","alt":"","id":1064,"logo":"","naam":"Okapi Aalst","nr":"","org_id":7,"plaats":"Aalst","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Mississippistraat 4","alt":"Old Birds","id":378,"logo":"http://db.basketball.nl/img_db/clubs/378.png","naam":"Old Birds","nr":"4118","org_id":6,"plaats":"Purmerend","postcode":"1448 XA","shirt":"Licht Blauw","sportlink":"D1C8V83","vestpl":"Purmerend","web":"http://www.oldbirds.com"},{"adres":"Putter 4","alt":"Olstars","id":169,"logo":"http://db.basketball.nl/img_db/clubs/169.png","naam":"Olstars","nr":"3154","org_id":3,"plaats":"Olst","postcode":"8121 JK","shirt":"Oranje","sportlink":"D1C9R2O","vestpl":"Olst","web":"https://olstars.nl/"},{"adres":"Postbus 36427","alt":"","id":903,"logo":"http://db.basketball.nl/img_db/clubs/903.png","naam":"Only Friends","nr":"4206","org_id":6,"plaats":"Amsterdam","postcode":"1020 MK","shirt":"Rood","sportlink":"D1D0G0B","vestpl":"Amsterdam","web":"http://www.onlyfriends.nl"},{"adres":"Jelgersmastraat 31","alt":"Onze Gezellen","id":402,"logo":"http://db.basketball.nl/img_db/clubs/402.png","naam":"Onze Gezellen","nr":"4142","org_id":6,"plaats":"Haarlem","postcode":"2023 EN","shirt":"Zwart","sportlink":"D1C8R0R","vestpl":"Haarlem","web":"http://www.onzegezellen.com/basketball"},{"adres":"Olympisch Stadion 14","alt":"","id":532,"logo":"http://db.basketball.nl/img_db/clubs/532.png","naam":"Orange Lions Academy","nr":"4205","org_id":6,"plaats":"Amsterdam","postcode":"1076 DE","shirt":"roze","sportlink":"D1D0C3Q","vestpl":"Nieuwegein","web":"http://www.ctovrouwenbasketball.nl/"},{"adres":"Postbus 50","alt":"Peatminers","id":172,"logo":"http://db.basketball.nl/img_db/clubs/172.png","naam":"Peatminers","nr":"3157","org_id":3,"plaats":"Vriezenveen","postcode":"7670 AB","shirt":"Groen","sportlink":"D1C9R5R","vestpl":"Vriezenveen","web":"http://www.peatminers.nl"},{"adres":"\'t Eeland 16","alt":"Pigeons","id":175,"logo":"http://db.basketball.nl/img_db/clubs/175.png","naam":"Pigeons","nr":"3160","org_id":3,"plaats":"Westervoort","postcode":"6932 AP","shirt":"Rood","sportlink":"D1C9R7T","vestpl":"Duiven","web":"http://www.depigeons.nl"},{"adres":"Tarthorst 152","alt":"Pluto","id":176,"logo":"http://db.basketball.nl/img_db/clubs/176.png","naam":"Pluto","nr":"3161","org_id":3,"plaats":"Wageningen","postcode":"6708 JD","shirt":"Groen","sportlink":"D1C9R8U","vestpl":"Wageningen","web":"http://www.plutobasketbal.nl/"},{"adres":"Mekelweg 8","alt":"Punch","id":57,"logo":"http://db.basketball.nl/img_db/clubs/57.png","naam":"Punch","nr":"2176","org_id":2,"plaats":"Delft","postcode":"2628 CD","shirt":"Rood","sportlink":"D1C8Z18","vestpl":"Delft","web":"http://www.punch-basketball.nl/"},{"adres":"","alt":"","id":1049,"logo":"http://db.basketball.nl/img_db/clubs/1049.png","naam":"Quick Lions","nr":"","org_id":2,"plaats":"Bussum","postcode":"","shirt":"onbekend","sportlink":"D4H8F8N","vestpl":"Bussum","web":"https://www.quicklions.nl/"},{"adres":"Karel Doormanlaan 71","alt":"Quick Runners","id":3,"logo":"http://db.basketball.nl/img_db/clubs/3.png","naam":"Quick Runners","nr":"2177","org_id":2,"plaats":"Huizen","postcode":"1271 CB","shirt":"Wit","sportlink":"D1C8Z29","vestpl":"Huizen","web":"http://www.quickrunners.nl"},{"adres":"Oeverloper 26","alt":"Quintas","id":351,"logo":"http://db.basketball.nl/img_db/clubs/351.png","naam":"Quintas","nr":"5136","org_id":5,"plaats":"Lemmer","postcode":"8532 BG","shirt":"Blauw","sportlink":"D1C9Z1D","vestpl":"Lemmer","web":"http://www.bv-quintas.nl/"},{"adres":"Maria van Reigersbergstraat 15","alt":"R.B.V.M.","id":282,"logo":"http://db.basketball.nl/img_db/clubs/282.png","naam":"R.B.V.M.","nr":"1174","org_id":4,"plaats":"Gapinge","postcode":"4352 AK","shirt":"Geel","sportlink":"D1C9L9D","vestpl":"Middelburg","web":"https://www.rolstoelbasketbalmiddelburg.nl/"},{"adres":"Dellaertlaan 155","alt":"Racing Beverwijk","id":377,"logo":"http://db.basketball.nl/img_db/clubs/377.png","naam":"Racing Beverwijk","nr":"4117","org_id":6,"plaats":"Beverwijk","postcode":"1945 WH","shirt":"Rood","sportlink":"D1C8V72","vestpl":"Beverwijk","web":"http://www.racingbeverwijk.nl/"},{"adres":"Keizersdijk 104","alt":"Rebound","id":50,"logo":"http://db.basketball.nl/img_db/clubs/50.png","naam":"Rebound","nr":"2178","org_id":2,"plaats":"Strijen","postcode":"3291 CE","shirt":"Oranje","sportlink":"D1C8Z3A","vestpl":"\'s-Gravendeel","web":"http://www.bvrebound.nl/"},{"adres":"Couperuslaan 53","alt":"Rebound \'73","id":179,"logo":"http://db.basketball.nl/img_db/clubs/179.png","naam":"Rebound \'73","nr":"3164","org_id":3,"plaats":"Harderwijk","postcode":"3842 AB","shirt":"Marineblauw","sportlink":"D1C9S0Z","vestpl":"Harderwijk","web":"http://www.rebound73.nl"},{"adres":"Zeil 10","alt":"Red Giants","id":180,"logo":"http://db.basketball.nl/img_db/clubs/180.png","naam":"Red Giants","nr":"3165","org_id":3,"plaats":"Meppel","postcode":"7944 RE","shirt":"Rood","sportlink":"D1C9S1Q","vestpl":"Meppel","web":"http://www.redgiants.nl"},{"adres":"Jan Wolkershof 29","alt":"Red Stars","id":30,"logo":"http://db.basketball.nl/img_db/clubs/30.png","naam":"Red Stars","nr":"2180","org_id":2,"plaats":"Soest","postcode":"3768 XE","shirt":"Rood","sportlink":"D1C8Z5C","vestpl":"Soest","web":"http://www.red-stars.nl/"},{"adres":"Stoppelmaad 29","alt":"","id":999,"logo":"http://db.basketball.nl/img_db/clubs/999.png","naam":"RHINO Basketball","nr":"","org_id":5,"plaats":"Oosterwolde fr","postcode":"8431 ZB","shirt":"onbekend","sportlink":"D3S6Z4X","vestpl":"","web":""},{"adres":"Gracht 25","alt":"Risne Stars","id":181,"logo":"http://db.basketball.nl/img_db/clubs/181.png","naam":"Risne Stars","nr":"3167","org_id":3,"plaats":"Rijssen","postcode":"7461 SC","shirt":"Geel","sportlink":"D1C9S2R","vestpl":"Rijssen","web":"http://www.risnestars.nl"},{"adres":"Peulenstraat 156","alt":"River Trotters","id":81,"logo":"http://db.basketball.nl/img_db/clubs/81.png","naam":"River Trotters","nr":"2182","org_id":2,"plaats":"Hardinxveld-giessendam","postcode":"3371 AR","shirt":"Geel","sportlink":"D1C8Z6D","vestpl":"Hardinxveld-Giessendam","web":"http://www.rivertrotters.nl"},{"adres":"Postbus 8108","alt":"Rotterdam","id":80,"logo":"http://db.basketball.nl/img_db/clubs/80.png","naam":"Rotterdam Basketbal","nr":"2146","org_id":2,"plaats":"Rotterdam","postcode":"3009 AC","shirt":"Zwart","sportlink":"D1C8X12","vestpl":"Rotterdam","web":"http://www.rotterdambasketbal.nl/"},{"adres":"Postbus 91108","alt":"Rotterdam-Zuid","id":102,"logo":"http://db.basketball.nl/img_db/clubs/102.png","naam":"Rotterdam-Zuid","nr":"2184","org_id":2,"plaats":"Rotterdam","postcode":"3007 MC","shirt":"Groen","sportlink":"D1C8Z8F","vestpl":"Rotterdam","web":"http://www.rotterdamzuid.com"},{"adres":"","alt":"","id":1065,"logo":"","naam":"RSW Liège Basket","nr":"","org_id":7,"plaats":"Luik","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Uppsalalaan 3","alt":"S.B.U.","id":2,"logo":"http://db.basketball.nl/img_db/clubs/2.png","naam":"S.B.U.","nr":"2186","org_id":2,"plaats":"Utrecht","postcode":"3584 CT","shirt":"Rood","sportlink":"D1C8Z9G","vestpl":"Utrecht","web":"https://www.studentenbasketballutrecht.nl/ "},{"adres":"Schering 18","alt":"S.V.Z.W.","id":186,"logo":"http://db.basketball.nl/img_db/clubs/186.png","naam":"S.V.Z.W.","nr":"3173","org_id":3,"plaats":"Wierden","postcode":"7641 LS","shirt":"Wit","sportlink":"D1C9S6V","vestpl":"Wierden","web":"http://www.svzwbasketbal.nl"},{"adres":"Bornsesteeg 2","alt":"BV De Zaaier Sphinx","id":184,"logo":"http://db.basketball.nl/img_db/clubs/184.png","naam":"SBA Sphinx","nr":"3171","org_id":3,"plaats":"Wageningen","postcode":"6708 PE","shirt":"Geel","sportlink":"D1C9S4T","vestpl":"Wageningen","web":"http://www.sphinxbasketball.nl"},{"adres":"Europaweg 48","alt":"SC Antilope Utrecht","id":463,"logo":"http://db.basketball.nl/img_db/clubs/463.png","naam":"SC Antilope Utrecht","nr":"2102","org_id":2,"plaats":"Vleuten","postcode":"3451 HG","shirt":"onbekend","sportlink":"D1C9C4F","vestpl":"Utrecht","web":"http://www.sc-antilope.nl/"},{"adres":"Dinkelstraat 12","alt":"Scheldesport Basketball","id":285,"logo":"http://db.basketball.nl/img_db/clubs/285.png","naam":"Scheldesport Basketball","nr":"1177","org_id":4,"plaats":"Terneuzen","postcode":"4535 EC","shirt":"zwart/rood/wit","sportlink":"D1C9T04","vestpl":"Terneuzen","web":"http://www.bvscheldesport.nl"},{"adres":"Achterhoeskamp 24","alt":"Scylla","id":353,"logo":"http://db.basketball.nl/img_db/clubs/353.png","naam":"Scylla","nr":"5139","org_id":5,"plaats":"Haren gn","postcode":"9751 WR","shirt":"Zwart","sportlink":"D1C9Z3F","vestpl":"Groningen","web":"http://www.bvscylla.nl"},{"adres":"Hoofdstraat-West 78","alt":"BV Ekema-Dribbel\'94","id":326,"logo":"http://db.basketball.nl/img_db/clubs/326.png","naam":"SIETSEMA Highlanders","nr":"5111","org_id":5,"plaats":"Uithuizen","postcode":"9981 AE","shirt":"Blauw","sportlink":"D1D0C8V","vestpl":"Uithuizen","web":"http://www.sietsemahighlanders.nl"},{"adres":"Beneluxlaan 52","alt":"Silvertown Lions","id":60,"logo":"http://db.basketball.nl/img_db/clubs/60.png","naam":"Silvertown Lions","nr":"2189","org_id":2,"plaats":"Schoonhoven","postcode":"2871 HH","shirt":"Rood","sportlink":"D1C9B19","vestpl":"Schoonhoven","web":"http://www.silvertownlions.nl"},{"adres":"Acacialaan 28","alt":"Simple Dribble","id":288,"logo":"http://db.basketball.nl/img_db/clubs/288.png","naam":"Simple Dribble","nr":"1180","org_id":4,"plaats":"Steenbergen nb","postcode":"4651 KB","shirt":"Wit","sportlink":"D1C9T2U","vestpl":"Steenbergen","web":"http://www.simpledribble.nl"},{"adres":"De Ploeg 60","alt":"Slamdunk \'97","id":214,"logo":"http://db.basketball.nl/img_db/clubs/214.png","naam":"Slamdunk \'97","nr":"1106","org_id":4,"plaats":"Heesch","postcode":"5384 HP","shirt":"Geel","sportlink":"D1C9W25","vestpl":"Heesch","web":"http://www.slamdunk97.nl"},{"adres":"Biezelingsestraat 51 A","alt":"Smokkelhoek","id":289,"logo":"http://db.basketball.nl/img_db/clubs/289.png","naam":"Smokkelhoek","nr":"1181","org_id":4,"plaats":"Kapelle","postcode":"4421 BN","shirt":"Groen","sportlink":"D1C9T3V","vestpl":"Kapelle","web":"http://bvsmokkelhoek.nl"},{"adres":"Vroonweg 14 D","alt":"Sparta Go","id":109,"logo":"http://db.basketball.nl/img_db/clubs/109.png","naam":"Sparta Go","nr":"2191","org_id":2,"plaats":"Dirksland","postcode":"3247 CG","shirt":"Blauw","sportlink":"D1C9B3B","vestpl":"Sommelsdijk","web":"http://www.spartago.nl/"},{"adres":"Scheg 7","alt":"Sparta Nijkerk","id":27,"logo":"http://db.basketball.nl/img_db/clubs/27.png","naam":"Sparta Nijkerk","nr":"2190","org_id":2,"plaats":"Nijkerk gld","postcode":"3863 VD","shirt":"Oranje","sportlink":"D1C9B2A","vestpl":"Nijkerk","web":"http://www.spartabasketball.nl"},{"adres":"","alt":"","id":1061,"logo":"","naam":"Spirou Basket","nr":"","org_id":7,"plaats":"Spirou","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Barbaraplaats 41","alt":"Springfield/DHOM","id":291,"logo":"http://db.basketball.nl/img_db/clubs/291.png","naam":"Springfield","nr":"1183","org_id":4,"plaats":"\'s-hertogenbosch","postcode":"5211 SK","shirt":"Oranje","sportlink":"D1C9T5X","vestpl":"BERLICUM","web":"http://www.bvspringfield.nl"},{"adres":"Heer Ottostraat 13","alt":"Springfield \'75","id":292,"logo":"http://db.basketball.nl/img_db/clubs/292.png","naam":"Springfield \'75","nr":"1184","org_id":4,"plaats":"Born","postcode":"6121 NB","shirt":"Geel","sportlink":"D1C9T6Y","vestpl":"Born-Buchten","web":"http://www.springfield75.nl/"},{"adres":"","alt":"","id":1060,"logo":"","naam":"Stella Artois Leuven Bears","nr":"","org_id":7,"plaats":"Leuven","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Postbus 312","alt":"SV Argon","id":14,"logo":"http://db.basketball.nl/img_db/clubs/14.png","naam":"SV Argon","nr":"2104","org_id":2,"plaats":"Mijdrecht","postcode":"3640 AH","shirt":"Blauw","sportlink":"D1C9C6H","vestpl":"Mijdrecht","web":"http://www.svargon.nl/"},{"adres":"Postbus 15","alt":"","id":526,"logo":"http://db.basketball.nl/img_db/clubs/526.png","naam":"SV Twello","nr":"3190","org_id":3,"plaats":"Twello","postcode":"7390 AA","shirt":"Blauw","sportlink":"D1D0B5P","vestpl":"Zuiderlaan 5 7391TZ Twel","web":"http://www.svtwello.nl"},{"adres":"Eschersingel 32","alt":"S.V.O. Basketball","id":24,"logo":"http://db.basketball.nl/img_db/clubs/24.png","naam":"SVO Basketball","nr":"2195","org_id":2,"plaats":"Utrecht","postcode":"3544 ML","shirt":"Rood","sportlink":"D1C9B6E","vestpl":"Vleuten","web":"https://svobasketball.nl"},{"adres":"Onze Lieve Vrouwestraat 1","alt":"Tantalus","id":296,"logo":"http://db.basketball.nl/img_db/clubs/296.png","naam":"Tantalus","nr":"1188","org_id":4,"plaats":"Eindhoven","postcode":"5612 AW","shirt":"Groen","sportlink":"D1C9T7Z","vestpl":"Eindhoven","web":"http://tantalus-basketbal.nl/"},{"adres":"","alt":"","id":1058,"logo":"","naam":"Telenet Giants Antwerp","nr":"","org_id":7,"plaats":"Antwerpen","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Clemens van den Bergstraat 18","alt":"Tenderfeet","id":298,"logo":"http://db.basketball.nl/img_db/clubs/298.png","naam":"Tenderfeet","nr":"1190","org_id":4,"plaats":"Heeswijk-dinther","postcode":"5473 DH","shirt":"Blauw","sportlink":"D1C9T93","vestpl":"Heeswijk-Dinther","web":"http://www.tenderfeet.nl"},{"adres":"Fort Alexanderstraat 26","alt":"Black Eagles","id":223,"logo":"http://db.basketball.nl/img_db/clubs/223.png","naam":"The Black Eagles","nr":"1115","org_id":4,"plaats":"Rosmalen","postcode":"5241 XG","shirt":"Zwart/geel","sportlink":"D1C9M7E","vestpl":"Rosmalen","web":"http://www.blackeagles.nl"},{"adres":"Assumburg 46","alt":"The Challengers","id":382,"logo":"http://db.basketball.nl/img_db/clubs/382.png","naam":"The Challengers","nr":"4122","org_id":6,"plaats":"Hoofddorp","postcode":"2135 BA","shirt":"bruinrood","sportlink":"D1C8W08","vestpl":"Hoofddorp","web":"http://www.challengers.nl"},{"adres":"Helioslaan 2","alt":"Jugglers","id":162,"logo":"http://db.basketball.nl/img_db/clubs/162.png","naam":"The Jugglers","nr":"3145","org_id":3,"plaats":"Enschede","postcode":"7534 HW","shirt":"Wit","sportlink":"D1C9Q9S","vestpl":"Enschede","web":"http://www.jugglers.nl"},{"adres":"Sophiaweg 75","alt":"The Lions","id":418,"logo":"http://db.basketball.nl/img_db/clubs/418.png","naam":"The Lions","nr":"4158","org_id":6,"plaats":"Zandvoort","postcode":"2042 PT","shirt":"Geel/blauw","sportlink":"D1C8S1L","vestpl":"Zandvoort","web":"https://www.thelions.nl"},{"adres":"Mient 85","alt":"The Sea Devils","id":432,"logo":"http://db.basketball.nl/img_db/clubs/432.png","naam":"The Sea Devils","nr":"4172","org_id":6,"plaats":"Castricum","postcode":"1901 AD","shirt":"Geel","sportlink":"D1C8T2P","vestpl":"Castricum","web":"http://www.seadevils.nl/"},{"adres":"Postbus 98","alt":"The Valley Bucketiers","id":193,"logo":"http://db.basketball.nl/img_db/clubs/193.png","naam":"The Valley Bucketeers","nr":"3181","org_id":3,"plaats":"Nijverdal","postcode":"7440 AB","shirt":"Geel","sportlink":"D1C9X6C","vestpl":"Nijverdal","web":"http://www.thevalleybucketeers.nl"},{"adres":"Trompstraat 20","alt":"TONEGO \'65","id":187,"logo":"http://db.basketball.nl/img_db/clubs/187.png","naam":"TONEGO \'65","nr":"3174","org_id":3,"plaats":"Haaksbergen","postcode":"7482 VX","shirt":"Rood","sportlink":"D1C9S7W","vestpl":"Haaksbergen","web":"http://www.tonego65.com"},{"adres":"Renswoudsestraatweg 20","alt":"Tower Jumpers","id":188,"logo":"http://db.basketball.nl/img_db/clubs/188.png","naam":"Tower Jumpers","nr":"3176","org_id":3,"plaats":"Barneveld","postcode":"3772 MC","shirt":"Oranje","sportlink":"D1C9S8X","vestpl":"Barneveld","web":"http://www.towerjumpers.nl/"},{"adres":"Eglantier 94","alt":"Tracks Parkstad","id":264,"logo":"http://db.basketball.nl/img_db/clubs/264.png","naam":"Tracks Parkstad","nr":"1156","org_id":4,"plaats":"Brunssum","postcode":"6444 DN","shirt":"Zwart","sportlink":"D1C9K89","vestpl":"Heerlen","web":"https://www.tracksbasketball.nl"},{"adres":"Heyendaalseweg 141","alt":"Trajanum","id":189,"logo":"http://db.basketball.nl/img_db/clubs/189.png","naam":"Trajanum","nr":"3177","org_id":3,"plaats":"Nijmegen","postcode":"6525 AJ","shirt":"Rood","sportlink":"D1C9X39","vestpl":"Nijmegen","web":"http://www.trajanum.nl"},{"adres":"Academielaan 5","alt":"TSBV Pendragon","id":279,"logo":"http://db.basketball.nl/img_db/clubs/279.png","naam":"TSBV Pendragon","nr":"1171","org_id":4,"plaats":"Tilburg","postcode":"5037 ET","shirt":"Rood","sportlink":"D1C9L7B","vestpl":"Tilburg","web":"http://www.tsbv-pendragon.nl/"},{"adres":"Woolderbeekweg 7","alt":"A.T.C. \'65","id":131,"logo":"http://db.basketball.nl/img_db/clubs/131.png","naam":"Twente Buzzards","nr":"3107","org_id":3,"plaats":"Hengelo ov","postcode":"7553 BZ","shirt":"Blauw","sportlink":"D1C9X17","vestpl":"Hengelo","web":"http://www.twentebuzzards.nl"},{"adres":"Tweede Boerhaavestraat 10","alt":"U.S.","id":441,"logo":"http://db.basketball.nl/img_db/clubs/441.png","naam":"U.S.","nr":"4181","org_id":6,"plaats":"Amsterdam","postcode":"1091 AN","shirt":"Zwart","sportlink":"D1C8T4R","vestpl":"Amsterdam","web":"http://www.usbasketball.nl"},{"adres":"Europaweg 48","alt":"","id":499,"logo":"http://db.basketball.nl/img_db/clubs/499.png","naam":"UBALL","nr":"2224","org_id":2,"plaats":"Vleuten","postcode":"3451 HG","shirt":"onbekend","sportlink":"D1C9H6W","vestpl":"Utrecht","web":"http://www.uball.nl"},{"adres":"Kamperfoeliestraat 6","alt":"UBV The Eagles","id":28,"logo":"http://db.basketball.nl/img_db/clubs/28.png","naam":"UBV \\"The Eagles\\"","nr":"2131","org_id":2,"plaats":"De bilt","postcode":"3732 VT","shirt":"Blauw","sportlink":"D1C9F8S","vestpl":"Utrecht","web":"http://www.utrechteagles.nl"},{"adres":"Hoxwier 77","alt":"Uitsmijters","id":191,"logo":"http://db.basketball.nl/img_db/clubs/191.png","naam":"Uitsmijters","nr":"3179","org_id":3,"plaats":"Almelo","postcode":"7608 HB","shirt":"Blauw","sportlink":"D1C9X4A","vestpl":"Almelo","web":"http://www.uitsmijters.nl"},{"adres":"Geison 27","alt":"","id":995,"logo":"http://db.basketball.nl/img_db/clubs/995.png","naam":"United Academy","nr":"3197","org_id":3,"plaats":"Beuningen gld","postcode":"6641 NW","shirt":"onbekend","sportlink":"D1D0H48","vestpl":"Nijmegen","web":"https://unitedacademy.nl/"},{"adres":"Kuijperstraat 14","alt":"UNLIMITED","id":192,"logo":"http://db.basketball.nl/img_db/clubs/192.png","naam":"UNLIMITED","nr":"3180","org_id":3,"plaats":"Elst gld","postcode":"6662 AC","shirt":"Licht Blauw","sportlink":"D1C9X5B","vestpl":"Elst","web":"http://www.bvunlimited.nl"},{"adres":"Postbus 298","alt":"Utrecht Bull\'s","id":25,"logo":"http://db.basketball.nl/img_db/clubs/25.png","naam":"Utrecht Bull\'s","nr":"2116","org_id":2,"plaats":"Utrecht","postcode":"3500 AG","shirt":"Wit","sportlink":"D1C9D5J","vestpl":"Utrecht","web":"http://www.utrechtbulls.nl"},{"adres":"Varenmos 3","alt":"V.B.V.","id":194,"logo":"http://db.basketball.nl/img_db/clubs/194.png","naam":"V.B.V.","nr":"3182","org_id":3,"plaats":"Veenendaal","postcode":"3904 JX","shirt":"Blauw","sportlink":"D1C9X7D","vestpl":"Veenendaal","web":"http://www.vbvbasketbal.nl"},{"adres":"Mark 92","alt":"V.U.A.S.","id":196,"logo":"http://db.basketball.nl/img_db/clubs/196.png","naam":"V.U.A.S.","nr":"3184","org_id":3,"plaats":"Dronten","postcode":"8253 EK","shirt":"Zwart","sportlink":"D1C9X9F","vestpl":"Dronten","web":"https://www.bcvuas.nl"},{"adres":"Edelweisslaan 2","alt":"BBC","id":218,"logo":"http://db.basketball.nl/img_db/clubs/218.png","naam":"Valkenswaard Falcons","nr":"1110","org_id":4,"plaats":"Waalre","postcode":"5582 BW","shirt":"Rood/wit","sportlink":"D1C9M29","vestpl":"Valkenswaard","web":"http://www.valkenswaard-falcons.nl"},{"adres":"Schans 39","alt":"Akrides","id":366,"logo":"http://db.basketball.nl/img_db/clubs/366.png","naam":"VBC Akrides","nr":"4105","org_id":6,"plaats":"Beverwijk","postcode":"1941 JR","shirt":"Blauw/gele bies","sportlink":"D1C8V1U","vestpl":"Velsen","web":"http://www.Akrides.nl"},{"adres":"Arienswei 17","alt":"Venlo Sport Crusaders","id":302,"logo":"http://db.basketball.nl/img_db/clubs/302.png","naam":"Venlo Sport Crusaders","nr":"1194","org_id":4,"plaats":"Venlo","postcode":"5912 JC","shirt":"Rood","sportlink":"D1C9V22","vestpl":"Venlo","web":"http://www.venlosport.nl"},{"adres":"Raadhuisstraat 42","alt":"Vido","id":303,"logo":"http://db.basketball.nl/img_db/clubs/303.png","naam":"Vido","nr":"1195","org_id":4,"plaats":"Waalre","postcode":"5582 JE","shirt":"Groen","sportlink":"D1C9V33","vestpl":"Veldhoven","web":"http://bcvido.nl"},{"adres":"Nieuwe Damlaan 862","alt":null,"id":1004,"logo":"http://db.basketball.nl/img_db/clubs/1004.png","naam":"Vlaardingen Captains","nr":null,"org_id":1,"plaats":"Schiedam","postcode":"3118 AC","shirt":"onbekend","sportlink":"D3W7T3D","vestpl":null,"web":null},{"adres":"Van Goghstraat 12","alt":"Vlijmscherp","id":305,"logo":"http://db.basketball.nl/img_db/clubs/305.png","naam":"Vlijmscherp SVH","nr":"1197","org_id":4,"plaats":"Drunen","postcode":"5151 SR","shirt":"Blauw","sportlink":"D1C9V55","vestpl":"Vlijmen","web":"http://www.vlijmscherpsvh.nl"},{"adres":"De Poel 4","alt":"GBM/Volendam","id":389,"logo":"http://db.basketball.nl/img_db/clubs/389.png","naam":"Volendam","nr":"4129","org_id":6,"plaats":"Volendam","postcode":"1132 AK","shirt":"Oranje","sportlink":"D1C8W42","vestpl":"Volendam","web":"http://www.basketbalvolendam.nl"},{"adres":"Voorthuizerstraat 92","alt":"Volic","id":195,"logo":"http://db.basketball.nl/img_db/clubs/195.png","naam":"Volic","nr":"3183","org_id":3,"plaats":"Putten","postcode":"3881 SK","shirt":"Wit","sportlink":"D1C9X8E","vestpl":"Putten","web":"http://www.volic.nl/"},{"adres":"Beukenlaan 1 a","alt":"Vossenberg","id":309,"logo":"http://db.basketball.nl/img_db/clubs/309.png","naam":"Vossenberg","nr":"1201","org_id":4,"plaats":"Oudenbosch","postcode":"4731 CD","shirt":"Rood","sportlink":"D1C9V99","vestpl":"Oudenbosch","web":"http://www.bcvossenberg.nl/"},{"adres":"Kerklaan 50","alt":"Waterdragers","id":104,"logo":"http://db.basketball.nl/img_db/clubs/104.png","naam":"Waterdragers","nr":"2205","org_id":2,"plaats":"Nieuwerkerk ad ijssel","postcode":"2912 CK","shirt":"Zwart/wit","sportlink":"D1C9H1R","vestpl":"Nieuwerkerk aan den IJse","web":"http://www.waterdragers.nl"},{"adres":"Laan van Hildernisse-Noord 6","alt":"Jumping Crabs","id":260,"logo":"http://db.basketball.nl/img_db/clubs/260.png","naam":"WBB Giants","nr":"1152","org_id":4,"plaats":"Bergen op zoom","postcode":"4617 AE","shirt":"Rood","sportlink":"D1C9K56","vestpl":"Bergen op Zoom","web":"http://www.wbbgiants.nl"},{"adres":"Midden Woerd 14","alt":"Westland Stars","id":56,"logo":"http://db.basketball.nl/img_db/clubs/56.png","naam":"Westland Stars","nr":"2206","org_id":2,"plaats":"Naaldwijk","postcode":"2671 DK","shirt":"Blauw/wit","sportlink":"D1C9H2S","vestpl":"\'s-GRAVENZANDE","web":"http://www.westlandstars.nl/"},{"adres":null,"alt":null,"id":1068,"logo":"http://db.basketball.nl/img_db/clubs/1068.png","naam":"WIK","nr":null,"org_id":1,"plaats":"Rheden","postcode":null,"shirt":"onbekend","sportlink":"D4P4C7F","vestpl":null,"web":null},{"adres":"Tolhuis 3353","alt":"Wildcats","id":199,"logo":"http://db.basketball.nl/img_db/clubs/199.png","naam":"Wildcats","nr":"3108","org_id":3,"plaats":"Nijmegen","postcode":"6537 NJ","shirt":"Zwart","sportlink":"D1C9Y2B","vestpl":"Nijmegen","web":"http://www.wildcats-nijmegen.nl/site/"},{"adres":"Draaikolk 10","alt":"Windmills","id":445,"logo":"http://db.basketball.nl/img_db/clubs/445.png","naam":"Windmills","nr":"4185","org_id":6,"plaats":"Oostzaan","postcode":"1511 JG","shirt":"Rood","sportlink":"D1C8T5S","vestpl":"Zaandam","web":"http://www.thewindmills.nl"},{"adres":"Prins Hendrikweg 18","alt":"Woodpeckers","id":31,"logo":"http://db.basketball.nl/img_db/clubs/31.png","naam":"Woodpeckers","nr":"2208","org_id":2,"plaats":"Houten","postcode":"3991 BT","shirt":"Wit/Blauw","sportlink":"D1C9H3T","vestpl":"Houten","web":"http://www.bcwoodpeckers.nl"},{"adres":"1e Wormenseweg 54","alt":"WSV","id":135,"logo":"http://db.basketball.nl/img_db/clubs/135.png","naam":"WSV","nr":"3112","org_id":3,"plaats":"Apeldoorn","postcode":"7331 DH","shirt":"Zwart/wit","sportlink":"D1C9P0Q","vestpl":"Apeldoorn","web":"http://www.wsv-apeldoorn.nl/"},{"adres":"Helmondsestraat 59","alt":"Yellow Sox","id":312,"logo":"http://db.basketball.nl/img_db/clubs/312.png","naam":"Yellow Sox","nr":"1204","org_id":4,"plaats":"Bakel","postcode":"5761 CR","shirt":"Zwart","sportlink":"D1C9W14","vestpl":"Bakel","web":"http://www.yellowsox.nl"},{"adres":"","alt":"","id":914,"logo":"","naam":"Zedelgem Lions","nr":"","org_id":1,"plaats":"","postcode":"","shirt":"onbekend","sportlink":null,"vestpl":"","web":""},{"adres":"Amaranthout 25","alt":"Zoebas","id":46,"logo":"http://db.basketball.nl/img_db/clubs/46.png","naam":"Zoebas","nr":"2210","org_id":2,"plaats":"Zoetermeer","postcode":"2719 MR","shirt":"Zwart/oranje","sportlink":"D1C9H4U","vestpl":"Zoetermeer","web":"http://www.zoebas.nl"},{"adres":"Havixhorst 37","alt":"BV Zuidlaren","id":360,"logo":"http://db.basketball.nl/img_db/clubs/360.png","naam":"Zuidlaren Trojans","nr":"5146","org_id":5,"plaats":"Zuidlaren","postcode":"9472 RS","shirt":"Zwart","sportlink":"D1C9Z9L","vestpl":"ZuidLaren","web":"https://www.zuidlarentrojans.nl/"}],"last_change":"2025-02-13 14:23:26","version":"1.6"}');

/***/ }),

/***/ "./example-json/stand.json":
/*!*********************************!*\
  !*** ./example-json/stand.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"aantal_teams":12,"gewijzigd":"2025-02-22 21:10:28","id":"427","nummer":"9780","seizoen":"2024-2025","soort":"Regulier","stand":[{"afko":"BV Wyba MSE 1","clb_id":197,"datum":"2025-02-22","eigenscore":1577,"gespeeld":18,"ID":1781,"logo":"http://db.basketball.nl/img_db/clubs/197.png","percentage":"100.0","positie":"1","punten":36,"rang":"1","saldo":367,"status":"Actief","team":"BV Wyba Mannen Senioren 1","tegenscore":1210},{"afko":"Hot Pepper Heat MSE 2","clb_id":907,"datum":"2025-02-15","eigenscore":1318,"gespeeld":17,"ID":12232,"logo":"http://db.basketball.nl/img_db/clubs/907.png","percentage":"64.7","positie":"2","punten":22,"rang":"2","saldo":40,"status":"Actief","team":"Hot Pepper Heat Mannen Senioren 2","tegenscore":1278},{"afko":"B.C. Virtus MSE 1","clb_id":304,"datum":"2025-02-15","eigenscore":1156,"gespeeld":17,"ID":3020,"logo":"http://db.basketball.nl/img_db/clubs/304.png","percentage":"64.7","positie":"3","punten":22,"rang":"3","saldo":101,"status":"Actief","team":"B.C. Virtus Mannen Senioren 1","tegenscore":1055},{"afko":"Achilles \'71 MSE 1","clb_id":210,"datum":"2025-02-15","eigenscore":1212,"gespeeld":16,"ID":2462,"logo":"http://db.basketball.nl/img_db/clubs/210.png","percentage":"56.2","positie":"4","punten":18,"rang":"4","saldo":50,"status":"Actief","team":"Achilles \'71 Mannen Senioren 1","tegenscore":1162},{"afko":"Heroes Den Bosch MSE 2","clb_id":518,"datum":"2025-02-15","eigenscore":1246,"gespeeld":16,"ID":13537,"logo":"http://db.basketball.nl/img_db/clubs/518.png","percentage":"56.2","positie":"5","punten":18,"rang":"5","saldo":-59,"status":"Actief","team":"Heroes Den Bosch Mannen Senioren 2","tegenscore":1305},{"afko":"High Five MSE 1","clb_id":255,"datum":"2025-02-15","eigenscore":1159,"gespeeld":16,"ID":2734,"logo":"http://db.basketball.nl/img_db/clubs/255.png","percentage":"50.0","positie":"6","punten":16,"rang":"6","saldo":36,"status":"Actief","team":"High Five Mannen Senioren 1","tegenscore":1123},{"afko":"TSBV Pendragon MSE 1","clb_id":279,"datum":"2025-02-22","eigenscore":1258,"gespeeld":17,"ID":2867,"logo":"http://db.basketball.nl/img_db/clubs/279.png","percentage":"47.1","positie":"7","punten":16,"rang":"7","saldo":25,"status":"Actief","team":"TSBV Pendragon Mannen Senioren 1","tegenscore":1233},{"afko":"Lokomotief MSE 2","clb_id":83,"datum":"2025-02-22","eigenscore":1190,"gespeeld":17,"ID":391,"logo":"http://db.basketball.nl/img_db/clubs/83.png","percentage":"47.1","positie":"8","punten":16,"rang":"8","saldo":-31,"status":"Actief","team":"Lokomotief Mannen Senioren 2","tegenscore":1221},{"afko":"CBV Binnenland MSE 1","clb_id":53,"datum":"2025-02-22","eigenscore":1102,"gespeeld":17,"ID":1308,"logo":"http://db.basketball.nl/img_db/clubs/53.png","percentage":"29.4","positie":"9","punten":10,"rang":"9","saldo":-102,"status":"Actief","team":"CBV Binnenland Mannen Senioren 1","tegenscore":1204},{"afko":"DAS MSE 1","clb_id":47,"datum":"2025-02-22","eigenscore":1179,"gespeeld":17,"ID":1709,"logo":"http://db.basketball.nl/img_db/clubs/47.png","percentage":"29.4","positie":"10","punten":10,"rang":"10","saldo":-149,"status":"Actief","team":"DAS Mannen Senioren 1","tegenscore":1328},{"afko":"Almere Pioneers MSE 1","clb_id":34,"datum":"2025-02-15","eigenscore":1076,"gespeeld":16,"ID":36,"logo":"http://db.basketball.nl/img_db/clubs/34.png","percentage":"25.0","positie":"11","punten":8,"rang":"11","saldo":-196,"status":"Actief","team":"Almere Pioneers Mannen Senioren 1","tegenscore":1272},{"afko":"Rotterdam Basketbal MSE 1","clb_id":80,"datum":"2025-02-15","eigenscore":1292,"gespeeld":16,"ID":3103,"logo":"http://db.basketball.nl/img_db/clubs/80.png","percentage":"25.0","positie":"12","punten":8,"rang":"12","saldo":-82,"status":"Actief","team":"Rotterdam Basketbal Mannen Senioren 1","tegenscore":1374}],"version":"1.1"}');

/***/ }),

/***/ "./example-json/team.json":
/*!********************************!*\
  !*** ./example-json/team.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"last_change":"2025-02-22 20:10:28","seizoen":"2024-2025","teams":[{"club_id":197,"comp_id":4293,"helft":null,"id":12183,"naam":"Gemengd U10 1","soort":"Regulier","sportlink":2854},{"club_id":197,"comp_id":4623,"helft":null,"id":12183,"naam":"Gemengd U10 1","soort":"Regulier","sportlink":2854},{"club_id":197,"comp_id":4317,"helft":"1e","id":10146,"naam":"Gemengd U12 1","soort":"Regulier","sportlink":2855},{"club_id":197,"comp_id":4639,"helft":"2e","id":10146,"naam":"Gemengd U12 1","soort":"Regulier","sportlink":2855},{"club_id":197,"comp_id":4330,"helft":"1e","id":10100,"naam":"Gemengd U12 2","soort":"Regulier","sportlink":5271},{"club_id":197,"comp_id":4690,"helft":"2e","id":10100,"naam":"Gemengd U12 2","soort":"Regulier","sportlink":5271},{"club_id":197,"comp_id":4352,"helft":"1e","id":10858,"naam":"Gemengd U14 1","soort":"Regulier","sportlink":5116},{"club_id":197,"comp_id":4709,"helft":"2e","id":10858,"naam":"Gemengd U14 1","soort":"Regulier","sportlink":5116},{"club_id":197,"comp_id":4372,"helft":"1e","id":10859,"naam":"Gemengd U14 2","soort":"Regulier","sportlink":2856},{"club_id":197,"comp_id":4763,"helft":"2e","id":10859,"naam":"Gemengd U14 2","soort":"Regulier","sportlink":2856},{"club_id":197,"comp_id":427,"helft":"heel","id":1781,"naam":"Mannen Senioren 1","soort":"Regulier","sportlink":2846},{"club_id":197,"comp_id":4183,"helft":"heel","id":2181,"naam":"Mannen Senioren 2","soort":"Regulier","sportlink":2847},{"club_id":197,"comp_id":4190,"helft":"heel","id":2182,"naam":"Mannen Senioren 3","soort":"Regulier","sportlink":2848},{"club_id":197,"comp_id":4084,"helft":"1e","id":2187,"naam":"Mannen U16 1","soort":"Regulier","sportlink":5148},{"club_id":197,"comp_id":4422,"helft":"2e","id":2187,"naam":"Mannen U16 1","soort":"Regulier","sportlink":5148},{"club_id":197,"comp_id":4098,"helft":"1e","id":2188,"naam":"Mannen U16 2","soort":"Regulier","sportlink":5179},{"club_id":197,"comp_id":4451,"helft":"2e","id":2188,"naam":"Mannen U16 2","soort":"Regulier","sportlink":5179},{"club_id":197,"comp_id":4132,"helft":"1e","id":2185,"naam":"Mannen U18 1","soort":"Regulier","sportlink":2850},{"club_id":197,"comp_id":4488,"helft":"2e","id":2185,"naam":"Mannen U18 1","soort":"Regulier","sportlink":2850},{"club_id":197,"comp_id":4166,"helft":"1e","id":12898,"naam":"Mannen U22 1","soort":"Regulier","sportlink":6484},{"club_id":197,"comp_id":4508,"helft":"2e","id":12898,"naam":"Mannen U22 1","soort":"Regulier","sportlink":6484},{"club_id":197,"comp_id":4168,"helft":"1e","id":12899,"naam":"Mannen U22 2","soort":"Regulier","sportlink":6405},{"club_id":197,"comp_id":4513,"helft":"2e","id":12899,"naam":"Mannen U22 2","soort":"Regulier","sportlink":6405},{"club_id":197,"comp_id":4538,"helft":"2e","id":12096,"naam":"Vrouwen U12 1","soort":"Regulier","sportlink":2851},{"club_id":197,"comp_id":4233,"helft":"1e","id":12807,"naam":"Vrouwen U14 1","soort":"Regulier","sportlink":5775},{"club_id":197,"comp_id":4552,"helft":"2e","id":12807,"naam":"Vrouwen U14 1","soort":"Regulier","sportlink":5775},{"club_id":197,"comp_id":4240,"helft":"1e","id":7098,"naam":"Vrouwen U16 1","soort":"Regulier","sportlink":4110},{"club_id":197,"comp_id":4556,"helft":"2e","id":7098,"naam":"Vrouwen U16 1","soort":"Regulier","sportlink":4110},{"club_id":197,"comp_id":4251,"helft":"1e","id":1782,"naam":"Vrouwen U18 1","soort":"Regulier","sportlink":2853},{"club_id":197,"comp_id":4568,"helft":"2e","id":1782,"naam":"Vrouwen U18 1","soort":"Regulier","sportlink":2853},{"club_id":197,"comp_id":4261,"helft":"1e","id":14043,"naam":"Vrouwen U22 1","soort":"Regulier","sportlink":10398},{"club_id":197,"comp_id":4580,"helft":"2e","id":14043,"naam":"Vrouwen U22 1","soort":"Regulier","sportlink":10398}],"version":"1.5"}');

/***/ }),

/***/ "./src/ranking/block.json":
/*!********************************!*\
  !*** ./src/ranking/block.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"nbb-basketball-stats/ranking","version":"0.1.0","title":"Standen","category":"widgets","icon":"editor-ol","description":"De huidige stand van een team binnen een competitie.","textdomain":"nbb-basketball-stats/ranking","example":{},"attributes":{"selectedClubId":{"default":0,"type":"number"},"selectedTeamId":{"default":0,"type":"number"}},"supports":{"html":false,"color":{"background":true,"text":true},"align":["wide","full"],"spacing":{"padding":true,"margin":true}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ranking/index": 0,
/******/ 			"ranking/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunknbb_basketball_stats"] = globalThis["webpackChunknbb_basketball_stats"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["ranking/style-index"], () => (__webpack_require__("./src/ranking/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
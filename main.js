(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my-git-repo-family\hbd-mano-guess\src\main.ts */"zUnb");


/***/ }),

/***/ "1Pwt":
/*!***************************************************************************!*\
  !*** ./src/app/components/mm-image-preview/mm-image-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: MmImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmImagePreviewComponent", function() { return MmImagePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class MmImagePreviewComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        // this.fullImage = data;
        this.dare = data;
    }
    ngOnInit() {
    }
    closeDialogue() {
        this.dialogRef.close(true);
    }
}
MmImagePreviewComponent.ɵfac = function MmImagePreviewComponent_Factory(t) { return new (t || MmImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
MmImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MmImagePreviewComponent, selectors: [["app-mm-image-preview"]], decls: 2, vars: 1, consts: [[2, "font-size", "2rem", "font-weight", "bold"]], template: function MmImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dare, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW0taW1hZ2UtcHJldmlldy9tbS1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MmImagePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mm-image-preview',
                templateUrl: './mm-image-preview.component.html',
                styleUrls: ['./mm-image-preview.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DEez":
/*!**********************************!*\
  !*** ./src/assets/darelist.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Do multiple action\",\"Perfome a movie\\ndialogue\",\"Imitate someone\",\"Dance for a song\",\"Sing a song\",\"Drink a liter bottle\\nin one go\",\"Do a Moon Walk\",\"Make a Love proposal\",\"Put flour in face\",\"Put lipstick and post\\nthe pic\",\"Eat Cake without\\nusing hands\",\"Read a sentence\\nbackwards\",\"Bite a lemon\",\"Do as friends demand\",\"Put Nailpolish and pose\\nfor a post\",\"Draw a pic using legs\",\"Sing a song with\\nwater in mouth\",\"15 தோப்புக்கரணம்\",\"Do a Tik Tok\",\"Put shaving cream in\\nface for 2 rounds\",\"20 Skipping\",\"Drink raw egg /\\ngingly oil\",\"Drink salt water\"]");

/***/ }),

/***/ "IbI9":
/*!*******************************!*\
  !*** ./src/assets/quizq.json ***!
  \*******************************/
/*! exports provided: tk, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tk\":[{\"key\":0,\"displayText\":\"Mano's Favorite Adventure ?\",\"answers\":[{\"key\":0,\"displayText\":\"Sky Diving\",\"isAnswer\":true},{\"key\":1,\"displayText\":\"Mountaineering\",\"isAnswer\":false},{\"key\":2,\"displayText\":\"Scuba Diving\",\"isAnswer\":false},{\"key\":3,\"displayText\":\"Bungee Jumping\",\"isAnswer\":false}]},{\"key\":1,\"displayText\":\"Mano's Favorite Icecream flavour ?\",\"answers\":[{\"key\":0,\"displayText\":\"Jack Fruit\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Lychee\",\"isAnswer\":true},{\"key\":2,\"displayText\":\"Bubble Gum\",\"isAnswer\":false},{\"key\":3,\"displayText\":\"Butterscotch\",\"isAnswer\":false}]}]}");

/***/ }),

/***/ "Jf9a":
/*!**********************************!*\
  !*** ./src/app/utils/utility.ts ***!
  \**********************************/
/*! exports provided: utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utility", function() { return utility; });
class utility {
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    static getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}


/***/ }),

/***/ "Kz4e":
/*!**********************************!*\
  !*** ./src/assets/guessWho.json ***!
  \**********************************/
/*! exports provided: gw, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"gw\":[{\"key\":0,\"displayText\":\"She is blessed with ever smiling and divine looking smart girl\",\"answer\":\"Mama\",\"answers\":[{\"key\":2,\"displayText\":\"Mama\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Athan\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Kavi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Mama, Athan, Kavi\"},{\"key\":1,\"displayText\":\"Bold & திறமைசாலி\",\"answer\":\"Athai\",\"answers\":[{\"key\":2,\"displayText\":\"Athai\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Amma\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Jeyanthi Amma\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Athai, Amma, Jeyanthi Amma\"},{\"key\":2,\"displayText\":\"பிடிவாதக்காரி & settakaari\",\"answer\":\"Ramesh Appa\",\"answers\":[{\"key\":2,\"displayText\":\"Ramesh Appa\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Jeyanthi Amma\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Harini\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Ramesh Appa, Jeyanthi Amma, Harini\"},{\"key\":3,\"displayText\":\"Simple\",\"answer\":\"Jeyanthi Amma\",\"answers\":[{\"key\":2,\"displayText\":\"Jeyanthi Amma\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Amma\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Kavi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Jeyanthi Amma, Amma, Kavi\"},{\"key\":4,\"displayText\":\"மண்ணுஉருண்டை\",\"answer\":\"Santo\",\"answers\":[{\"key\":2,\"displayText\":\"Santo\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Sabha\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Harini\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Santo, Sabha, Harini\"},{\"key\":5,\"displayText\":\"She's my everything\",\"answer\":\"Harini\",\"answers\":[{\"key\":2,\"displayText\":\"Harini\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Sabha\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Santo\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Harini, Sabha, Santo\"},{\"key\":6,\"displayText\":\"2nd gear driver\",\"answer\":\"Sabha\",\"answers\":[{\"key\":2,\"displayText\":\"Sabha\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Athan\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Santo\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Sabha, Athan, Santo\"},{\"key\":7,\"displayText\":\"Most dedicated, talented, dynamic with an extra pinch of Goofiness 😜🤗\",\"answer\":\"Athan\",\"answers\":[{\"key\":2,\"displayText\":\"Athan\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Mama\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Kavi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Athan, Mama, Kavi\"},{\"key\":8,\"displayText\":\"Good Dancer like me.\",\"answer\":\"Kavi\",\"answers\":[{\"key\":2,\"displayText\":\"Kavi\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Harini\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Santo\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Kavi, Harini, Santo\"},{\"key\":9,\"displayText\":\"வேலைன்னு வந்துட்டா வெள்ளக்காரி\",\"answer\":\"Amma\",\"answers\":[{\"key\":2,\"displayText\":\"Amma\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Kavi\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Appa\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Amma, Kavi, Appa\"},{\"key\":10,\"displayText\":\"perfect grl\",\"answer\":\"Appa\",\"answers\":[{\"key\":2,\"displayText\":\"Appa\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Athan\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Mama\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Appa, Athan, Mama\"},{\"key\":11,\"displayText\":\"sara vedi maadhri pesuva(bullet train)\",\"answer\":\"Vicky tuty\",\"answers\":[{\"key\":2,\"displayText\":\"Vicky tuty\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Yoga\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Amritha\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Vicky tuty, Yoga, Amritha\"},{\"key\":12,\"displayText\":\"thanga meenakshi\",\"answer\":\"Anand\",\"answers\":[{\"key\":2,\"displayText\":\"Anand\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Santo\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Sabha\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Anand, Santo, Sabha\"},{\"key\":13,\"displayText\":\"childish looks like priyanga deshpande\",\"answer\":\"Yoga\",\"answers\":[{\"key\":2,\"displayText\":\"Yoga\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Amritha\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Vicky tuty\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Yoga, Amritha, Vicky tuty\"},{\"key\":14,\"displayText\":\"ne oru kucha\",\"answer\":\"Amritha\",\"answers\":[{\"key\":2,\"displayText\":\"Amritha\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Yoga\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Vicky tuty\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Amritha, Yoga, Vicky tuty\"},{\"key\":15,\"displayText\":\"caring,easily mingle\",\"answer\":\"Keerthu\",\"answers\":[{\"key\":2,\"displayText\":\"Keerthu\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Varshini\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Vicky tuty\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Keerthu, Varshini, Vicky tuty\"},{\"key\":16,\"displayText\":\"Paasakaara vaayadi ❤️\",\"answer\":\"Varshini\",\"answers\":[{\"key\":2,\"displayText\":\"Varshini\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Keerthu\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Anand\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Varshini, Keerthu, Anand\"},{\"key\":17,\"displayText\":\"she s my greatest blessing❤️\",\"answer\":\"Gaju\",\"answers\":[{\"key\":2,\"displayText\":\"Gaju\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Haritha\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Nisga\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Gaju, Haritha, Nisga\"},{\"key\":18,\"displayText\":\"Happy Birthday Akka😇❤️ ,a good soul with lot of creativity, I hope you’ve had a great year and I wish you many more. Waiting for your version of Arabic kuthu ,soon will do one dance reels...😎🤟🏻\",\"answer\":\"Pandi\",\"answers\":[{\"key\":2,\"displayText\":\"Pandi\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Nidhi\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Krithika\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Pandi, Nidhi, Krithika\"},{\"key\":19,\"displayText\":\"Mano is my world, en uyir ulagam elame ne dhan. Una pathi dhan nenachtruken epome.. 😂😂\",\"answer\":\"Haritha\",\"answers\":[{\"key\":2,\"displayText\":\"Haritha\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Priya\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Taanya\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Haritha, Priya, Taanya\"},{\"key\":20,\"displayText\":\"Hi future husband. Today is sweetie’s birthday. We have  shared many funny and happy moments in a short duration and I love her so much.\",\"answer\":\"Deeksha\",\"answers\":[{\"key\":2,\"displayText\":\"Deeksha\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Priya\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Nisga\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Deeksha, Priya, Nisga\"},{\"key\":21,\"displayText\":\"My sweetie is the best 💖\",\"answer\":\"Priya\",\"answers\":[{\"key\":2,\"displayText\":\"Priya\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Taanya\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Haritha\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Priya, Taanya, Haritha\"},{\"key\":22,\"displayText\":\"Hyy sweetie 😍. Epdi irukka? Cheers to all the gsfs memories 🥂❤️. Missing u.... Get married soon 😜\",\"answer\":\"Nisga\",\"answers\":[{\"key\":2,\"displayText\":\"Nisga\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Priya\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Deeksha\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Nisga, Priya, Deeksha\"},{\"key\":23,\"displayText\":\"The multitalented & most dedicated person with a sweet soul and genuine heart who fortunately crossed my life and become one of my go to person in a very short time❤️‍🔥\",\"answer\":\"Kattalagan\",\"answers\":[{\"key\":2,\"displayText\":\"Kattalagan\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Mohan\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Pandi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Kattalagan, Mohan, Pandi\"},{\"key\":24,\"displayText\":\"Mannuuu baabbiieee - the most sweeetest super energetic besst friend anyone could get!! 😅🥰❤️\",\"answer\":\"Taanya\",\"answers\":[{\"key\":2,\"displayText\":\"Taanya\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Nisga\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Haritha\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Taanya, Nisga, Haritha\"},{\"key\":25,\"displayText\":\"Puttinaroju subhakankshalu mano garu\",\"answer\":\"Mohan\",\"answers\":[{\"key\":2,\"displayText\":\"Mohan\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Kattalagan\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Pandi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Mohan, Kattalagan, Pandi\"},{\"key\":26,\"displayText\":\"Happiest birthday to my precious ❤️.You are an inspiration manoka\",\"answer\":\"Nidhi\",\"answers\":[{\"key\":2,\"displayText\":\"Nidhi\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Pandi\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Krithika\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Nidhi, Pandi, Krithika\"},{\"key\":27,\"displayText\":\"Wishing yuuu a very very happy birthdayyyy prettiesttt❣️🤩the one person whom I saw frst wen i entered the clg and one bond cherish for my life...😝😅Onlyyyy thing which is very pretty about u is yur innocence dontt lose it😇❣️🥳 Again have a happyyy and succesful year to the best sisy 🥰😘💙\",\"answer\":\"Krithika\",\"answers\":[{\"key\":2,\"displayText\":\"Krithika\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Pandi\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Nidhi\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Krithika, Pandi, Nidhi\"},{\"key\":28,\"displayText\":\"My zero story teller\",\"answer\":\"Aishu\",\"answers\":[{\"key\":2,\"displayText\":\"Aishu\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Rash\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Yoga\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Krithika, Pandi, Nidhi\"},{\"key\":29,\"displayText\":\"😍🥰 Mano, my sissy you're simply stylish,artistic nd such a luvly kind hearted girl🥰😍\",\"answer\":\"Rash\",\"answers\":[{\"key\":2,\"displayText\":\"Rash\",\"isAnswer\":true},{\"key\":0,\"displayText\":\"Tuty Vicky\",\"isAnswer\":false},{\"key\":1,\"displayText\":\"Aishu\",\"isAnswer\":false}],\"image\":null,\"hint\":null,\"randomIn\":\"Krithika, Pandi, Nidhi\"}]}");

/***/ }),

/***/ "P8f8":
/*!****************************************!*\
  !*** ./src/app/services/mm.service.ts ***!
  \****************************************/
/*! exports provided: MmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmService", function() { return MmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_guessWho_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/guessWho.json */ "Kz4e");
var _assets_guessWho_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/guessWho.json */ "Kz4e", 1);
/* harmony import */ var _assets_quizq_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/quizq.json */ "IbI9");
var _assets_quizq_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/quizq.json */ "IbI9", 1);
/* harmony import */ var _assets_darelist_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/darelist.json */ "DEez");
var _assets_darelist_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/darelist.json */ "DEez", 1);
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utility */ "Jf9a");






class MmService {
    constructor() {
        this.quizQ = _assets_quizq_json__WEBPACK_IMPORTED_MODULE_2__;
        this.dareList = _assets_darelist_json__WEBPACK_IMPORTED_MODULE_3__;
        this.quessWho = _assets_guessWho_json__WEBPACK_IMPORTED_MODULE_1__;
        this.imageSourceAry = [];
    }
    getQuizQ() {
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(this.quizQ.tk);
        this.quizQ.tk.forEach(question => {
            _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(question.answers);
        });
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(this.quizQ.tk);
        return this.quizQ.tk;
    }
    getDareList(dimension) {
        const seed = [...Array(this.dareList.length).keys()];
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(seed);
        const maxCount = seed.length > 6 ? 6 : seed.length;
        const colors = ['#eae66f', '#88f26e', '#7de6ef'];
        const dareList = [];
        let colorIndex = 0;
        for (let index = 0; index < maxCount; index++) {
            if (++colorIndex == colors.length) {
                colorIndex = 0;
            }
            const displayText = this.dareList[seed[index]];
            dareList.push({
                fillStyle: colors[colorIndex],
                text: `${displayText}`,
                id: index,
                textFillStyle: 'black',
                textFontSize: dimension > 500 ? '17' : '10'
            });
        }
        return dareList;
    }
    removeDare(dare) {
        if (dare) {
            this.dareList = this.dareList.filter(obj => obj !== dare);
        }
    }
    getGuessWhoQ() {
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(this.quessWho.gw);
        this.quessWho.gw.forEach(question => {
            _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(question.answers);
        });
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(this.quessWho.gw);
        return this.quessWho.gw;
    }
    getImageList() {
        for (var index = 1; index < 60; index++) {
            this.imageSourceAry.push({ path: '../../../assets/bg_compressed/' + index + '.jpg' });
        }
        _utils_utility__WEBPACK_IMPORTED_MODULE_4__["utility"].shuffleArray(this.imageSourceAry);
        return this.imageSourceAry;
    }
}
MmService.ɵfac = function MmService_Factory(t) { return new (t || MmService)(); };
MmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MmService, factory: MmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_mm_home_mm_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mm-home/mm-home.component */ "bwAt");



class AppComponent {
    constructor() {
        this.title = 'hbd-mano-guess';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mm-home");
    } }, directives: [_components_mm_home_mm_home_component__WEBPACK_IMPORTED_MODULE_1__["MmHomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_mm_home_mm_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mm-home/mm-home.component */ "bwAt");
/* harmony import */ var ngx_arc_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-arc-text */ "rFhB");
/* harmony import */ var _components_mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mm-image-preview/mm-image-preview.component */ "1Pwt");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-wheel */ "I2wp");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_arc_text__WEBPACK_IMPORTED_MODULE_14__["NgxArcTextModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
            ngx_wheel__WEBPACK_IMPORTED_MODULE_34__["NgxWheelModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_mm_home_mm_home_component__WEBPACK_IMPORTED_MODULE_13__["MmHomeComponent"],
        _components_mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_15__["MmImagePreviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_arc_text__WEBPACK_IMPORTED_MODULE_14__["NgxArcTextModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
        ngx_wheel__WEBPACK_IMPORTED_MODULE_34__["NgxWheelModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_mm_home_mm_home_component__WEBPACK_IMPORTED_MODULE_13__["MmHomeComponent"],
                    _components_mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_15__["MmImagePreviewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_arc_text__WEBPACK_IMPORTED_MODULE_14__["NgxArcTextModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
                    ngx_wheel__WEBPACK_IMPORTED_MODULE_34__["NgxWheelModule"]
                ],
                entryComponents: [_components_mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_15__["MmImagePreviewComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bwAt":
/*!*********************************************************!*\
  !*** ./src/app/components/mm-home/mm-home.component.ts ***!
  \*********************************************************/
/*! exports provided: MmHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmHomeComponent", function() { return MmHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wheel */ "I2wp");
/* harmony import */ var _mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mm-image-preview/mm-image-preview.component */ "1Pwt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_mm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mm.service */ "P8f8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













const _c0 = ["videoPlayer"];
function MmHomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MmHomeComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onQuizStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MmHomeComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function MmHomeComponent_div_2_mat_radio_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MmHomeComponent_div_2_mat_radio_button_8_Template_mat_radio_button_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onAnswerSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", answer_r9.isAnswer && ctx_r7.showCorrectAnswer ? "#00c853" : "ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", answer_r9.displayText, " ");
} }
function MmHomeComponent_div_2_div_9_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MmHomeComponent_div_2_div_9_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.showQuizPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MmHomeComponent_div_2_div_9_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MmHomeComponent_div_2_div_9_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.showWheelPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MmHomeComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MmHomeComponent_div_2_div_9_button_3_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MmHomeComponent_div_2_div_9_button_4_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.selectedAnswer == null ? null : ctx_r8.selectedAnswer.isAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r8.selectedAnswer == null ? null : ctx_r8.selectedAnswer.isAnswer));
} }
function MmHomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-radio-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MmHomeComponent_div_2_mat_radio_button_8_Template, 2, 4, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MmHomeComponent_div_2_div_9_Template, 7, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.currentQuestion == null ? null : ctx_r2.currentQuestion.displayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.currentQuestion == null ? null : ctx_r2.currentQuestion.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showCorrectAnswer);
} }
function MmHomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-wheel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSpinStart", function MmHomeComponent_div_3_Template_ngx_wheel_onSpinStart_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.before(); })("onSpinComplete", function MmHomeComponent_div_3_Template_ngx_wheel_onSpinComplete_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.after(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r3.width)("height", ctx_r3.height)("items", ctx_r3.items)("innerRadius", 5)("spinAmount", 2)("textOrientation", ctx_r3.textOrientation)("textAlignment", ctx_r3.textAlignment)("idToLandOn", ctx_r3.idToLandOn);
} }
function MmHomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " HAPPY BIRTHDAY PAPPA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MmHomeComponent {
    constructor(dialog, mmService) {
        this.dialog = dialog;
        this.mmService = mmService;
        this.isShowGuess = false;
        this.isShowStory = false;
        this.isShowAnwserhint = false;
        this.isShowAnswer = false;
        this.showEndVideo = false;
        this.guessWhoQ = [];
        // currentQuestion: GuessWhoQuestion;  
        this.imageSourceAry = [];
        this.title = 'Happy Birthday Ats 😍';
        this.quizQ = [];
        this.showCorrectAnswer = false;
        this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["TextOrientation"].HORIZONTAL;
        this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["TextAlignment"].CENTER;
        this.height = 380;
        this.width = 380;
        this.showMainPage = true;
        this.showTitle = false;
        this.showQuiz = false;
        this.showSpinningWheel = false;
    }
    ngOnInit() {
    }
    onQuizStart() {
        this.quizQ = this.mmService.getQuizQ();
        this.showQuizPanel();
    }
    showQuizPanel() {
        if (this.quizQ.length > 0) {
            this.showMainPage = false;
            this.showTitle = true;
            this.showQuiz = true;
            this.showSpinningWheel = false;
            this.selectedAnswer = null;
            this.showCorrectAnswer = false;
            this.currentQuestion = this.quizQ.pop();
        }
        else {
            this.showMainPage = false;
            this.showTitle = false;
            this.showQuiz = false;
            this.showSpinningWheel = false;
            this.selectedAnswer = null;
            this.showCorrectAnswer = false;
            this.currentQuestion = null;
            this.showEndVideo = true;
            // TODOB: END
        }
    }
    onAnswerSelected(event) {
        if (event && event.value) {
            this.selectedAnswer = event.value;
            this.showCorrectAnswer = true;
        }
    }
    showWheelPanel() {
        var body = document.body, html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
        var dimension = width > height ? (height - 8) : (width - 8);
        if (dimension > 650) {
            dimension = (Math.floor(dimension / 100) * 100 - 75);
        }
        this.height = dimension;
        this.width = dimension;
        this.items = this.mmService.getDareList(dimension);
        this.idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
        this.showQuiz = false;
        this.showSpinningWheel = true;
        this.selectedAnswer = null;
        this.showCorrectAnswer = false;
    }
    reset() {
        this.wheel.reset();
    }
    before() {
    }
    spin(prize) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idToLandOn = prize;
            yield new Promise(resolve => setTimeout(resolve, 0));
            this.wheel.spin();
        });
    }
    after() {
        var _a;
        const selectedDare = (_a = this.items.find(x => x.id == this.idToLandOn)) === null || _a === void 0 ? void 0 : _a.text;
        const dialogRef = this.dialog.open(_mm_image_preview_mm_image_preview_component__WEBPACK_IMPORTED_MODULE_3__["MmImagePreviewComponent"], { data: selectedDare }); //, disableClose: true
        this.mmService.removeDare(selectedDare);
        dialogRef.afterClosed().subscribe(result => {
            this.showQuizPanel();
        });
    }
    startVideo() {
        this.videoPlayer.nativeElement.play();
    }
}
MmHomeComponent.ɵfac = function MmHomeComponent_Factory(t) { return new (t || MmHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_mm_service__WEBPACK_IMPORTED_MODULE_5__["MmService"])); };
MmHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MmHomeComponent, selectors: [["app-mm-home"]], viewQuery: function MmHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["NgxWheelComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videoPlayer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wheel = _t.first);
    } }, decls: 5, vars: 5, consts: [["class", "htmlBackground", 4, "ngIf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["style", "height: 90vh", 4, "ngIf"], [1, "htmlBackground"], [2, "position", "absolute", "bottom", "10px", "right", "10px"], [1, "flat-Button", 3, "click"], ["src", "../../../assets/gift_2.gif", "alt", "?", 2, "width", "100px", "height", "115px"], [1, "spacer"], [2, "font-weight", "bold", "font-size", "24px"], [1, "row"], [1, "row", 2, "margin-top", "20px"], [2, "font-size", "24px"], [3, "value", "color", "change", 4, "ngFor", "ngForOf"], [3, "value", "change"], ["mat-mini-fab", "", "aria-label", "correct", "class", "mat-button-action", "style", "background-color: green; margin-top: 20px;", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "wrong", "class", "mat-button-action", "style", "background-color: red; margin-top: 20px;", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "correct", 1, "mat-button-action", 2, "background-color", "green", "margin-top", "20px", 3, "click"], [1, "mat-icon-action"], ["mat-mini-fab", "", "aria-label", "wrong", 1, "mat-button-action", 2, "background-color", "red", "margin-top", "20px", 3, "click"], ["spinDuration", "5", "pointerStrokeColor", "black", "pointerFillColor", "gold", 3, "width", "height", "items", "innerRadius", "spinAmount", "textOrientation", "textAlignment", "idToLandOn", "onSpinStart", "onSpinComplete"], [2, "height", "90vh"]], template: function MmHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MmHomeComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MmHomeComponent_mat_toolbar_1_Template, 5, 1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MmHomeComponent_div_2_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MmHomeComponent_div_3_Template, 4, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MmHomeComponent_div_4_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMainPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showQuiz);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinningWheel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showEndVideo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["NgxWheelComponent"]], styles: [".htmlBackground[_ngcontent-%COMP%] {\r\n    background: url('homepage.jpg') center center no-repeat;\r\n    background-size: contain;\r\n    height: 95vh;\r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.mat-radio-group[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    margin-left: 50px;\r\n    margin-top: 25px;\r\n    font-size: 24px;\r\n}\r\n\r\n.split-cell-right[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tbS1ob21lL21tLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVEQUFxRTtJQUlyRSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW0taG9tZS9tbS1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHRtbEJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ob21lcGFnZS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGhlaWdodDogOTV2aDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc3BsaXQtY2VsbC1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MmHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-mm-home',
                templateUrl: './mm-home.component.html',
                styleUrls: ['./mm-home.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_mm_service__WEBPACK_IMPORTED_MODULE_5__["MmService"] }]; }, { videoPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['videoPlayer']
        }], wheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["NgxWheelComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
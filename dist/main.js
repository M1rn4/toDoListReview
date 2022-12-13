/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './imgs/bg1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _new_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.js */ \"./dist/new.js\");\n/* harmony import */ var _statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusUpdate.js */ \"./dist/statusUpdate.js\");\n\n\n// eslint-disable-next-line import/named\n\n\nconst addBtn = document.querySelector('.add_button');\nconst btnClear = document.querySelector('.remove_button');\nfunction addBtnN() {\n  (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.addList)();\n  (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.showALl)();\n  _new_js__WEBPACK_IMPORTED_MODULE_1__.newDest.value = '';\n}\nfunction editTasks(array) {\n  (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(array);\n}\nwindow.addEventListener('load', () => {\n  (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.showALl)();\n});\naddBtn.addEventListener('click', addBtnN);\n_new_js__WEBPACK_IMPORTED_MODULE_1__.addTask.addEventListener('click', e => {\n  const task = e.target.parentElement.parentElement;\n  if (e.target.classList.contains('del')) {\n    (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.deleteOne)(task, e.target);\n    (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.showALl)();\n  }\n  if (e.target.classList.contains('edit')) {\n    editTasks(task);\n  }\n  if (e.target.classList.contains('checkbox')) {\n    // const tasks = JSON.parse(localStorage.getItem('tasks'));\n    (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target, task);\n  }\n});\nbtnClear.addEventListener('click', () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  const filterTasks = tasks.filter(task => task.completed === false);\n  // eslint-disable-next-line no-plusplus\n  for (let i = 0; i < filterTasks.length; i++) {\n    filterTasks[i].index = i + 1;\n  }\n  localStorage.setItem('tasks', JSON.stringify(filterTasks));\n  (0,_new_js__WEBPACK_IMPORTED_MODULE_1__.showALl)();\n});\n\n//# sourceURL=webpack://webpack/./dist/index.js?");

/***/ }),

/***/ "./dist/new.js":
/*!*********************!*\
  !*** ./dist/new.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"addNew\": () => (/* binding */ addNew),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteOne\": () => (/* binding */ deleteOne),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"newDest\": () => (/* binding */ newDest),\n/* harmony export */   \"showALl\": () => (/* binding */ showALl)\n/* harmony export */ });\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-unused-vars */\nconst newDest = document.querySelector('.newToDo');\nconst addTask = document.querySelector('.addTask');\nconst showList = array => {\n  // eslint-disable-next-line no-plusplus\n  const container = `\n    <div class =\"squareT\">\n      <div class =\"square\">\n        <ul class=\"toDo\">\n          <li>\n            <input                                                                          \n            type=\"checkbox\"\n            class=\"checkbox\" \n            name=\"checkbox\" \n            id=\"checkbox\" ></li>\n            <input type=\"text\" class=\"task-description\" name=\"${array.description}\" id=\"${array.index}\" value=\"${array.description}\">\n        </ul>\n      </div>\n\n      <div class=\"actions\">\n        <i class=\"fa-solid fa-pencil\"></i>\n        <i class=\"fa-solid fa-floppy-disk edit\"></i>\n        <i class=\"fa-solid fa-trash-can del\"></i>\n      </div>\n    </div>\n      `;\n  return container;\n};\nconst addNew = (array, low) => {\n  // eslint-disable-next-line no-const-assign\n  const taskN = {};\n  taskN.description = array;\n  taskN.completed = false;\n  taskN.index = low.length + 1;\n  low.push(taskN);\n  localStorage.setItem('tasks', JSON.stringify(low));\n};\nconst addList = () => {\n  let tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (tasks == null) {\n    localStorage.setItem('tasks', JSON.stringify([]));\n  }\n  tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (newDest.value === '') {\n    return;\n  }\n  addNew(newDest.value, tasks);\n};\nfunction deleteOne(array) {\n  let taskName = array.children[0].children[0].children[1].id;\n  taskName = parseInt(taskName, 10);\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  const ele = tasks.findIndex(e => e.index === taskName);\n  tasks.splice(ele - 1, 1);\n  // eslint-disable-next-line no-plusplus\n  for (let i = 0; i < tasks.length; i++) {\n    tasks[i].index = i + 1;\n  }\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\nconst showALl = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  addTask.innerHTML = '';\n  tasks.forEach(e => {\n    const listItem = showList(e);\n    addTask.insertAdjacentHTML('beforeend', listItem);\n  });\n  const completedTasksIndex = tasks.filter(task => task.completed === true);\n  for (let i = 0; i < completedTasksIndex.length; i += 1) {\n    for (let j = 0; j < addTask.children.length; j += 1) {\n      if (j === completedTasksIndex[i].index - 1) {\n        // eslint-disable-next-line no-undef, max-len\n        addTask.children[j].children[0].children[0].children[0].children[0].checked = true;\n      }\n    }\n  }\n};\nconst editTask = array => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  let taskItem = array.children[0].children[0].children[1].id;\n  taskItem = parseInt(taskItem, 10);\n  const ele = tasks.findIndex(e => e.index + 1 === taskItem);\n  const taskName = document.getElementById(taskItem);\n  if (taskName.value === '') {\n    return;\n  }\n  tasks[ele].description = taskName.value;\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\n\n//# sourceURL=webpack://webpack/./dist/new.js?");

/***/ }),

/***/ "./dist/statusUpdate.js":
/*!******************************!*\
  !*** ./dist/statusUpdate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateTaskStatus(el, task) {\n  el.addEventListener('change', e => {\n    // eslint-disable-next-line no-use-before-define\n    let taskName = task.children[1].id;\n    taskName = parseInt(taskName, 10);\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\n    const ele = tasks.findIndex(e => e.index === taskName);\n    if (e.target.checked) {\n      tasks[ele].completed = true;\n    } else {\n      tasks[ele].completed = false;\n    }\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskStatus);\n\n//# sourceURL=webpack://webpack/./dist/statusUpdate.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;
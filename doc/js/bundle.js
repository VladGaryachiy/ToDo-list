/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _todosService = __webpack_require__(/*! ./todos-service */ "./src/js/todos-service.js");

var _todosService2 = _interopRequireDefault(_todosService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoServive = new _todosService2.default();

var todos = JSON.parse(localStorage.getItem('object'));

var todo_list = document.getElementById('todo-list');
var updateForm = document.getElementById('save');
updateForm.style.display = "none";

var addTodo = function addTodo(todos) {

    todoServive.getTodos();

    todo_list.innerHTML = '';
    todos.data.forEach(function (item) {
        var li = document.createElement('li');
        li.className = "element-todo-list";

        li.innerHTML = '\n                       \n                    <span class="todo">\n                       ' + item.name + '\n                    </span>\n                    \n                    <button class="update" data-id=' + item.id + '>\n                            \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \n\n                    <button class="delete"    >\n                        x\n                    </button>\n            \n                ';

        todo_list.appendChild(li);
    });

    /*-----delete button -----*/
    var delBut = document.querySelectorAll('.delete');

    for (var i = 0; i < delBut.length; i++) {
        delBut[i].onclick = deleteTodo;
    }

    /*-----update button------*/
    var updateButton = document.querySelectorAll('.update');

    for (var _i = 0; _i < updateButton.length; _i++) {
        updateButton[_i].onclick = updateTodo;
    }
};

addTodo(todos);

var todo_list_form = document.getElementById('todo-list-form');
var todo_list_container = document.getElementById('todo-list-container');

todo_list_form.onsubmit = function (event) {

    event.preventDefault();

    var newTodo = event.currentTarget[0].value;

    todoServive.crateTodo(newTodo);

    todos = JSON.parse(localStorage.getItem('object'));

    addTodo(todos);

    event.currentTarget[0].value = '';

    /*   addButton.disabled = true;*/
};

var deleteTodo = function deleteTodo(e) {
    var nameDeleteTodo = e.target.parentElement.children[0].textContent;
    todoServive.deleteTodo(nameDeleteTodo.trim());

    todos = JSON.parse(localStorage.getItem('object'));
    addTodo(todos);
};

var updateTodo = function updateTodo(e) {

    var todoVal = e.target.parentElement.childNodes[1].textContent.trim();
    var inputUpdateTodo = document.getElementById('todo-list-text');
    inputUpdateTodo.value = todoVal;
    updateForm.style.display = "block";

    /*   updateForm.hidden = "false";*/

    /*update button*/
    /*    let delBut = document.querySelector('.todo-list-button');
        delBut.classList.add('saveUpdate');
        let saveUpdateButton = document.querySelector('.saveUpdate');
        saveUpdateButton.textContent = "СОХРАНИТЬ";*/

    /*update form*/

    /* let addForm = document.getElementById('todo-list-form');
     addForm.id = "updateForm";*/
    /* addForm.classList.add('updateForm');*/

    var idTodo = e.target.dataset.id;

    updateForm.onclick = function (e) {
        var input_text = e.currentTarget.parentNode[0].value;
        todoServive.updateTodo(idTodo, input_text);

        inputUpdateTodo.value = '';
        updateForm.style.display = "none";
        /* updateForm.hidden = "true";*/

        todos = JSON.parse(localStorage.getItem('object'));
        addTodo(todos);

        /*замена кнопки*/
        /*    delBut.classList.remove('saveUpdate');
            saveUpdateButton.textContent = "Добавить";*/
        /*замена формы*/
        /*  addForm.id = 'todo-list-form';*/
        /*    addForm.classList.add('todo-list-form');*/
    };
};

var text = document.getElementById('todo-list-text');
var addButton = document.getElementById('todo-list-button');

/*    addButton.disabled = true;
    text.onkeyup = () => {
            if(text.value === ''){
                addButton.disabled = true;
            }
            else{
                addButton.disabled = false;
            }

      /!*    console.dir(addButton);*!/
    };

    text.onchange = () => {
        if(text.value != ''){
            addButton.disabled = "false";
        }
    };*/

/***/ }),

/***/ "./src/js/todos-service.js":
/*!*********************************!*\
  !*** ./src/js/todos-service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateId = function generateId() {
    return Math.floor(Math.random() * 100);
};

var Todo = function Todo(name) {
    _classCallCheck(this, Todo);

    this.id = generateId();
    this.name = name;
};

var TodoService = function () {
    function TodoService() {
        _classCallCheck(this, TodoService);

        this.todos = {
            data: [
                /*  {name:"Todo 1"},
                  {name:"Todo 2"},
                  {name:"Todo 3"}*/
            ]
        };
    }

    _createClass(TodoService, [{
        key: 'getTodos',
        value: function getTodos() {
            var objStr = JSON.stringify(this.todos);
            localStorage.setItem('object', objStr);
        }
    }, {
        key: 'crateTodo',
        value: function crateTodo(name) {
            var todo = new Todo(name);
            this.todos.data.push(todo);

            var objStr = JSON.stringify(this.todos);
            localStorage.setItem('object', objStr);
        }
    }, {
        key: 'deleteTodo',
        value: function deleteTodo(name) {
            var id = null;
            this.todos.data.forEach(function (item, i) {
                if (item.name === name) {
                    id = i;
                }
            });

            this.todos.data.splice(id, 1);

            var objStr = JSON.stringify(this.todos);
            localStorage.setItem('object', objStr);
        }
    }, {
        key: 'updateTodo',
        value: function updateTodo(id, name) {

            var search_obj = this.todos.data.filter(function (item) {
                return item.id === +id;
            });

            search_obj[0].name = name;
            var objStr = JSON.stringify(this.todos);
            localStorage.setItem('object', objStr);
        }
    }]);

    return TodoService;
}();

exports.default = TodoService;

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
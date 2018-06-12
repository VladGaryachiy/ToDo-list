!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){switch(e){case"id":return document.getElementById(t);case"class":return document.querySelector(t);case"all":return document.querySelectorAll(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:[]};e.Todos=a,e.setLocalStorage=function(t){var e=JSON.stringify(t);localStorage.setItem("object",e)},e.getLocalStorage=function(){var t=JSON.parse(localStorage.getItem("object"));e.Todos=a=t}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.searchTodosInInput=e.saveChange=e.updateTodos=e.clearTodo=e.createNewTodo=void 0;var a,o=n(1),r=n(0),l=(a=r)&&a.__esModule?a:{default:a};var i=o.Todos,u=(0,l.default)("save","id"),c=(0,l.default)("todo-list-text","id"),s=(0,l.default)("todo-list-button","id"),d=null;e.createNewTodo=function(t){t.preventDefault();var e=t.currentTarget[0].value;return t.currentTarget[0].value="",e},e.clearTodo=function(t){return t.parentElement.children[0].textContent.trim()},e.updateTodos=function(t){var e=t.parentElement.children[0].textContent.trim();c.value=e,u.style.display="block",s.style.display="none",d=t.dataset.id},e.saveChange=function(t){var e=t.parentElement.children[0].value;c.value="",u.style.display="none",s.style.display="block";var n=[];return n[0]=d,n[1]=e,n},e.searchTodosInInput=function(t){if(i)return t.srcElement.value.trim()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=n(1);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=o.Todos,i=function t(e,n){r(this,t),this.id=Math.floor(100*Math.random()),this.name=e,this.dateCreate=n,this.dateUpdate=null},u=function(){function t(){r(this,t)}return a(t,[{key:"getDate",value:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth();return t.getDay()+" "+n+" "+e+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},{key:"crateTodo",value:function(t,e){if(t||alert("Задача не добавлена!"),t){var n=new i(t,e);l.data.push(n)}(0,o.setLocalStorage)(l),(0,o.getLocalStorage)()}},{key:"deleteTodo",value:function(t){var e=null;l.data.forEach(function(n,a){n.name===t&&(e=a)}),l.data.splice(e,1),(0,o.setLocalStorage)(l),(0,o.getLocalStorage)()}},{key:"updateTodo",value:function(t,e,n){var a=l.data.filter(function(e){return e.id===+t});a[0].name=e,a[0].dateUpdate=n,(0,o.setLocalStorage)(l),(0,o.getLocalStorage)()}},{key:"dateSort",value:function(){l.data.sort(function(t,e){return new Date(e.dateCreate)-new Date(t.dateCreate)}),(0,o.setLocalStorage)(l),(0,o.getLocalStorage)()}},{key:"nameSort",value:function(){l.data.sort(function(t,e){var n=t.name.toLowerCase(),a=e.name.toLowerCase();return n<a?-1:n>a?1:void 0}),(0,o.setLocalStorage)(l),(0,o.getLocalStorage)()}},{key:"searchTodo",value:function(t){var e={data:[]},n=(l.data,new RegExp(t,"i"));return l.data.forEach(function(t){n.test(t.name)&&e.data.push(t)}),e||l}}]),t}();e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),l=(a=r)&&a.__esModule?a:{default:a};var i=(0,l.default)("pages-container","id"),u=((0,l.default)("pagination-container","id"),document.createElement("button"),document.createElement("button"),document.createElement("button"),(0,l.default)("prev-button-container","id")),c=(0,l.default)("next-button-container","id"),s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.countClick=0,this.numberButtonClick=null,this.countElementInPage=3,this.countElementsInThisPage=3*this.numberButtonClick,this.countAllData=e.data.length,this.checkNumberClick=!1,this.clickNumber=null,this.todos=e,this.lastPage=null,this.selectNumberButton=1}return o(t,[{key:"createNumberButton",value:function(){var t=this.todos.data.length/3;if(this.countClick=0,i.innerHTML="",this.todos.data.length>3){for(var e=0;e<t;e++)i.innerHTML+='\n                     <button class="link-pages" id="link-pages">'+(e+1)+"</button>\n                    ";u.innerHTML='<button class="prev" id="prev">prev</button>',c.innerHTML='<button class="next" id="next">next</button>'}this.todos.data.length<=3&&(u.innerHTML="",c.innerHTML="")}},{key:"clickNumberButton",value:function(t){var e=Number(t.textContent.trim());this.checkNumberClick=!0,this.selectNumberButton=e,this.countClick=1===e?0:3*e-3;var n=[],a=this.countElementInPage*e-3,o=this.countElementInPage*e;if(this.todos.data.length>3)if(o>this.todos.data.length){n.length=0;for(var r=a;r<this.todos.data.length;r++)n.push(r)}else{n.length=0;for(var l=a;l<o;l++)n.push(l)}if(e)for(var u=0;u<i.children.length;u++)u===e-1?(i.children[u].style.backgroundColor="#d2d2d7",i.children[u].style.outline="none"):i.children[u].style.backgroundColor="white";return n}},{key:"clickNextButton",value:function(t){t.style.outline="none";var e=[];this.countClick<this.todos.data.length&&(this.lastPage=this.todos.data.length-this.countClick),this.countClick+=3,this.selectNumberButton+=1;this.countClick,this.todos.data.length;if(this.todos.data.length>this.countClick){e.length=0;for(var n=this.countClick;n<this.countClick+3;n++)e.push(n)}if(1===this.lastPage){e.length=0;for(var a=this.todos.data.length-1;a<this.todos.data.length;a++)e.push(a)}if(2===this.lastPage){e.length=0;for(var o=this.todos.data.length-2;o<this.todos.data.length;o++)e.push(o)}if(this.countClick>=this.todos.data.length){e.length=0,this.selectNumberButton=Math.ceil(this.todos.data.length/3),this.countClick=this.countClick-3;for(var r=this.todos.data.length-this.lastPage;r<this.todos.data.length;r++)e.push(r)}var l=i.children;if(l.length)for(var u=0;u<l.length;u++){Number(l[u].textContent)===this.selectNumberButton?(l[u].style.backgroundColor="#d2d2d7",l[u].style.outline="none"):l[u].style.backgroundColor="white"}return e}},{key:"clickPrevButton",value:function(t){t.style.outline="none";var e=[];if(this.lastPage=this.todos.data.length-this.countClick,this.countClick>=3&&(this.countClick-=3),this.selectNumberButton-=1,this.todos.data.length>this.countClick){e.length=0;for(var n=this.countClick;n<this.countClick+3;n++)e.push(n)}if(1===this.lastPage){e.length=0;for(var a=this.todos.data.length-4;a<this.todos.data.length-1;a++)e.push(a)}if(2===this.lastPage){e.length=0;for(var o=this.todos.data.length-5;o<this.todos.data.length-2;o++)e.push(o)}if(this.countClick<=0){e.length=0,this.countClick=0,this.selectNumberButton=1;for(var r=this.countClick;r<this.countClick+3;r++)e.push(r)}var l=i.children;if(l.length)for(var u=0;u<l.length;u++){Number(l[u].textContent)===this.selectNumberButton?(l[u].style.backgroundColor="#d2d2d7",l[u].style.outline="none"):l[u].style.backgroundColor="white"}return e}}]),t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=document.getElementById("todo-list");e.default=function(t,e){if(t.data.length){if(a.innerHTML="",t.data.forEach(function(t){var e=document.createElement("li");e.className="element-todo-list",e.innerHTML='\n                       \n                    <span class="todo">\n                       '+t.name+'\n                    </span>\n                    \n                    <button class="update" data-id='+t.id+'>\n                            Изменить \n\n                    <button class="delete"    >\n                        x\n                    </button>\n            \n                ',a.appendChild(e)}),t.data.length<=3||t.data.length>3)for(var n=0;n<t.data.length;n++)n<3&&(a.children[n].style.display="flex");if(e){if(1===e.length)for(var o=0;o<t.data.length;o++)e[0]===o?a.children[o].style.display="flex":a.children[o].style.display="none";if(2===e.length)for(var r=0;r<t.data.length;r++)e[0]===r||e[1]===r?a.children[r].style.display="flex":a.children[r].style.display="none";if(3===e.length)for(var l=0;l<t.data.length;l++)e[0]===l||e[1]===l||e[2]===l?a.children[l].style.display="flex":a.children[l].style.display="none"}}t.data.length||(a.innerHTML="")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=n(1),r=c(n(6)),l=c(n(5)),i=c(n(4)),u=n(3);function c(t){return t&&t.__esModule?t:{default:t}}var s=o.Todos,d=new i.default,f=new l.default(o.Todos),h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return a(t,[{key:"createNewTodo",value:function(t){var e=(0,u.createNewTodo)(t);d.crateTodo(e,d.getDate()),f.createNumberButton(),(0,r.default)(s)}},{key:"deleteTodo",value:function(t){var e=(0,u.clearTodo)(t);d.deleteTodo(e),f.createNumberButton(),(0,r.default)(s)}},{key:"updateTodo",value:function(t){(0,u.updateTodos)(t)}},{key:"saveUpdate",value:function(t){var e=(0,u.saveChange)(t);d.updateTodo(e[0],e[1],d.getDate()),f.createNumberButton(),(0,r.default)(s)}},{key:"searchTodo",value:function(t){var e=(0,u.searchTodosInInput)(t),n=d.searchTodo(e);(0,r.default)(n)}},{key:"sortTodoByDate",value:function(){d.dateSort(),(0,r.default)(s)}},{key:"sortTodoByName",value:function(){d.nameSort(),(0,r.default)(s)}},{key:"paginationNumberNavigation",value:function(t){var e=f.clickNumberButton(t);(0,r.default)(s,e)}},{key:"paginationNextButton",value:function(t){var e=f.clickNextButton(t);(0,r.default)(s,e)}},{key:"paginationPrevButton",value:function(t){var e=f.clickPrevButton(t);(0,r.default)(s,e)}}]),t}();e.default=h},function(t,e,n){"use strict";var a=r(n(7)),o=r(n(0));function r(t){return t&&t.__esModule?t:{default:t}}var l=new a.default,i=(0,o.default)("toto-list-main-container","id"),u=(0,o.default)("save","id"),c=(0,o.default)("todo-list-text","id"),s=(0,o.default)("todo-list-form","id");u.style.display="none",s.onsubmit=l.createNewTodo,c.onkeyup=l.searchTodo,i.onclick=function(t){switch(t.target.className){case"update":t.target.onclick=l.updateTodo(t.target);break;case"delete":t.target.onclick=l.deleteTodo(t.target);break;case"link-pages":t.target.onclick=l.paginationNumberNavigation(t.target);break;case"prev":t.target.onclick=l.paginationPrevButton(t.target);break;case"next":t.target.onclick=l.paginationNextButton(t.target);break;case"butSortByDate":t.target.onclick=l.sortTodoByDate();break;case"butSortByName":t.target.onclick=l.sortTodoByName();break;case"save":t.target.onclick=l.saveUpdate(t.target)}}},function(t,e,n){n(8),t.exports=n(2)}]);
//# sourceMappingURL=bundle.js.map
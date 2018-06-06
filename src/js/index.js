

import Todos from './todos-data';
import {createNewTodo, sortTodosByName, sortTodosByDate, searchTodosInInput} from './view-manipulation';

let todos = Todos;


let updateForm = document.getElementById('save');
let input_text = document.getElementById('todo-list-text');
let todo_list_form = document.getElementById('todo-list-form');


let butSortByDate = document.getElementById('butSortByDate'); // кнопка сортировке по дате
let butSortByName = document.getElementById('butSortByName'); // кнопка сортировки по имени


updateForm.style.display = "none"; /*кнопка сохранения изминений*/

/*добавление задач*/
todo_list_form.onsubmit = createNewTodo;

/*сортирока по дате*/
butSortByDate.onclick = sortTodosByDate;

/*сортирока по имени*/
butSortByName.onclick = sortTodosByName;

/*поск по задачам*/
input_text.onkeyup = searchTodosInInput;























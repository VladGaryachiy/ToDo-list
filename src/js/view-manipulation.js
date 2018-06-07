import pagination from "./pagination";
import TodoService from "./todos-service";
import {Todos} from "./localStorage";
import addTodo from './render';



const todoServive = new TodoService();
let todos = Todos;


let updateForm = document.getElementById('save');
let inputUpdateTodo = document.getElementById('todo-list-text');
let add_button = document.getElementById('todo-list-button');

/*создать задачу*/

 let createNewTodo = event => {
    event.preventDefault();
    let newTodo = event.currentTarget[0].value;
    event.currentTarget[0].value = '';
    return newTodo;
};

/*удалить задачу*/

let clearTodo = event => {
    let nameDeleteTodo = event.target.parentElement.children[0].textContent;
    return nameDeleteTodo.trim();
};

/*изменить задачу*/
let idTodo = null;
let updateTodos = event => {
    let todoVal  = event.target.parentElement.childNodes[1].textContent.trim();
    inputUpdateTodo.value = todoVal;
    updateForm.style.display = "block";
    add_button.style.display = "none";
    idTodo = event.target.dataset.id;
};

/*охранить изминения*/
let saveChange = event => {
    let input_text = event.currentTarget.parentNode[0].value;

    inputUpdateTodo.value = '';
    updateForm.style.display = "none";
    add_button.style.display = "block";

    let data = [];
    data[0] = idTodo;
    data[1] = input_text;

    return data;

};

/*поиск задач*/

let searchTodosInInput = event => {
    if(todos){
        let text = event.srcElement.value.trim();
        return text;
    };
};


export {createNewTodo, clearTodo, updateTodos, saveChange, searchTodosInInput}
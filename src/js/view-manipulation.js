
import {Todos} from "./localStorage";
import generateElement from './generateElement';

let todos = Todos;


let updateForm = generateElement('save','id');
let inputUpdateTodo = generateElement('todo-list-text','id');
let add_button = generateElement('todo-list-button','id');

/*создать задачу*/
 let createNewTodo = event => {
    event.preventDefault();
    let newTodo = event.currentTarget[0].value;
    event.currentTarget[0].value = '';
    return newTodo;
};

/*удалить задачу*/

let clearTodo = event => {
    let nameDeleteTodo = event.parentElement.children[0].textContent.trim();
    return nameDeleteTodo;
};

/*изменить задачу*/
let idTodo = null;
let updateTodos = event => {
    let todoVal  = event.parentElement.children[0].textContent.trim();
    inputUpdateTodo.value = todoVal;
    updateForm.style.display = "block";
    add_button.style.display = "none";
    idTodo = event.dataset.id;
};

/*охранить изминения*/
let saveChange = event => {
    let input_text = event.parentElement.children[0].value;

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
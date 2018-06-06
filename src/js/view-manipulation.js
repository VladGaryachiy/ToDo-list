import pagination from "./pagination";
import TodoService from "./todos-service";
import Todos from "./todos-data";
import addTodo from './render';



const todoServive = new TodoService();
let todos = Todos;






/*создать задачу*/

 let createNewTodo = event => {

    event.preventDefault();

    let newTodo = event.currentTarget[0].value;

    todoServive.crateTodo(newTodo, todoServive.getDate());

    todos = JSON.parse(localStorage.getItem('object'));

    pagination(todos);

    event.currentTarget[0].value = '';

};




/*удалить задачу*/



let deleteTodo = event => {
    let nameDeleteTodo = event.target.parentElement.children[0].textContent;
    todoServive.deleteTodo(nameDeleteTodo.trim());

    todos = JSON.parse(localStorage.getItem('object'));
    pagination(todos);
};



/*изменить задачу*/



const updateTodo = event => {
    let updateForm = document.getElementById('save');
    let todoVal  = event.target.parentElement.childNodes[1].textContent.trim();
    let inputUpdateTodo = document.getElementById('todo-list-text');
    let add_button = document.getElementById('todo-list-button');

    inputUpdateTodo.value = todoVal;
    updateForm.style.display = "block";
    add_button.style.display = "none";

    let idTodo = event.target.dataset.id;

    updateForm.onclick = event => {
        let input_text = event.currentTarget.parentNode[0].value;
        todoServive.updateTodo(idTodo,input_text,todoServive.getDate());

        inputUpdateTodo.value = '';
        updateForm.style.display = "none";
        add_button.style.display = "block";


        todos = JSON.parse(localStorage.getItem('object'));
        pagination(todos);

    }
};




/*сортировка задач создания по-дате*/

const sortTodosByDate = () => {
    todoServive.dateSort();
    let sortData = JSON.parse(localStorage.getItem('object'));
    addTodo(sortData);
};



/*сортировка задач по-имени*/

const sortTodosByName = () => {
    todoServive.nameSort();
    let sortData = JSON.parse(localStorage.getItem('object'));
    addTodo(sortData);
};



/*поиск задач*/

const searchTodosInInput = event => {

    if(todos){
        let text = event.srcElement.value.trim();
        todoServive.searchTodo(text);

        let search_data = JSON.parse(localStorage.getItem('object'));
        addTodo(search_data);
    };
};


export {createNewTodo, deleteTodo, updateTodo, sortTodosByDate, sortTodosByName, searchTodosInInput}
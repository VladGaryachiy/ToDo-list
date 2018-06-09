
import {Todos} from './localStorage';
import addTodo from './render';
import Pagination from './pagination';
import TodoService from './todos-service'
import {createNewTodo, updateTodos , clearTodo, saveChange, searchTodosInInput} from "./view-manipulation";

let todos = Todos;
let todoService = new TodoService();
let pagination = new Pagination(Todos);

let updateForm = document.getElementById('save'); /*сохранения*/
let input_text = document.getElementById('todo-list-text');
let todo_list_form = document.getElementById('todo-list-form');
let todo_list = document.getElementById('todo-list'); /*контейнер с задачами ul*/

let butSortByDate = document.getElementById('butSortByDate'); // кнопка сортировке по дате
let butSortByName = document.getElementById('butSortByName'); // кнопка сортировки по имени
let delBut = document.querySelectorAll('.delete');/*кнопка удаления*/

let pages_container = document.getElementById('pages-container'); /*контейнер с цифр кнопками пагинации*/
let pagination_container = document.getElementById('pagination-container');

updateForm.style.display = "none"; /*кнопка сохранения изминений*/

    class MainModule{

        constructor(){
        }
        createNewTodo(event){
            let createTodo = createNewTodo(event);
            todoService.crateTodo(createTodo, todoService.getDate());  /*создание задачи*/
            pagination.createNumberButton();
            addTodo(todos); /*рендерим задачи*/
        }

        deleteTodo(event){
            let deleteWork = true;
            let clearName =  clearTodo(event); /*получаем елемент на который нажали*/
            todoService.deleteTodo(clearName); /*измменяем его в localStorage*/
            pagination.createNumberButton(deleteWork);
            addTodo(todos); /* рисуем создаем задачи*/
        }
        updateTodo(event){
            updateTodos(event);
        }
        saveUpdate(){
            let savedTodo = saveChange(event);
            todoService.updateTodo(savedTodo[0], savedTodo[1], todoService.getDate());
            pagination.createNumberButton();
            addTodo(todos); /*создаем задачи*/
        }

        searchTodo(){ /*поиск задач*/
            let text = searchTodosInInput(event);
            let searchTodos = todoService.searchTodo(text);
            addTodo(searchTodos); /*создаем задачи*/

        }

        sortTodoByDate(){
            todoService.dateSort();
            addTodo(todos);
        }

        sortTodoByName(){
            todoService.nameSort();
            addTodo(todos);
        }

        paginationNumberNavigation(event){
            let elementsVisible = pagination.clickNumberButton(event);
            addTodo(todos, elementsVisible);
        }
        paginationNextButton(event){
            let elementsVisible = pagination.clickNextButton(event);
            addTodo(todos,elementsVisible);
        }

        paginationPrevButton(event){

        }
    }

let mainModule = new MainModule();
/*добавление задач*/
todo_list_form.onsubmit = mainModule.createNewTodo;




todo_list.addEventListener("DOMSubtreeModified", function() { /*прослушиваем изминение в контейнере*/
    for(let todo of todo_list.children){
        todo.children[2].onclick = mainModule.deleteTodo;
        todo.children[1].onclick = mainModule.updateTodo;
    }
});

/*прослушиваем изминения в контейнере пагинации что-бы навесить кнокам которые создаються динамично обработчик события*/
pages_container.addEventListener("DOMSubtreeModified", function() {
    for(let number_button of pages_container.children){
        number_button.onclick = mainModule.paginationNumberNavigation;
    }
});

pagination_container.addEventListener("DOMSubtreeModified", function() {
    pagination_container.children[0].onclick = mainModule.paginationPrevButton;
    pagination_container.children[pagination_container.children.length - 1].onclick = mainModule.paginationNextButton;
});

updateForm.onclick = mainModule.saveUpdate; /*сохранить изминения*/

input_text.onkeyup = mainModule.searchTodo; /*поиск задач*/

butSortByDate.onclick = mainModule.sortTodoByDate; /*сортировка по дате создания*/

butSortByName.onclick = mainModule.sortTodoByName; /*сортировка по имени*/





/*сортирока по дате*/
/*butSortByDate.onclick = sortTodosByDate;

/!*сортирока по имени*!/
butSortByName.onclick = sortTodosByName;

/!*поск по задачам*!/
input_text.onkeyup = searchTodosInInput;*/























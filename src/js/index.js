
import {Todos} from './localStorage';
import addTodo from './render';
import Pagination from './pagination';
import TodoService from './todos-service'
import {createNewTodo, updateTodos , clearTodo, saveChange, searchTodosInInput} from "./view-manipulation";
import generateElement from './generateElement';

let todos = Todos;
let todoService = new TodoService();
let pagination = new Pagination(Todos);

let updateForm = generateElement('save','id'); /*сохранения*/
let input_text = generateElement('todo-list-text','id');
let todo_list_form = generateElement('todo-list-form','id');
let todo_list = generateElement('todo-list','id'); /*контейнер с задачами ul*/

let butSortByDate = generateElement('butSortByDate', 'id'); // кнопка сортировке по дате
let butSortByName = generateElement('butSortByName','id'); // кнопка сортировки по имени
let delBut = generateElement('.delete','all');/*кнопка удаления*/

let pages_container = generateElement('pages-container','id'); /*контейнер с цифр кнопками пагинации*/
let pagination_container = generateElement('pagination-container','id');

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
            let elementsVisible = pagination.clickPrevButton(event);
            addTodo(todos,elementsVisible);
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























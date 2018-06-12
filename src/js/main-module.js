import {Todos} from './localStorage';
import addTodo from './render';
import Pagination from './pagination';
import TodoService from './todos-service'
import {createNewTodo, updateTodos , clearTodo, saveChange, searchTodosInInput} from "./view-manipulation";



let todos = Todos;
let todoService = new TodoService();
let pagination = new Pagination(Todos);

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
        let clearName =  clearTodo(event); /*получаем елемент на который нажали*/
        todoService.deleteTodo(clearName); /*измменяем его в localStorage*/
        pagination.createNumberButton();
        addTodo(todos); /* рисуем создаем задачи*/
    }
    updateTodo(event){
        updateTodos(event);
    }
    saveUpdate(event){
        let savedTodo = saveChange(event);
        todoService.updateTodo(savedTodo[0], savedTodo[1], todoService.getDate());
        pagination.createNumberButton();
        addTodo(todos); /*создаем задачи*/
    }

    searchTodo(event){ /*поиск задач*/
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

export default MainModule;

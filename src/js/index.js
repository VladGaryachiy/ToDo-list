import MainModule from './main-module'
import generateElement from './generateElement';

let mainModule = new MainModule();


let main_container = generateElement('toto-list-main-container','id');
let updateForm = generateElement('save','id'); /*сохранения*/
let input_text = generateElement('todo-list-text','id');
let todo_list_form = generateElement('todo-list-form','id');


updateForm.style.display = "none"; /*кнопка сохранения изминений*/


/*добавление задач*/
todo_list_form.onsubmit = mainModule.createNewTodo;
/*поиск задач*/
input_text.onkeyup = mainModule.searchTodo;

/*главный контейнер*/

main_container.onclick = function (event) {
    switch(event.target.className){
        case 'update':
            event.target.onclick = mainModule.updateTodo(event.target);
            break;
        case 'delete':
            event.target.onclick = mainModule.deleteTodo(event.target);
            break;
        case 'link-pages':
            event.target.onclick = mainModule.paginationNumberNavigation(event.target);
            break;
        case 'prev':
            event.target.onclick = mainModule.paginationPrevButton(event.target);
            break;
        case 'next':
            event.target.onclick = mainModule.paginationNextButton(event.target);
            break;
        case 'butSortByDate':
            event.target.onclick = mainModule.sortTodoByDate();
            break;
        case 'butSortByName':
            event.target.onclick = mainModule.sortTodoByName();
            break;
        case 'save':
            event.target.onclick = mainModule.saveUpdate(event.target);
            break;
    }
};

























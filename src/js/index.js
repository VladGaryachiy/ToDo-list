import TodoService from './todos-service';

const todoServive = new TodoService();

let todos = null;

let todo_list = document.getElementById('todo-list');
let updateForm = document.getElementById('save');
let add_button = document.getElementById('todo-list-button');
let input_text = document.getElementById('todo-list-text');

updateForm.style.display = "none";

let addTodo = todos => {


    todo_list.innerHTML = '' ;
        todos.data.forEach( item => {
            let li = document.createElement('li');
            li.className = "element-todo-list";

            li.innerHTML = `
                       
                    <span class="todo">
                       ${item.name}
                    </span>
                    
                    <button class="update" data-id=${item.id}>
                            Изменить 

                    <button class="delete"    >
                        x
                    </button>
            
                `;

            todo_list.appendChild(li);
        });

        /*-----delete button -----*/
        let delBut = document.querySelectorAll('.delete');

        for(let i  = 0; i < delBut.length; i++){
            delBut[i].onclick = deleteTodo;
        }

        /*-----update button------*/
        let updateButton = document.querySelectorAll('.update');

        for(let i  = 0; i < updateButton.length; i++){
            updateButton[i].onclick = updateTodo;
        }
};

(function () {
    todoServive.getTodos();

    todos = JSON.parse(localStorage.getItem('object'));

    addTodo(todos);
})();






/*addTodo(todos);*/

let todo_list_form = document.getElementById('todo-list-form');
let todo_list_container = document.getElementById('todo-list-container');



todo_list_form.onsubmit = event => {
        event.preventDefault();

        let newTodo = event.currentTarget[0].value;

        todoServive.crateTodo(newTodo, todoServive.getDate());

        todos = JSON.parse(localStorage.getItem('object'));

        addTodo(todos);

        event.currentTarget[0].value = '';

};


let deleteTodo = e => {
        let nameDeleteTodo = e.target.parentElement.children[0].textContent;
        todoServive.deleteTodo(nameDeleteTodo.trim());

        todos = JSON.parse(localStorage.getItem('object'));
        addTodo(todos);
};


let updateTodo = e => {

    let todoVal  = e.target.parentElement.childNodes[1].textContent.trim();
    let inputUpdateTodo = document.getElementById('todo-list-text');


    inputUpdateTodo.value = todoVal;
    updateForm.style.display = "block";
    add_button.style.display = "none";

    let idTodo = e.target.dataset.id;

    updateForm.onclick = e => {
        let input_text = e.currentTarget.parentNode[0].value;
        todoServive.updateTodo(idTodo,input_text,todoServive.getDate());

        inputUpdateTodo.value = '';
        updateForm.style.display = "none";
        add_button.style.display = "block";


        todos = JSON.parse(localStorage.getItem('object'));
        addTodo(todos);

    }
};

/*сортировка по-дате*/
let butSortByDate = document.getElementById('butSortByDate');
butSortByDate.onclick = () => {
    todoServive.dateSort();
    let sortData = JSON.parse(localStorage.getItem('object'));
    addTodo(sortData);
};
/*сортировка по-имени*/

let butSortByName = document.getElementById('butSortByName');
butSortByName.onclick = () => {
    todoServive.nameSort();
    let sortData = JSON.parse(localStorage.getItem('object'));
    addTodo(sortData);
};

/*поиск задач*/

input_text.onkeyup = function (e) {

    if(todos){
        let text = e.srcElement.value.trim();
        todoServive.searchTodo(text);

        let search_data = JSON.parse(localStorage.getItem('object'));
        addTodo(search_data);
    };
};



/*create pagination*/

    let pagesContainer = document.getElementById('pages-container');

    let numberElementPages = 3; // кол-во елементов на странице
    let countPages = todos.data.length / numberElementPages; // кол-во страниц
    let countData = todos.data.length;



        let nextPages = e => {
            let todosPaginationData = {
                data : []
            };

            let numberPage = e.currentTarget.textContent.trim();

            let from = numberElementPages * numberPage - 3;
            let to = numberElementPages * numberPage;

            if(numberPage === "1"){
                for(let i = 0 ; i < todos.data.length; i++){
                    if( i+1 <= numberElementPages){
                        todosPaginationData.data.push(todos.data[i])
                    }
                }
            }

            else if(to > todos.data.length){
                for(let i = from; i < todos.data.length; i++){
                    todosPaginationData.data.push(todos.data[i]);
                }
            }
            else{
                for(let i = from; i < to; i++){
                    todosPaginationData.data.push(todos.data[i]);
                }
            }

            addTodo(todosPaginationData);

        };

        (function () {

            let todosPaginationData = {
                data : []
            };

            for(let i = 0; i < countPages; i++){

                let button = document.createElement('button');
                button.className = "link-pages";
                button.innerHTML = `${i + 1}`;
                button.onclick = nextPages;

                pagesContainer.appendChild(button)
            }
          for(let i = 0 ; i < todos.data.length; i++){
                if( i+1 <= numberElementPages){
                        todosPaginationData.data.push(todos.data[i])
                }
          }

          addTodo(todosPaginationData);
        })();




        let buttons = document.querySelectorAll('.links-pages');
        for(let i = 0; i < buttons.length; i++){
            buttons.onclick = nextPages;
        }









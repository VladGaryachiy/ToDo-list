import TodoService from './todos-service';

const todoServive = new TodoService();

let todos = JSON.parse(localStorage.getItem('object'));

let todo_list = document.getElementById('todo-list');
let updateForm = document.getElementById('save');
let add_button = document.getElementById('todo-list-button');

updateForm.style.display = "none";






let addTodo = todos => {

    todoServive.getTodos();

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

addTodo(todos);

let todo_list_form = document.getElementById('todo-list-form');
let todo_list_container = document.getElementById('todo-list-container');

todo_list_form.onsubmit = event => {

      event.preventDefault();

      let newTodo = event.currentTarget[0].value;

      todoServive.crateTodo(newTodo, todoServive.getDate());

      todos = JSON.parse(localStorage.getItem('object'));

      addTodo(todos);

      event.currentTarget[0].value = '';

   /*   addButton.disabled = true;*/

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

let sortTodosByDate = () => {

};


let text = document.getElementById('todo-list-text');
let addButton = document.getElementById('todo-list-button');

/*    addButton.disabled = true;
    text.onkeyup = () => {
            if(text.value === ''){
                addButton.disabled = true;
            }
            else{
                addButton.disabled = false;
            }

      /!*    console.dir(addButton);*!/
    };

    text.onchange = () => {
        if(text.value != ''){
            addButton.disabled = "false";
        }
    };*/


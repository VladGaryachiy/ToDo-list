import TodoService from './todos-service';

const todoServive = new TodoService();


let todos = JSON.parse(localStorage.getItem('object'));

let todo_list = document.getElementById('todo-list');

let addTodo = todos => {

    todoServive.getTodos();

    if(!todo_list.children.length){

        todos.data.forEach( item => {
            let li = document.createElement('li');
            li.className = "element-todo-list";
            li.innerHTML = `
                       
                    <span class="todo">
                       ${item.name}
                    </span>

                    <button class="delete"    >
                        x
                    </button>
            
                `;

            todo_list.appendChild(li);

        });
        let delBut = document.querySelectorAll('.delete');

        for(let i  = 0; i < delBut.length; i++){
            delBut[i].onclick = deleteTodo;
        }

    }
    else{

        todo_list.innerHTML = '' ;

        todos.data.forEach( item => {
            let li = document.createElement('li');
            li.className = "element-todo-list";
            li.innerHTML = `
        

                    <span class="todo">
                       ${item.name}
                    </span>

                    <button class="delete"  >
                        x
                    </button>
            
                `;

            todo_list.appendChild(li);

        });

        let delBut = document.querySelectorAll('.delete');
        for(let i  = 0; i < delBut.length; i++){
            delBut[i].onclick = deleteTodo;
        }


    }

};

addTodo(todos);

let todo_list_form = document.getElementById('todo-list-form');
let todo_list_container = document.getElementById('todo-list-container');

todo_list_form.onsubmit = event => {

      event.preventDefault();

      let newTodo = event.currentTarget[0].value;

      todoServive.crateTodo(newTodo);

      todos = JSON.parse(localStorage.getItem('object'));

      addTodo(todos);

      event.currentTarget[0].value = '';

      addButton.disabled = true;

};


let deleteTodo = e => {
        let nameDeleteTodo = e.target.parentElement.children[0].textContent;
        todoServive.deleteTodo(nameDeleteTodo.trim());


        todos = JSON.parse(localStorage.getItem('object'));
        addTodo(todos);

};


let text = document.getElementById('todo-list-text');
let addButton = document.getElementById('todo-list-button');

    addButton.disabled = true;
    text.onkeyup = () => {
            if(text.value === ''){
                addButton.disabled = true;
            }
            else{
                addButton.disabled = false;
            }

      /*    console.dir(addButton);*/
    };


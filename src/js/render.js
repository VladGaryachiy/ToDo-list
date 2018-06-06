import {deleteTodo,updateTodo} from './view-manipulation';



let todo_list = document.getElementById('todo-list');


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


export default addTodo;
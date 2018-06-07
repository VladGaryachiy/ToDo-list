



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

};


export default addTodo;
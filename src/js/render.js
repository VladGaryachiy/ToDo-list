
let todo_list = document.getElementById('todo-list');


let addTodo = (todos, elementsVisible) => {

        if(todos.data.length){

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

            /*у первых 3 display: block а у остальных none*/
            if(todos.data.length <= 3 || todos.data.length > 3){
                for(let i = 0; i < todos.data.length; i++){
                    if( i < 3 ) {
                        todo_list.children[i].style.display = "flex"
                    }
                }
            }

            if(elementsVisible){
                if(elementsVisible.length === 1){
                 for(let j = 0; j < todos.data.length; j++){
                     if(elementsVisible[0] === j){
                         todo_list.children[j].style.display = 'flex'
                     }
                     else{
                         todo_list.children[j].style.display = 'none'
                     }
                 }
                }
                if(elementsVisible.length === 2){
                    for(let j = 0; j < todos.data.length; j++){
                        if(elementsVisible[0] === j || elementsVisible[1] === j){
                            todo_list.children[j].style.display = 'flex'
                        }
                        else{
                            todo_list.children[j].style.display = 'none'
                        }
                    }
                }
                if(elementsVisible.length === 3){
                    for(let j = 0; j < todos.data.length; j++){
                        if(elementsVisible[0] === j || elementsVisible[1] === j || elementsVisible[2] === j){
                            todo_list.children[j].style.display = 'flex';
                        }
                        else{
                            todo_list.children[j].style.display = 'none'
                        }
                    }
                }

            }

        }
        if(!todos.data.length){
            todo_list.innerHTML = '';
        }

};


export default addTodo;
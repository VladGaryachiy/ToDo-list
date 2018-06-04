let generateId = () => {
   return Math.floor(Math.random() * 100);
};



class Todo{
    constructor(name){
        this.id = generateId();
        this.name = name;
    }
}


class TodoService {
    constructor(){
        this.todos = {
            data: [
              /*  {name:"Todo 1"},
                {name:"Todo 2"},
                {name:"Todo 3"}*/
            ]
        }


    }

    getTodos(){
        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    crateTodo(name){
        let todo = new Todo(name);
        this.todos.data.push(todo);

        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    deleteTodo(name){
        let id = null;
        this.todos.data.forEach((item,i) => {
            if(item.name === name){
                id = i;
            }
        });

        this.todos.data.splice(id,1);

        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    updateTodo(id, name){

        let search_obj = this.todos.data.filter(function (item) {
           return item.id === +id;
        });

        search_obj[0].name = name;
        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);

    }



}

export default TodoService;
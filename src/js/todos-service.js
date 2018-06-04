let generateId = () => {
   return Math.floor(Math.random() * 100);
};



class Todo{
    constructor(name,date){
        this.id = generateId();
        this.name = name;
        this.dateCreate = date;
        this.dateUpdate = null;
    }
}


class TodoService {
    constructor(){
        this.todos = {
            data: [

            ]
        }


    }

    getDate(){
        let date = new Date();

        let result = null;

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        return result = `${day} ${month} ${year} ${hour}:${minute}:${second}`
    }

    getTodos(){
        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    crateTodo(name,date){
        let todo = new Todo(name,date);
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

    updateTodo(id, name, date){

        let search_obj = this.todos.data.filter(function (item) {
           return item.id === +id;
        });

        search_obj[0].name = name ;
        search_obj[0].dateUpdate = date;

        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);

    }



}

export default TodoService;
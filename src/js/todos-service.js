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
                {
                    id:1,
                    name:"todo 1",
                    dateCreate:null,
                    dateUpdate:null
                },
                {
                    id:2,
                    name:"todo 2",
                    dateCreate:null,
                    dateUpdate:null
                },
                {
                    id:3,
                    name:"todo 3",
                    dateCreate:null,
                    dateUpdate:null
                },
                {
                    id:4,
                    name:"todo 4",
                    dateCreate:null,
                    dateUpdate:null
                },
                {
                    id:5,
                    name:"todo 5",
                    dateCreate:null,
                    dateUpdate:null
                }
                ,
                {
                    id:6,
                    name:"todo 6",
                    dateCreate:null,
                    dateUpdate:null
                }
                ,
                {
                    id:7,
                    name:"todo 7",
                    dateCreate:null,
                    dateUpdate:null
                }
                ,
                {
                    id:8,
                    name:"todo 8",
                    dateCreate:null,
                    dateUpdate:null
                }
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

    dateSort(){
        this.todos.data.sort((a,b) => {
            return new Date(b.dateCreate) - new Date(a.dateCreate);
        });
        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    nameSort(){
        this.todos.data.sort((a,b) => {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
        });

        let objStr = JSON.stringify(this.todos);
        localStorage.setItem('object',objStr);
    }

    searchTodo(text){
            let search_todo = {
                data:[]
            };
            let all_todo = this.todos.data;
            let req = new RegExp(text,"i");


            this.todos.data.forEach(item => {
                    if(req.test(item.name)){
                        search_todo.data.push(item);
                    }
            });

            if(search_todo){
                let objStr = JSON.stringify(search_todo);
                localStorage.setItem('object',objStr);
            }
            else{
                let objStr = JSON.stringify(this.todos);
                localStorage.setItem('object',objStr);
            }
        }
}

export default TodoService;
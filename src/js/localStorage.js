
    let Todos  = {
        data: [

        ]
    };

    function setLocalStorage(todos){
        let objStr = JSON.stringify(todos);
        localStorage.setItem('object',objStr);
   }

    function getLocalStorage() {
            let todos = JSON.parse(localStorage.getItem('object'));
            Todos = todos;
   }


   export {Todos, setLocalStorage, getLocalStorage}


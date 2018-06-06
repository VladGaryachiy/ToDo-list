/*create pagination*/

import Todos from './todos-data';
import addTodo from './render';


let todos = Todos;


let countPress = 3; /*кол-во нажатий*/

let checkNextPageNumberButtonIsWorked = false;
/*провеям отработало ли собыьие, если да то в стрелочных кнопках не добавляем 3 а только
 начальную точку с события котороя навешано на нумерованые кнопки*/

let pagesContainer = document.getElementById('pages-container');


/*переход по нумерованым кнопкам*/
let nextPages = event => {

    let numberElementPages = 3; // кол-во елементов на странице
    let countPages = todos.data.length / numberElementPages; // кол-во страниц
    let countData = todos.data.length; // длина массива задая

    let todosPaginationData = {
        data : []
    };

    let numberPage = event.currentTarget.textContent.trim();
    /* pressButton = numberPage;*/


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

    countPress = from;

    checkNextPageNumberButtonIsWorked = true;


};



/*генерация цыфровых кнопок*/
function pagination(todos) {

    let numberElementPages = 3; // кол-во елементов на странице
    let countPages = todos.data.length / numberElementPages; // кол-во страниц
    let countData = todos.data.length;

    let todosPaginationData = {
        data : []
    };

    if(pagesContainer.children.length){
        pagesContainer.innerHTML = ''
    }

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
}

pagination(todos);

let buttons = document.querySelectorAll('.links-pages');
for(let i = 0; i < buttons.length; i++){
    buttons.onclick = nextPages;
}





let prev = document.getElementById('prev');


let todosPaginationDataPrevClick = {
    data : []
};


prev.onclick = event => {
    console.log(countPress);

    const numberElementPages = 3; // кол-во елементов на странице
    let countPages = todos.data.length / numberElementPages; // кол-во страниц
    let countData = todos.data.length; // длина массива задач


    let end =   countData - countPress;

    if(countPress){
        todosPaginationDataPrevClick.data.length = 0;
        for(let i  = countPress - 3; i < countPress; i++){
            todosPaginationDataPrevClick.data.push(todos.data[i])
        }
        countPress -= 3;
    }

    if(countPress < 0 || countPress === 0){
        todosPaginationDataPrevClick.data.length = 0;
        for(let i  = 0; i < numberElementPages; i++){
            todosPaginationDataPrevClick.data.push(todos.data[i])
        }
        countPress = 0;
    }

    if(end === 1){
        todosPaginationDataPrevClick.data.length = 0;
        for(let i = countData - 4 ; i < countData -1; i++){
            todosPaginationDataPrevClick.data.push(todos.data[i])
        }
        countPress -= 4
    }


    if(end === 2){
        todosPaginationDataPrevClick.data.length = 0;
        for(let i = countData - 5 ; i < countData -2; i++){
            todosPaginationDataPrevClick.data.push(todos.data[i])
        }

        if(!countPress){
            todosPaginationDataPrevClick.data.length = 0;
            for(let i = 0 ; i < numberElementPages; i++){
                todosPaginationDataPrevClick.data.push(todos.data[i])
            }
        }

        countPress === 0 ? countPress = 0 : countPress -= 5

    }






    addTodo(todosPaginationDataPrevClick);
};


let next = document.getElementById('next');

let todosPaginationDataNextClick = {
    data : []
};
/*кнопка дале*/
next.onclick = event => {
    console.log(countPress);

    const numberElementPages = 3; // кол-во елементов на странице
    let countPages = todos.data.length / numberElementPages; // кол-во страниц
    let countData = todos.data.length; // длина массива задач


    let end =   countData - countPress;

    if(countPress || !countPress){
        todosPaginationDataNextClick.data.length = 0;
        for(let i = countPress; i < countPress + 3; i++){ /*если нету остатка то перебирать через 3*/
            todosPaginationDataNextClick.data.push(todos.data[i]);
        }
        countPress += 3;
    }

    if(countPress > countData){
        end = countPress - countData;

        /*если остался 1 елемент*/
        if(end === 2){
            countPress -= 3;
            todosPaginationDataNextClick.data.length = 0;
            for(let j = countPress; j < countData; j++){
                todosPaginationDataNextClick.data.push(todos.data[j]);
            }

        }

        /*если осталось 2 елемента*/
        if(end === 1){
            countPress -= 3;
            todosPaginationDataNextClick.data.length = 0;
            for(let j = countPress  ; j < countData; j++){
                todosPaginationDataNextClick.data.push(todos.data[j]);
            }
        }
    }
    if(countPress === countData){
        todosPaginationDataNextClick.data.length = 0;
        countPress -= 3;
        for(let j = countPress + 1; j <= countData; j++){
            todosPaginationDataNextClick.data.push(todos.data[j-1]);
        }
    }


    addTodo(todosPaginationDataNextClick);
};


export default pagination;
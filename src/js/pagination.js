/*create pagination*/
import generateElement from './generateElement'

const numberButtonPagesContainer = generateElement('pages-container','id'); /*контейнер цифровых кнопок*/
const paginationContainer = generateElement('pagination-container','id'); /*в него будем влаживать кнопки prev and next*/


let button = document.createElement('button');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

let prev_button_container = generateElement('prev-button-container','id');
let next_button_container = generateElement('next-button-container','id');

class Pagination{
    constructor(Todos){
        this.countClick = 0; /*кол-во нажатий*/
        this.numberButtonClick = null; /*число кнопки на которую нажали*/
        this.countElementInPage = 3; /*кол - во елементов на странице*/
        this.countElementsInThisPage = this.numberButtonClick * 3; /*сколько должно быть елементов на странице*/
        this.countAllData = Todos.data.length; /*количество задач*/
        this.checkNumberClick = false;
        this.clickNumber = null;
        this.todos = Todos;
        this.lastPage = null;
        this.selectNumberButton = 1;
    }

    createNumberButton(){
        let countPages = this.todos.data.length / 3;/*кол-во страниц*/
        let paginationTodos = [];
        this.countClick = 0;

        numberButtonPagesContainer.innerHTML = '';
            if(this.todos.data.length > 3){
                /*create number button*/
                for(let i = 0; i < countPages; i++){
                    numberButtonPagesContainer.innerHTML += `
                     <button class="link-pages" id="link-pages">${i + 1}</button>
                    `;
                }
                prev_button_container.innerHTML = `<button class="prev" id="prev">prev</button>`;
                next_button_container.innerHTML = `<button class="next" id="next">next</button>`;
            }

            if(this.todos.data.length <= 3){
                prev_button_container.innerHTML = '';
                next_button_container.innerHTML = '';
            }

        }


    clickNumberButton(event){

        let numberElementPages = 3; // кол-во елементов на странице
        let numberPage = Number(event.textContent.trim()); /*номер страницы*/
        this.checkNumberClick = true;
        this.selectNumberButton = numberPage;

        if(numberPage === 1){
            this.countClick = 0
        }
        else{
            this.countClick = numberPage * 3 - 3;
        }

        let selectedTodos = [];

        /* pressButton = numberPage;*/
        let from = this.countElementInPage * numberPage - 3;
        let to = this.countElementInPage * numberPage; /*до*/

        if(this.todos.data.length > 3){
            if(to > this.todos.data.length){
                selectedTodos.length = 0; /*очищаем если естб даные*/
                for(let i = from; i < this.todos.data.length; i++){
                    selectedTodos.push(i) /*- позиции елементов в массиве*/
                }
            }
            else{
                selectedTodos.length = 0; /*очищаем если естб даные*/
                for(let i = from; i < to; i++){
                    selectedTodos.push(i);
                }
            }
        }

        if(numberPage){
            for(let i = 0; i < numberButtonPagesContainer.children.length; i++){
                   if(i === numberPage - 1){
                       numberButtonPagesContainer.children[i].style.backgroundColor = '#d2d2d7';
                       numberButtonPagesContainer.children[i].style.outline = 'none';
                   }
                   else{
                       numberButtonPagesContainer.children[i].style.backgroundColor = 'white';
                   }
            }
        }
        return selectedTodos;

    }

    clickNextButton(event){
        event.style.outline = 'none';

        let selectedTodos = [];
        if(this.countClick < this.todos.data.length){
            this.lastPage = this.todos.data.length -  this.countClick; /*остаток с последней страницы*/
        }
        this.countClick += 3; /*если нажали то добаляем 3 */
        this.selectNumberButton += 1;

        let manyClick = this.countClick - this.todos.data.length;

        if(this.todos.data.length >  this.countClick){
            selectedTodos.length = 0;
            for(let i = this.countClick; i < this.countClick + 3; i++ ){
                selectedTodos.push(i);
            }
        }
        /*если осталось 1 елемента*/
        if(this.lastPage === 1){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 1; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }
        /*елси остался 2 елемент*/
        if(this.lastPage === 2){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 2; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }

        if(this.countClick >= this.todos.data.length){
            selectedTodos.length = 0;
            this.selectNumberButton  = Math.ceil(this.todos.data.length / 3);
            this.countClick = this.countClick - 3;
            for(let i = this.todos.data.length - this.lastPage; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }



        /*контейнер цыфровых кнопок*/
        let pagesN = numberButtonPagesContainer.children;
        if(pagesN.length){
            for(let j = 0; j < pagesN.length;j++){
                let numberPage = Number(pagesN[j].textContent);
                if(numberPage === this.selectNumberButton){
                    pagesN[j].style.backgroundColor = '#d2d2d7';
                    pagesN[j].style.outline = 'none';
                }
                else{
                    pagesN[j].style.backgroundColor = 'white';
                }
            }
        }
            return selectedTodos;




    }

    clickPrevButton(event){
        event.style.outline = 'none';
        let selectedTodos = [];

        this.lastPage = this.todos.data.length -  this.countClick; /*остаток с последней страницы*/

        if(this.countClick >= 3){
            this.countClick -= 3; /*если нажали то добаляем 3 */
        }
        this.selectNumberButton -= 1;

        if(this.todos.data.length >  this.countClick){
            selectedTodos.length = 0;
            for(let i = this.countClick ; i < this.countClick + 3; i++ ){
                selectedTodos.push(i);
            }
        }
        /*если осталось 1 елемента*/
        if(this.lastPage === 1){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 4; i < this.todos.data.length - 1; i++ ){
                selectedTodos.push(i);
            }
        }
        /*елси остался 2 елемент*/
        if(this.lastPage === 2){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 5; i < this.todos.data.length - 2; i++ ){
                selectedTodos.push(i);
            }
        }

        if(this.countClick <= 0){
            selectedTodos.length = 0;
            this.countClick = 0;
            this.selectNumberButton = 1;
            for(let i = this.countClick; i <  this.countClick + 3; i++ ){
                selectedTodos.push(i);
            }
        }
        let pagesN = numberButtonPagesContainer.children;

        if(pagesN.length){
            for(let j = 0; j < pagesN.length;j++){
                let numberPage = Number(pagesN[j].textContent);
                if(numberPage === this.selectNumberButton){
                    pagesN[j].style.backgroundColor = '#d2d2d7';
                    pagesN[j].style.outline = 'none';
                }
                else{
                    pagesN[j].style.backgroundColor = 'white';
                }
            }
        }
        return selectedTodos;

    }
}









export default Pagination;
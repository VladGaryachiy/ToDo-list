/*create pagination*/


const numberButtonPagesContainer = document.getElementById('pages-container'); /*контейнер цифровых кнопок*/
const paginationContainer = document.getElementById('pagination-container'); /*в него будем влаживать кнопки prev and next*/


let button = document.createElement('button');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

let prev_button_container = document.getElementById('prev-button-container');
let next_button_container = document.getElementById('next-button-container');

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
    }

    createNumberButton(deleteWork){
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
        let numberPage = Number(event.target.textContent.trim()); /*номер страницы*/
        this.checkNumberClick = true;

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
        return selectedTodos;

    }

    clickNextButton(event){
        let selectedTodos = [];

        if(this.countClick < this.todos.data.length){
            this.lastPage = this.todos.data.length -  this.countClick; /*остаток с последней страницы*/
        }
        this.countClick += 3; /*если нажали то добаляем 3 */
        let manyClick = this.countClick - this.todos.data.length;

        if(this.todos.data.length >  this.countClick){
            selectedTodos.length = 0;
            for(let i = this.countClick; i < this.countClick + 3; i++ ){
                selectedTodos.push(i);
            }
        }
        /*если осталось 2 елемента*/
        if(this.lastPage === 1){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 1; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }
        /*елси остался 1 елемент*/
        if(this.lastPage === 2){
            selectedTodos.length = 0;
            for(let i = this.todos.data.length - 2; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }

        if(this.countClick >= this.todos.data.length){
            selectedTodos.length = 0;
            this.countClick = this.todos.data.length;
            for(let i = this.todos.data.length - this.lastPage; i < this.todos.data.length; i++ ){
                selectedTodos.push(i);
            }
        }

            return selectedTodos;




    }

    clickPrevButton(){

    }
}









export default Pagination;
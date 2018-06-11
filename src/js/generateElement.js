
  function generateElement(selector , type){
        switch (type){
           case 'id':
               return document.getElementById(selector);
               break;
           case 'class':
               return document.querySelector(selector);
               break;
            case 'all':
                return document.querySelectorAll(selector);

        }
    }

   export default generateElement;
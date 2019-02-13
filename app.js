//module pattern

//Budget controller
var budgetController = (function() {

})();


//UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    //some code
    return {
        getInput: function() {

            return {
                //+,-
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                //description
                description: document.querySelector(DOMstrings.inputDescription).value,
                //value
                value: document.querySelector(DOMstrings.inputValue).value
            }
     
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



//Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings;

    var ctrlAddItem = function() {
       
        // 1. get the filed input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add the item to the bodget controller

        // 3. add the item to the UI

        // 4. calculate the budget 

        // 5. display the budget on the UI
    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }        
    });

})(budgetController, UIController);

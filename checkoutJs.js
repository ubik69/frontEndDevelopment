let burger = localStorage.getItem('burger_Selected');
let burger_price = localStorage.getItem('burger_Price');
let str_burger_price = parseFloat(burger_price); // changed string to integer.
let fries = localStorage.getItem('fries_Selected');
let fries_price = localStorage.getItem('fries_Price');
let str_fries_price = parseFloat(fries_price); // changed string to integer.
let drink = localStorage.getItem('drink_Selected');
let drink_price = localStorage.getItem('drink_Price');
let str_drink_price = parseFloat(drink_price); // changed string to integer.
 
let total = str_burger_price+str_fries_price+str_drink_price; //calculating total price.


let selectedItemsDiv = document.getElementById('selectedItems');
let addExtraButton = document.getElementById('addExtraButton'); // for ordering extra burger
let extraSelectionDiv = document.getElementById('extraSelection'); // for ordering extra burger
let orderOptions = document.getElementById('orderOptions'); // for ordering extra burger
let addSelectedOrderButton = document.getElementById('addSelectedOrder'); // for ordering extra burger



if (burger) {
    let burgerDiv = document.createElement('div');
    burgerDiv.className = 'selected-item';
    /*Fixing value problem that occured cuz of another javaScript used to change depending on values , so it's values are image directory.*/
    if(burger == 'images/edited_basic.png'){
        burger = 'Toon-Tastic Burger Delights - £4.99';
    }
    if(burger == 'images/edited_chees.png'){
        burger = 'Cheeseville Burger - £6.99';
    }
    if(burger == 'images/edited_whoop.png'){
        burger = 'Burger Bonanza: An Animated Feast - £8.99';
    }
    burgerDiv.textContent = 'Burger: ' + burger;
    selectedItemsDiv.appendChild(burgerDiv);
    
    totalPrice.style.display = 'block'; // if there were none in checkout , total does not display.
    addExtraButton.style.display = 'block'; // if there were no burgers in checkout , this button would not appear but since there is , it's not displayed.
}
addExtraButton.addEventListener('click', function () {
    extraSelectionDiv.style.display = 'block'; // show the burger selection options
});
if (fries) {
    let friesDiv = document.createElement('div');
    friesDiv.className = 'selected-item';
    friesDiv.textContent = 'Fries: ' + fries;
    selectedItemsDiv.appendChild(friesDiv);
}

if (drink) {
    let drinkDiv = document.createElement('div');
    drinkDiv.className = 'selected-item';
    drinkDiv.textContent = 'Drink: ' + drink;
    selectedItemsDiv.appendChild(drinkDiv);
}

document.addEventListener("DOMContentLoaded",function(){
addSelectedOrderButton.addEventListener('click', function () {
    let selectedOption = orderOptions.options[orderOptions.selectedIndex];
    let orderName = selectedOption.text;
    

    if(orderName == 'Toon-Tastic Burger Delights - £4.99'){
        total += 4.99;
        updateTotalPrice();
        // Create a new div for the selected burger
        extraBurgerAdd(orderName);
    }
    else if(orderName == 'Cheeseville Burger - £6.99'){
        total += 6.99;
        updateTotalPrice();
        // Create a new div for the selected burger
        extraBurgerAdd(orderName);
    }else if(orderName == 'Burger Bonanza: An Animated Feast - £8.99'){
        total += 8.99;
        updateTotalPrice();
        // Create a new div for the selected burger
        extraBurgerAdd(orderName);
    }else if(orderName == 'Regular Salted Fries - £1.59'){
        total += 1.59;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraFriesAdd(orderName);
    }else if(orderName == 'Skin-on Fries - £1.59'){
        total +=1.59;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraFriesAdd(orderName);
    }else if(orderName == 'Signature Putso Seasoned Fries - £1.99'){
        total += 1.99;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraFriesAdd(orderName);
    }else if(orderName == 'Vanilla flavour - £5.99'){
        total += 5.99;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraDrinkAdd(orderName);
    }
    else if(orderName == 'Chocolate flavour - £5.99'){
        total += 5.99;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraDrinkAdd(orderName);
    }
    else if(orderName == 'Strawberry flavour - £5.99'){
        total += 5.99;
        updateTotalPrice();
        // Create a new div for the selected fries
        extraDrinkAdd(orderName);
    }
    
    
})
})

function extraBurgerAdd(orderName){
    let burgerDiv = document.createElement('div');
    burgerDiv.className = 'selected-item';
    burgerDiv.textContent = 'Burger: ' + orderName;
    selectedItemsDiv.appendChild(burgerDiv);
}

function extraFriesAdd(orderName){
    let friesDiv = document.createElement('div');
    friesDiv.className = 'selected-item';
    friesDiv.textContent = 'Fries: ' + orderName;
    selectedItemsDiv.appendChild(friesDiv);
}

function extraDrinkAdd(orderName){
    let drinkDiv = document.createElement('div');
    drinkDiv.className = 'selected-item';
    drinkDiv.textContent = 'Drink: ' + orderName;
    selectedItemsDiv.appendChild(drinkDiv);
}

function updateTotalPrice() {
    // updating the total price on the page
    document.getElementById('totalPrice').textContent = 'Total: £' + total.toFixed(2);
}

document.getElementById('totalPrice').textContent = 'Total: £' + total.toFixed(2); // initial total price.



localStorage.clear(); // for security purposes , after selections are taken , localstorage been wiped.
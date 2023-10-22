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

//document.write('£'+total);

let selectedItemsDiv = document.getElementById('selectedItems');

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
}

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


localStorage.clear(); // for security purposes , after selections are taken , localstorage been wiped.
function delayedDirect(){
    setTimeout(changeText,500);
    randomAudio()
}

function changeText(){
    setTimeout(direction,1000)
    let result = document.getElementById("result");
    result.innerHTML = '<br> Wait till we direct you to the checkout page.';
        // this is where it should collect the values of selections.
    burgerSelection = document.querySelector('#selected_burger');
    friesSelection = document.querySelector('#selected_fries')
    drinkSelection = document.querySelector('#selected_milkshake')
    if (burgerSelection.value == "Select your burger choice" || friesSelection.value=="Select your side"){ // checks before assigning numbers to checkout page.
        alert("Make sure to select atleast one burger and side to proceed!");
    }
    burger = burgerSelection.value;   /*Logging order names*/
    fries= friesSelection.value;
    drink= drinkSelection.value;
                                    /*Logging the prices*/
    let burgerPrice = parseFloat(document.getElementById('selected_burger').selectedOptions[0].getAttribute('data-price'));
    let friesPrice = parseFloat(document.getElementById('selected_fries').selectedOptions[0].getAttribute('data-price'));
    let milkshakePrice = parseFloat(document.getElementById('selected_milkshake').selectedOptions[0].getAttribute('data-price'));
    // Putting values to localStorage.
    localStorage.setItem("burger_Selected", burger);
    localStorage.setItem("fries_Selected", fries);
    localStorage.setItem("drink_Selected", drink);
    localStorage.setItem("burger_Price",burgerPrice);
    localStorage.setItem("fries_Price",friesPrice);
    localStorage.setItem("drink_Price",milkshakePrice);
}

// reason to use multiple functions is that setTimeout function executes the codes in that function and after that it sleeps for entered amount. I wanted it to wait for audios to fully play and then direct to the page to enhance UX.

function direction(){
    if (burgerSelection.value == "Select your burger choice" || friesSelection.value=="Select your side"){ // if user does not buy the required pieces , system won't let to proceed.
        window.location.href="order.html";
        localStorage.clear();
    }else{
        window.location.href='checkout.html';
    }
    
}

function randomAudio(){/*script to get a random audio on click every time.*/
let floattedRandom = Math.random()*5;               
let randInt = Math.floor(floattedRandom);
if (randInt == 1) {
    audio1.play()
}
else if(randInt == 2){
    audio2.play()
}
else if(randInt == 3){
    audio3.play()
}
else if(randInt == 4){
    audio4.play()
}
else{
    audio5.play()
}
}

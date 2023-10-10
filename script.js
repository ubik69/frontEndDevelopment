function delayedDirect(){
    setTimeout(changeText,500);
    randomAudio()
}

function changeText(){
    setTimeout(direction,1000)
    let result = document.getElementById("result");
    result.innerHTML = '<br> Wait till we direct you to the checkout page.';
        // this is where it should collect the values of selections.
    selectElement = document.querySelector('#selected_burger');
    selectElement2 = document.querySelector('#selected_fries')
    selectElement3 = document.querySelector('#selected_milkshake')
    if (selectElement.value == "Select your burger choice" || selectElement2.value=="Select your side"){ // checks before assigning numbers to checkout page.
        alert("Make sure to select atleast one burger and side to proceed!");
    }
    output = selectElement.value;
    localStorage.setItem("burger_Selected", output);
    output2= selectElement2.value;
    localStorage.setItem("fries_Selected", output2);
    output3= selectElement3.value;
    localStorage.setItem("drink_Selected", output3);
}

// reason to use multiple functions is that setTimeout function executes the codes in that function and after that it sleeps for entered amount. I wanted it to wait for audios to fully play and then direct to the page to enhance UX.

function direction(){
    if (selectElement.value == "Select your burger choice" || selectElement2.value=="Select your side"){ // if user does not buy the required pieces , system won't let to proceed.
        window.location.href="order.html";
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

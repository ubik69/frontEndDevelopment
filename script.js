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
    output = selectElement.value;
    localStorage.setItem("burger_Selected", output);
    output2= selectElement2.value;
    localStorage.setItem("fries_Selected", output2);
    output3= selectElement3.value;
    localStorage.setItem("drink_Selected", output3);
    alert(output);
    alert(output2);
    alert(output3);
}

// reason to use multiple functions is that setTimeout function executes the codes in that function and after that it sleeps for entered amount. I wanted it to wait for audios to fully play and then direct to the page to enhance UX.

function direction(){
    window.location.href='checkout.html';
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

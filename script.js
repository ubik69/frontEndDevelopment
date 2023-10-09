function delayedDirect(){
    setTimeout(changeText,500);
    randomAudio()
}

function changeText(){
    setTimeout(direction,1000)
    let result = document.getElementById("result");
    result.innerHTML = '<br> Wait till we direct you to the checkout page.';
}


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

setTimeout(function() {
    randomAudio(); // call the random audio every click on buttons , wait till audio loads up.
}, 150);


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
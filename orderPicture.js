document.addEventListener("DOMContentLoaded",function(){ /*we have this to be able to uptade variables*/
    let selected_burger = document.getElementById('selected_burger');
    let displayingPlace = document.getElementById('displayingPlace');

    selected_burger.addEventListener("change",function(){
        let selected_image = selected_burger.value;
        displayingPlace.src = selected_image;
    })
})
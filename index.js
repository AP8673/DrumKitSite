
// var len = document.querySelectorAll("button").length;


//detecting the mouse click
for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var drumButton = this.innerHTML;
        makeSound(drumButton);
        buttonAnimation(drumButton);
    });
}

//detecting the keyspress 
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case 'w':var tom1 = new Audio('sounds/tom-1.mp3');//new audio object with the audio url
                 tom1.play();
                 break;
        case 'a':var tom2 = new Audio('sounds/tom-2.mp3');//new audio object with the audio url
                 tom2.play();
                 break;
        case 's':var tom3 = new Audio('sounds/tom-3.mp3');//new audio object with the audio url
                 tom3.play();
                 break;
        case 'd':var tom4 = new Audio('sounds/tom-4.mp3');//new audio object with the audio url
                 tom4.play();
                 break;
        case 'j':var snare = new Audio('sounds/snare.mp3');//new audio object with the audio url
                 snare.play();
                 break;
        case 'k':var crash = new Audio('sounds/crash.mp3');//new audio object with the audio url
                 crash.play();
                 break;
        case 'l':var kick = new Audio('sounds/kick-bass.mp3');//new audio object with audio url
                 kick.play();
                 break;
        default:
                 break;
    }
}


function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}
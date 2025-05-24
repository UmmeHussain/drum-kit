// function for playing sound
function playSound(clickon){
    var tom1 = new Audio('sounds/tom-1.mp3')
        var tom2 = new Audio('sounds/tom-2.mp3')
        var tom3 = new Audio('sounds/tom-3.mp3')
        var tom4 = new Audio('sounds/tom-4.mp3')
        var crash = new Audio('sounds/crash.mp3')
        var kick = new Audio('sounds/kick-bass.mp3')
        var snare = new Audio('sounds/snare.mp3')
        switch(clickon){
            case "w":
            crash.play();
                break;
            case "a":
                tom3.play();
                break;
            case "s":
                tom1.play();
                break;
            case "d":
                snare.play();
                break;
            case "j":
                tom2.play();
                break;
            case "k":
                tom4.play();
                break;
            case "l":
                kick.play();
                break;
            default:
                alert("wrong click");
            
        }
    
}
// function for Animation
function addAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },300)
}

// detecting keyboardpress
document.addEventListener("keypress",function(event){
    playSound(event.key);
    addAnimation(event.key);
})

// detecting button press in screen
var drumNumber =document.querySelectorAll(".drum")
for(var i = 0; i < drumNumber.length;i++){
    drumNumber[i].addEventListener("click",function(){
        playSound(this.innerHTML);
        addAnimation(this.innerHTML);
})
}

var buttonsel = document.querySelectorAll(".drum");
for(var i=0;i<buttonsel.length;i++)
{
    buttonsel[i].addEventListener("click",function(){
       switch(this.innerHTML){
           case 'w':
            var music=new Audio('sounds/crash.mp3');
            music.play();
            break;
            case 'a':
            var music=new Audio('sounds/kick-bass.mp3');
            music.play();
            break;
            case 's':
            var music=new Audio('sounds/snare.mp3');
            music.play();
            break;
            case 'd':
            var music=new Audio('sounds/tom-1.mp3');
            music.play();
            break;
            case 'j':
            var music=new Audio('sounds/tom-2.mp3');
            music.play();
            break;

            case 'k':
            var music=new Audio('sounds/tom-3.mp3');
            music.play();
            break;
            case 'l':
            var music=new Audio('sounds/tom-4.mp3');
            music.play();
            break;
            default:
                alert("press valid key");

       }
       clickanimation(this.innerHTML);

    });
}
document.addEventListener("keypress",function(event){
    console.log(event);
    var anykey=event.key.toLowerCase();
    switch(anykey)
    { case 'w':
    var music=new Audio('sounds/crash.mp3');
    music.play();
    break;
    case 'a':
    var music=new Audio('sounds/kick-bass.mp3');
    music.play();
    break;
    case 's':
    var music=new Audio('sounds/snare.mp3');
    music.play();
    break;
    case 'd':
    var music=new Audio('sounds/tom-1.mp3');
    music.play();
    break;
    case 'j':
    var music=new Audio('sounds/tom-2.mp3');
    music.play();
    break;

    case 'k':
    var music=new Audio('sounds/tom-3.mp3');
    music.play();
    break;
    case 'l':
    var music=new Audio('sounds/tom-4.mp3');
    music.play();
    break;
    default:
        alert("press valid key");

    
    }
    clickanimation(anykey);
})

function clickanimation(buttonkey)
{
    var active=document.querySelector("."+buttonkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")
    },100)
}
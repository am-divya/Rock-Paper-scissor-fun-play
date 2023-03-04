let display = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('screen'));
buttons.map(button=> {
    button.addEventListener('click',(e)=>{
        //console.log('clicked');
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.innerText);
        switch(e.srceen.innerText){   //switches from console to calc screen
            case c:
                display.innerText='';  // C is for clear
                break;
                case '<-':              // for back space
                    if(display.innerText){
                        display.innerText=display.innerText.slice(0,-1);
                    }
                    break;
                case '=':
                    try{
                        display.innerText=eval(display.innerText); // eval to evaluate the expression

                    } catch{
                        display.innerText='error';       // other than numbers,shows error(*/*=?)

                    }break;
                    default:
                        display.innerText += e.target.innerText; // display on screen 
        }


    });

});



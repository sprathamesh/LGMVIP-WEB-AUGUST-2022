let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener("click",function(event)
    { 
        buttonText = event.target.innerHTML;
        console.log(buttonText);
        switch(buttonText)
        {
        case "C" : screen.value = "";
        break;
        case "=" :screen.value = eval(screen.value);
        break; 
        case "←" : screen.value = screen.value.slice(0,-1);
        break;
        default :  screen.value += event.target.innerHTML;
        break; 
                       
         }
        
    })
}
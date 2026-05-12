import * as globals from "./globals.js";





let selectLayer = getElementByClassName("");

function selectLayer(el){
    
    let idName = el.getAttribute("id");

    const index = idName.at(-1);

    let selectedCanvas = document.getElementById("canvas"+index);
    
    //console.log(selectedCanvas);
    
    $("li.selected").removeClass("selected");
    el.setAttribute("class","selected");
    
    
    return selectedCanvas;
}

import * as globals from "./globals.js";

// Função para aumentar ou diminuir o valor do input de tamanho da ferramenta
function changeSize(event){
    size = parseInt($(".size").val(),10);
    console.log(size);

    if($(event).hasClass("numberUp")){
        if(size < 10){
            $(".size").val(parseInt($(".size").val(),10) + 1);
        }
    } else if($(event).hasClass("numberDown")){
        if(size > 1){
            $(".size").val(parseInt($(".size").val(),10) - 1);
        }
    }
}

//adiciona novo layer, tanto na lista como um canvas novo sobreposto
let addLayer = document.getElementById("newLayer");
console.log(addLayer);

addLayer.addEventListener("click", function (){

    let layerSize = document.getElementsByClassName("layerList").length;

    globals.setLayerListLenght(layerSize);
    console.log(globals.layerListLenght);

    let layerName = "layer"+(globals.layerListLenght + 1);
    
    $(".layerList").append("<li class='layer' id='"+(layerName)+ "'>Layer " + ($(".layerList li").length + 1) + "<a><i class='delete fa-solid fa-x'></i></a></li>");

    $(".workspace").append("<canvas id='" + canvasName + "' width='800' height='1200' style='border:1px solid #555555; display:block; position:absolute; top:2%; left:20%;  margin:auto; z-index:"+ parseInt(globals.layerListLenght +1)  +"';></canvas>");


    
    //globals.contexts.push(document.getElementById(canvasName).getContext("2d",{willReadFrequently: true}));

});




let changeSelectedLayer = document.getElementsByClassName("layer selected").item(0);

console.log(changeSelectedLayer);

changeSelectedLayer.addEventListener("click", function(el){

    
    let idName = el.getAttribute("id");

    const index = idName.at(-1);

    let selectedCanvas = document.getElementById("canvas"+index);
    
    console.log(selectedCanvas);
    $("li.selected").removeClass("selected");
    el.setAttribute("class","selected");
    

    //setSelectedCanvas(selectedCanvas);
});
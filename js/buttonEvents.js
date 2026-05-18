import * as globals from "./globals.js";



// Função para aumentar ou diminuir o valor do input de tamanho da ferramenta
function changeSize(event){
    size = parseInt(document.querySelector(".size").value,10);
    console.log(size);

    if(event.classList.contains("numberUp")){
        if(size < 10){
            document.querySelector(".size").value = parseInt(document.querySelector(".size").value,10) + 1;
        }
    } else if(event.classList.contains("numberDown")){
        if(size > 1){
            document.querySelector(".size").value = parseInt(document.querySelector(".size").value,10) - 1;
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
    
    const layerListUl = document.querySelector(".layerList");
    const newLayerLi = document.createElement("li");
    newLayerLi.className = "layer";
    newLayerLi.id = layerName;
    newLayerLi.innerHTML = "Layer " + (layerListUl.querySelectorAll("li").length + 1) + "<a><i class='delete fa-solid fa-x'></i></a>";
    layerListUl.appendChild(newLayerLi);


    let canvasName = "canvas"+(globals.layerListLenght + 1);

    const newCanvas = document.createElement("canvas");
    newCanvas.id = canvasName;
    newCanvas.width = 800;
    newCanvas.height = 1200;
    newCanvas.style.border = "1px solid #555555";
    newCanvas.style.display = "block";
    newCanvas.style.position = "absolute";
    newCanvas.style.top = "2%";
    newCanvas.style.left = "20%";
    newCanvas.style.margin = "auto";
    newCanvas.style.zIndex = parseInt(globals.layerListLenght + 1);
    document.querySelector(".workspace").appendChild(newCanvas);


    
    //globals.contexts.push(document.getElementById(canvasName).getContext("2d",{willReadFrequently: true}));

});



//seleciona ol. elemento pai do li
let listLayer = document.getElementsByClassName("layerList")[0];


listLayer.addEventListener("click", function(el){

    if(el.target.tagName == "li"){

        console.log(el);
        
        document.getElementsByClassName("li selected").item(0).classList.remove("selected");
        
        el.setAttribute("class","selected");
        
    }
});
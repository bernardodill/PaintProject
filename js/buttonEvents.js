import * as globals from "./globals.js";

let addLayerBtn = document.querySelector("#newLayer");

let sizeUp = document.querySelector(".numberUp");
let sizeDown = document.querySelector(".numberDown");

let pencilBtn = document.querySelector("#lapis");

let shapesTools = document.querySelectorAll(".shapesTool a");




pencilBtn.addEventListener("click", pencilSelected);



addLayerBtn.addEventListener("click", addLayer);

sizeUp.addEventListener("click", changeSize);
sizeDown.addEventListener("click", changeSize);

// Função para aumentar ou diminuir o valor do input de tamanho da ferramenta
function changeSize(event){    
    
    let target = event.currentTarget; //pega o elemento clicado

    let size = parseInt(document.querySelector(".size").value,10); //pega o valor atual do input e converte para inteiro
   
    if(target.classList.contains("numberUp")){ //verifica se tem classe numberUp
        if(size < 10){
            document.querySelector(".size").value = parseInt(document.querySelector(".size").value,10) + 1;
        }
    } else if(target.classList.contains("numberDown")){
        if(size > 1){
            document.querySelector(".size").value = parseInt(document.querySelector(".size").value,10) - 1;
        }
    }
}

function addLayer(){
    let newCanvas = document.createElement("canvas");
    newCanvas.id = `canvas${globals.layerListLenght + 1}`; // Define o ID do novo canvas com base na quantidade de camadas
    newCanvas.width = 800;
    newCanvas.height = 1200;
    newCanvas.style.border = "1px solid #555555";
    newCanvas.style.display = "block";
    newCanvas.style.backgroundColor = "transparent";
    newCanvas.style.position = "absolute";
    newCanvas.style.top = "2%";
    newCanvas.style.left = "20%";
    newCanvas.style.zIndex = globals.layerListLenght + 1; // Define o z-index com base na quantidade de camadas
    document.querySelector(".workspace").appendChild(newCanvas);
    
    globals.setLayerListLenght(globals.layerListLenght + 1); // Incrementa a quantidade de camadas

    let newLayerItem = document.createElement("li");
    
    newLayerItem.addEventListener("click", changeSelectedLayer); // Adiciona o evento de clique para selecionar a camada

    newLayerItem.textContent = `Camada ${globals.layerListLenght}`;
    newLayerItem.classList.add("layer");
    newLayerItem.style.height = "30px";
    newLayerItem.style.display = "flex";
    newLayerItem.style.alignItems = "center";
    newLayerItem.style.justifyContent = "center";
    newLayerItem.style.fontFamily = 'Monospace, monospace';
    newLayerItem.style.fontSize = "14px";
    
    

    newLayerItem.style.cursor = "pointer"; // Adiciona o cursor pointer para indicar que é clicável 
   
    document.querySelector(".layerList").appendChild(newLayerItem);
}



export function changeSelectedLayer(event) {
    console.log( 'mudou' );

    document.getElementsByClassName('layer selected')[0].classList.remove("selected"); // Remove a classe "selected" do item atualmente selecionado

    event.currentTarget.classList.add("selected"); // Adiciona a classe "selected" ao item clicado

}


export function pencilSelected(evt){
    let tool = document.querySelectorAll(".ferramenta");
    for (let i = 0; i < tool.length; i++) {
        document.querySelector(".ativo").classList.remove("ativo");
        evt.currentTarget.classList.add("ativo");
    }
}

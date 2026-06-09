import * as globals from "./globals.js";
import * as mouseEvents from "./mouseEvents.js";

let addLayerBtn = document.querySelector("#newLayer");

let sizeUp = document.querySelector(".numberUp");
let sizeDown = document.querySelector(".numberDown");

// Botões de ferramentas
let pencilBtn = document.querySelector("#lapis");
let rectangleBtn = document.querySelector("#retangulo");
let circleBtn = document.querySelector("#arco");
let lineBtn = document.querySelector("#linha");
let eraserBtn = document.querySelector("#borracha");
let selectBtn = document.querySelector("#select");


pencilBtn.addEventListener("click", () => changeShapeTool(event));
rectangleBtn.addEventListener("click", () => changeShapeTool(event));
circleBtn.addEventListener("click", () => changeShapeTool(event));
lineBtn.addEventListener("click", () => changeShapeTool(event));
eraserBtn.addEventListener("click", () => changeShapeTool(event));
selectBtn.addEventListener("click", () => changeShapeTool(event));





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
    newCanvas.id = `canvas${globals.layerListLength + 1}`; // Define o ID do novo canvas com base na quantidade de camadas
    newCanvas.width = 800;
    newCanvas.height = 1200;
    newCanvas.zIndex = globals.layerListLength + 1; 
 
    document.querySelector(".workspace").appendChild(newCanvas);
    
    globals.setLayerListLength(globals.layerListLength + 1); // Incrementa a quantidade de camadas

    let ctx = newCanvas.getContext("2d", { willReadFrequently: true }); // Obtém o contexto do novo canvas com a opção willReadFrequently
    globals.contexts.push(ctx); // Adiciona o contexto do novo canvas à lista de contextos no objeto global
    

    let newLayerItem = document.createElement("li");
    newLayerItem.addEventListener("click", changeSelectedLayer); // Adiciona o evento de clique para selecionar a camada
    newLayerItem.textContent = `Camada ${globals.layerListLength}`;
    newLayerItem.classList.add("layer");
   
    document.querySelector(".layerList").appendChild(newLayerItem);
    console.log()
}



export function changeSelectedLayer(event) {

    document.getElementsByClassName('layer selected')[0].classList.remove("selected"); // Remove a classe "selected" do item atualmente selecionado

    event.currentTarget.classList.add("selected"); // Adiciona a classe "selected" ao item clicado
    globals.setSelectedCanvas(document.getElementById(`canvas${event.currentTarget.textContent.split(' ')[1]}`)); // Atualiza o canvas selecionado no objeto global
    console.log(globals.selectedCanvas);

    globals.setSelectedContext(globals.selectedCanvas.getContext("2d", {willReadFrequently:true})); // Atualiza o contexto selecionado no objeto global
    console.log(globals.selectedContext);
   
}


export function changeShapeTool(evt){
    
        document.querySelector(".ativo").classList.remove("ativo");
        evt.currentTarget.classList.add("ativo");
        
        
        globals.setSelectedShape(evt.currentTarget.id); // Atualiza a ferramenta selecionada no objeto global
        console.log(globals.selectedShape);
}

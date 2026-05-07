function addLayer(){
    layerListLenght = $(".layerList li").length;

    layerName = "layer"+ (layerListLenght + 1);

    canvasName = "canvas"+ (layerListLenght + 1);

    $(".layerList").append("<li onclick='selectLayer(this)' id="+(layerName)+ ">Layer " + ($(".layerList li").length + 1) + "<a><i class='delete fa-solid  fa-x'></i></a></li>");

    $(".workspace").append("<canvas id='" + canvasName + "' width='800' height='1200' style='border:1px solid #555555; display:block; position:absolute; top:2%; left:20%;  margin:auto; z-index:"+ parseInt(layerListLenght +1)  +"';></canvas>");
}


function selectLayer(el){
    
    let idName = el.getAttribute("id");

    const index = idName.at(-1); // retorna ultimo character = numero do layer

    console.log(idName);

    let selectedCanvas = document.getElementById("canvas"+index);
    
    console.log(selectedCanvas);
    
    $("li.selected").removeClass("selected");
    el.setAttribute("class","selected");
    
    return selectedCanvas;
}
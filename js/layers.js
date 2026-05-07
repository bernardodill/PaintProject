function addLayer(){
    layerListLenght = $(".layerList li").length;



    layerName = "layer"+ (layerListLenght + 1);

    canvasName = "canvas"+ (layerListLenght + 1);

    $(".layerList").append("<li onclick='selectLayer(this)' class="+(layerName)+ ">Layer " + ($(".layerList li").length + 1) + "</li>");


    $(".workspace").append("<canvas id='" + canvasName + "' width='800' height='1200' style='border:1px solid #555555; display:block; position:absolute; top:2%; left:20%;  margin:auto; z-index:"+ parseInt(layerListLenght +1)  +"';></canvas>");
}


function selectLayer(el){
    
    let className = el.getAttribute("class");

    const index = className.at(-1); // retorna ultimo character = numero do layer

    let selectedCanvas = document.getElementById("canvas"+index)
    console.log(selectedCanvas)
    return selectedCanvas;
}
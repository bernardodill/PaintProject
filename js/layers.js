function addLayer(){
    layerListLenght = $(".layerList li").length;

    layerName = "layer"+ (layerListLenght + 1);

    canvasName = "canvas"+ (layerListLenght + 1);

    $(".layerList").append("<li class="+(layerName)+ ">Layer " + ($(".layerList li").length + 1) + "</li>");
    $(".workspace").append("<canvas id='" + canvasName + "' width='800' height='1200' style='border:1px solid #555555; display:block; background-color: #ffffff; position:absolute; top:0; left:20%;  bottom:0; margin:auto;'></canvas>");
}
function addLayer(){
    layerListLenght = $(".layerList li").length;

    layerName = "layer"+ (layerListLenght + 1);

    canvasName = "canvas"+ (layerListLenght + 1);

    $(".layerList").append("<li class="+(layerName)+ ">Layer " + ($(".layerList li").length + 1) + "</li>");
    $(".workspace").append("<canvas width='100' height='100' class='" + canvasName + "' style='border:1px solid #a7a7a7; background-color: transparent; margin-top: 100px; display: block;'></canvas>");
}
function addLayer(){
    layerListLenght = $(".layerList li").length;

    layerName = "layer"+ (layerListLenght + 1);

    canvasName = "canvas"+ (layerListLenght + 1);

    $(".layerList").append("<li class="+(layerName)+ ">Layer " + ($(".layerList li").length + 1) + "</li>");
    $(".workspace").append("<canvas class='" + canvasName + "' style='border:1px solid #a7a7a7; background-color: transparent; width: 100vw; height: 100vh; margin-top: 100px; display: block;'></canvas>");
}
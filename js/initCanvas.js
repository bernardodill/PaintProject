firstCanvas = "<canvas class='canvas1' style='border:1px solid #a7a7a7; background-color: #ffffff; width: 100vw; height: 100vh; margin-top: 100px; display: block;'></canvas>";

$(".workspace").ready(function() {
    $('.layerList').append('<li class="layer1">Layer 1</li>');
    $(".workspace").append(firstCanvas);
});

    let canvas = $(".canvas1")[0];
    console.log(canvas);
    firstCanvas = canvas.getContext("2d", willReadFrequently = true);
firstCanvas = "<canvas class='layer1' style='border:1px solid #a7a7a7; background-color: #ffffff; width: 100vw; height: 100vh; margin-top: 100px; display: block;'></canvas>";

$(document).ready(function() {
    $('.layerList').append('<li class="layer 1">Layer 1</li>');
    $(".workspace").append(firstCanvas);
});
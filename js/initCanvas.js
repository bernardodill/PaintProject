firstCanvas = "<canvas id='canvas1' style='border:2px solid #a7a7a7; background-color: #ffffff; width: 100vw; height: 80vh; margin-top: 100px; display: block;position:absolute; bottom:0px'></canvas>";


    $('.layerList').append('<li class="layer1">Layer 1</li>');

   // $(".workspace").html(firstCanvas);
    $(".workspace").append(firstCanvas);


    window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1'); // Ensure this ID matches your HTML
    
        console.log($("canvas"))
        

    if (canvas) {
        let ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.beginPath();
        ctx.fillStyle = "#b64545";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        console.error("Canvas element not found");
    }
});

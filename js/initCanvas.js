firstCanvas = "<canvas id='canvas1' style='border:2px solid #a7a7a7; background-color: #ffffff; width: 100vw; height: 60vh; margin-top: 100px; display: block;position:absolute; bottom:0'></canvas>";


    $('.layerList').append('<li class="layer1">Layer 1</li>');

    $(".workspace").append(firstCanvas);


    window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1'); // Ensure this ID matches your HTML
    
        console.log($("canvas"))
        

    if (canvas) {
        let ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.beginPath();
        ctx.lineWidth = $(".width").val();
        ctx.fillStyle = $(".frontColor").val()
        ctx.fillRect(0, 0, 100, 100);
        ctx.stroke();
    } else {
        console.error("Canvas element not found");
    }
});

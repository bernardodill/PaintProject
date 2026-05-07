let firstCanvas = "<canvas id='canvas1' width='800' height='1200' style='border:1px solid #555555; display:block; background-color: #ffffff; position:absolute; top:0; left:20%;  bottom:0; margin:auto;'></canvas>";


    $('.layerList').append('<li class="layer1">Layer 1</li>');

    $(".workspace").append(firstCanvas);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    
    window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1'); 
        
    if (canvas) {

    } else {
        console.error("Canvas element not found");
    }
});

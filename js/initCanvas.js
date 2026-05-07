    let firstCanvas = "<canvas id='canvas1' width='800' height='1200' style='border:1px solid #555555; display:block; background-color: #ffffff; position:absolute; top:2%; left:20%; z-index:1; margin:auto;'></canvas>";

    $('.layerList').append('<li onclick=selectLayer(this) class="layer1">Layer 1</li>');

    $(".workspace").append(firstCanvas);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
   
        

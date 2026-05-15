    let firstCanvas = "<canvas id='canvas1' width='800' height='1200' style='border:1px solid #555555; display:block; background-color: rgb(255, 255, 255); position:absolute; top:2%; left:20%; z-index:1; margin:auto;'></canvas>";

    let list = document.getElementsByClassName("layerList")[0];
    console.log(list);

    let workspace = document.getElementsByClassName("workspace")[0];



    list.appendChild(document.createElement("li")).setAttribute("id", "layer1");
    list.lastChild.classList.add("layer", "selected");
    list.lastChild.innerHTML = "Layer 1  <a><i class='delete fa-solid  fa-x'></i></a>";

    workspace.appendChild(document.createElement("canvas")).setAttribute("id", "canvas1");
    document.getElementById("canvas1").setAttribute("width", "800");
    document.getElementById("canvas1").setAttribute("height", "1200");
    document.getElementById("canvas1").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("canvas1").style.position = "absolute";
    document.getElementById("canvas1").style.top = "2%";
    document.getElementById("canvas1").style.left = "20%";
    document.getElementById("canvas1").style.zIndex = "1";
    document.getElementById("canvas1").style.margin = "auto";
    document.getElementById("canvas1").style.border = "1px solid #555555";

export let contexts = [];
export let selectedShape = null;
export let selectedCanvas = 'layer1';
export let selectedContext = null;
export let layerListLength = 1;


//export let imageData = [];

export let state = null;
export let isMoving = false;

export let iniX = 0;
export let iniY = 0;
export let finalX = 0;
export let finalY = 0;

export function getColor(){
    console.log(document.querySelector("#colorFront").value);
    return document.querySelector("#colorFront").value;
}

export function setSelectedState(st) {
    state = st;
}
export function setIsMoving(moving) {
    isMoving = moving;
}

export function updateLayerListLength(){
   let layerList = document.getElementsByClassName("layerList")[0];
    console.log(layerList);
    layerList.childElementCount;
}

export function setSelectedShape(shape) {
    selectedShape = shape;
}

export function setLayerListLength(length) {
    layerListLength = length;
}

export function setSelectedCanvas(canvas) {
    selectedCanvas = canvas;
}

export function setSelectedContext(context) {
    selectedContext = context;
}

//posicao do mouse 
export function setIniX(x) {
    iniX = x;
}

export function setIniY(y) {
    iniY = y;
}

export function setFinalX(x) {
    finalX = x;
}

export function setFinalY(y) {
    finalY = y;
}






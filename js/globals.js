export let contexts = [];
export let selectedShape = null;
export let selectedCanvas = 'layer1';
export let layerListLenght = 1;

export function updateLayerListLenght(){
   let layerList = document.getElementsByClassName("layerList")[0];
    console.log(layerList)
    layerList.childElementCount;
}

export function setSelectedShape(shape) {
    selectedShape = shape;
}

export function setLayerListLenght(lenght) {
    layerListLenght = lenght;
}

export function setSelectedCanvas(canvas) {
    selectedCanvas = canvas;
}







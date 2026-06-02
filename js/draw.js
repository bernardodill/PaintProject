import * as shapes from "./shapes.js";

export function selectedShape(shape) {
    switch(shape) {
        case "arco":
            shapes.arc();
            break;
        case "retangulo":
            shapes.rectangle();
            break;
        case "lapis":
            shapes.pen();
            break;
        case "linha":
            shapes.line();
            break;
    }
}
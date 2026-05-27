import * as buttonEvents from "./buttonEvents.js";
import "./changeShape.js";
import "./mouseEvents.js";
import * as globals from "./globals.js";



    document.addEventListener("DOMContentLoaded", function() {
        // App initialization code
        console.log("App initialized");

        let layer1 = document.getElementsByClassName('layer')[0];
        layer1.addEventListener("click", buttonEvents.changeSelectedLayer);
        
    });

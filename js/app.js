import * as buttonEvents from "./buttonEvents.js";
import "./mouseEvents.js";
import * as globals from "./globals.js";



    document.addEventListener("DOMContentLoaded", function() {
        // App initialization code
        console.log("App initialized");

        let layer1 = document.querySelector('.layer');
            
        layer1.addEventListener("click", () => buttonEvents.changeSelectedLayer(event));


        let ctx = document.getElementById("canvas1").getContext("2d", { willReadFrequently: true }); // Obtém o contexto do canvas1 com a opção willReadFrequently
        globals.contexts.push(ctx);
        globals.setSelectedContext(ctx);
        
    });

    

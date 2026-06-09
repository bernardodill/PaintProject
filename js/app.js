import * as buttonEvents from "./buttonEvents.js";
import * as mouseEvents from "./mouseEvents.js";
import * as globals from "./globals.js";



    document.addEventListener("DOMContentLoaded", (event) => {
        // App initialization code
        console.log("App initialized");

        let layer1 = document.querySelector('.layer');
            
        layer1.addEventListener("click", buttonEvents.changeSelectedLayer);

        let ctx = document.getElementById("canvas1").getContext("2d", { willReadFrequently: true }); // Obtém o contexto do canvas1 com a opção willReadFrequently
        globals.setSelectedContext(ctx); 
        globals.contexts.push(ctx);
        
        globals.setSelectedCanvas(document.querySelector(".workspace canvas"));     
        console.log(globals.selectedCanvas);
        console.log(globals.selectedContext);
    });

    

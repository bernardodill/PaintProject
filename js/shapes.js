import * as globals from "./globals.js";
import * as math from "./math.js";
import * as tools from "./tools.js";



	export function arc(){
		
		globals.selectedContext.width = 1;
		globals.selectedContext.beginPath();
		globals.selectedContext.globalCompositeOperation="source-over";
		globals.selectedContext.arc(globals.iniX,globals.iniY,math.distancia(),0,2*Math.PI);
		globals.selectedContext.stroke();
	}

	export function rectangle(){
		globals.selectedContext.width = 1;
		globals.selectedContext.lineCap = 'round';
		globals.selectedContext.color = "black";
		globals.selectedContext.clearRect(0,0,globals.selectedCanvas.width, globals.selectedCanvas.height);
		globals.selectedContext.beginPath();
		
		globals.selectedContext.globalCompositeOperation="source-over";
		globals.selectedContext.rect(globals.iniX,globals.iniY,globals.finalX-globals.iniX,globals.finalY-globals.iniY);
		globals.selectedContext.stroke();
		
		if(globals.state == 'mouseup'){
			//tools.getImageData();
			tools.putImageData();
		}
	}

	export function pen(){
		if(globals.selectedContext != null){
			globals.selectedContext.globalCompositeOperation="source-over";
			globals.selectedContext.width = 2;
			globals.selectedContext.color = 'black';
			globals.selectedContext.lineCap = 'round';
			
			
			globals.selectedContext.beginPath();
			
			globals.selectedContext.moveTo(globals.iniX, globals.iniY);
			globals.selectedContext.lineTo(globals.finalX,globals.finalY);
			globals.selectedContext.stroke();

			globals.setIniX(globals.finalX);
			globals.setIniY(globals.finalY);

			console.log("pen is working");
		} else{
			console.error(globals.selectedContext);
			console.error(globals.selectedCanvas);
		}
	}

	export function line(){
		
		globals.selectedContext.beginPath();
		globals.selectedContext.globalCompositeOperation="source-over";
		globals.selectedContext.moveTo(globals.iniX,globals.iniY);
		globals.selectedContext.lineTo(globals.finalX,globals.finalY);
		globals.selectedContext.stroke();
	}
import * as globals from "./globals.js";
import * as draw from "./draw.js";

export let arrayData = [];
export let imageData = null;


//Função de desfazer 
export function undo(){
		if(arrayData.length > 1){
			globals.selectedContext.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	}


	document.getElementsByClassName("save")[0].addEventListener("click", function(){
		downloadCanvas(this, getDate()+".jpeg");
	});

	export function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}




	export function getImageData(){
		return globals.selectedContext.getImageData(0,0,globals.selectedCanvas.width,globals.selectedCanvas.height);
	}

	export function putImageData(){
		return globals.selectedContext.putImageData(tools.getImageData(),0,0);
	}

	export function resetavariaveis(){
		globals.selectedContext.closePath();
		globals.selectedContext.closePath();
		globals.setIniX(0);
		globals.setIniY(0);
	}

	export function select(evt){
		if(document.getElementById("select").classList.contains("ativo")){
		
			
		}
		
	}
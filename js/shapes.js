import * as globals from "./globals.js";

let iniX = globals.iniX;
let iniY = globals.iniY;
let finalX = globals.finalX;
let finalY = globals.finalY;

	export function arc(){
		putImageData();
		ctx.width = 1;
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.arc(iniX,iniY,distancia(),0,2*Math.PI);
		ctx.stroke();
	}

	export function rectangle(){
		ctx.width = 1;
		ctx.lineCap = 'round';
		ctx.color = "black";
		ctx.beginPath();
		ctx.putImageData();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		ctx.stroke();
	}

	export function pen(){
		if(globals.selectedContext != null){

			globals.selectedContext.lineCap = 'round';
			globals.selectedContext.beginPath();
			globals.selectedContext.moveTo(iniX, iniY);
			globals.selectedContext.lineTo(finalX,finalY);
			globals.selectedContext.stroke();
		} else{
			console.error(globals.selectedContext);
			console.error(globals.selectedCanvas);
		}
	}

	export function line(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();
	}
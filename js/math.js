	import * as globals from './globals.js';
	
	//retorna diametro do circulo
	 export function distancia(){
		return Math.sqrt((Math.pow(globals.finalX-globals.iniX, 2)) + (Math.pow(globals.finalY-globals.iniY, 2)));
	}

	 export function pontoMedioY(){
		return (globals.iniY+ globals.finalY)/2;
	}

	 export function pontoMedioX(){
		return (globals.iniX+globals.finalX)/2;
	}
	//retorna diametro do circulo
	 export function distancia(){
		return Math.sqrt((Math.pow(finalX-iniX, 2)) + (Math.pow(finalY-iniY, 2)));
	}

	 export function pontoMedioY(){
		return (iniY+ finalY)/2;
	}

	 export function pontoMedioX(){
		return (iniX+finalX)/2;
	}
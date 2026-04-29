export function getImageData(){
	imageData = ctx.getImageData(0,0,w,h);
}
	
	//Salva o desenho antigo com o desenho atual
export function putImageData(){
	ctx.putImageData(imageData,0,0);
}
//Função de desfazer 
export function undo(){
		if(arrayData.length > 1){
			ctx.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	}

	$(".save").on("click", function(){
		downloadCanvas(this, getDate()+".jpeg");
	});

	export function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}

	export function resetavariaveis(){
		ctxTools.closePath();
		ctx.closePath();
		iniX = 0;
		iniY = 0;
	}
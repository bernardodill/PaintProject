//Função de desfazer 
export function undo(){
		if(arrayData.length > 1){
			ctx.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	}


	document.getElementsByClassName("save")[0].addEventListener("click", function(){
		downloadCanvas(this, getDate()+".jpeg");
	});

	export function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}

	function getImageData(){
		imageData = ctx.getImageData(0,0,w,h);
	}

	export function resetavariaveis(){
		ctxTools.closePath();
		ctx.closePath();
		iniX = 0;
		iniY = 0;
	}

	export function select(evt){
		if(document.getElementById("select").classList.contains("ativo")){
		
			
		}
		
	}
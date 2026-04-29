//Função de desfazer 
function undo(){
		if(arrayData.length > 1){
			ctx.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	}

		$(".save").on("click", function(){
		downloadCanvas(this, getDate()+".jpeg");
	});

			function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}
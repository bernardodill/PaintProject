	let canvas = document.getElementById("quadro"); //canvas  layer 1

	let canvas2 = document.getElementById("quadroFerramentas"); //canvas layer 2


	let ctx = canvas.getContext('2d',{willReadFrequently: true}); //canvas layer 1


	let ctxTools = canvas2.getContext('2d',{willReadFrequently: true}); //canvas layer 2

	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;


  	ctxTools.canvas.width  = window.innerWidth;
  	ctxTools.canvas.height = window.innerHeight;

	let iniX=0;
	let iniY=0;
	let finalX=0;
	let finalY=0;
	let w = canvas.width;
	let h = canvas.height;
	let imageData = ctx.getImageData(0,0,w,h);
	
	let arrayData = [imageData];
	



	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	imageData = ctx.getImageData(0,0,w,h);

	imageData2 = ctxTools.getImageData(0,0,canvas2.width,canvas2.height);

	
		
	function chamaFuncao(){ 	//chamado a cada tick
		
		if($("#retangulo").hasClass("ativo")){
			if (mouseIsDown()){
				rectangle()
			};
		}
		if($("#arco").hasClass("ativo")){
			if (mouseIsDown()){
				arc();
			}
		}
		if($("#linha").hasClass("ativo")){
			if (mouseIsDown()){
				line();
			}
		}
		if($("#lapis").hasClass("ativo")){
			if (mouseIsDown()){
				pen();
				iniX = finalX;
				iniY = finalY;
			}
		}
		if($("#borracha").hasClass("ativo")){
			eraser();
			if(mouseIsDown()){
				erase();
			}
		}
	}
	

	function pontoMedioY(){
		return (iniY+ finalY)/2;
	}

	function pontoMedioX(){
		return (iniX+finalX)/2;
	}
	

	
	function line(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();
	}


	//pega cordenadas do mouse enquanto se move e armazena em finalX e finalY
	function getMousePosition(evt){
		document.addEventListener("mousemove", function (event){
			finalX = event.offsetX;
			finalY = event.offsetY;
		});
	}

	//Pega um print de todo o desenho atual
	function getImageData(){
		imageData = ctx.getImageData(0,0,w,h);
	}
	
	//Salva o desenho antigo com o desenho atual
	function putImageData(){
		ctx.putImageData(imageData,0,0);
	}

	function resetavariaveis(){
		ctxTools.closePath();
		ctx.closePath();
		iniX = 0;
		iniY = 0;
	}
	
	function mouseIsDown(){
		return iniX != 0 && iniY != 0;
	}

	

	//Funçao para salvar desenho
	function downloadCanvas(link, filename) {
    	link.href = canvas.toDataURL();
    	link.download = filename;
	}

	
	

	
	








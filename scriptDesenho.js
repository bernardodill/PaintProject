	let canvas = document.getElementById("quadro");
	let ctx = canvas.getContext('2d',{willReadFrequently: true});

	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;

	let iniX=0;
	let iniY=0;
	let finalX=0;
	let finalY=0;
	let w = canvas.width;
	let h = canvas.height;
	let imageData = ctx.getImageData(0,0,w,h);
	
	let arrayData = [imageData];
	
	let arrayCorners = [];


	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	imageData = ctx.getImageData(0,0,w,h);

	
		
	function chamaFuncao(){
		if(mouseIsDown()){
			if($("#retangulo").hasClass("ativo")){
				rectangle();
			} else if($("#arco").hasClass("ativo")){
				arc();
			}else if($("#linha").hasClass("ativo")){
				line();
			}else if($("#lapis").hasClass("ativo")){
				pen();
				iniX = finalX;
				iniY = finalY;
			}
			
		}
	}
	

	function pontoMedioY(){
		return (iniY+ finalY)/2;

	}

	function pontoMedioX(){
		return (iniX+finalX)/2;
	}
	
	function pen(){
		//putImageData();
		ctx.lineCap = 'round';
		ctx.beginPath();
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();

		
	}
	
	function line(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();

	}
	
	function eraser(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="destination-out";
        ctx.rect(finalX-25,finalY-25,50,50);
		ctx.fill();
	}
	
	function rectangle(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		ctx.stroke();
	}
	
	function arc(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.arc(iniX,iniY,distancia(),0,2*Math.PI);
		ctx.stroke();
	}
	
	function distancia(){
		return Math.sqrt((Math.pow(finalX-iniX, 2)) + (Math.pow(finalY-iniY, 2)));
	}

	function getMousePosition(evt){

		finalX = event.offsetX;
		finalY = event.offsetY;


		console.log(iniX+", "+iniY+"\n"+finalX+", "+finalY);
		//console.log();
	}

	function getImageData(){
		imageData = ctx.getImageData(0,0,w,h);
	}
	
	function putImageData(){
		ctx.putImageData(imageData,0,0);
	}

	function resetavariaveis(){
		ctx.closePath();
		iniX = 0;
		iniY = 0;
	}

	function mouseIsDown(){
		return iniX != 0 && iniY != 0;
	}

	function inicializavariaveis(){
		iniX = finalX;
		iniY = finalY;
		ctx.lineWidth = $(".width").val();
		ctx.strokeStyle = $(".colorPicker").val();
	}

	function downloadCanvas(link, filename) {
    	link.href = canvas.toDataURL();
    	link.download = filename;



    	
	  
	}

	function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}

	


	$(".undo").on("click", function(){
		if(arrayData.length > 0){
			ctx.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	});

	$(".save").on("click", function(){
		downloadCanvas(this, getDate()+".png");




	});

	$("canvas").mouseup(function(evt){
		arrayData.push(imageData);

		resetavariaveis();
		getImageData();
	});
	
	$('canvas').mousedown(function(evt){
		evt.preventDefault();
		inicializavariaveis();
		chamaFuncao();
	});		

	$('canvas').mousemove(function(evt){
		getMousePosition(evt);
		
		chamaFuncao();
	});

	$('.opcao').on("click", function(){
		showMetricas();
	});




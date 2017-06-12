	var canvas = document.getElementById("quadro");
	var ctx = canvas.getContext("2d");

	var iniX=0;
	var iniY=0;
	var finalX=0;
	var finalY=0;
	var w = canvas.width;
	var h = canvas.height;
	var imageData = ctx.getImageData(0,0,w,h);
	
	var arrayData = [imageData];
	
	var arrayCorners = [];


	

	
		
	function chamaFuncao(){
		if(mouseIsDown()){
			if($("#rect").is(":checked")){
				rectangle();
			} else if($("#arc").is(":checked")){
				arc();
			}else if($("#line").is(":checked")){
				line();
			}else if($("#pen").is(":checked")){
				pen();
			}else if($("#window").is(":checked")){
				janela();

			}
		}
	}
	

	function pontoMedioY(){
		return (iniY+ finalY)/2;

	}

	function pontoMedioX(){
		return (iniX+finalX)/2;
	}

	function janela(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		
		ctx.font="14px Arial";
		ctx.textAlign="center";


		if(finalX < iniX && finalY < iniY){ 		//cima a esquerda
			ctx.moveTo(finalX-10,iniY);
			ctx.lineTo(finalX-10,finalY);
			
			ctx.moveTo(iniX,finalY-10);
			ctx.lineTo(finalX, finalY-10);


			ctx.fillText($(".largura").val(),pontoMedioX(),finalY-20);
			ctx.fillText($(".altura").val(),finalX-30,pontoMedioY());

			
		} else if(finalX > iniX && finalY < iniY){ //cima a direita
			
			ctx.moveTo(finalX+10,iniY);
			ctx.lineTo(finalX+10,finalY);

			ctx.moveTo(iniX,finalY-10);
			ctx.lineTo(finalX, finalY-10);

			ctx.fillText($(".largura").val(),pontoMedioX(),finalY-20);
			ctx.fillText($(".altura").val(),finalX+30,pontoMedioY());

		} else if(finalX < iniX && finalY > iniY){ //baixo a esquerda

			ctx.moveTo(finalX-10,iniY);
			ctx.lineTo(finalX-10,finalY);

			ctx.moveTo(iniX,finalY+10);
			ctx.lineTo(finalX, finalY+10);

			ctx.fillText($(".largura").val(),pontoMedioX(),finalY+30);
			ctx.fillText($(".altura").val(),finalX-30,pontoMedioY());

		} else{									//baixo a direita
			ctx.moveTo(finalX+10,iniY);
			ctx.lineTo(finalX+10,finalY);
			ctx.moveTo(iniX,finalY+10);
			ctx.lineTo(finalX, finalY+10);

			ctx.fillText($(".largura").val(),pontoMedioX(),finalY+30);
			ctx.fillText($(".altura").val(),finalX+30,pontoMedioY());

		}
		
		ctx.stroke();

	}
	

	
	function pen(){
		//putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(finalX,finalY);
		ctx.lineTo(iniX,iniY);
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
		finalX = evt.pageX - $("canvas").offset().left;
		finalY = evt.pageY - $("canvas").offset().top;

		console.log(iniX+", "+iniY+"\n"+finalX+", "+finalY);
		//console.log();
	}

	function getImageData(){
		imageData = ctx.getImageData(0,0,w,h);
	}
	
	function putImageData(){
		ctx.putImageData(imageData,0,0);
	}

	function resetaVariaveis(){
		ctx.closePath();
		iniX = 0;
		iniY = 0;
	}

	function mouseIsDown(){
		return iniX != 0 && iniY != 0;
	}

	function inicializaVariaveis(){
		iniX = finalX;
		iniY = finalY;
	}



	function addCorners(){
		arrayCorners.push({x : iniX, y : iniY}, {x: iniX, y: finalY});
	}

	function lightCorner(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.arc(finalX,finalY,10, 0, 2*Math.PI);
		ctx.fill();

	}


	function heighlightCorners(){
		if(iniX  >= arrayCorners.x-5 && iniX <= arrayCorners.x+5){
			lightCorner();	
		}
	}

	function downloadCanvas(link, filename) {
    	link.href = canvas.toDataURL();
    	link.download = filename;
	}

	function getDate(){
		return new Date().toLocaleString().split(' ')[0].toString();
	}

	function showMetricas(){
			
		    if($("#window").is(":checked")){
		        $(".metricas").slideDown("slow");
		        return;
		    }
		    $(".metricas").slideUp("slow");

		

	}


	$(".undo").on("click", function(){
		if(arrayData.length > 0){
			ctx.putImageData(arrayData.pop(),0,0);
			getImageData();
		}
	});

	$(".saveButton").on("click", function(){
		downloadCanvas(this, getDate()+".jpeg")
	});

	$("canvas").mouseup(function(evt){
		arrayData.push(imageData);

		addCorners();
		resetaVariaveis();
		getImageData();
	});
	
	$('canvas').mousedown(function(evt){
		evt.preventDefault();
		inicializaVariaveis();
	});		

	$('canvas').mousemove(function(evt){
		getMousePosition(evt);
		heighlightCorners();
		chamaFuncao();
	});

	$('.opcao').on("click", function(){
		showMetricas();
	});




$(document).ready(function(){
	
	var canvas = document.getElementById("quadro");
	var ctx = canvas.getContext("2d");
	var iniX=0;
	var iniY=0;
	var finalX=0;
	var finalY=0;
	var w = canvas.width;
	var h = canvas.height;
	var imageData = ctx.getImageData(0,0,w,h);
	var sizeX=0;
	var sizeY=0;
	
	$("#save").click(function(){
		var dataURL = canvas.toDataURL();
		document.getElementById('quadro').src = dataURL;
	
	});
	
	
	
	
	
	function window(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		
		ctx.font="12px Arial";
		ctx.textAlign="center";


		if(finalX < iniX && finalY < iniY){ //cima a esquerda
			ctx.moveTo(finalX-10,iniY);
			ctx.lineTo(finalX-10,finalY);
			
			ctx.moveTo(iniX,finalY-10);
			ctx.lineTo(finalX, finalY-10);


			
		} else if(finalX > iniX && finalY < iniY){ //cima a direita
			
			ctx.moveTo(finalX+10,iniY);
			ctx.lineTo(finalX+10,finalY);

			ctx.moveTo(iniX,finalY-10);
			ctx.lineTo(finalX, finalY-10);


		} else if(finalX < iniX && finalY > iniY){ //baixo a esquerda

			ctx.moveTo(finalX-10,iniY);
			ctx.lineTo(finalX-10,finalY);

			ctx.moveTo(iniX,finalY+10);
			ctx.lineTo(finalX, finalY+10);

		} else{									//baixo a direita
			ctx.moveTo(finalX+10,iniY);
			ctx.lineTo(finalX+10,finalY);
			ctx.moveTo(iniX,finalY+10);
			ctx.lineTo(finalX, finalY+10);

			ctx.fillText(parseInt(sizeY+37)+"cm",finalX+30, iniY+(finalY-iniY)/2);
			ctx.fillText(parseInt(sizeX+37)+"cm",iniX+(finalX-iniX)/2,finalY+30);
		}
		ctx.stroke();
	}
	
	
	
	
	
	
	function pen(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		//ctx.arc(iniX,iniY,10,0,2*Math.PI);
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();	
	}
	
	function line(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();
		ctx.closePath();
	}
	
	function eraser(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="destination-out";
        ctx.rect(finalX-25,finalY-25,50,50);
		ctx.fill();
	}
	
	function rectangle(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		ctx.stroke();
	}
	
	function arc(){
		ctx.putImageData(imageData,0,0);
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.arc(iniX,iniY,finalX-iniX,0,2*Math.PI);
		ctx.stroke();
	}
	//-----------------------------------------
	
	
	$("#quadro").mouseup(function(e){
		ctx.closePath();
		iniX = 0;
		iniY = 0;
		sizeX=0;
		sizeY=0;
	});
	
	$('#quadro').mousedown(function(evt){
		evt.preventDefault();
		iniX = evt.pageX - $("#quadro").offset().left;
		iniY = evt.pageY - $("#quadro").offset().top;

		imageData = ctx.getImageData(0,0,w,h);

	});		

	$('#quadro').mousemove(function(evt){
		evt.preventDefault();
		finalX = evt.pageX - $("#quadro").offset().left;
		finalY = evt.pageY - $("#quadro").offset().top;
		
		
		
		if(iniX != 0 && iniY != 0){
			
			sizeX = finalX-iniX;
			sizeY = finalY-iniY;
			
			
			if($("#rect").is(":checked")){
				rectangle();
			} else if($("#arc").is(":checked")){
				arc();
			}else if($("#line").is(":checked")){
				line();
			}else if($("#pen").is(":checked")){
				pen();
			}else if($("#window").is(":checked")){
				window();
			}
		}else{
			if($("#eraser").is(":checked")){
				eraser();
			}


		}
	});
});
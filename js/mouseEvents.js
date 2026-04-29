	$('canvas').mouseleave(function(){
		ctxTools.putImageData(imageData2,0,0);
		resetavariaveis();
		ctxTools.closePath();
		ctx.closePath();
		console.log("saiu!")
	});

	$('canvas').mouseup(function(evt){
		console.log("up")
		arrayData.push(imageData);
		resetavariaveis();
		getImageData();
	});
	
	$('canvas').mousedown(function(evt){
		console.log("down")
		evt.preventDefault();
		inicializavariaveis();
	});		

	$('canvas').mousemove(function(evt){
		console.log('movendo');


		//getMousePosition(evt);
		//chamaFuncao();
	});



	import {getMousePosition} from './mousePosition.js';
	import {chamaFuncao} from './chamaFuncao.js';
	import {resetavariaveis} from './resetavariaveis.js';
	import {inicializavariaveis} from './inicializavariaveis.js';
	import {getImageData} from './getImageData.js';
	import { arrayData } from './initCanvas.js';



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



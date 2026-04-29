	import {getMousePosition} from './mousePosition.js';
	import {changeShape} from './changeShape.js';
	import {resetavariaveis} from './resetavariaveis.js';
	import {inicializavariaveis} from './inicializavariaveis.js';
	import {getImageData, putImageData} from './imageData.js';
	import * as initCanvas from './initCanvas.js';
	import * as tools from './tools.js';



	$('canvas').mouseleave(function(){
		initCanvas.ctxTools.putImageData(imageData2,0,0);
		resetavariaveis();
		initCanvas.ctxTools.closePath();
		initCanvas.ctx.closePath();
		console.log("saiu!")
	});

	$('canvas').mouseup(function(evt){
		console.log("up")
		initCanvas.arrayData.push(imageData);
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
	});



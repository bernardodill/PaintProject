	import * as tools from "./tools.js";
	import * as globals from "./globals.js";
	import * as shapes from "./shapes.js";

	let coords = document.getElementsByClassName("coordenadas")[0];
	let canvas1 = document.getElementById("canvas1");

	let state = null;

	document.addEventListener("DOMContentLoaded", function(){
		globals.setSelectedCanvas(document.getElementById("canvas1"));

	});


	document.getElementById("canvas1").addEventListener("mouseenter", function (evt) { 
		evt.preventDefault();
		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
		
	});
	
	document.getElementById("canvas1").addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		coords.textContent = "--";
		
	});

	document.getElementById("canvas1").addEventListener("mouseup", function(evt){
		evt.preventDefault();
		state = 'mouseup';
	});
	
	document.getElementById("canvas1").addEventListener("mousedown", function(evt){
		evt.preventDefault();
		state = 'mousedown';
		let shape = globals.selectedShape;
		globals.setIniX(evt.offsetX);
		globals.setIniY(evt.offsetY);
		console.log(`iniX: ${globals.iniX} iniY: ${globals.iniY}`);
	});		

	document.getElementById("canvas1").addEventListener("mousemove", function(evt){
		evt.preventDefault();
		globals.setFinalX(evt.offsetX);
		globals.setFinalY(evt.offsetY);
		console.log(`finalX: ${globals.finalX} finalY: ${globals.finalY}`);


		if(state === 'mousedown'){
			console.log("mouse is down");
			shapes.pen();
		} else if(state === 'mouseup'){
			console.log("mouse is up");
		}
		
		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
	});



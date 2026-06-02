	import * as tools from "./tools.js";
	import * as globals from "./globals.js";
	import * as shapes from "./shapes.js";
	import * as draw from "./draw.js";

	let coords = document.getElementsByClassName("coordenadas")[0];
	let canvas1 = document.getElementById("canvas");


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
		globals.state = 'mouseup';
	});
	
	document.getElementById("canvas1").addEventListener("mousedown", function(evt){
		evt.preventDefault();
		globals.state = 'mousedown';
		let shape = globals.selectedShape;
		globals.setIniX(evt.offsetX);
		globals.setIniY(evt.offsetY);
		console.log(`iniX: ${globals.iniX} iniY: ${globals.iniY}`);
	});		

	document.getElementById("canvas1").addEventListener("mousemove", function(evt){
		evt.preventDefault();
		globals.setFinalX(evt.offsetX);
		globals.setFinalY(evt.offsetY);
		let TIMEOUT = 100;

		if(state == 'mousedown'){
			draw.selectedShape(globals.selectedShape);
		}
		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
	});



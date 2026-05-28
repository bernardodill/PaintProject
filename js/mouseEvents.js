	import * as tools from "./tools.js";
	import * as globals from "./globals.js";
	import * as shapes from "./shapes.js";

	let coords = document.getElementsByClassName("coordenadas")[0];
	let canvas1 = document.getElementById("canvas1");

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
		
	});
	
	document.getElementById("canvas1").addEventListener("mousedown", function(evt){
		evt.preventDefault();
		let shape = globals.selectedShape;
	//	console.log(shape);
		if(shape === "lapis"){
			shapes.pen();
		}
	});		

	document.getElementById("canvas1").addEventListener("mousemove", function(evt){
		evt.preventDefault();
		tools.select(evt);

		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
	});



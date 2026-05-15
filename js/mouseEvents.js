	import * as tools from "./tools.js";
	import * as globals from "./globals.js";

	let coords = document.getElementsByClassName("coordenadas")[0];
	let canvas1 = document.getElementById("canvas1");

	document.addEventListener("DOMContentLoaded", function(){
		console.log("DOM fully loaded and parsed");
		globals.setSelectedCanvas(document.getElementById("canvas1"));

	});


	document.getElementById("canvas1").addEventListener("mouseenter", function (evt) { 
		evt.preventDefault();

		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
		
	});
	
	document.getElementById("canvas1").addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		console.log("saiu!");

		coords.textContent = "--";
		return "out";
	});

	document.getElementById("canvas1").addEventListener("mouseup", function(evt){
		evt.preventDefault();
		
		return "up"
	});
	
	document.getElementById("canvas1").addEventListener("mousedown", function(evt){
		evt.preventDefault();
		
		
	});		

	document.getElementById("canvas1").addEventListener("mousemove", function(evt){
		evt.preventDefault();
		console.log("moveu!");
		tools.select(evt);

		coords.textContent = `X: ${evt.offsetX} Y: ${evt.offsetY}`;
	});



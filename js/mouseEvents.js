	import * as tools from "./tools.js";
	import * as globals from "./globals.js";

	$(document).mouseenter(function (evt) { 
		evt.preventDefault();

		$(".coordenadas").text(`X: ${evt.offsetX} Y: ${evt.offsetY}`);
		
	});
	
	$(document).mouseleave(function(evt){
		evt.preventDefault();
		console.log("saiu!");

		$(".coordenadas").text("--");
		return "out";
	});

	$(document).mouseup(function(evt){
		evt.preventDefault();
		
		return "up"
	});
	
	$(document).mousedown(function(evt){
		evt.preventDefault();
		
		console.log(globals.selectedCanvas);
	});		

	$(document).mousemove(function(evt){
		evt.preventDefault();

		tools.select(evt);

		$(".coordenadas").text(`X: ${evt.offsetX} Y: ${evt.offsetY}`);
	});



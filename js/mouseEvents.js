	import * as tools from "./tools.js";

	$(document).mouseenter(function (evt) { 
		evt.preventDefault();
		console.log("entrou!")

		$(".coordenadas").text(`X: ${evt.pageX} Y: ${evt.pageY}`);

		return "in";
	});
	
	$(document).mouseleave(function(evt){
		evt.preventDefault();
		console.log("saiu!")


		$(".coordenadas").text("--");
		return "out";
	});

	$(document).mouseup(function(evt){
		evt.preventDefault();
		
		return "up"
	});
	
	$(document).mousedown(function(evt){
		evt.preventDefault();
		return "down";
	});		

	$(document).mousemove(function(evt){
		console.log('movendo');

		tools.select(evt);

		$(".coordenadas").text(`X: ${evt.offsetX} Y: ${evt.offsetY}`);
	});



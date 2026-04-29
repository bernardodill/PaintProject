	let canvas = document.getElementById("quadro"); //canvas  layer 1

	let canvas2 = document.getElementById("quadroFerramentas"); //canvas layer 2


	let ctx = canvas.getContext('2d',{willReadFrequently: true}); //canvas layer 1


	let ctxTools = canvas2.getContext('2d',{willReadFrequently: true}); //canvas layer 2

	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;


  	ctxTools.canvas.width  = window.innerWidth;
  	ctxTools.canvas.height = window.innerHeight;

	let iniX=0;
	let iniY=0;
	let finalX=0;
	let finalY=0;
	let w = canvas.width;
	let h = canvas.height;
	let imageData = ctx.getImageData(0,0,w,h);
	
	let arrayData = [imageData];
	



	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	imageData = ctx.getImageData(0,0,w,h);

	imageData2 = ctxTools.getImageData(0,0,canvas2.width,canvas2.height);

	export let backgroundCanvas = document.getElementById("quadro"); //canvas  layer 1


	export let canvas2 = document.getElementById("quadroFerramentas"); //canvas layer 2


	export let ctx = backgroundCanvas.getContext('2d',{willReadFrequently: true}); //canvas layer 1

	ctx.backgroundCanvas.width  = window.innerWidth;
  	ctx.backgroundCanvas.height = window.innerHeight;


  	ctxTools.backgroundCanvas.width  = window.innerWidth;
  	ctxTools.backgroundCanvas.height = window.innerHeight;

	export let iniX=0;
	export let iniY=0;
	export let finalX=0;
	export let finalY=0;
	export let w = backgroundCanvas.width;
	export let h = backgroundCanvas.height;
	export let imageData = ctx.getImageData(0,0,w,h);
	
	export let arrayData = [imageData];
	



	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	imageData = ctx.getImageData(0,0,w,h);

	export let imageData2 = ctxTools.getImageData(0,0,canvas2.width,canvas2.height);

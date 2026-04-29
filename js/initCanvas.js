	export let canvas = document.getElementById("quadro"); //canvas  layer 1

	export let canvas2 = document.getElementById("quadroFerramentas"); //canvas layer 2


	export let ctx = canvas.getContext('2d',{willReadFrequently: true}); //canvas layer 1


	export let ctxTools = canvas2.getContext('2d',{willReadFrequently: true}); //canvas layer 2

	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;


  	ctxTools.canvas.width  = window.innerWidth;
  	ctxTools.canvas.height = window.innerHeight;

	export let iniX=0;
	export let iniY=0;
	export let finalX=0;
	export let finalY=0;
	export let w = canvas.width;
	export let h = canvas.height;
	export let imageData = ctx.getImageData(0,0,w,h);
	
	export let arrayData = [imageData];
	



	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	imageData = ctx.getImageData(0,0,w,h);

	export let imageData2 = ctxTools.getImageData(0,0,canvas2.width,canvas2.height);

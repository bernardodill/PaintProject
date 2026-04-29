

	export function arc(){
		putImageData();
		ctx.width = 1;
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.arc(iniX,iniY,distancia(),0,2*Math.PI);
		ctx.stroke();
	}

	export function rectangle(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.rect(iniX,iniY,finalX-iniX,finalY-iniY);
		ctx.stroke();
	}

	export function pen(){
		ctx.lineCap = 'round';
		ctx.beginPath();
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();
	}

	export function line(){
		putImageData();
		ctx.beginPath();
		ctx.globalCompositeOperation="source-over";
		ctx.moveTo(iniX,iniY);
		ctx.lineTo(finalX,finalY);
		ctx.stroke();
	}
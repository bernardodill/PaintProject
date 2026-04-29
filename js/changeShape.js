	function chamaFuncao(){ 	//chamado a cada tick
		
		if($("#retangulo").hasClass("ativo")){
			if (mouseIsDown()){
				rectangle()
			};
		}
		if($("#arco").hasClass("ativo")){
			if (mouseIsDown()){
				arc();
			}
		}
		if($("#linha").hasClass("ativo")){
			if (mouseIsDown()){
				line();
			}
		}
		if($("#lapis").hasClass("ativo")){
			if (mouseIsDown()){
				pen();
				iniX = finalX;
				iniY = finalY;
			}
		}
		if($("#borracha").hasClass("ativo")){
			eraser();
			if(mouseIsDown()){
				erase();
			}
		}
	}
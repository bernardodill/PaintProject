

export let  selectedCanvas = $("#canvas1");



export function selectLayer(el){
    
    if($("li").hasClass("selected")){
        selectedCanvas = getElementById("canvas"+el.id.at(-1));
    }
    console.log(selectedCanvas);
}
    
let ctx = selectedCanvas.getContext("2d");

    ctx.lineWidth = $('.size').val();
    ctx.beginPath();
    ctx.strokeRect(0,0,200,200);






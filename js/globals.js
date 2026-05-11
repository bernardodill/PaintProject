export let  selectedCanvas = $("#canvas1");

export function selectLayer(el){
    
    if($("li").hasClass("selected")){
        selectedCanvas = $(`#canvas${$(".selected").attr("id").slice(-1)}`);
    }
}
    
let ctx = selectedCanvas.getContext("2d");

    ctx.lineWidth = $('.size').val();
    ctx.beginPath();
    ctx.strokeRect(0,0,200,200);






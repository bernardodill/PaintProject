export  let contexts = [];
export let  selectedCanvas = $("#canvas1");

export function selectLayer(el){
    
    if($("li").hasClass("selected")){
        selectedCanvas = getElementById("canvas"+el.id.at(-1));
    }
   
}







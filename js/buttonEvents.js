// Função para aumentar ou diminuir o valor do input de tamanho da ferramenta
function changeSize(event){
    size = parseInt($(".size").val(),10);
    console.log(size);


    if($(event).hasClass("numberUp")){
        if(size < 10){
            $(".size").val(parseInt($(".size").val(),10) + 1);
        }
    } else if($(event).hasClass("numberDown")){
        
        if(size > 1){
            $(".size").val(parseInt($(".size").val(),10) - 1);
        }
    }
}


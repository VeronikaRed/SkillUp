$('body').prepend('<div class = "div">');
function addChildren(element, amount){
    for(let i=1; i<amount; i++){
        $(element).append(`<div>${i}</div>`);
    }
}
addChildren('.div', 6); 

$('#button').click(function(){
    addModalWindow();
});

$( window ).resize(function () { 

    if ($(this).width() < 768 && $('.modal-backdrop').length == 0){
        addModalWindow();
    }
})

function addModalWindow(){
    $.ajax({
        url: 'ajax_page.html',
        success: function(data) {
            $('#modalDiv').html(data);
            $('.modal').modal('show');
         }
        });
}


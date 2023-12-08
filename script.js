$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault(); 
        var emailInput = $("#emailInput").val();
        var inputNum = emailInput.length;

        debugger;
        if(validateEmail(emailInput) && emailInput.length != 0){

            $("#emailConfirmation").html(emailInput);
            $('div[data-step="1"]').fadeOut(function(){
                $('div[data-step="2"]').fadeIn();
            });
        }

        $("#subscribe").css("background-color", "hsl(235, 18%, 26%)");

    });


});

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}
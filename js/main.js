$(function(){
    var f = $('form');
    var errorMessage = $('.error_message');
    f.submit(function(event){
        event.preventDefault();
        var submitButton = f.find('input[type=submit]').prop('disabled', true);
        $.ajax({
            url: "https://api.swipe.net/web/form",
            type: "post",
            data: f.serialize(),
            timeout: 10000,
            dataType: 'json',
            success: function success(data) {
                f.removeClass('error');
                f.addClass('success');
                submitButton.prop('disabled', false);
                $('form').get(0).reset();
            },
            error: function error(XMLHttpRequest, textStatus, errorThrown) {
                if(textStatus){
                    errorMessage.find('span').html(textStatus+': ');
                }
                f.addClass('error');
                submitButton.prop('disabled', false);
            }
        });
    });
    f.click(function(){
        $(this).removeClass('success');
    });
});

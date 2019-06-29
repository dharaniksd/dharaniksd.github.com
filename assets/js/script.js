var result={};
$( document ).ready(function() {
                
    $("#about_scroll").fadeOut();   
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
        });
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
        });
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
        });
    
    $(".back").click(function(){
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
        });


    $('.form_edit').validate({ // initialize the plugin
        rules: {
            userName: {
                required: true
            },
            userEmail: {
                required: true,
                email: true
            },
            userMsg: {
                required: true,
                minlength: 25
            }
        },
        submitHandler: function (form) { 
            console.log($("input[name=userName]").val());
            console.log($("input[name=userEmail]").val());
            console.log($("textarea[name=userMsg]").val());
            var service_id = 'gmail';
            var template_id = 'template_wjm3tOHF';
            var template_params = {
                name: $("input[name=userName]").val(),
                reply_email: $("input[name=userEmail]").val(),
                to_name: "Dharani",
                message_html: $("textarea[name=userMsg]").val(),
                from_name: $("input[name=userName]").val(),
                reply_to: $("input[name=userEmail]").val()
            };
            result =emailjs.send(service_id,template_id,template_params);
            alert("Your Email Sent.");
            //return false; // for demo

            $('.back').click();
        }
    });


    // var formData = new FormData(this);
    // formData.append('service_id', 'gmail');
    // formData.append('template_id', 'template_wjm3tOHF');
    // formData.append('user_id', 'user_H23zaDkgznopDeFQ2buJO');
 
    // $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    //     type: 'POST',
    //     data: formData,
    //     contentType: false, // auto-detection
    //     processData: false // no need to parse formData to string
    // }).done(function() {
    //     alert('Your mail is sent!');
    // }).fail(function(error) {
    //     alert('Oops... ' + JSON.stringify(error));
    // });

});


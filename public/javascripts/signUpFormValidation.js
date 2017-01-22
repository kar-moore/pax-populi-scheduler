$(document).ready(function(){
    
    var notAllowedPattern = new RegExp (JSON.parse($("#notAllowedRegex").val()));

    //TODO maybe other validation to make sure that fields are checked
    
    $("#register-button").click(function(){
        if($("input[name=timezone]").val() == ""){
            $('#timezoneErrors').empty();
            $('#timezoneErrors').append('<p>Error: Please select your timezone.</p>');
        }
    });


    $("#username-register-box").blur(function(){


        //usernames can only contain numbers and letters and the following special chars: _ - .

        var username = $("#username-register-box").val();
    
        if (username.length < 5 || username.length > 15){
            $('#usernameErrors').empty();
            $('#usernameErrors').append('<p>Error: Username must be 5-15 characters long</p>');
            console.log("Username must be 5-15 characters long");
            $("#username-register-box").css({"border-color":"red"});
        }


        else if (5<= username.length && username.length <= 15){
            $('#usernameErrors').empty();
            console.log(usernamePattern);
            console.log(usernamePattern.test(username));

            if (notAllowedPattern.test(username)) {
                $('#usernameErrors').append('<p>Error: Username contains disallowed special characters.</p>');
                $("#username-register-box").css({"border-color":"red"});
            
            }

            else{
                $("#username-register-box").css({"border-color":"green"});
            }
        }

    }); 

    $("#password-register-box").blur(function(){

        var pw = $("#password-register-box").val();

        var passwordPattern = new RegExp(JSON.parse($("#passwordRegex").val()));
        

        if ( pw.legnth < 8 || !(passwordPattern.test(pw))){
            $('#pwErrors').empty();
            $("#pwErrors").append("<p>Error: A valid password contains at least 8 characters, and at least one uppercase character, one lowercase character, a number and one special character.</p>");
            $("#password-register-box").css({"border-color":"red"});
        }

        if (pw.length >= 8 && passwordPattern.test(pw)){
            $('#pwErrors').empty();
            $("#password-register-box").css({"border-color":"green"});
        }

        
    });

    $("#confirm-password-register-box").blur(function(){
        var pw = $("#password-register-box").val();
        var pwConfirm = $("#confirm-password-register-box").val();

        if (pw !== pwConfirm){
            $("#pwConErrors").empty();
            $("#pwConErrors").append("<p>This password does not match the one you entered above.</p>");
            $("#confirm-password-register-box").css({"border-color":"red"});
        }

        else{
            $("#pwConErrors").empty();
            $("#confirm-password-register-box").css({"border-color":"green"});
        }
        
    });


    $("#email-register-box").blur(function(){
        var email = $("#email-register-box").val();
        var emailRegEx = new RegExp(JSON.parse($("#emailRegex").val()));

        if( !(emailRegEx.test(email))) {
            $("#emailErrors").empty();
            $("#emailErrors").append("<p>Please enter a valid email address</p>");
            $("#email-register-box").css({"border-color":"red"});
        }

        else if(email.slice(-3) == "edu"){
            $("#emailErrors").empty();
            $("#emailErrors").append("<p>Please use a non .edu email address as your primary email address</p>");
            $("#email-register-box").css({"border-color":"red"});
        }


        else{
            $("#emailErrors").empty();
            $("#email-register-box").css({"border-color":"green"});
        }
    });

    $("#alternative-email-register-box").blur(function(){
        var email = $("#alternative-email-register-box").val();
        var emailRegEx = new RegExp(JSON.parse($("#emailRegex").val()));

        if( !(emailRegEx.test(email))) {
            $("#altEmailErrors").empty();
            $("#altEmailErrors").append("<p>Please enter a valid email address</p>");
            $("#alternative-email-register-box").css({"border-color":"red"});
        }

        else{
            $("#altEmailErrors").empty();
            $("#alternative-email-register-box").css({"border-color":"green"});
        }

    });


    // TODO: make sure timezone is selected

    // TODO: make sure resgister up as is valid

    //TODO: make sure that box is checked



});
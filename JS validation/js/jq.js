$(document).ready(function(){
    $('#form_submit').click(function validate(e){
        e.preventDefault();
        const name_ = $("#name").val();
        const age = $("#age").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const c_password = $("#c_password").val();
        var submition = 1;
        
        if (name_ == "") {
            $("#error_name").text("Enter youre name.");
            submition = 0;
        }else if(!isNaN(name_) || !isNaN(name_[0])){
            $("#error_name").text("First latter must be alphabet.");
            submition = 0;
        }else{
            $("#error_name").text("");
            submition = 1;
        }

        if (age == "") {
            $("#error_age").text("Enter youre age.");
            submition = 0;
        }else if (isNaN(age)) {
            $("#error_age").text("Alphabets are not allowed.");
            submition = 0;
        }else if ((age.length > 2) || (age == 0)){
            $("#error_age").text("Enter Valid age.");
            submition = 0;
        }else if (age < 13) {
            $("#error_age").text("You're not alligible. Age must be above 13.");
            submition = 0;
        }else{
            $("#error_age").text("");
            submition = 1;
        }

        if (phone == "") {
            $("#error_phone").text("Enter your phone number.");
            submition = 0;
        }else if (isNaN(phone)) {
            $("#error_phone").text("Enter a valid phone number.");
            submition = 0;
        }else if (phone.length != 10) {
            $("#error_phone").text("Phone number's lenght must be 10.");
            submition = 0;
        }else{
            $("#error_phone").text("");
            submition = 1;
        }

        if (email == "") {
            $("#error_email").text("Enter your Mail ID");
            submition = 0;
        }else if (email[0] == "@") {
            $("#error_email").text("Enter a valid Mail Id @.");
            submition = 0;
        }else if ((email.index(".") != email.length-4) || (email.index(".") != email.length-3)){
            $("#error_email").text("Enter a valid Mail Id ..");
            submition = 0;
        }else if (isNAN(email)) {
            $("#error_email").text("Alphabests are not allowed");
            submition = 0;
        }else if (!email.includes("@") || !email.includes(".")){
            $("#error_email").text("Enter a valid Mail ID @ ..");
            submition = 0;
        }else{
            $("#error_email").text("");
            submition = 1;
        }

        if (password == "") {
            $("#error_password").text("Enter your password.");
            submition = 0;
        }else if ((password.toString().length < 6) || (password.toString().length > 13)) {
            $("#error_passsword").text("Password must be in 6 to 13 charactors");
            submition = 0;
        }else{
            $("#error_password").text("");
            submition = 1;
        }

        if (c_password == "") {
            $("#error_c_password").text("Confirm your password.");
            submition = 0;
        }else if (password != c_password) {
            $("#error_c_password").text("Your password doesn't match.");
            submition = 0;
        }else{
            $("#error_c_password").text("");
            submition = 1;
        }

        if (submition == 1) {
            return true
        }else{
            return false
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var message = document.getElementById("message");

    function validatePassword() {
        if (password.value !== confirm_password.value) {
            message.innerHTML = "*Passwords do not match";
        }   else {
            message.innerHTML = "";
        }
    }

    password.addEventListener("change", validatePassword);
    confirm_password.addEventListener("keyup", validatePassword);
})
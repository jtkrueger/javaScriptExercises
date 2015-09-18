//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPass = $("#confirm_password");

//Hide hints
$("form span").hide();

function passwordEvent() {
    if ($password.val().length > 8) {
        $password.next("span").hide()
    } else {
        $password.next("span").show();
    }
}

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


function confirmPasswordEvent() {
    if ($password.val() === $confirmPass.val()) {
        $confirmPass.next("span").hide();
    } else {
        $confirmPass.next("span").show();
    }
}

$confirmPass.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
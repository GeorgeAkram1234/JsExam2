/// <reference types="../@types/jquery"/>


// LOADING screen

$(function () {
    $('.loader').fadeOut(1000, function () {
        $('.loading').fadeOut(1000)
        $('body').css('overflow', 'auto')
    })
})

// --------------------------------------------------------------------------------------
// SIDEBAR

$('.fa-bars , .sidebar a').on('click', function () {
    $('.sidebar').animate({ width: 'toggle', padding: 'toggle' }, 600);
    $('.fa-bars').toggleClass('fa-times')
})

document.forms[0].addEventListener('submit' , function(e){
    e.preventDefault()
})

let userName = $('#name');
let userPass = $('#password');
let userPhone = $('#phone');
let userAge = $('#age');
let userRePass = $('#repassword');
let userMail = $('#email');
let submit = $('#submit')


    document.getElementById("name").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("email").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phone").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("age").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("password").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repassword").addEventListener("focus", () => {
        repasswordInputTouched = true
    })


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submit.removeAttr("disabled")
} else {
    submit.attr("disabled", "disabled")
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("name").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phone").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("age").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("password").value))
}

function repasswordValidation() {
    return document.getElementById("repassword").value == document.getElementById("password").value
}

$('input').on('input' , function(){
inputsValidation()

})
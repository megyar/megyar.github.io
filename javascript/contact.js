// form fields
let user_fname = document.getElementById("user_fname");
let user_lname = document.getElementById("user_lname");
let user_email = document.getElementById("user_email");
let user_phone = document.getElementById("user_phone");
let user_message = document.getElementById("user_message");

// error message fields
let fnameVal = document.getElementById("fnameVal");
let lnameVal = document.getElementById("lnameVal");
let emailVal = document.getElementById("emailVal");
let phoneVal = document.getElementById("phoneVal");
let messageVal = document.getElementById("messageVal");

// form field proper formats
var emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
var phoneFormat = /^\d{3}-\d{3}-\d{4}$/;

function validateFName() {
    if (user_fname.value == "") {
        fnameVal.innerHTML = "First name is required!";
        return false;
    } else {
        fnameVal.innerHTML = "";
        return true;
    }
}

function validateLName() {
    if (user_lname.value == "") {
        lnameVal.innerHTML = "Last name is required!";
        return false;
    } else {
        lnameVal.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    if (emailFormat.test(user_email.value)) {
        emailVal.innerHTML = "";
        return true;
    } else {
        emailVal.innerHTML = "Email is not valid!";
        return false;
    }
}

function validatePhone() {
    if (phoneFormat.test(user_phone.value)) {
        phoneVal.innerHTML = "";
        return true;
    } else {
        phoneVal.innerHTML = "Phone number is not valid!";
        return false;
    }
}

function validateMessage() {
    if (user_message.value == "") {
        messageVal.innerHTML = "Message cannot be blank!";
        return false;
    } else {
        messageVal.innerHTML = "";
        return true;
    }
}

// validate the entire contact form
function validateContactForm() {
    validateFName();
    validateLName();
    validateEmail();
    validatePhone();
    validateMessage();
    if (!validateFName() || !validateLName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        return false;
    } else {
        return true;
    }
}


const serviceId = "service_9bbv26c";
const templateId = "template_pqp2zva";
emailjs.init("dCyLLfrv7iDMcCDus");


window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateContactForm()) {
            // const fields = {
            //     user_fname: user_fname.value,
            //     user_lname: user_lname.value,
            //     user_email: user_email.value,
            //     user_phone: user_phone.value,
            //     user_message: user_message.value
            // }

            emailjs.sendForm(serviceId, templateId, this).then(function() {
                console.log("email sent!");
                // clear all form fields
                user_fname.value = "";
                user_lname.value = "";
                user_email.value = "";
                user_phone.value = "";
                user_message.value ="";
            }, function(error) {
                console.log('email failed to send');
            })
        }
    })
}
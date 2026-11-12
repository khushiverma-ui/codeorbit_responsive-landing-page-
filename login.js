
// CSEP LOGIN PAGE JAVASCRIPT

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET EMAIL AND PASSWORD
    const email = document.getElementById("email")
        .value.trim().toLowerCase();

    const password = document.getElementById("password").value;

    // GET REGISTERED STUDENTS
    let students = [];

    try {
        students = JSON.parse(
            localStorage.getItem("csepStudents")
        ) || [];
    } catch (error) {
        alert("Unable to load registered student data!");
        return;
    }

    // CHECK LOGIN DETAILS
    const student = students.find(function(item) {

        return (
            String(item.email || "").trim().toLowerCase() === email &&
            item.password === password
        );

    });

    // LOGIN SUCCESS
    if (student) {

        localStorage.setItem(
            "currentStudent",
            JSON.stringify(student)
        );

        const rememberMe = document.getElementById("rememberMe");

        if (rememberMe && rememberMe.checked) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        alert("Login Successful! Welcome to CSEP 🎉");

        window.location.href = "registration-success.html";

    } else {

        alert("Invalid Email or Password! Please check your details or register again.");

    }

});

// FORGOT PASSWORD
const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Please contact the CSEP administrator for password assistance.");

    });

}

// REMEMBER EMAIL
const savedEmail = localStorage.getItem("rememberedEmail");

if (savedEmail) {

    document.getElementById("email").value = savedEmail;

    const rememberMe = document.getElementById("rememberMe");

    if (rememberMe) {
        rememberMe.checked = true;
    }

}

console.log("CSEP Login Page Loaded Successfully!");

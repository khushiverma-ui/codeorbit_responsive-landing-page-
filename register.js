
// CSEP REGISTRATION PAGE JAVASCRIPT

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET ALL FORM DETAILS
    const name = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim().toLowerCase();

    const phone = document.getElementById("phone").value.trim();

    const college = document.getElementById("college").value.trim();

    const course = document.getElementById("course").value;

    const year = document.getElementById("year").value;

    const skill = document.getElementById("skill").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirm-password").value;

    const terms = document.getElementById("terms");

    // CHECK EMPTY FIELDS
    if (
        !name || !email || !phone || !college ||
        !course || !year || !skill || !password ||
        !confirmPassword
    ) {
        alert("Please fill in all the details!");
        return;
    }

    // CHECK MOBILE NUMBER
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number!");
        return;
    }

    // CHECK PASSWORD
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return;
    }

    // CHECK TERMS AND CONDITIONS
    if (!terms.checked) {
        alert("Please accept the Terms and Conditions!");
        return;
    }

    // GET EXISTING STUDENTS
    let students = [];

    try {
        students = JSON.parse(
            localStorage.getItem("csepStudents")
        ) || [];
    } catch (error) {
        alert("Unable to access registration data!");
        return;
    }

    // CHECK EXISTING EMAIL
    const emailExists = students.some(function(student) {
        return String(student.email || "").toLowerCase() === email;
    });

    if (emailExists) {
        alert("This email is already registered! Please login.");
        return;
    }

    // CREATE STUDENT OBJECT
    const student = {
        name: name,
        email: email,
        phone: phone,
        college: college,
        course: course,
        year: year,
        skill: skill,
        password: password
    };

    // SAVE STUDENT DETAILS
    students.push(student);

    localStorage.setItem(
        "csepStudents",
        JSON.stringify(students)
    );

    localStorage.setItem(
        "currentStudent",
        JSON.stringify(student)
    );

    // REGISTRATION SUCCESS
    alert("Registration Successful! Welcome to CSEP 🎉");

    // REDIRECT TO SUCCESS PAGE
    window.location.href = "registration-success.html";

});

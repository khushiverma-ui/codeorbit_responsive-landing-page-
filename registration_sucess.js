
// Get student details from Local Storage
const currentStudent = JSON.parse(
    localStorage.getItem("currentStudent")
);

// Check registration details
if (currentStudent) {

    // Display student name
    document.getElementById("studentName").textContent =
        "Welcome, " + currentStudent.name + "!";

    // Display selected skill
    document.getElementById("studentSkill").textContent =
        "Your Selected Skill: " + currentStudent.skill;

} else {

    // Redirect if student is not registered
    alert("Please register first!");

    window.location.href = "register.html";
}


// Success Icon Animation
const successIcon = document.querySelector(".success-icon");

successIcon.addEventListener("mouseenter", function () {
    successIcon.style.transform = "scale(1.15)";
});

successIcon.addEventListener("mouseleave", function () {
    successIcon.style.transform = "scale(1)";
});


// Save last visited page
localStorage.setItem(
    "lastVisitedPage",
    "registration-success.html"
);


// Welcome message in console
console.log("Welcome to the CSEP Community!");


// GET STUDENT DATA FROM LOCAL STORAGE

const currentStudent = JSON.parse(
    localStorage.getItem("currentStudent")
);


// CHECK WHETHER STUDENT IS REGISTERED

if (currentStudent) {

    // DISPLAY STUDENT NAME
    document.getElementById("dashboardName").textContent =
        currentStudent.name;

    document.getElementById("studentName").textContent =
        currentStudent.name;

    // DISPLAY STUDENT EMAIL
    document.getElementById("studentEmail").textContent =
        currentStudent.email;

    // DISPLAY COLLEGE NAME
    document.getElementById("studentCollege").textContent =
        currentStudent.college;

    // DISPLAY COURSE
    document.getElementById("studentCourse").textContent =
        currentStudent.course;

    // DISPLAY CURRENT YEAR
    document.getElementById("studentYear").textContent =
        currentStudent.year;

    // DISPLAY PROFILE AVATAR
    document.getElementById("profileAvatar").textContent =
        currentStudent.name.charAt(0).toUpperCase();

    // DISPLAY SELECTED SKILL
    document.getElementById("selectedSkill").textContent =
        currentStudent.skill;

    // UPDATE SKILL COUNT
    document.getElementById("skillCount").textContent = "01";

} else {

    // DEFAULT DETAILS FOR GUEST STUDENTS
    document.getElementById("dashboardName").textContent =
        "Student";

    document.getElementById("studentName").textContent =
        "Guest Student";

    document.getElementById("studentEmail").textContent =
        "Not available";

    document.getElementById("studentCollege").textContent =
        "Not available";

    document.getElementById("studentCourse").textContent =
        "Not available";

    document.getElementById("studentYear").textContent =
        "Not available";

    document.getElementById("profileAvatar").textContent = "S";

    document.getElementById("selectedSkill").textContent =
        "No skill selected";

    document.getElementById("skillCount").textContent = "00";
}


// DASHBOARD WELCOME MESSAGE

console.log("Welcome to CSEP Student Dashboard!");

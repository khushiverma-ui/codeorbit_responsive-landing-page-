
// Select all project cards
const projectCards = document.querySelectorAll(".project-card");

// Add animation when page loads
window.addEventListener("DOMContentLoaded", function () {

    projectCards.forEach(function (card, index) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function () {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });

});


// Project button click effect
const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        console.log("Opening related skill details...");
    });

});


// Explore Projects button
const exploreButton = document.querySelector(".hero-btn");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("Exploring student projects...");
    });
}

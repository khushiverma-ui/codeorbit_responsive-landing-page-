
// CSEP - College Skill Exchange Platform

document.addEventListener("DOMContentLoaded", function () {

    // 1. Welcome Message
    console.log("Welcome to CSEP - Learn a Skill, Share a Skill!");

    // 2. Smooth Scrolling
    const navigationLinks = document.querySelectorAll('nav a[href^="#"]');

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Skill Card Interaction
    const skillCards = document.querySelectorAll("#skills article");

    skillCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const skillName = this.querySelector("h3").textContent;

            console.log("Selected Skill: " + skillName);
        });
    });

    // 4. Explore Skill Button
    const exploreButtons = document.querySelectorAll("#skills article a");

    exploreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const skillName = this.closest("article")
                .querySelector("h3").textContent;

            localStorage.setItem("selectedSkill", skillName);
        });
    });

    // 5. Join Community Button
    const joinButton = document.querySelector(
        'main > section:nth-of-type(5) a'
    );

    if (joinButton) {
        joinButton.addEventListener("click", function () {
            console.log("Welcome to the CSEP Community!");
        });
    }

    // 6. Scroll to Top on Logo Click
    const logo = document.querySelector("header h1");

    if (logo) {
        logo.style.cursor = "pointer";

        logo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 7. Current Year in Footer
    const footerText = document.querySelector("footer p:last-child");

    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() +
            " College Skill Exchange Platform. All Rights Reserved.";
    }

});

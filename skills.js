
// CSEP EXPLORE SKILLS PAGE JAVASCRIPT

// 1. GET HTML ELEMENTS
const skillSearch = document.getElementById("skillSearch");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-btn");
const skillCards = document.querySelectorAll(".skill-card");
const noResults = document.getElementById("noResults");

// 2. DEFAULT CATEGORY
let selectedCategory = "all";

// 3. FILTER SKILLS FUNCTION
function filterSkills() {

    const searchText = skillSearch.value.toLowerCase().trim();

    let visibleCards = 0;

    skillCards.forEach(function(card) {

        const title = card.querySelector("h3").textContent.toLowerCase();

        const description = card.querySelector("p").textContent.toLowerCase();

        const category = card.dataset.category;

        // CHECK SEARCH TEXT
        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText);

        // CHECK SELECTED CATEGORY
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        // SHOW OR HIDE SKILL CARDS
        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleCards++;

        } else {

            card.style.display = "none";

        }
    });

    // SHOW MESSAGE IF NO SKILL IS FOUND
    if (visibleCards === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

// 4. SEARCH BUTTON WITH SMOOTH SCROLL
searchBtn.addEventListener("click", function() {

    filterSkills();

    document.getElementById("skillsContainer").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

// 5. SEARCH WHILE TYPING
skillSearch.addEventListener("input", function() {
    filterSkills();
});

// 6. CATEGORY FILTER BUTTONS
categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // REMOVE ACTIVE CLASS FROM ALL BUTTONS
        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // ADD ACTIVE CLASS TO CLICKED BUTTON
        button.classList.add("active");

        // UPDATE SELECTED CATEGORY
        selectedCategory = button.dataset.category;

        // FILTER SKILLS
        filterSkills();

        // SCROLL TO SKILLS
        document.getElementById("skillsContainer").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

// 7. PAGE LOADED MESSAGE
console.log("CSEP Explore Skills Page Loaded Successfully!");

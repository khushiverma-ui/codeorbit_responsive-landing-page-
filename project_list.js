
// CSEP PROJECT LIST PAGE JAVASCRIPT

// Get HTML Elements
const projectSearch = document.getElementById("projectSearch");
const searchBtn = document.getElementById("searchBtn");

const categoryButtons = document.querySelectorAll(".category-btn");
const projectCards = document.querySelectorAll(".project-card");

const noResults = document.getElementById("noResults");
const projectContainer = document.getElementById("projectContainer");


// Selected Category
let selectedCategory = "all";


// PROJECT FILTER FUNCTION
function filterProjects() {

    const searchText = projectSearch.value.toLowerCase().trim();

    let visibleProjects = 0;

    projectCards.forEach(function(card) {

        const projectText = card.textContent.toLowerCase();

        const category = card.dataset.category;

        // Search Matching
        const matchesSearch = projectText.includes(searchText);

        // Category Matching
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        // Show or Hide Projects
        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleProjects++;

        } else {

            card.style.display = "none";

        }

    });


    // No Results Message
    if (noResults) {

        if (visibleProjects === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    }

}


// SEARCH BUTTON
if (searchBtn) {

    searchBtn.addEventListener("click", function() {

        filterProjects();

        projectContainer.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


// LIVE SEARCH
if (projectSearch) {

    projectSearch.addEventListener("input", function() {

        filterProjects();

    });

}


// CATEGORY FILTER BUTTONS
categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove Active Class
        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Add Active Class
        button.classList.add("active");


        // Update Selected Category
        selectedCategory = button.dataset.category;


        // Filter Projects
        filterProjects();


        // Smooth Scroll
        projectContainer.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// PAGE LOAD MESSAGE
console.log("CSEP Project List Page Loaded Successfully!");

// Initial Filter
filterProjects();

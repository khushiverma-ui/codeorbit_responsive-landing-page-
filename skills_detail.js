
// ======================================
// CSEP SKILL DETAILS PAGE JAVASCRIPT
// ======================================


// GET SELECTED SKILL FROM URL

const urlParams = new URLSearchParams(window.location.search);
const selectedSkill = urlParams.get("skill");


// SKILLS DATA

const skillsData = {

    "python": {
        title: "Python Programming",
        icon: "🐍",

        description:
            "Python is a beginner-friendly programming language used in web development, automation, data science and artificial intelligence.",

        overview:
            "Learn Python from the basics to advanced programming concepts. Develop logical thinking, solve problems and create useful applications.",

        topics: [
            {
                title: "Introduction to Python",
                description: "Understand Python, its features and how to write your first program."
            },
            {
                title: "Variables and Data Types",
                description: "Learn variables, strings, numbers, lists and other data types."
            },
            {
                title: "Conditional Statements",
                description: "Understand if, else and elif statements for decision making."
            },
            {
                title: "Loops",
                description: "Learn for loops and while loops to repeat instructions."
            },
            {
                title: "Functions",
                description: "Create reusable blocks of code using functions."
            },
            {
                title: "Object-Oriented Programming",
                description: "Understand classes, objects and basic OOP concepts."
            }
        ],

        resources: [
            {
                title: "Python Official Tutorial",
                description: "Learn Python programming through the official documentation.",
                url: "https://docs.python.org/3/tutorial/"
            },
            {
                title: "W3Schools Python",
                description: "Explore Python lessons with simple examples and exercises.",
                url: "https://www.w3schools.com/python/"
            },
            {
                title: "Programiz Python",
                description: "Practise Python concepts through beginner-friendly tutorials.",
                url: "https://www.programiz.com/python-programming"
            }
        ]
    },


    "c": {
        title: "C Programming",
        icon: "💻",

        description:
            "C is a powerful programming language used to understand computer fundamentals, problem solving and system programming.",

        overview:
            "Build a strong programming foundation by learning C language concepts, logic building and writing efficient programs.",

        topics: [
            {
                title: "Introduction to C",
                description: "Understand C language, its features and program structure."
            },
            {
                title: "Variables and Data Types",
                description: "Learn integers, characters, floats and variables."
            },
            {
                title: "Operators",
                description: "Understand arithmetic, logical and relational operators."
            },
            {
                title: "Conditional Statements",
                description: "Learn if, else and switch statements."
            },
            {
                title: "Loops and Arrays",
                description: "Practise loops and store multiple values using arrays."
            },
            {
                title: "Functions and Pointers",
                description: "Understand functions, pointers and memory basics."
            }
        ],

        resources: [
            {
                title: "Learn-C.org",
                description: "Learn C programming through interactive tutorials.",
                url: "https://www.learn-c.org/"
            },
            {
                title: "Programiz C Tutorial",
                description: "Explore C concepts with examples and practice programs.",
                url: "https://www.programiz.com/c-programming"
            },
            {
                title: "W3Schools C",
                description: "Study C programming basics and important concepts.",
                url: "https://www.w3schools.com/c/"
            }
        ]
    },


    "web-development": {
        title: "Web Development",
        icon: "🌐",

        description:
            "Web Development is the process of creating websites and web applications using HTML, CSS, JavaScript and other technologies.",

        overview:
            "Learn how to build attractive, responsive and interactive websites. Understand frontend development and create your own web projects.",

        topics: [
            {
                title: "HTML Fundamentals",
                description: "Learn webpage structure, elements, headings, forms and links."
            },
            {
                title: "CSS Styling",
                description: "Design websites using colours, fonts, layouts and animations."
            },
            {
                title: "Responsive Design",
                description: "Make websites work smoothly on mobile, tablet and desktop."
            },
            {
                title: "JavaScript Basics",
                description: "Understand variables, functions, events and conditions."
            },
            {
                title: "DOM Manipulation",
                description: "Learn how JavaScript interacts with HTML elements."
            },
            {
                title: "Frontend Projects",
                description: "Build practical projects like portfolios and to-do applications."
            }
        ],

        resources: [
            {
                title: "MDN Web Docs",
                description: "Learn HTML, CSS and JavaScript from web development documentation.",
                url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
            },
            {
                title: "W3Schools Web Development",
                description: "Explore beginner-friendly web development tutorials.",
                url: "https://www.w3schools.com/"
            },
            {
                title: "freeCodeCamp",
                description: "Practise web development through interactive lessons and projects.",
                url: "https://www.freecodecamp.org/learn/"
            }
        ]
    },


    "ai-ml": {
        title: "AI & Machine Learning",
        icon: "🤖",

        description:
            "Artificial Intelligence and Machine Learning help computers learn from data, identify patterns and perform intelligent tasks.",

        overview:
            "Discover how AI systems work, understand machine learning concepts and explore the future of intelligent technologies.",

        topics: [
            {
                title: "Introduction to AI",
                description: "Understand artificial intelligence and its real-world applications."
            },
            {
                title: "Introduction to Machine Learning",
                description: "Learn how machines identify patterns and learn from data."
            },
            {
                title: "Types of Machine Learning",
                description: "Explore supervised, unsupervised and reinforcement learning."
            },
            {
                title: "Python for AI",
                description: "Understand how Python supports AI and machine learning."
            },
            {
                title: "Data and Algorithms",
                description: "Learn about datasets, features and basic algorithms."
            },
            {
                title: "AI Applications",
                description: "Explore chatbots, image recognition and recommendation systems."
            }
        ],

        resources: [
            {
                title: "Google Machine Learning",
                description: "Explore machine learning concepts and learning materials.",
                url: "https://developers.google.com/machine-learning"
            },
            {
                title: "Microsoft Learn AI",
                description: "Discover artificial intelligence learning paths.",
                url: "https://learn.microsoft.com/en-us/training/ai/"
            },
            {
                title: "Kaggle Learn",
                description: "Practise Python, machine learning and data skills.",
                url: "https://www.kaggle.com/learn"
            }
        ]
    },


    "graphic-design": {
        title: "Graphic Designing",
        icon: "🎨",

        description:
            "Graphic Designing is the art of creating visual content using colours, typography, images and creative layouts.",

        overview:
            "Develop your creativity and learn how to design attractive posters, logos, social media graphics and other visual content.",

        topics: [
            {
                title: "Design Fundamentals",
                description: "Understand the basic principles of visual design."
            },
            {
                title: "Colour Theory",
                description: "Learn colour combinations, contrast and colour harmony."
            },
            {
                title: "Typography",
                description: "Understand fonts, text arrangement and readability."
            },
            {
                title: "Layout and Composition",
                description: "Learn how to arrange elements in an attractive design."
            },
            {
                title: "Logo Designing",
                description: "Explore the basics of creating memorable logos."
            },
            {
                title: "Social Media Designing",
                description: "Create attractive posts, banners and promotional graphics."
            }
        ],

        resources: [
            {
                title: "Canva Design School",
                description: "Learn design principles and improve your creativity.",
                url: "https://www.canva.com/designschool/"
            },
            {
                title: "Adobe Learn",
                description: "Explore creative tutorials and design techniques.",
                url: "https://www.adobe.com/learn"
            },
            {
                title: "Figma Learn",
                description: "Discover design and interface creation tutorials.",
                url: "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design"
            }
        ]
    },


    "data-analytics": {
        title: "Data Analytics",
        icon: "📊",

        description:
            "Data Analytics is the process of collecting, cleaning and analysing data to discover useful information and support decisions.",

        overview:
            "Learn how to understand data, identify patterns, create visualisations and communicate meaningful insights.",

        topics: [
            {
                title: "Introduction to Data Analytics",
                description: "Understand data analytics and its importance."
            },
            {
                title: "Data Collection",
                description: "Learn different methods of collecting data."
            },
            {
                title: "Excel Basics",
                description: "Explore spreadsheets, formulas and data organisation."
            },
            {
                title: "Python for Data Analysis",
                description: "Understand how Python helps analyse datasets."
            },
            {
                title: "Data Visualisation",
                description: "Present information through charts and graphs."
            },
            {
                title: "Data Interpretation",
                description: "Understand patterns and draw meaningful conclusions."
            }
        ],

        resources: [
            {
                title: "Kaggle Learn",
                description: "Practise data analysis, Python and data visualisation.",
                url: "https://www.kaggle.com/learn"
            },
            {
                title: "Microsoft Learn",
                description: "Explore data analytics and Power BI learning resources.",
                url: "https://learn.microsoft.com/en-us/training/"
            },
            {
                title: "W3Schools SQL",
                description: "Learn SQL basics for working with databases.",
                url: "https://www.w3schools.com/sql/"
            }
        ]
    },


    "content-writing": {
        title: "Content Writing",
        icon: "✍️",

        description:
            "Content Writing involves creating meaningful and engaging written content for websites, blogs, articles and digital platforms.",

        overview:
            "Improve your writing, communication and storytelling skills while learning how to create clear and interesting content.",

        topics: [
            {
                title: "Writing Fundamentals",
                description: "Understand sentence structure, grammar and clarity."
            },
            {
                title: "Blog Writing",
                description: "Learn how to write informative and engaging blog posts."
            },
            {
                title: "Article Writing",
                description: "Explore article structure and writing techniques."
            },
            {
                title: "SEO Writing",
                description: "Understand keywords and search-friendly content."
            },
            {
                title: "Creative Writing",
                description: "Develop storytelling and creative expression."
            },
            {
                title: "Editing and Proofreading",
                description: "Improve your writing by correcting errors and refining content."
            }
        ],

        resources: [
            {
                title: "HubSpot Academy",
                description: "Explore content marketing and writing-related lessons.",
                url: "https://academy.hubspot.com/"
            },
            {
                title: "Grammarly Blog",
                description: "Improve grammar, writing style and clarity.",
                url: "https://www.grammarly.com/blog/"
            },
            {
                title: "Google Search Central",
                description: "Learn how to create useful content for websites.",
                url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
            }
        ]
    },


    "video-editing": {
        title: "Video Editing",
        icon: "🎬",

        description:
            "Video Editing is the process of arranging video clips, adding transitions, audio and effects to create engaging videos.",

        overview:
            "Learn the basics of video editing, improve storytelling and create attractive videos for digital platforms.",

        topics: [
            {
                title: "Introduction to Video Editing",
                description: "Understand editing software and basic video concepts."
            },
            {
                title: "Video Cutting and Trimming",
                description: "Learn how to organise and edit video clips."
            },
            {
                title: "Transitions and Effects",
                description: "Explore transitions and visual effects."
            },
            {
                title: "Audio Editing",
                description: "Learn how to add and adjust music and sound."
            },
            {
                title: "Colour Correction",
                description: "Understand colour adjustments and visual consistency."
            },
            {
                title: "Final Video Export",
                description: "Learn how to export videos in suitable formats."
            }
        ],

        resources: [
            {
                title: "DaVinci Resolve Training",
                description: "Explore professional video editing training materials.",
                url: "https://www.blackmagicdesign.com/products/davinciresolve/training"
            },
            {
                title: "Adobe Learn",
                description: "Discover video editing tutorials and creative lessons.",
                url: "https://www.adobe.com/learn/premiere-pro"
            },
            {
                title: "Canva Video Editor",
                description: "Explore simple online video editing tools.",
                url: "https://www.canva.com/video-editor/"
            }
        ]
    },


    "communication": {
        title: "Communication Skills",
        icon: "🗣️",

        description:
            "Communication Skills help people express ideas clearly, listen effectively and interact confidently with others.",

        overview:
            "Improve your speaking, listening, presentation and interpersonal skills for academic and professional growth.",

        topics: [
            {
                title: "Verbal Communication",
                description: "Learn how to express your thoughts clearly through speaking."
            },
            {
                title: "Non-Verbal Communication",
                description: "Understand body language, gestures and facial expressions."
            },
            {
                title: "Active Listening",
                description: "Improve your ability to listen and understand others."
            },
            {
                title: "Public Speaking",
                description: "Develop confidence while speaking in front of an audience."
            },
            {
                title: "Presentation Skills",
                description: "Learn how to prepare and deliver effective presentations."
            },
            {
                title: "Interview Skills",
                description: "Prepare for interviews and professional conversations."
            }
        ],

        resources: [
            {
                title: "Toastmasters",
                description: "Explore public speaking and communication resources.",
                url: "https://www.toastmasters.org/"
            },
            {
                title: "British Council Learn English",
                description: "Improve your English communication and language skills.",
                url: "https://learnenglish.britishcouncil.org/"
            },
            {
                title: "Coursera Communication Courses",
                description: "Explore communication and professional development courses.",
                url: "https://www.coursera.org/browse/business/leadership-and-management"
            }
        ]
    }

};


// GET HTML ELEMENTS

const skillTitle = document.getElementById("skillTitle");
const skillIcon = document.getElementById("skillIcon");
const skillDescription = document.getElementById("skillDescription");
const skillOverview = document.getElementById("skillOverview");

const topicsContainer = document.getElementById("topicsContainer");
const resourcesContainer = document.getElementById("resourcesContainer");


// DISPLAY SELECTED SKILL

const skill = skillsData[selectedSkill];

if (skill) {

    // Update page title
    document.title = skill.title + " | CSEP";

    // Display skill information
    skillTitle.textContent = skill.title;
    skillIcon.textContent = skill.icon;
    skillDescription.textContent = skill.description;
    skillOverview.textContent = skill.overview;


    // DISPLAY TOPICS

    skill.topics.forEach(function(topic, index) {

        const topicCard = document.createElement("div");
        topicCard.className = "topic-card";

        const heading = document.createElement("h3");
        heading.textContent = (index + 1) + ". " + topic.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = topic.description;

        topicCard.append(heading, paragraph);

        topicsContainer.appendChild(topicCard);

    });


    // DISPLAY LEARNING RESOURCES

    skill.resources.forEach(function(resource) {

        const resourceCard = document.createElement("div");
        resourceCard.className = "resource-card";

        const heading = document.createElement("h3");
        heading.textContent = resource.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = resource.description;

        const link = document.createElement("a");

        link.className = "resource-link";
        link.href = resource.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Explore Resource →";

        resourceCard.append(heading, paragraph, link);

        resourcesContainer.appendChild(resourceCard);

    });

} else {

    // INVALID OR MISSING SKILL

    document.title = "Skill Not Found | CSEP";

    skillTitle.textContent = "Skill Not Found";
    skillIcon.textContent = "📚";

    skillDescription.textContent =
        "Sorry! We could not find the selected skill. Please explore our skills again.";

    skillOverview.textContent =
        "Choose a skill from the Explore Skills page to view its learning details.";

    topicsContainer.textContent =
        "No topics available. Please select a valid skill.";

    resourcesContainer.textContent =
        "No learning resources available.";

}


// LEARNING LEVEL BUTTONS

const levelButtons = document.querySelectorAll(".level-btn");

levelButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (!skill) {
            alert("Please select a valid skill first!");
            return;
        }

        const level = button.dataset.level;

        if (level === "beginner") {

            alert(
                "You selected Beginner Level for " +
                skill.title +
                "! Start with the basic topics and practise regularly."
            );

        } else {

            alert(
                "You selected Intermediate Level for " +
                skill.title +
                "! Explore advanced concepts and build projects."
            );

        }

        document.getElementById("learning-resources").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// COMMUNITY BUTTON

const connectButton = document.querySelector(".connect-btn");

if (connectButton) {

    connectButton.addEventListener("click", function(event) {

        const currentStudent = localStorage.getItem("currentStudent");

        if (!currentStudent) {

            event.preventDefault();

            alert("Please login first to join the CSEP community!");

            window.location.href = "login.html";

        }

    });

}


// PAGE LOADED

console.log("CSEP Skill Details Page Loaded Successfully!");

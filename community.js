
// CSEP COMMUNITY PAGE JAVASCRIPT


// 1. GET STUDENT NAME
const currentStudent = JSON.parse(
    localStorage.getItem("currentStudent")
);

const studentName = currentStudent
    ? currentStudent.name
    : "Guest Student";


// 2. CREATE NEW DISCUSSION
const postForm = document.getElementById("postForm");
const discussionContainer = document.getElementById("discussionContainer");

function createDiscussion(title, content, category, author) {

    const card = document.createElement("div");
    card.className = "discussion-card";

    const header = document.createElement("div");
    header.className = "post-header";

    const avatar = document.createElement("div");
    avatar.className = "student-avatar";
    avatar.textContent = author.charAt(0).toUpperCase();

    const authorInfo = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = author;

    const role = document.createElement("span");
    role.textContent = "CSEP Community Member";

    authorInfo.append(name, role);
    header.append(avatar, authorInfo);

    const categoryTag = document.createElement("span");
    categoryTag.className = "post-category";
    categoryTag.textContent = category;

    const postTitle = document.createElement("h3");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = content;

    const actions = document.createElement("div");
    actions.className = "post-actions";

    const likeButton = document.createElement("button");
    likeButton.type = "button";
    likeButton.className = "like-btn";
    likeButton.innerHTML = '♡ Like <span class="like-count">0</span>';

    const commentButton = document.createElement("button");
    commentButton.type = "button";
    commentButton.className = "comment-toggle";
    commentButton.textContent = "💬 Comments";

    actions.append(likeButton, commentButton);

    const commentsSection = document.createElement("div");
    commentsSection.className = "comments-section";

    const commentList = document.createElement("div");
    commentList.className = "comment-list";

    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Write a comment...";
    commentInput.required = true;

    const replyButton = document.createElement("button");
    replyButton.type = "submit";
    replyButton.textContent = "Reply";

    commentForm.append(commentInput, replyButton);

    commentsSection.append(commentList, commentForm);

    card.append(
        header,
        categoryTag,
        postTitle,
        postContent,
        actions,
        commentsSection
    );

    discussionContainer.prepend(card);

    return card;
}


// Load previously saved discussions
let savedPosts = JSON.parse(
    localStorage.getItem("csepDiscussions")
) || [];

savedPosts.forEach(function (post) {
    createDiscussion(
        post.title,
        post.content,
        post.category,
        post.author
    );
});


// Submit a new discussion
postForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const category = document.getElementById("postCategory").value;

    if (!title || !content || !category) {
        alert("Please fill all discussion details!");
        return;
    }

    const newPost = {
        title: title,
        content: content,
        category: category,
        author: studentName
    };

    savedPosts.push(newPost);

    localStorage.setItem(
        "csepDiscussions",
        JSON.stringify(savedPosts)
    );

    createDiscussion(
        title,
        content,
        category,
        studentName
    );

    postForm.reset();

    alert("Your discussion has been posted successfully! 🎉");

});


// 3. LIKE AND COMMENT FUNCTIONALITY
discussionContainer.addEventListener("click", function (event) {

    // Like button
    const likeButton = event.target.closest(".like-btn");

    if (likeButton) {

        const count = likeButton.querySelector(".like-count");

        let likes = Number(count.textContent);

        if (likeButton.dataset.liked === "true") {
            likes--;
            likeButton.dataset.liked = "false";
            likeButton.firstChild.textContent = "♡ Like ";
        } else {
            likes++;
            likeButton.dataset.liked = "true";
            likeButton.firstChild.textContent = "♥ Liked ";
        }

        count.textContent = likes;
    }


    // Show or hide comments
    const commentButton = event.target.closest(".comment-toggle");

    if (commentButton) {

        const card = commentButton.closest(".discussion-card");

        const comments = card.querySelector(".comments-section");

        if (comments.style.display === "none") {
            comments.style.display = "block";
        } else {
            comments.style.display = "none";
        }
    }

});


// 4. ADD COMMENTS
discussionContainer.addEventListener("submit", function (event) {

    if (!event.target.classList.contains("comment-form")) {
        return;
    }

    event.preventDefault();

    const form = event.target;
    const input = form.querySelector("input");
    const commentText = input.value.trim();

    if (commentText === "") {
        return;
    }

    const comment = document.createElement("p");

    const commenter = document.createElement("strong");
    commenter.textContent = studentName + ": ";

    comment.append(
        commenter,
        document.createTextNode(commentText)
    );

    const commentList = form.previousElementSibling;

    commentList.appendChild(comment);

    form.reset();

});


// 5. JOIN STUDY GROUPS
const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.dataset.joined === "true") {

            button.textContent = "Join Group";
            button.dataset.joined = "false";

            alert("You have left the study group.");

        } else {

            button.textContent = "Joined ✓";
            button.dataset.joined = "true";

            alert("Welcome! You joined the study group 🎉");

        }

    });

});


// 6. EVENT REGISTRATION
const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.dataset.registered === "true") {

            alert("You are already registered for this event!");

        } else {

            button.textContent = "Registered ✓";
            button.dataset.registered = "true";

            alert("Event registration successful! 🎉");

        }

    });

});


// 7. COMMUNITY PAGE WELCOME MESSAGE
console.log("Welcome to CSEP Community!");

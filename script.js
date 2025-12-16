document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle !== null && newTitle.trim() !== "") {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

document.getElementById("toggleSkillsBtn").onclick = function () {
    const skills = document.getElementById("skillsSection");
    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
};

document.getElementById("msgBox").onkeyup = function () {
    const max = 200;
    let remaining = max - this.value.length;
    document.getElementById("counter").textContent = remaining;
};

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();
    if (name === "" || email === "") {
        alert("Please fill in both Name and Email.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

document.getElementById("dateDisplay").textContent =
    "Today's date: " + new Date().toDateString();

document.getElementById("profilePic").onclick = function () {
    const images = [
        "https://uploads.onecompiler.io/43x69rtrz/4453e8p6t/Media.jfif",
        "https://picsum.photos/200",
        "https://picsum.photos/200?random=1",
        "https://picsum.photos/200?random=2"
    ];
    const randomImg = images[Math.floor(Math.random() * images.length)];
    this.src = randomImg;
};

const greeting = document.createElement("p");
greeting.id = "greetingText";
document.querySelector(".profile-section").appendChild(greeting);

function setGreeting() {
    const hour = new Date().getHours();
    let message;
    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";
    document.getElementById("greetingText").textContent = message;
}
setGreeting();

const quoteBtn = document.getElementById("quoteBtn");
const quoteBox = document.getElementById("quoteDisplay");

const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Success is not final; failure is not fatal.",
    "Do something today that your future self will thank you for.",
    "Focus on progress, not perfection.",
    "Your only limit is your mind.",
    "BASTA MAY ALAK MAY BALAK :)"
];

quoteBtn.onclick = function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
};

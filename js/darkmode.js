// Darkmode code taken from ChatGPT

// Apply dark mode if previously set in localStorage
window.onload = function() {
    var element = document.body;
    var button = document.querySelector("button");

    if (localStorage.getItem("dark-mode") === "true") {
        element.classList.add("dark-mode");
        button.textContent = "Switch to Light mode"; // Change button text to "Switch to Light mode"
        button.style.backgroundColor = "white"; // Set button background color to white
        button.style.color = "black"; // Set button text color to black
    }

    document.body.style.visibility = "visible"; // Show body content after dark mode is applied
};

function myFunction() {
    var element = document.body;
    var button = document.querySelector("button");

    // Toggle dark mode
    element.classList.toggle("dark-mode");

    // Update the dark mode preference in localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "true");
        button.textContent = "Switch to Light mode"; // Change button text to "Switch to Light mode"
        button.style.backgroundColor = "white"; // Set button background color to white
        button.style.color = "black"; // Set button text color to black
    } else {
        localStorage.setItem("dark-mode", "false");
        button.textContent = "Switch to Dark mode"; // Change button text to "Switch to Dark mode"
        button.style.backgroundColor = "#00274c"; // Reset button background to dark blue
        button.style.color = "white"; // Reset button text color to white
    }
}

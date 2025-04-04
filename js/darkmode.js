// Dark mode js reference from: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

// GenAI Declaration
// ChatGPT was used after encountering a flicker after toggling between pages. The page was displaying white by default before switching over to dark mode.
// Prompt: I am trying to create dark mode using html css and js, I managed to do it but what happens is: after toggling on dark mode, if I navigate to another say food panty, when i toggle between the pages, there would still be that one second of white background because it switches to black. How can I make it such that the toggle is kept across pages, whether it turn it on or off.


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
        button.textContent = "Switch to Light mode";
        button.style.backgroundColor = "white";
        button.style.color = "black";

        // Accessibility updates
        button.setAttribute("aria-label", "Activate light mode");
        button.setAttribute("aria-pressed", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
        button.textContent = "Switch to Dark mode";
        button.style.backgroundColor = "#00274c";
        button.style.color = "white";

        // Accessibility updates
        button.setAttribute("aria-label", "Activate dark mode");
        button.setAttribute("aria-pressed", "false");
    }
}

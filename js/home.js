document.addEventListener("DOMContentLoaded", function () {
    // Contact Me Popup
    const contactMe = document.getElementById("contact-me");
    const contactPopup = document.getElementById("contact-popup");

    contactMe.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        contactPopup.style.display = contactPopup.style.display === "block" ? "none" : "block";
    });

    // Close the Contact Popup when clicking outside
    document.addEventListener("click", function (event) {
        if (!contactMe.contains(event.target) && !contactPopup.contains(event.target)) {
            contactPopup.style.display = "none";
        }
    });

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        // Toggle the active class for animation
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close the Hamburger Menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active"); // Close the menu with animation
            menuToggle.classList.remove("active"); // Reset the button state
        }
    });
});

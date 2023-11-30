// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Code here will run after the DOM is fully loaded

    // Example: Add an event listener to the "Sign Up" button
    var signUpButton = document.querySelector('.landingText .btn a');
    signUpButton.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Add your custom behavior here, for example, displaying an alert
        alert('Sign Up button clicked!');
    });
});

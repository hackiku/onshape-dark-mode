// terminal command:
// nativefier 'https://cad.onshape.com/documents' --inject ./login-script.js

const EMAIL = 'your Onshape email';
const PASSWORD = 'your Onshape password';

window.onload = function() {
    let hasLoggedIn = false;
    
    const waitForLoginElements = setInterval(function() {
        const emailInput = document.querySelector('input[type="text"][name="email"]');
        const passwordInput = document.querySelector('input[type="password"][name="password"]');
        const signInButton = document.querySelector('.os-form-btn-container .btn.btn-primary.os-signin-button');

        if (emailInput && passwordInput && signInButton && !hasLoggedIn) {
            clearInterval(waitForLoginElements);

            // Set credentials
            emailInput.value = EMAIL;
            passwordInput.value = PASSWORD; 

            // Ensure the UI is focused to allow automatic interactions
            emailInput.focus();
            emailInput.dispatchEvent(new Event('change', { 'bubbles': true }));

            passwordInput.focus();
            passwordInput.dispatchEvent(new Event('change', { 'bubbles': true }));

            // Trigger a click on the sign-in button
            signInButton.focus();
            setTimeout(() => signInButton.click(), 500);

            hasLoggedIn = true;

            // Proceed to check for and hide the billing banner after a delay
            setTimeout(checkAndHideBillingBanner, 5000); // Adjust this delay as needed
            
            // Add button for toggling color inversion after login elements are found
            addToggleButton();
        }
    }, 100); // Check every 100ms
};

function checkAndHideBillingBanner() {
    const billingBanner = document.querySelector('.os-billing-banner');
    if (billingBanner) {
        billingBanner.style.display = 'none';
    }
}

function addToggleButton() {
    // Create a button element
    const button = document.createElement('button');
    button.innerText = '🌗';
    button.style.position = 'fixed';
    button.style.top = '5%';
    button.style.right = '10px';
    button.style.zIndex = 1000;
    button.style.backgroundColor = '#ffffff';

    // Add click event to toggle color inversion
    button.addEventListener('click', function() {
        const htmlElement = document.documentElement;
        if (htmlElement.style.filter === 'invert(100%)') {
            htmlElement.style.filter = '';
            // button.style.backgroundColor = '#f0f0f0'; 
        } else {
            htmlElement.style.filter = 'invert(100%)';
            // button.style.backgroundColor = '#a0a0a0';
        }
    });

    // Append button to the body
    document.body.appendChild(button);
    button.focus(); // Focus on the button to ensure the UI is considered active
}

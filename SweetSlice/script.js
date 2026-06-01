function goMeet() {
  window.location.href = "about.html";
}

function goContact() {
  window.location.href = "contact.html";
}

function goOrder() {
  window.location.href = "orderonline.html";
}




// Get elements
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// On button click
subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        message.style.color = 'red';
        message.textContent = 'Invalid email. Please enter a valid email.';
    } else {
        message.style.color = 'green';
        message.textContent = 'Successfully Subscribed!';
        emailInput.value = ''; // clear input
    }
});


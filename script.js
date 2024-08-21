document.addEventListener('DOMContentLoaded', function() {
    const mainLink = document.getElementById('mainLink');
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.getElementById('mainContent');
    const login = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const storedEmail = localStorage.getItem('email');
});
    // Show login form if no email is stored
    if (!storedEmail) {
        loginForm.style.display = 'block';
        mainContent.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Handle login form submission
    login.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        localStorage.setItem('email', email);
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
    });

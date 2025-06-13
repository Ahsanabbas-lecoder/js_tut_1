document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('InputPassword1');
    const icon = this.querySelector('i');
    
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    if (icon) {
        icon.classList.toggle('bi-eye');
        icon.classList.toggle('bi-eye-slash');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('InputEmail1').value.trim();
    const password = document.getElementById('InputPassword1').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const correctPassword = "AH@1235";

    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address');
        document.getElementById('InputEmail1').focus();
        return;
    }

    if (!password || password !== correctPassword) {
        alert('Incorrect password. Please try again.');
        document.getElementById('InputPassword1').focus();
        return;
    }

    alert('Welcome to the page!');
});
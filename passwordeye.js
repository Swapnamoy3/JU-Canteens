// Function to toggle password visibility
function togglePassword() {
    var passwordField = document.getElementById('password');
    var toggler = document.getElementById('toggler');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggler.classList.remove('fa-eye');
        toggler.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggler.classList.remove('fa-eye-slash');
        toggler.classList.add('fa-eye');
    }
}

// Add a click event listener to the eye icon
document.getElementById('toggler').addEventListener('click', togglePassword);

// Function to toggle password2 visibility
function togglePassword2() {
    var passwordField = document.getElementById('confirmpassword');
    var toggler2 = document.getElementById('toggler2');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggler2.classList.remove('fa-eye');
        toggler2.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggler2.classList.remove('fa-eye-slash');
        toggler2.classList.add('fa-eye');
    }
}

// Add a click event listener to the eye icon
document.getElementById('toggler2').addEventListener('click', togglePassword2);
function validateForm() {
    let isValid = true;

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Validate Full Name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerText = 'Full name must be at least 5 characters long.';
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate Phone Number
    if (phone === '1234567890' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits and not 1234567890.';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and cannot be "password" or your name.';
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    return isValid;
}

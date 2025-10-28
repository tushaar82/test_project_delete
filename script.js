// DOM Elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        return true;
    } else {
        showError(input, 'Email is not valid');
        return false;
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isValid = true;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isValid = false;
        } else {
            showSuccess(input);
        }
    });
    return isValid;
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
        return false;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        return false;
    }
    return true;
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Reset previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });

    // Check required fields
    const isRequiredValid = checkRequired([username, email, password, confirmPassword]);
    
    // Check username length
    const isUsernameValid = checkLength(username, 3, 15);
    
    // Check email is valid
    const isEmailValid = checkEmail(email);
    
    // Check password length
    const isPasswordValid = checkLength(password, 6, 25);
    
    // Check passwords match
    const doPasswordsMatch = checkPasswordsMatch(password, confirmPassword);

    // If all validations pass
    if (isRequiredValid && isUsernameValid && isEmailValid && isPasswordValid && doPasswordsMatch) {
        // Here you would typically send the data to a server
        const user = {
            username: username.value,
            email: email.value,
            password: password.value
        };
        
        console.log('Registration successful', user);
        
        // Show success message
        alert('Registration successful!');
        
        // Reset form
        form.reset();
    }
});

// Real-time validation
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            showSuccess(this);
        }
    });
});

// Hardcoded credentials
const validCredentials = [
    { username: 'admin', password: 'admin123', role: 'Administrator' },
    { username: 'user', password: 'user123', role: 'User' }
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const rememberMe = document.getElementById('rememberMe');

// Confetti Configuration
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

class ConfettiPiece {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function createConfetti() {
    confettiPieces = [];
    for (let i = 0; i < 150; i++) {
        confettiPieces.push(new ConfettiPiece());
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(piece => {
        piece.update();
        piece.draw();
    });
    requestAnimationFrame(animateConfetti);
}

function showConfetti() {
    canvas.style.display = 'block';
    createConfetti();
    animateConfetti();
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
        canvas.style.display = 'none';
        confettiPieces = [];
    }, 5000);
}

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
}

// Clear all errors
function clearErrors() {
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
}

// Check if user is already logged in
window.addEventListener('load', () => {
    const loggedInUser = sessionStorage.getItem('loggedInUser') || localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        window.location.href = 'dashboard.html';
    }
});

// Login Form Submit
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();

    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    // Validate inputs
    if (username === '') {
        showError(loginUsername, 'Username is required');
        return;
    }

    if (password === '') {
        showError(loginPassword, 'Password is required');
        return;
    }

    // Check credentials
    const user = validCredentials.find(
        cred => cred.username === username && cred.password === password
    );

    if (user) {
        // Show confetti
        showConfetti();

        // Store user data
        const userData = {
            username: user.username,
            role: user.role,
            loginTime: new Date().toISOString()
        };

        if (rememberMe.checked) {
            localStorage.setItem('loggedInUser', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
        }

        // Show success message
        showSuccess(loginUsername);
        showSuccess(loginPassword);

        // Redirect to dashboard after confetti
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        showError(loginUsername, 'Invalid username or password');
        showError(loginPassword, 'Invalid username or password');
    }
});

// Real-time validation
[loginUsername, loginPassword].forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            showSuccess(this);
        }
    });
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

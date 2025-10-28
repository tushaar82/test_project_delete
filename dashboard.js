// Check if user is logged in
window.addEventListener('load', () => {
    const loggedInUser = sessionStorage.getItem('loggedInUser') || localStorage.getItem('loggedInUser');
    
    if (!loggedInUser) {
        // Redirect to login if not logged in
        window.location.href = 'login.html';
        return;
    }

    // Parse user data
    const userData = JSON.parse(loggedInUser);
    
    // Display user information
    document.getElementById('welcomeUser').textContent = `Welcome, ${userData.username}!`;
    document.getElementById('userUsername').textContent = userData.username;
    document.getElementById('userRole').textContent = userData.role;
    
    // Format and display last login time
    const loginTime = new Date(userData.loginTime);
    document.getElementById('lastLogin').textContent = loginTime.toLocaleString();
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    // Show confirmation
    if (confirm('Are you sure you want to logout?')) {
        // Clear session and local storage
        sessionStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInUser');
        
        // Redirect to login page
        window.location.href = 'login.html';
    }
});

// Add interactivity to action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`${action} feature coming soon!`);
    });
});

// Add animation to stat cards on hover
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

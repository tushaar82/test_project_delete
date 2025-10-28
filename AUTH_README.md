# User Authentication System

A complete authentication system with login, registration, and dashboard functionality built with HTML, CSS, and JavaScript.

## Features

### 🔐 Login Page (`login.html`)
- User authentication with hardcoded credentials
- Form validation
- "Remember me" functionality
- **Confetti animation** on successful login
- Responsive design

### 📝 Registration Page (`register.html`)
- User registration form with validation
- Real-time input validation
- Password strength checking
- Password confirmation matching
- Clean error messages

### 📊 Dashboard (`dashboard.html`)
- Protected route (requires login)
- User information display
- Statistics cards with hover effects
- Recent activity feed
- Quick action buttons
- Logout functionality

## Demo Credentials

Use these credentials to login:

| Username | Password | Role |
|----------|----------|------|
| `admin` | `admin123` | Administrator |
| `user` | `user123` | User |

## File Structure

```
├── login.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # Dashboard (protected)
├── styles.css          # Shared styles for login/register
├── dashboard.css       # Dashboard-specific styles
├── login.js           # Login logic with confetti
├── script.js          # Registration validation
└── dashboard.js       # Dashboard functionality
```

## How to Use

1. **Start with Registration**: Open `register.html` to see the registration form
2. **Login**: Open `login.html` and use the demo credentials
3. **Enjoy Confetti**: Watch the confetti animation when you successfully login!
4. **Dashboard**: You'll be automatically redirected to the dashboard
5. **Logout**: Click the logout button to return to the login page

## Features Breakdown

### Login System
- Session management using `sessionStorage` and `localStorage`
- Automatic redirect if already logged in
- Credential validation against hardcoded users
- Confetti celebration on successful login

### Dashboard Protection
- Automatically redirects to login if not authenticated
- Displays user information from session
- Shows last login time
- Logout confirmation dialog

### Confetti Animation
- Canvas-based confetti animation
- 150 colorful confetti pieces
- Automatic cleanup after 5 seconds
- Responsive to window resize

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript**: Vanilla JS for all functionality
- **Canvas API**: For confetti animation

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Security Note

⚠️ **Important**: This is a demo application with hardcoded credentials. In a production environment, you should:
- Use a backend server for authentication
- Hash passwords
- Use HTTPS
- Implement proper session management
- Add CSRF protection
- Use secure cookies

## Customization

You can easily customize:
- Colors in CSS (gradient, buttons, etc.)
- Confetti duration and particle count
- User credentials in `login.js`
- Dashboard statistics and content

Enjoy your authentication system! 🎉

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle to the registration form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Toggle back to the login form
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Registration Process
document.querySelector('.sign-up form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('.sign-up input[type="text"]').value.trim();
    const email = document.querySelector('.sign-up input[type="email"]').value.trim();
    const password = document.querySelector('.sign-up input[type="password"]').value;

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Save user data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("User already exists. Please log in.");
        container.classList.remove("active"); // Switch to login view
    } else {
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        container.classList.remove("active"); // Switch to login view
    }
});

// Login Process
document.querySelector('.sign-in form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.sign-in input[type="email"]').value.trim();
    const password = document.querySelector('.sign-in input[type="password"]').value;

    if (!email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = "option.html"; // Redirect to option page
    } else {
        alert("Invalid email or password!");
    }
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Simulate login process (replace with actual authentication logic)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or homepage
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const liveText = document.getElementById("liveText");
const submitBtn = document.getElementById("submitBtn");

// Live Username Display
username.addEventListener("input", function () {
    liveText.textContent = username.value;
});

// Password focus
password.addEventListener("focus", function () {
    password.style.backgroundColor = "yellow";
});

// Password blur
password.addEventListener("blur", function () {
    password.style.backgroundColor = "";
});

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    message.className = "error";
    message.textContent = "";

    if (username.value === "") {
        message.textContent = "Username is required";
        return;
    }

    if (email.value === "") {
        message.textContent = "Email is required";
        return;
    }

    if (password.value === "") {
        message.textContent = "Password is required";
        return;
    }

    // Success
    message.className = "success";
    message.textContent = "Registration Successful";

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitted";
});
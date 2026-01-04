//FORM 
function showLogin() {
  document.getElementById("signupForm").classList.remove("active");
  document.getElementById("loginForm").classList.add("active");
}

function showSignup() {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("signupForm").classList.add("active");
}

// PASSWORD SHOW / HIDE
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// SIGN UP
const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  let valid = true;

  if (username.value.trim() === "") {
    nameError.innerText = "Username is required";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.innerText = "Enter a valid email";
    valid = false;
  }

  if (password.value.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Sign Up Successful ✅");
    form.reset();
    showLogin();
  }
});

//LOGIN VALIDATION 
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loginError.innerText = "";

  if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
    loginError.innerText = "All fields are required";
    return;
  }

  if (loginPassword.value.length < 6) {
    loginError.innerText = "Password must be at least 6 characters";
    return;
  }

  // Demo credentials
  if (
    loginEmail.value === "admin@gmail.com" &&
    loginPassword.value === "123456"
  ) {
    alert("Login Successful ✅");
    loginForm.reset();
  } else {
    loginError.innerText = "Invalid email or password";
  }
});

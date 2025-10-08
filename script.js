// 🎯 Part 1: Event Handling
const messageButton = document.getElementById("messageButton");
const messageOutput = document.getElementById("messageOutput");

messageButton.addEventListener("click", () => {
  messageOutput.textContent = "Button clicked! Great job using event listeners 🎉";
});

// 🎮 Part 2: Interactive Elements

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
faqQuestion.addEventListener("click", () => {
  faqQuestion.parentElement.classList.toggle("active");
});

// ✅ Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let valid = true;

  // Validate Name
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Password (min 6 chars, at least one number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be at least 6 characters and contain a number.";
    valid = false;
  }

  // Final message
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix the errors and try again.";
  }
});

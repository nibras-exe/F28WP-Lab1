// 1. Declare a variable to track the current image index
let currentIndex = 0;

// 2. Declare an empty array for images
const images = [];

// 3. Set the time interval (in milliseconds)
const intervalTime = 2000; // Change this to your desired time interval

// 4. Create a function that populates the images array with image paths
function createImageList() {
  // Add image paths to the 'images' array
  images.push('images/1.jpg');
  images.push('images/2.jpg');
  images.push('images/3.jpg');
  images.push('images/4.jpg');
  images.push('images/5.jpg');
  images.push('images/6.jpg');
  images.push('images/7.jpg');
  images.push('images/8.jpg');
  // Add more image paths as needed
}

// Call the function to create the image list
createImageList();

// 5. Create a function to change the image source and toggle display
function changeImage() {
  // Get the 'slide' element by name
  const slide = document.getElementsByName('slide')[0];
  
  // Toggle display property to show/hide images
  slide.style.display = 'none'; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
  slide.style.display = 'block'; // Show the next image
}

// 6. Create a function to start the image slider
function startImageSlider() {
  changeImage(); // Display the first image
  setInterval(changeImage, intervalTime); // Change images at specified intervals
}

// 7. Run the function when the page loads
window.addEventListener('load', startImageSlider);

// Select all the input elements and the form
const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Function to validate the email using a regular expression
function isEmailValid(emailValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(emailValue);
}

// Function to validate the password
function isPasswordValid(passwordValue) {
  return passwordValue.length >= 8;
}

// Function to update error messages and styles
function updateError(element, message, isValid) {
  const errorElement = element.nextElementSibling;
  if (!isValid) {
    errorElement.textContent = message;
    element.classList.add("error");
  } else {
    errorElement.textContent = "";
    element.classList.remove("error");
  }
}

// Event listeners for real-time validation
username.addEventListener("blur", () => {
  updateError(username, "Username is required", username.value.trim() !== "");
});

email.addEventListener("blur", () => {
  updateError(email, "Invalid email address", isEmailValid(email.value));
});

password.addEventListener("blur", () => {
  updateError(password, "Password must be at least 8 characters", isPasswordValid(password.value));
});

confirmPassword.addEventListener("blur", () => {
  updateError(confirmPassword, "Passwords do not match", confirmPassword.value === password.value);
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
  if (
    username.value.trim() === "" ||
    !isEmailValid(email.value) ||
    !isPasswordValid(password.value) ||
    confirmPassword.value !== password.value
  ) {
    event.preventDefault(); // Prevent form submission if any validation fails
  }
});
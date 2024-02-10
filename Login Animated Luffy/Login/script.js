// Get the elements for the eyes
const eyes1 = document.getElementById('eyes1');
const eyes2 = document.getElementById('eyes2');

// Function to calculate the angle between the cursor and the eyes
function getAngle(x, y, eyes) {
  const eyesRect = eyes.getBoundingClientRect();
  const eyesX = eyesRect.left + eyesRect.width / 2;
  const eyesY = eyesRect.top + eyesRect.height / 2;

  const angle = Math.atan2(y - eyesY, x - eyesX);
  return angle;
}

// Function to update the position of the eyes based on cursor movement
function updateEyesPosition(event) {
  const cursorX = event.clientX || event.touches[0].clientX;
  const cursorY = event.clientY || event.touches[0].clientY;

  const angle1 = getAngle(cursorX, cursorY, eyes1);
  const angle2 = getAngle(cursorX, cursorY, eyes2);

  const distance = 5; // You can adjust this value to control the distance between the eyes and cursor

  const offsetX1 = Math.cos(angle1) * distance;
  const offsetY1 = Math.sin(angle1) * distance;

  const offsetX2 = Math.cos(angle2) * distance;
  const offsetY2 = Math.sin(angle2) * distance;

  eyes1.style.transform = `translate(${offsetX1}px, ${offsetY1}px)`;
  eyes2.style.transform = `translate(${offsetX2}px, ${offsetY2}px)`;
}

// Add event listener to track cursor movement
document.addEventListener('mousemove', updateEyesPosition);
document.addEventListener('touchmove', updateEyesPosition);

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get values from email and password inputs
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Perform validation
  if (emailValue === '') {
    alert('Please enter your email.');
    return;
  }

  if (passwordValue === '') {
    alert('Please enter your password.');
    return;
  }

  // Perform further actions, such as sending the data to a server, etc.
  // For now, you can log the values to the console
  console.log('Email:', emailValue);
  console.log('Password:', passwordValue);

  // Clear the form inputs
  emailInput.value = '';
  passwordInput.value = '';
}

// Add event listener to the form for form submission
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleFormSubmission);


// Set the countdown duration to 10 seconds
const countdownDuration = 10; // 10 seconds

// Start countdown timer
let countdownTime = countdownDuration;
const countdownElement = document.getElementById('seconds');

const countdownInterval = setInterval(function() {
    countdownTime--;
    countdownElement.innerText = countdownTime;

    if (countdownTime <= 0) {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
        startSurprise(); // Start the heart animation and text
    }
}, 1000);

// Function to start the heart animation and text after countdown finishes
function startSurprise() {
    // Hide the countdown
    document.getElementById("countdown-container").style.display = "none";

    // Show the heart animation and text
    document.getElementById("heartPage").style.display = "block";
    document.getElementById("happyText").style.opacity = 1; // Make text visible

    // Create hearts randomly every 100ms
    setInterval(createHeart, 100);
}

// Function to create hearts randomly with more randomized properties
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize horizontal starting position
    const left = Math.random() * window.innerWidth;
    heart.style.left = `${left}px`;

    // Randomize vertical starting position
    const top = Math.random() * window.innerHeight;
    heart.style.top = `${top}px`;

    // Randomize animation duration (time for heart to finish its movement)
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    heart.style.animationDuration = `${duration}s`;

    // Add the heart to the body of the page
    document.body.appendChild(heart);

    // Remove the heart once the animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

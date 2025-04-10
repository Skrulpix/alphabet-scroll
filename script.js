// script.js
const letterSegment1 = document.getElementById("letter-segment-1");
const letterSegment2 = document.getElementById("letter-segment-2");
const letterSegment3 = document.getElementById("letter-segment-3");
const Alphabet1 = "abcdefghijklmnopq"; // lowercase
const Alphabet2 = "ABCDEFGHIJKLMNOPQRST"; // uppercase
const Alphabet3 = "abcdefghijklmnopqrstuvw"; // lowercase
const maxVisibleLength = 3; // Maximum letters to display

// Create letter boxes and append them to the container
function createLetterBoxes(letterSegment) {
  for (let i = 0; i < maxVisibleLength; i++) {
    const letterBox = document.createElement("div");
    letterBox.classList.add("letter-box");
    letterBox.textContent = ""; // Start all empty
    letterSegment.appendChild(letterBox);
  }
}

// Animate letters into the letter boxes using setInterval for cleaner logic
function animateLettersOptimized(fullAlphabet, letterSegment, isUpperCase) {
  const letterBoxes = letterSegment.querySelectorAll(".letter-box");
  let currentIndex = 0;

  const interval = setInterval(() => {
    // Update each box with the corresponding letter
    for (let i = 0; i < maxVisibleLength; i++) {
      const alphabetIndex = currentIndex - (maxVisibleLength - 1 - i); // Fill from the rightmost box

      if (alphabetIndex >= 0 && alphabetIndex < fullAlphabet.length) {
        letterBoxes[i].textContent = isUpperCase
          ? fullAlphabet[alphabetIndex].toUpperCase()
          : fullAlphabet[alphabetIndex].toLowerCase();
      } else {
        letterBoxes[i].textContent = ""; // Clear if out of bounds
      }
    }

    // Increment the index or stop the animation if the end is reached
    if (currentIndex < fullAlphabet.length - 1) {
      currentIndex++;
    } else {
      clearInterval(interval); // Stop the animation
    }
  }, 100); // Faster animation with 100ms delay
}

// Initialize the letter boxes and start the animation
createLetterBoxes(letterSegment1);
createLetterBoxes(letterSegment2);
createLetterBoxes(letterSegment3);

// Start the animations
setTimeout(() => {
  animateLettersOptimized(Alphabet1, letterSegment1, false); // Alphabet1: lowercase
}, 600);
setTimeout(() => {
  animateLettersOptimized(Alphabet2, letterSegment2, true); // Alphabet2: uppercase
}, 300);
animateLettersOptimized(Alphabet3, letterSegment3, false); // Alphabet3: lowercase


document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");

  // Trigger the animation after 2 seconds
  setTimeout(() => {
    header.classList.add("shrink");
    content.classList.add("show");
  }, 3600);
});

// script.js
const letterSegment1 = document.getElementById("letter-segment-1");
const letterSegment2 = document.getElementById("letter-segment-2");
const letterSegment3 = document.getElementById("letter-segment-3");
const Alphabet1 = "abcdefghijklmnopq"; // lowercase
const Alphabet2 = "ABCDEFGHIJKLMNOPQRST"; // uppercase
const Alphabet3 = "abcdefghijklmnopqrstuvw"; // lowercase
const maxVisibleLength = 3; // Maximum letters to display
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

// Create letter boxes and append them to the container
function createLetterBoxes(letterSegment) {
  for (let i = 0; i < maxVisibleLength; i++) {
    const letterBox = document.createElement("div");
    letterBox.classList.add("letter-box");
    letterBox.textContent = ""; // Start all empty
    letterSegment.appendChild(letterBox);
  }
}

// Animate letters into the letter boxes
function animateLetters(fullAlphabet, currentIndex, letterSegment, isUpperCase) {
  const letterBoxes = letterSegment.querySelectorAll(".letter-box");

  // Update each box with the corresponding letter
  for (let i = 0; i < maxVisibleLength; i++) {
    // Calculate the index in the fullAlphabet string
    const alphabetIndex = currentIndex - (maxVisibleLength - 1 - i); // Fill from the rightmost box

    // Fill boxes with letters if the index is within bounds
    if (alphabetIndex >= 0 && alphabetIndex < fullAlphabet.length) {
      letterBoxes[i].textContent = (alphabetIndex <= currentIndex) // Fill only if we are at or past the current index
        ? (isUpperCase 
          ? fullAlphabet[alphabetIndex].toUpperCase() 
          : fullAlphabet[alphabetIndex].toLowerCase())  
        : ""; // Keep the rest empty
    } else {
      letterBoxes[i].textContent = ""; // Clear if out of bounds
    }
  }

  // Increment the index until we reach the end of the alphabet
  if (currentIndex < fullAlphabet.length - 1) {
    currentIndex++;
    setTimeout(() => animateLetters(fullAlphabet, currentIndex, letterSegment, isUpperCase), 200);
  }
}

// Initialize the letter boxes and start the animation
createLetterBoxes(letterSegment1);
createLetterBoxes(letterSegment2);
createLetterBoxes(letterSegment3);

// Start the animation for Alphabet1 after a 1200ms delay
setTimeout(() => {
  animateLetters(Alphabet1, currentIndex1, letterSegment1, false); // Alphabet1: lowercase
}, 1200);
// Start the animation for Alphabet2 after a 600ms delay
setTimeout(() => {
  animateLetters(Alphabet2, currentIndex2, letterSegment2, true); // Alphabet2: uppercase
}, 600);
// Start the animation for Alphabet3 instantly
animateLetters(Alphabet3, currentIndex3, letterSegment3, false); // Alphabet3: lowercase

// guess.js

let currentGuess = null;

const guessProducts = [
  { id: 201, name: "Vintage Camera", price: 75 },
  { id: 202, name: "Leather Jacket", price: 120 },
  { id: 203, name: "Record Player", price: 60 },
  { id: 204, name: "Antique Clock", price: 45 },
  { id: 205, name: "Classic Bicycle", price: 100 }
];

const guessReasons = [
  "This item is trending among students!",
  "A great bargain for quality!",
  "Highly recommended for your needs.",
  "Perfect for your lifestyle!",
  "Don't miss out on this unique find!"
];

function refreshGuess() {
  // Pick a random product and reason
  const product = guessProducts[Math.floor(Math.random() * guessProducts.length)];
  const reason = guessReasons[Math.floor(Math.random() * guessReasons.length)];
  currentGuess = product;
  // Display the guessed product details
  const guessContent = document.getElementById("guessContent");
  guessContent.innerHTML = `
    <p><strong>${product.name}</strong> - $${product.price}</p>
    <p><em>${reason}</em></p>
  `;
}

function addGuessToCart() {
  if (currentGuess) {
    // Assumes addToCart is defined in cart.js
    addToCart(currentGuess);
  } else {
    alert("Please refresh to get a product first!");
  }
}

// Initialize the guess section on DOM load
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("guessContent")) {
    refreshGuess();
  }
});

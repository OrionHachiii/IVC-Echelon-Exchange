// cart.js

// Global array to store items added to the cart
let cartItems = [];

/**
 * Adds an item to the cart.
 * @param {Object} item - An object representing the item with properties: id, name, and price.
 */
function addToCart(item) {
  // Push the new item to the cart
  cartItems.push(item);
  // Update the cart display
  updateCartDisplay();
  // Notify the user
  alert(`${item.name} added to cart!`);
}

/**
 * Removes an item from the cart by its index.
 * @param {number} index - The index of the item to remove.
 */
function removeFromCart(index) {
  // Remove the item from the cart array
  cartItems.splice(index, 1);
  // Update the cart display
  updateCartDisplay();
}

/**
 * Updates the cart display by listing all items and computing the total price.
 */
function updateCartDisplay() {
  const cartContainer = document.getElementById('cartItems');
  const cartTotalContainer = document.getElementById('cartTotal');

  // If there are no items, show an empty message
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is currently empty.</p>';
    cartTotalContainer.innerHTML = '';
    return;
  }

  // Clear current cart display
  cartContainer.innerHTML = '';
  let total = 0;

  // Loop through cart items and create HTML for each item
  cartItems.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button class="btn btn-remove" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);
  });

  // Display the total price
  cartTotalContainer.innerHTML = `<h3>Total: $${total}</h3>`;
}

/**
 * Simulates the checkout process by displaying the total amount and then clearing the cart.
 */
function checkout() {
  if (cartItems.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  
  // Calculate the total amount
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  // Simulate checkout (in a real application, you'd send this data to a server)
  alert(`Checkout process initiated! Total amount: $${totalAmount}`);
  
  // Clear the cart and update the display
  cartItems = [];
  updateCartDisplay();
}

// marketplace.js

// Global variables for products
let currentCategory = null; // null means all categories
let productsLoaded = 0;
const productsPerLoad = 10;
const allCategories = ['Shoes', 'Electronics', 'Clothing', 'Books'];
let loadedProducts = []; // store all loaded products

// Sample product names by category
const productNames = {
  'Shoes': ['Nike Sneakers', 'Adidas Runners', 'Puma Trainers'],
  'Electronics': ['Smartphone', 'Tablet', 'Headphones', 'Smartwatch'],
  'Clothing': ['T-shirt', 'Jeans', 'Jacket', 'Sweater'],
  'Books': ['Novel', 'Textbook', 'Comic Book', 'Biography']
};

// Generates a random product, optionally for a specific category
function generateRandomProduct(category) {
  category = category || allCategories[Math.floor(Math.random() * allCategories.length)];
  let names = productNames[category];
  let name = names[Math.floor(Math.random() * names.length)];
  let price = Math.floor(Math.random() * 100) + 10; // Price between $10 and $110
  const product = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: name,
    price: price,
    image: 'placeholder_image.jpg', // Replace with your actual placeholder image
    description: `A quality ${name} in excellent condition.`,
    category: category
  };
  return product;
}

// Loads a batch of products, appends them to the grid, and stores them in loadedProducts
function loadMoreProducts() {
  const itemsGrid = document.getElementById("trendingItems");
  for (let i = 0; i < productsPerLoad; i++) {
    const product = generateRandomProduct(currentCategory);
    loadedProducts.push(product);
    productsLoaded++;
    
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-card loading";
    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="btn" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">Add to Cart</button>
    `;
    itemsGrid.appendChild(itemDiv);
    
    // Fade-in effect: remove blur after a short delay
    setTimeout(() => {
      itemDiv.classList.remove("loading");
    }, 500);
  }
}

// Clears and reloads products for the selected category
function refreshProductsByCategory(category) {
  currentCategory = category;
  const itemsGrid = document.getElementById("trendingItems");
  itemsGrid.innerHTML = "";
  productsLoaded = 0;
  loadedProducts = [];
  loadMoreProducts();
}

// Infinite scrolling: load more products when near the bottom of the page
window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
    loadMoreProducts();
  }
});

// Search functionality: filter loadedProducts and re-render the grid
function searchMarketplace() {
  const query = document.getElementById("marketplaceSearch").value.toLowerCase().trim();
  const itemsGrid = document.getElementById("trendingItems");
  
  // If the search query is empty, restore original products
  if (query === "") {
    itemsGrid.innerHTML = "";
    loadedProducts.forEach(product => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item-card";
      itemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button class="btn" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">
          Add to Cart
        </button>
      `;
      itemsGrid.appendChild(itemDiv);
    });
    return;
  }
  
  // Filter products based on the query
  const filteredProducts = loadedProducts.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  
  itemsGrid.innerHTML = "";
  
  // If no product is found, display a custom message
  if (filteredProducts.length === 0) {
    itemsGrid.innerHTML = `
      <div class="not-found">
        Not Found 😢<br>
        We hope that very soon you will have what you need!
      </div>
    `;
    return;
  }
  
  // Display the filtered products
  filteredProducts.forEach(product => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-card";
    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="btn" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">
        Add to Cart
      </button>
    `;
    itemsGrid.appendChild(itemDiv);
  });
}


// Explore Deals functionality
const dealProducts = [
  { id: 301, name: "Vintage Watch", price: 150, image: "placeholder_watch.jpg", description: "A classic vintage watch." },
  { id: 302, name: "Designer Bag", price: 250, image: "placeholder_bag.jpg", description: "A stylish designer bag." },
  { id: 303, name: "Gaming Console", price: 300, image: "placeholder_console.jpg", description: "High-performance gaming console." }
];

function exploreDeals() {
  const heroBanner = document.querySelector(".hero-banner");
  heroBanner.classList.add("animate-explore");
  setTimeout(() => {
    loadDealPage();
    heroBanner.classList.remove("animate-explore");
  }, 1000);
}

// Loads the Deal Page with a random deal
function loadDealPage() {
  document.getElementById("marketplace").style.display = "none";
  const dealPage = document.getElementById("dealPage");
  dealPage.style.display = "block";
  const deal = dealProducts[Math.floor(Math.random() * dealProducts.length)];
  const dealContent = document.getElementById("dealContent");
  dealContent.innerHTML = `
    <img src="${deal.image}" alt="${deal.name}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:10px;">
    <h3>${deal.name}</h3>
    <p>${deal.description}</p>
    <p>Price: $${deal.price}</p>
    <button class="btn" onclick="addToCart({ id: ${deal.id}, name: '${deal.name}', price: ${deal.price} })">Add to Cart</button>
  `;
}

function goBackToMarketplace() {
  document.getElementById("dealPage").style.display = "none";
  document.getElementById("marketplace").style.display = "block";
}

// Initialize marketplace: clear and load products
function initMarketplace() {
  // Reset the search input so any previous "Not Found" message goes away
  document.getElementById("marketplaceSearch").value = "";
  // Clear the current grid and loadedProducts array
  const itemsGrid = document.getElementById("trendingItems");
  itemsGrid.innerHTML = "";
  productsLoaded = 0;
  loadedProducts = [];
  // Load a fresh batch of products
  loadMoreProducts();
}


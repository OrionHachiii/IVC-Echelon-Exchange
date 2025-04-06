// app.js

// Wait for the document to load before executing scripts
document.addEventListener("DOMContentLoaded", function() {
    // Add bounce effect to all buttons when clicked
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        btn.classList.add('bounce');
        // Remove the bounce class after the animation completes (300ms)
        setTimeout(() => btn.classList.remove('bounce'), 300);
      });
    });
    
    // Set default navigation to the Home section
    navigateTo('home');
  });
  
  // Function to navigate between different sections of the site
  function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    
    // Display the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
      
      // Reinitialize marketplace if returning to it
      if (sectionId === "marketplace" && typeof initMarketplace === "function") {
        initMarketplace();
      }

      // If the marketplace section is activated, load its items (if function exists)
      if (sectionId === "marketplace" && typeof loadMarketplaceItems === "function") {
        loadMarketplaceItems();
      }
      
      // If the friends section is activated, load friend suggestions (if function exists)
      if (sectionId === "friends" && typeof loadFriends === "function") {
        loadFriends();
      }
    }
  }
  
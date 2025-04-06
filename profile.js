// profile.js

function updateProfile() {
    // Get the form values
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const major = document.getElementById('profileMajor').value;
    
    // Here, you could send the updated data to your server via an API.
    // For this example, we'll just simulate an update with an alert.
    alert(`Profile updated:\nName: ${name}\nEmail: ${email}\nMajor: ${major}`);
  }
  
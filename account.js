// account.js

function updateAccount() {
    // Retrieve values from the account form
    const username = document.getElementById('accountUsername').value;
    const password = document.getElementById('accountPassword').value;
    const security = document.getElementById('accountSecurity').value;
    
    // Here, you could send the updated data to a server via an API.
    // For now, we simulate the update using an alert.
    alert(`Account updated:\nUsername: ${username}\nPassword: ${password ? "******" : "No change"}\nSecurity: ${security}`);
  }
  
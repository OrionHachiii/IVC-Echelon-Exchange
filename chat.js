// chat.js

// Function to send a message in the chat area
function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatArea = document.getElementById('chatArea');
    const message = input.value.trim();
    
    if (message !== '') {
      // Create and display the user message
      const messageDiv = document.createElement('div');
      messageDiv.className = 'chat-message user-message';
      const timestamp = new Date().toLocaleTimeString();
      messageDiv.innerHTML = `<span class="timestamp">${timestamp}</span> ${message}`;
      chatArea.appendChild(messageDiv);
      
      // Clear the input and scroll the chat area
      input.value = '';
      chatArea.scrollTop = chatArea.scrollHeight;
  
      // Simulate a bot response after 1 second delay
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        const botTimestamp = new Date().toLocaleTimeString();
        botMessage.innerHTML = `<span class="timestamp">${botTimestamp}</span> Thanks for your message!`;
        chatArea.appendChild(botMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
      }, 1000);
    }
  }
  
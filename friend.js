// friend.js

// Dummy data for friend suggestions
const friendSuggestions = [
    { id: 1, name: "Alice Smith", major: "Computer Science" },
    { id: 2, name: "Bob Johnson", major: "Business Administration" },
    { id: 3, name: "Charlie Davis", major: "Graphic Design" },
    { id: 4, name: "Diana Lee", major: "Engineering" },
    { id: 5, name: "Ethan Brown", major: "Mathematics" }
  ];
  
  // Function to load all friend suggestions
  function loadFriends() {
    const friendsContainer = document.getElementById('friendsList');
    if (!friendsContainer) return;
    friendsContainer.innerHTML = "";
    friendSuggestions.forEach(friend => {
      const friendDiv = document.createElement('div');
      friendDiv.classList.add('friend-item');
      friendDiv.innerHTML = `
        <h4>${friend.name}</h4>
        <p>Major: ${friend.major}</p>
        <button class="btn" onclick="sendFriendRequest('${friend.name}')">Add Friend</button>
      `;
      friendsContainer.appendChild(friendDiv);
    });
  }
  
  // Function to filter friend suggestions based on search query
  function filterFriends() {
    const query = document.getElementById('friendSearch').value.toLowerCase();
    const filteredFriends = friendSuggestions.filter(friend =>
      friend.name.toLowerCase().includes(query) ||
      friend.major.toLowerCase().includes(query)
    );
    const friendsContainer = document.getElementById('friendsList');
    friendsContainer.innerHTML = "";
    filteredFriends.forEach(friend => {
      const friendDiv = document.createElement('div');
      friendDiv.classList.add('friend-item');
      friendDiv.innerHTML = `
        <h4>${friend.name}</h4>
        <p>Major: ${friend.major}</p>
        <button class="btn" onclick="sendFriendRequest('${friend.name}')">Add Friend</button>
      `;
      friendsContainer.appendChild(friendDiv);
    });
  }
  
  // Function to simulate sending a friend request
  function sendFriendRequest(friendName) {
    alert(`Friend request sent to ${friendName}!`);
  }
  
  // When the Friends section is shown, load the friend suggestions
  // We assume that the navigateTo() function in script.js is updated to call loadFriends() when sectionId is "friends"
  // Alternatively, you can add an event listener to load when the section becomes visible
  document.addEventListener('DOMContentLoaded', () => {
    // If the Friends section is already active on load (unlikely), load friends
    const friendsSection = document.getElementById('friends');
    if (friendsSection && friendsSection.style.display !== 'none') {
      loadFriends();
    }
  });
  
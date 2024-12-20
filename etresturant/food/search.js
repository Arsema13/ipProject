// Get the elements
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Data to search through (replace with the actual drink names and descriptions)
const data = [
  { title: 'በያይነት', description: 'A traditional dish with rich flavors and spices.' },
  { title: 'ተጋቢኖ', description: 'A savory meal with a perfect blend of ingredients.' },
  { title: 'ምስር ወጥ', description: 'A delicious lentil stew that is full of nutrients.' },
  { title: 'አተር ወጥ', description: 'A spicy and aromatic stew made with meat and vegetables.' },
  { title: 'ሽሮ ወጥ', description: 'A flavorful dish served with a mix of spices and herbs.' },
  { title: 'አልጫ ድንች', description: 'Crispy and delicious fried potatoes.' },
  { title: 'ፍርፍር', description: 'A fried dough snack, crispy and perfect for sharing.' },
  { title: 'ቲማቲም', description: 'A fresh and vibrant tomato salad with spices.' },
  { title: 'ፓስታ', description: 'Tasty pasta dishes served with different sauces.' },
  { title: 'መኮሮኒ', description: 'Macaroni served with a creamy sauce and other ingredients.' },
  { title: 'ሩዝ', description: 'Fluffy rice, a perfect side dish for any meal.' },
  { title: 'ሶያ', description: 'A dish made with soybeans, rich in protein.' },
  { title: 'ፉል', description: 'A popular Ethiopian dish made from fava beans.' },
  { title: 'እንቁላል', description: 'Eggs prepared in various styles, a staple meal.' },
  { title: 'ቀይ ወጥ', description: 'Spicy and flavorful red stew with meat and vegetables.' },
  { title: 'ምንቸት', description: 'A hearty dish with a variety of spices and flavors.' },
  { title: 'ጥብስ', description: 'A savory beef dish with rich flavors.' },
  { title: 'ዱለት', description: 'A dish featuring minced meat and various seasonings.' },
  { title: 'ዶናት', description: 'A sweet, deep-fried dough pastry.' },
  { title: 'ፍላፍል', description: 'A delightful and crispy snack.' },
  { title: 'ሳንቡሳ', description: 'Fried pastry filled with meat or lentils.' },
  { title: 'እርጥብ', description: 'A traditional Ethiopian snack with a savory taste.' }
];

// Show the search bar when the search icon is clicked
searchIcon.onclick = function(event) {
  event.preventDefault();
  searchBar.style.display = 'block';  // Show search bar
  searchInput.focus();  // Focus on the search input
}

// Search functionality when the user types
searchInput.oninput = function() {
  const query = searchInput.value.toLowerCase();
  const filteredResults = data.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query)
  );
  
  // Display search results
  displaySearchResults(filteredResults);
}

// Display search results
function displaySearchResults(results) {
  searchResults.innerHTML = '';  // Clear previous results
  if (results.length > 0) {
    results.forEach(result => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${result.title}</strong><p>${result.description}</p>`;
      searchResults.appendChild(div);
    });
  } else {
    searchResults.innerHTML = '<p>No results found.</p>';
  }
}

// Optional: Close search bar when clicking outside of it
window.onclick = function(event) {
  if (!searchBar.contains(event.target) && event.target !== searchIcon) {
    searchBar.style.display = 'none';  // Hide the search bar if clicked outside
  }
}

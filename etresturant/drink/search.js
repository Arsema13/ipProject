// Get the elements
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const data = [
  { title: 'Tea', description: 'A refreshing drink made from steeped tea leaves.' },
  { title: 'Coffee', description: 'A rich, energizing beverage made from brewed coffee beans.' },
  { title: 'Macchiato', description: 'A strong espresso with a touch of foamed milk.' },
  { title: 'Milk', description: 'A creamy beverage, perfect for any time of day.' },
  { title: 'Papaya Juice', description: 'A tropical juice made from fresh papayas.' },
  { title: 'Avocado Juice', description: 'A creamy and healthy drink made from ripe avocados.' },
  { title: 'Soft Drinks', description: 'Carbonated beverages for a refreshing taste.' },
];

// Show the search bar when the search icon is clicked
searchIcon.onclick = function(event) {
  event.preventDefault();
  searchBar.style.display = 'flex'; // Show search bar
  searchInput.focus(); // Focus on the search input
};

// Search functionality when the user types
searchInput.oninput = function() {
  const query = searchInput.value.toLowerCase();
  const filteredResults = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  // Debugging: Log query and results
  console.log(query, filteredResults);

  // Display search results
  displaySearchResults(filteredResults);
};

// Display search results
function displaySearchResults(results) {
  searchResults.innerHTML = ''; // Clear previous results
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
    searchBar.style.display = 'none'; // Hide the search bar if clicked outside
  }
};

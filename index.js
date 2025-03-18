function fetchBooks() {
  // Fetch books from the API and return the promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      return response.json();
    })
    .then((books) => {
      renderBooks(books); // Ensure renderBooks is called
      return books; // Return for test verification
    })
    
}

function renderBooks(books) {
  console.log("Books data received:", books); // Debugging log
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Use textContent for security
    main.appendChild(h2);
  });
}

// Ensure fetchBooks runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
  
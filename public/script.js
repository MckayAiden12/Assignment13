document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById('product-list');
      data.forEach((product) => {
        // Create and append HTML elements to display the product data
        // Use data from the product object to populate the elements
      });
    })
    .catch((error) => console.error(error));
});
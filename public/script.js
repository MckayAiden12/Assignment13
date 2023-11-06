document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById('product-list');

      data.forEach((product) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        itemCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>Price: $${product.price.toFixed(2)}</p>
          <p>Colors: ${product.colors.join(', ')}</p>
          <p>Features: ${product.features.join(', ')}</p>
        `;

        productList.appendChild(itemCard);
      });
    })
    .catch((error) => console.error(error));
});
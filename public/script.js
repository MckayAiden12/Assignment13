document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      const itemContainer = document.getElementById('item-container');
      data.forEach((item) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <p>Price: $${item.price.toFixed(2)}</p>
          <p>Colors: ${item.colors.join(', ')}</p>
          <p>Features: ${item.features.join(', ')}</p>
        `;

        itemContainer.appendChild(itemCard);
      });
    })
    .catch((error) => console.error(error));
});
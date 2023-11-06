fetch('/api/data')
  .then((response) => response.json())
  .then((data) => {
    // Create and append HTML elements to display data beautifully
  })
  .catch((error) => console.error(error));
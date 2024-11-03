
const apiUrl = "https://www.course-api.com/javascript-store-products";
const productContainer = document.getElementById("product-container");

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    displayProducts(data);
  })
  .catch(error => {
    productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    console.error("Fetch error: ", error);
  });

  function displayProducts(products) {
    productContainer.innerHTML = ""; // Clear container before adding products
  
    products.forEach(product => {
      // Extract necessary details
      const { company, price } = product.fields;
      const name = product.fields.name;
      const imageUrl = product.fields.image[0].url;
      const priceInDollars = (price / 100).toFixed(2);
  
      // Create product card elements
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}" class="product-image">
        <h2 class="product-name">${name}</h2>
        <p class="product-company">Company: ${company}</p>
        <p class="product-price">$${priceInDollars}</p>
      `;
  
      productContainer.appendChild(productCard);
    });
  }
  
  
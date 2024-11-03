
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

  
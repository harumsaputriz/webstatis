// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
};

// JS PRODUCT
function toggleProduct(event, id) {
  event.preventDefault();
  const productText = document.getElementById("productText");
  const productFacial = document.getElementById("product_facial");
  const productText2 = document.getElementById("productText2");
  const productToner = document.getElementById("product_toner");
  const productText3 = document.getElementById("productText3");
  const productSerum = document.getElementById("product_serum");
  const productText4 = document.getElementById("productText4");
  const productMoisturizer = document.getElementById("product_moisturizer");

  if (id === "product") {
    if (
      productText.style.display === "none" ||
      productText.style.display === ""
    ) {
      productText.style.display = "block";
      productFacial.style.display = "block";
    } else {
      productText.style.display = "none";
      productFacial.style.display = "none";
    }
  }

  if (id === "toner") {
    if (
      productText2.style.display === "none" ||
      productText2.style.display === ""
    ) {
      productText2.style.display = "block";
      productToner.style.display = "block";
    } else {
      productText2.style.display = "none";
      productToner.style.display = "none";
    }
  }

  if (id === "serum") {
    if (
      productText3.style.display === "none" ||
      productText3.style.display === ""
    ) {
      productText3.style.display = "block";
      productSerum.style.display = "block";
    } else {
      productText3.style.display = "none";
      productSerum.style.display = "none";
    }
  }

  if (id === "moisturizer") {
    if (
      productText4.style.display === "none" ||
      productText4.style.display === ""
    ) {
      productText4.style.display = "block";
      productMoisturizer.style.display = "block";
    } else {
      productText4.style.display = "none";
      productMoisturizer.style.display = "none";
    }
  }
}

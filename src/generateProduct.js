import axios from 'axios';
require('dotenv').config();

const url = `${process.env.BESTBUY_API_BASE_URL}&apiKey=${process.env.BESTBUY_API_KEY}`;


let products = [];

function generateProduct() {
  axios.get(url)
  .then(res => {
    console.log(res.data);
    products = res.data.products;
    updateProduct(getRandomProduct());
    console.log('Products Array', res.data.products);
  })
  .catch((err) => {
    console.log(err);
  });
}

function updateProduct(product) {
  document.getElementById('item').innerHTML = product.name;
  document.getElementById('price').innerHTML = ('$').concat(product.salePrice);document.getElementById('rating').innerHTML = product.customerReviewAverage + ' ' + generateStars(product.averageCustomerReview);
  const img = document.getElementById('productImg');
  img.src = product.image;
}

function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

function nextProduct() {
  updateProduct(getRandomProduct());
}



function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += '<span class="star">★</span>';
  }
  return stars;
}


export { generateProduct, nextProduct };







/*

&apiKey=irf4cGUREwStIE6b97zuktVm

*/
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import axios from 'axios';



// import CryptoBarsRequest from alpaca;
// const Alpaca = require("@alpacahq/alpaca-trade-api");
// request_params = CryptoBarsRequest({symbol_or_symbols=["BTC/USD"]})



const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [btcPrice, setBtcPrice] = useState(null);

  const fetchProducts = (page) => {
    axios.get(`https://api.bestbuy.com/v1/products(customerReviewAverage>=4.5&customerReviewCount>=20)?sort=image.asc&show=image,name,salePrice,customerReviewAverage,customerReviewCount,upc,url&pageSize=100&page=${page}&format=json&apiKey=irf4cGUREwStIE6b97zuktVm`)
      .then(res => {
        setProducts(res.data.products);
        setDisplayedProducts(res.data.products.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCryptoData = async () => {
    try {
      const response = await axios.get('https://data.alpaca.markets/v1beta3/crypto/us/latest/trades?symbols=BTC%2FUSD', {
        headers: {
          accept: 'application/json'
        }
      });
      console.log('bitcoin', response.data);
      localStorage.setItem('bitcoin', JSON.stringify(response.data));
      const price = response.data.trades['BTC/USD'].p;
      setBtcPrice(price);
      console.log('Bitcoin Price: ', price);
      } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
    getCryptoData(setBtcPrice);
  }, [currentPage]);

  const handleNextClick = () => {
    const nextIndex = currentIndex + 10;
    if (nextIndex < products.length) {
      setDisplayedProducts(products.slice(nextIndex, nextIndex + 10));
      setCurrentIndex(nextIndex);
    } else {
      setCurrentPage(currentPage + 1);
      setCurrentIndex(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 10;
    if (prevIndex >= 0) {
      setDisplayedProducts(products.slice(prevIndex, prevIndex + 10));
      setCurrentIndex(prevIndex);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCurrentIndex(80);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='productContainer' className='productContainer'>
      {displayedProducts.map((product) => (
        <ProductCard key={product.upc} product={product} btcPrice={btcPrice}/>
      ))}
      <button id='prevBtn' className='btn' onClick={handlePrevClick}>Previous</button>
      <button id='nextBtn' className='btn' onClick={handleNextClick}>Next</button>
    </div>
  );


};

export default ProductContainer;
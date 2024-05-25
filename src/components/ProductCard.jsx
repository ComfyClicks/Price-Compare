import React from 'react';
import StarRatings from 'react-star-ratings';
import btcIcon from '../assets/btcicon.svg';
import usdIcon from '../assets/usdicon.png';


const ProductCard = ({ product, btcPrice  }) => {
  const productPriceInBtc = product.salePrice / btcPrice;
  return (
    <div className='cards'>
      <div className='imageContainer'>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          <img src={product.image} alt={product.name} />
        </a>
      </div>
      <h2 className='productName'>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          {product.name}
        </a>
      </h2>
      <p className='price'><img className='usdicon' src={usdIcon} alt='USD icon'/>{product.salePrice}</p>
      <p className='btcPrice'><img className='btcicon' src={btcIcon} alt='Bitcoin icon'/> {productPriceInBtc.toFixed(5)}</p>
      <div className='rating'>
        <span className='starRating'>
          <StarRatings
            rating={product.customerReviewAverage}
            numberOfStars={5}
            starDimension="24px"
            starSpacing="1px"
            starRatedColor="#fcd72b"
            starEmptyColor="lightgray"
          />
        </span>
        <span className='review'> {product.customerReviewAverage}</span> <span className='reviewCount'>({product.customerReviewCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
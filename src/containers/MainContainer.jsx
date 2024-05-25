import React from 'react';
import ProductContainer from './ProductContainer.jsx';



const MainContainer = () => {
  return(
    <div id='mainContainer' className='mainContainer'>
      <div className='innerContainer'>
        <h1 id='header'>Best Buy Marketplace</h1>
      <ProductContainer/>
      </div>
    </div>
  );
};



export default MainContainer;
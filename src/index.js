import React from 'react';
import { createRoot, render } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );





// <a href="https://developer.bestbuy.com">
//     <img src="https://developer.bestbuy.com/images/bestbuy-logo.png" alt="Best Buy Developer API"/>
// </a>

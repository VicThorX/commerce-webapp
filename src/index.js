import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Ads from './Advertisements/Ads';
import Products from './Products/Products';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Home />
    <Ads />
    <Products />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

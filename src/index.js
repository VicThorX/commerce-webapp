import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Advertisements from './Advertisements/Advertisements';
import Products from './Products/Products';
import Advertisement from './Advertisements/Advertisement';
import IconBoxes from './IconBoxes/IconBoxes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Home />
    <Advertisements />
    <Products />
    <Advertisement />
    <IconBoxes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

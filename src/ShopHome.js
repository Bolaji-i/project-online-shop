import './ShopHome.scss';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopNav from './ShopNav';
import ShopContainer from './ShopContainer';
import ShopFooter from './ShopFooter';

class ShopHome extends Component {
  render() {
    return (
      <div className = 'home' href ="/"> 
        <ShopNav />
        <ShopContainer />
        <ShopFooter />
      </div>

    )
  }
}

export default ShopHome;
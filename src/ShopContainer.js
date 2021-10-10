import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopContainer.scss";
import ShopProducts from "./ShopProducts";

class ShopContainer extends Component {
  render() {
    return (
      <div className="container">
        
          <ShopProducts />
        
      </div>
    );
  }
}

export default ShopContainer;

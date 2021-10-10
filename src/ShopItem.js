import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopItemImage from "./ShopItemImage";

class ShopItem extends Component {
  render() {
    return (
      <li className="shopItem">

        <ShopItemImage src="https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
      </li>
    );
  }
}

export default ShopItem;

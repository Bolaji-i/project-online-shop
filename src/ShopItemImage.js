import React, { Component } from "react";
import Figure from "react-bootstrap/Figure";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./ShopItem.scss"

class ShopItemImage extends Component {
  render() {
    return (
      <div class="figure">
        <FontAwesomeIcon icon={faHeart} />
        <Figure>
          <Figure.Image className="image"
            src={this.props.image}
          />
          <Figure.Caption className='caption'>{this.props.title}</Figure.Caption>
        </Figure>
        <span className='price'>{this.props.price}€</span>
      </div>
    );
  }
}

export default ShopItemImage;

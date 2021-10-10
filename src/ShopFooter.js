import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopFooter.scss";

class ShopFooter extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div class="container">
          <div>
            <span class="text-muted">
              Give me a peep on my social platforms
            </span>
            <br />
            <span className = 'icon'>
              <i class="fab fa-linkedin" href="https://fontawesome.com/v5.15/icons/twitter-square?style=brands"></i>
              <i class="fab fa-github-square"></i>
              <i class="fab fa-twitter-square"></i>
            </span>
            <p class="text-muted copyright">
              Designed and constructed by <span id = 'name'>Bolaji Daniels Ilori</span> <i class="fas fa-copyright"></i>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default ShopFooter;

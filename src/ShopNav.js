import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./ShopNav.scss";
import { NavLink } from "react-router-dom";

class ShopNav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <NavLink class="navbar-brand" to="/">
              Shop-B
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <li class="nav-item">
                  <NavLink
                    exact
                    className="nav-link active-link"
                    aria-current="page"
                    to="/contact"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    exact
                    className="nav-link active-link"
                    aria-current="page"
                    to="/contact"
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    exact
                    className="nav-link active-link"
                    aria-current="page"
                    to="/contact"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ShopNav;

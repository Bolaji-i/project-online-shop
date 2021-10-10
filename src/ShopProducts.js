import React, { useEffect, useState } from "react";
import ShopItemImage from "./ShopItemImage";
import axios from "axios";
import './ShopProducts.scss'


function ShopProducts() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let baseUrl = "https://fakestoreapi.com";
    const url = `${baseUrl}/products`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const products = productData.map((data, id) => {
    return (
        <ShopItemImage key={id}
         title={data.title} price={data.price} image={data.image} />
    );
  });

  return (
    <div className="shopProduct">
      <ul>{products}</ul>
    </div>
  );
}

export default ShopProducts;

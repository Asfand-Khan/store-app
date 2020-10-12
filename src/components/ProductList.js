import React from "react";
import { Link } from "react-router-dom";
import Shoes from "./../Shoes.json";
import "./ProductList.css";

export const ProductList = () => {
  const mensObject = Shoes.mens;
  const mensArray = Object.keys(mensObject);

  return (
    <div>
      <div className="product__container">
        {mensArray.map((shoe, ind) => {
          return (
            <Link
              key={ind}
              to={`/productList/mens${shoe}`}
              className="product__innerContainer"
            >
              <img
                src={mensObject[shoe].img}
                alt="shoe"
                className="product__img"
              />
              <h3 className="product__heading">{mensObject[shoe].name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

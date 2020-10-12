import React from "react";
import "./Home.css";
import Shoes from "./../Shoes.json";
import { Link } from "react-router-dom";

export const Home = () => {
  const mensObject = Shoes.mens;
  const mensArray = Object.keys(mensObject);
  console.log(mensObject[mensArray[0]]);
  console.log(mensObject[mensArray[0]].name)
  return (
    <div className="home">
      <img
        src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="banner"
        className="banner"
      />
      <div>
        <div className="product__container">
          <Link
            to={`/productList/mens${mensObject[mensArray[0]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[0]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[0]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[1]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[1]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[1]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[4]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[4]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[4]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[5]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[5]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[5]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[7]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[7]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[7]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[9]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[9]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[9]].name}</h3>
          </Link>
          <Link
            to={`/productList/mens${mensObject[mensArray[10]].name}`}
            className="product__innerContainer"
          >
            <img
              src={mensObject[mensArray[10]].img}
              alt="shoe"
              className="product__img"
            />
            <h3 className="product__heading">{mensObject[mensArray[10]].name}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

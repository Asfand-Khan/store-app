import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from "./../Shoes.json";
import './ProductItem.css'

export const ProductItem = () => {
    const mensObject = Shoes.mens;
    const {id} = useParams();
    const productName = id.replace('mens','');
    return (
        <div className='product__item'>
            <div>
            <img src={mensObject[productName].img} alt="shoe" className='productItem__img' />
          </div>
            <div className='product__details'>
            <h2 className=''>{mensObject[productName].name}</h2>
            <br/>
            <h5>Description</h5>
            <p className=''>{mensObject[productName].description}</p>
            <br/>
            <h5 className=''>{mensObject[productName].price}</h5>
          </div>
        </div>
    )
}
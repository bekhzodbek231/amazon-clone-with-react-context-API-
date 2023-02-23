import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ title, id, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
      // adding to basket 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                rating,
                price
            },
        });

    };

  return (
      <div className='product'>
          <div className='product__info'>
             <p>{title}</p>
          <p className='product__price'>
              <smal>$</smal>
              <strong>{price}</strong>
          </p>
          <div className='product__rating'>
              {
                  Array(rating)
                      .fill()
                      .map((_) => (
                          <p>⭐</p>
                      ))} 
          </div>
          </div>
          <img className='product__image' src={image}></img>
              <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product;
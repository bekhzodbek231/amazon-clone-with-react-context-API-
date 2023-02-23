import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
           
            <div className='checkout__left'>
                
            

            <img className='checkout__ad' src='https://i0.wp.com/www.premiumoffers.in/wp-content/uploads/2022/09/amazon-min-1.png?resize=620%2C204&ssl=1'
            />

            {basket?.length === 0 ? (
                <div>
                    <h2 >Your shopping cart is empty!</h2>
                    <p>you have no items in your cart, to have one or more, Click 'Add To Cart' next to Items </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping cart</h2>
            
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
            
              
        </div>
    );
}

export default Checkout;
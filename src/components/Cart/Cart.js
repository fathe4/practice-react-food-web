import React from 'react';

const Cart = (props) => {
    const products = props.cart

    return (
        <div>
            <ul>
                {
                    products.map(product => <li>{product.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;
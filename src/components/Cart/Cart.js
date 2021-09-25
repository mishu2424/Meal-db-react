import React from 'react';

const Cart = (props) => {
    console.log(props)
    const{cart}=props;
    
    console.log(cart)
    return (
        <div>
            <h4>{cart.strMeal}</h4>
            <h6>details:{cart.strInstructions.slice(0,120)}</h6>
        </div>
    );
};

export default Cart;
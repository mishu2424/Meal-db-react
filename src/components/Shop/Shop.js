import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import './Shop.css'
const Shop = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>{
           setMeals(data.meals)
       })
    },[])
    const [cart,setCart]=useState([])
    const handlerCart=product=>{
        const newCart=[...cart,product]
        setCart(newCart);
        console.log('clicked')
    }
    return (
        <div>
            <div className="input-field">
                <input type="text" placeholder="search something"/>
            </div>
                <div className="Shop-design">
            <div className="menu-container">
                {
                    meals.map(meal=><Menu 
                        key={meal.idMeal}
                        meal={meal}
                        handler={handlerCart}></Menu>)
                }
            </div>
            <div className="cart-container">
                {
                    cart.map(cart=><Cart cart={cart}></Cart>)
                }
                </div>
        </div>
        </div>
  
    );
};

export default Shop;
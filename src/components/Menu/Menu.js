import React from 'react';
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Menu = (props) => {
    console.log(props.meal)
    const element = <FontAwesomeIcon icon={faCoffee} />
    const {strMealThumb,strMeal,strCategory}=props.meal;
    return (
        <div className="menu-design">
            <div className="menu-img">
                <img src={strMealThumb} alt="" srcset="" />
            </div>
            <div className="details-design">
                <h1>Name:{strMeal}</h1>
                <p>Catagory:{strCategory}</p>
                <button onClick={()=>props.handler(props.meal)} className="button-design">{element}Show details</button>
            </div>
        </div>
    );
};

export default Menu;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>{seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock order soon</p>
                <button className="add-to-card" onClick={()=>props.handleAdd(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>

        </div>
    );
};

export default Product;
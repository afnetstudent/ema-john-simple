import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './shop.css';
import Product from '../Product/Product';
import Addto from '../AddtoCart/Addto';

const Shop = () => {
    const [cart, setCart] = useState([])
   const handleAdd =(product)=>{
    console.log('some one click')
    const newCart = [...cart, product]; 
    setCart(newCart);


   }
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);
    return (
        <div className="shop-cont" >
           <div className="product-count">
           <h3>{products.length}</h3>
            
                {
                    products.map(pd => <Product product={pd} handleAdd={handleAdd}></Product>)
                }
            
           </div>
           <div className="cart-container">
              <Addto cart={cart}></Addto>
           </div>
     
        </div>
    );
};

export default Shop;
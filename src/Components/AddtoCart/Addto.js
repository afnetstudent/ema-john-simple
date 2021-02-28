import React from 'react';

const Addto = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>order summary</h4>
            <h1>item order {cart.length}</h1>
        </div>
    );
};

export default Addto;
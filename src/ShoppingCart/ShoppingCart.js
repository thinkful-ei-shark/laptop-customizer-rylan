import React from 'react';
import '../App.css';
import SCItem from '../ShoppingCartItem/SCItem';
import Total from '../Total/Total'

function ShoppingCart({ selected }) {

    return (
    <section className="main__summary">
        <h2>Your cart</h2>
        <SCItem selected={selected}/>
        <Total selected={selected}/>
    </section>
    ); 
}

export default ShoppingCart;
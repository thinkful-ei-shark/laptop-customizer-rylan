import React from 'react';
import '../App.css';
import Total from './Total/Total'
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function ShoppingCart({ selected }) {

    const summary = Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
  
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total selected={selected}/>
        </section>
      ); 
}

export default ShoppingCart;
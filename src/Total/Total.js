import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Total(props) {
    return (
      <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
          {USCurrencyFormat.format(props.total)}
          </div>
      </div>
    );
}
  
export default Total;